import axios from 'axios';

// Always use production URL
const API_URL = 'https://compass-wrapped-back-end.up.railway.app';

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

interface Stop {
  stop_name: string;
  count: number;
}

interface Route {
  route_name: string;
  count: number;
}

interface TimePeriod {
  start_date: string;
  end_date: string;
  period_type: 'weekly' | 'monthly' | 'yearly';
  total_days: number;
}

interface UserStats {
  user_id: string;
  total_trips: number;
  total_hours: number;
  most_used_transit: string;
  top_stops: Stop[];
  top_routes: Route[];
  time_period: TimePeriod;
}

interface TransitPersonality {
  type: string;
  description: string;
  percentile: number;
  estimate_accuracy?: string;
}

interface ComparisonStats {
  percentile: number;
  average_trips_per_week: number;
  comparison_message: string;
}

interface UserStatsResponse {
  stats: UserStats;
  personality: TransitPersonality;
  comparison: ComparisonStats;
}

const parseDateTime = (dateTimeStr: string, timeStr: string): Date => {
  // Convert "Mar-22-2025 08:50 AM" to "2025-03-22T08:50:00"
  const [month, day, yearTime] = dateTimeStr.split('-');
  const [year] = yearTime.split(' ');
  const monthNum = new Date(Date.parse(month + " 1, 2000")).getMonth() + 1;
  const monthStr = monthNum.toString().padStart(2, '0');
  const dayStr = day.padStart(2, '0');
  
  // Convert "08:50 AM" to 24-hour format
  const [time, period] = timeStr.split(' ');
  const [hours, minutes] = time.split(':');
  let hour = parseInt(hours);
  if (period === 'PM' && hour !== 12) hour += 12;
  if (period === 'AM' && hour === 12) hour = 0;
  const hourStr = hour.toString().padStart(2, '0');

  return new Date(`${year}-${monthStr}-${dayStr}T${hourStr}:${minutes}:00`);
};

const extractLocation = (transaction: string): string => {
  // Extract location from transaction text like "Tap in at Bus Stop 56425" or "Transfer at Brighouse Stn"
  const match = transaction.match(/(?:Tap|Transfer) (?:in|out|at) at (.+)/);
  return match ? match[1] : transaction;
};

const parseCSV = async (file: File): Promise<UserStats> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const text = event.target?.result as string;
        console.log('CSV Content:', text);

        // More robust CSV parsing that handles quoted fields with newlines
        const parseCSVLine = (line: string): string[] => {
          const result: string[] = [];
          let inQuotes = false;
          let currentValue = '';
          
          for (let i = 0; i < line.length; i++) {
            const char = line[i];
            
            if (char === '"') {
              if (inQuotes && line[i + 1] === '"') { // Handle escaped quotes
                currentValue += '"';
                i++;
              } else {
                inQuotes = !inQuotes;
              }
            } else if (char === ',' && !inQuotes) {
              result.push(currentValue.trim());
              currentValue = '';
            } else {
              currentValue += char;
            }
          }
          result.push(currentValue.trim());
          return result;
        };

        // Split into records, preserving newlines in quoted fields
        const records: string[] = [];
        let currentRecord = '';
        let inQuotes = false;
        
        for (let i = 0; i < text.length; i++) {
          const char = text[i];
          
          if (char === '"') {
            inQuotes = !inQuotes;
          }
          
          if (char === '\n' && !inQuotes) {
            if (currentRecord.trim()) {
              records.push(currentRecord);
            }
            currentRecord = '';
          } else {
            currentRecord += char;
          }
        }
        if (currentRecord.trim()) {
          records.push(currentRecord);
        }

        console.log('CSV Records:', records);

        if (records.length === 0) {
          throw new Error('CSV file is empty');
        }

        const headers = parseCSVLine(records[0]);
        console.log('CSV Headers:', headers);

        // Validate required headers
        const requiredHeaders = ['DateTime', 'Transaction', 'TransactonTime'];
        const missingHeaders = requiredHeaders.filter(h => !headers.includes(h));
        if (missingHeaders.length > 0) {
          throw new Error(`Missing required headers: ${missingHeaders.join(', ')}`);
        }

        const data = records.slice(1).map((record, index) => {
          const values = parseCSVLine(record);
          if (values.length !== headers.length) {
            console.error(`Line ${index + 2} values:`, values);
            throw new Error(`Line ${index + 2} has ${values.length} values but should have ${headers.length}`);
          }
          return headers.reduce((obj: any, header, i) => {
            obj[header] = values[i];
            return obj;
          }, {});
        });
        console.log('Parsed Data:', data);

        if (data.length === 0) {
          throw new Error('No trip data found in CSV file');
        }

        // Process the data into UserStats format
        const firstTrip = data[0];
        const lastTrip = data[data.length - 1];

        const startDate = parseDateTime(firstTrip.DateTime, firstTrip.TransactonTime);
        const endDate = parseDateTime(lastTrip.DateTime, lastTrip.TransactonTime);
        const totalDays = Math.max(1, Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)));

        // Count stops and routes
        const stopCounts = new Map<string, number>();
        const routeCounts = new Map<string, number>();
        let totalHours = 0;

        data.forEach((trip: any, index) => {
          const location = extractLocation(trip.Transaction);
          if (!location) {
            throw new Error(`Missing location data at line ${index + 2}`);
          }

          stopCounts.set(location, (stopCounts.get(location) || 0) + 1);

          // Determine route type based on location name
          const route = location.includes('Stn') ? 'SkyTrain' : 'Bus';
          routeCounts.set(route, (routeCounts.get(route) || 0) + 1);

          // Estimate trip duration as 30 minutes
          totalHours += 0.5;
        });

        // Convert maps to arrays and sort by count
        const topStops = Array.from(stopCounts.entries())
          .map(([stop_name, count]) => ({ stop_name, count }))
          .sort((a, b) => b.count - a.count);

        const topRoutes = Array.from(routeCounts.entries())
          .map(([route_name, count]) => ({ route_name, count }))
          .sort((a, b) => b.count - a.count);

        if (topStops.length === 0) {
          throw new Error('No valid stops found in CSV data');
        }

        const stats: UserStats = {
          user_id: 'anon_' + Math.random().toString(36).substring(2, 8),
          total_trips: data.length,
          total_hours: totalHours,
          most_used_transit: topRoutes[0]?.route_name || 'Unknown',
          top_stops: topStops,
          top_routes: topRoutes,
          time_period: {
            start_date: startDate.toISOString(),
            end_date: endDate.toISOString(),
            period_type: totalDays <= 7 ? 'weekly' : totalDays <= 31 ? 'monthly' : 'yearly',
            total_days: totalDays
          }
        };

        console.log('Generated Stats:', stats);
        resolve(stats);
      } catch (error) {
        console.error('CSV Parsing Error:', error);
        reject(new Error(error instanceof Error ? error.message : 'Failed to parse CSV file. Please make sure it is in the correct format.'));
      }
    };
    reader.onerror = (error) => {
      console.error('File Reading Error:', error);
      reject(new Error('Failed to read the CSV file.'));
    };
    reader.readAsText(file);
  });
};

export const processCSV = async (file: File): Promise<ApiResponse<UserStatsResponse>> => {
  try {
    const stats = await parseCSV(file);
    
    const response = await axios.post(`${API_URL}/stats/user`, stats, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return {
      success: true,
      data: response.data
    };
  } catch (error: any) {
    console.error('Error processing CSV:', error);
    return {
      success: false,
      error: error.message || 'Failed to process the CSV file. Please try again.'
    };
  }
};

const getMockData = () => {
  return {
    total_stats: {
      total_trips: 324,
      unique_routes: 28
    },
    route_stats: {
      most_used_stops: [
        {
          stop_id: "60980",
          stop_name: "Waterfront Station",
          count: 76
        },
        {
          stop_id: "61125",
          stop_name: "Commercial-Broadway Station",
          count: 52
        },
        {
          stop_id: "60916",
          stop_name: "Lougheed Town Centre Station",
          count: 38
        }
      ]
    },
    time_stats: {
      total_commute_hours: 182.5,
      time_by_day_of_week: {
        "Monday": 32.5,
        "Tuesday": 36.2,
        "Wednesday": 38.1,
        "Thursday": 35.9,
        "Friday": 29.3,
        "Saturday": 6.2,
        "Sunday": 4.3
      }
    }
  };
}; 