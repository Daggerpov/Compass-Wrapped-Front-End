import { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import { processCSV } from '../api';

export const useData = () => {
  const context = useContext(DataContext);
  
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  
  const processCSVData = async (file: File) => {
    try {
      context.setLoading(true);
      context.setError(null);
      context.setFile(file);
      
      // Call the API to process the CSV
      const result = await processCSV(file);
      
      if (result.success) {
        context.setAnalyticsData(result.data);
        return true;
      } else {
        context.setError(result.error || 'Failed to process CSV');
        return false;
      }
    } catch (error) {
      context.setError('An error occurred while processing the CSV');
      console.error(error);
      return false;
    } finally {
      context.setLoading(false);
    }
  };
  
  return {
    ...context,
    processCSVData,
  };
}; 