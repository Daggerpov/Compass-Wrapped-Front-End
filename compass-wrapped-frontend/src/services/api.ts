import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'https://compass-wrapped-back-end.up.railway.app/';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export const uploadCSV = async (file: File) => {
  const reader = new FileReader();
  return new Promise((resolve, reject) => {
    reader.onload = async (event) => {
      try {
        const text = event.target?.result as string;
        const lines = text.split('\n').filter(line => line.trim());
        const headers = lines[0].split(',');
        const data = lines.slice(1).map(line => {
          const values = line.split(',');
          return headers.reduce((obj: any, header, index) => {
            obj[header.trim()] = values[index]?.trim();
            return obj;
          }, {});
        });

        // Process the data into UserStats format
        const firstTrip = data[0];
        const lastTrip = data[data.length - 1];
        const startDate = new Date(firstTrip.Date + 'T' + firstTrip.Time);
        const endDate = new Date(lastTrip.Date + 'T' + lastTrip.Time);
        const totalDays = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));

        // Count stops and routes
        const stopCounts = new Map<string, number>();
        const routeCounts = new Map<string, number>();
        let totalHours = 0;

        data.forEach((trip: any) => {
          const location = trip.Location;
          stopCounts.set(location, (stopCounts.get(location) || 0) + 1);

          // Assuming route is part of the location name
          const route = location.includes('Station') ? 'SkyTrain' : 'Bus';
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

        const stats = {
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

        const response = await api.post('/stats/user', stats);
        resolve(response);
      } catch (error) {
        reject(error);
      }
    };
    reader.onerror = () => reject(new Error('Failed to read the CSV file.'));
    reader.readAsText(file);
  });
};

export const getTotalStats = async (file: File) => {
  const formData = new FormData();
  formData.append('file', file);
  return api.post('/analytics/total-stats', formData);
};

export const getRouteStats = async (file: File) => {
  const formData = new FormData();
  formData.append('file', file);
  return api.post('/analytics/route-stats', formData);
};

export const getTimeStats = async (file: File) => {
  const formData = new FormData();
  formData.append('file', file);
  return api.post('/analytics/time-stats', formData);
};

export const getTransferStats = async (file: File) => {
  const formData = new FormData();
  formData.append('file', file);
  return api.post('/analytics/transfer-stats', formData);
};

export const getPersonality = async (file: File) => {
  const formData = new FormData();
  formData.append('file', file);
  return api.post('/analytics/personality', formData);
};

export const getAchievements = async (file: File) => {
  const formData = new FormData();
  formData.append('file', file);
  return api.post('/analytics/achievements', formData);
};

export const getMissingTaps = async (file: File) => {
  const formData = new FormData();
  formData.append('file', file);
  return api.post('/analytics/missing-taps', formData);
};

export const getCompassWrapped = async (file: File) => {
  const formData = new FormData();
  formData.append('file', file);
  return api.post('/analytics/compass-wrapped', formData);
};

export const getAllAnalytics = async (file: File) => {
  const formData = new FormData();
  formData.append('file', file);
  return api.post('/analytics/analyze/', formData);
}; 