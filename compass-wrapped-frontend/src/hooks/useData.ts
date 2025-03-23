import { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import { processCSV } from '../api';

export const useData = () => {
  const context = useContext(DataContext);
  
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  
  const uploadCSV = async (file: File) => {
    try {
      context.setLoading(true);
      context.setError(null);
      context.setFile(file);
      
      // Call the API to process the CSV
      const result = await processCSV(file);
      
      if (result.success) {
        context.setAnalyticsData(result.data);
      } else {
        throw new Error(result.error || 'Failed to process CSV');
      }
    } catch (error) {
      throw error instanceof Error 
        ? error 
        : new Error('An error occurred while processing the CSV');
    } finally {
      context.setLoading(false);
    }
  };
  
  return {
    ...context,
    uploadCSV,
  };
}; 