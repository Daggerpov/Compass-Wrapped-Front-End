import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'https://compass-wrapped-back-end.up.railway.app/';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'multipart/form-data',
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
  const formData = new FormData();
  formData.append('file', file);
  return api.post('/analytics/upload-csv', formData);
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