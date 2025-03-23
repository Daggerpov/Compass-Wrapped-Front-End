import React, { createContext, useState, ReactNode } from 'react';

interface StopData {
  stop_id: string;
  stop_name: string;
  count: number;
}

interface TransferData {
  from_stop_id: string;
  from_stop_name: string;
  to_stop_id: string;
  to_stop_name: string;
  count: number;
}

interface Achievement {
  title: string;
  description: string;
}

interface TotalStatsData {
  total_trips: number;
  unique_routes: number;
  [key: string]: unknown;
}

interface RouteStatsData {
  most_used_stops: StopData[];
  [key: string]: unknown;
}

interface TimeStatsData {
  total_commute_hours: number;
  time_by_day_of_week: {
    [key: string]: number;
  };
  [key: string]: unknown;
}

interface TransferStatsData {
  most_common_transfers: TransferData[];
  [key: string]: unknown;
}

interface PersonalityData {
  personality_type: string;
  common_time: string;
  details: string;
  [key: string]: unknown;
}

interface AchievementsData {
  achievements: Achievement[];
  [key: string]: unknown;
}

interface MissingTapsData {
  missing_tap_ins: number;
  missing_tap_outs: number;
  [key: string]: unknown;
}

interface CarbonFootprintData {
  carbon_saved_kg: number;
  [key: string]: unknown;
}

interface AnalyticsData {
  total_stats?: TotalStatsData;
  route_stats?: RouteStatsData;
  time_stats?: TimeStatsData;
  transfer_stats?: TransferStatsData;
  personality?: PersonalityData;
  achievements?: AchievementsData;
  missing_taps?: MissingTapsData;
  carbon_footprint?: CarbonFootprintData;
  [key: string]: unknown;
}

interface DataContextType {
  file: File | null;
  setFile: (file: File | null) => void;
  analyticsData: AnalyticsData | null;
  setAnalyticsData: (data: AnalyticsData | null) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  error: string | null;
  setError: (error: string | null) => void;
}

export const DataContext = createContext<DataContextType>({
  file: null,
  setFile: () => {},
  analyticsData: null,
  setAnalyticsData: () => {},
  loading: false,
  setLoading: () => {},
  error: null,
  setError: () => {},
});

interface DataProviderProps {
  children: ReactNode;
}

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [file, setFile] = useState<File | null>(null);
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <DataContext.Provider
      value={{
        file,
        setFile,
        analyticsData,
        setAnalyticsData,
        loading,
        setLoading,
        error,
        setError,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}; 