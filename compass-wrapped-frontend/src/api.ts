// Left commented to keep the import if needed later
// import axios from 'axios';

// Left commented to keep the variable if needed later
// const API_URL = 'https://compass-wrapped-back-end.up.railway.app/';

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export const processCSV = async (file: File): Promise<ApiResponse<any>> => {
  try {
    const formData = new FormData();
    formData.append('file', file);
    
    // For development, return mock data instead of making an actual API call
    // In production, you would uncomment this code:
    /*
    const response = await axios.post(`${API_URL}/analytics/analyze`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return {
      success: true,
      data: response.data
    };
    */
    
    // For now, just simulate a successful response
    console.log('Processing CSV file:', file.name);
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return {
      success: true,
      data: getMockData()
    };
  } catch (error) {
    console.error('Error processing CSV:', error);
    return {
      success: false,
      error: 'Failed to process the CSV file. Please try again.'
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