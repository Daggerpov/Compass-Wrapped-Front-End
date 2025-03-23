import React, { createContext, useState, ReactNode, useEffect } from 'react';

interface StopData {
  stop_id: string;
  stop_name?: string;
  count: number;
}

interface TransferData {
  from_stop_id: string;
  from_stop_name?: string;
  to_stop_id: string;
  to_stop_name?: string;
  count: number;
}

interface AchievementData {
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
  time_by_day_of_week?: Record<string, number>;
  [key: string]: unknown;
}

interface TransferStatsData {
  most_common_transfers: TransferData[];
  [key: string]: unknown;
}

interface PersonalityData {
  personality_type: string;
  common_time?: string;
  details?: string;
  [key: string]: unknown;
}

interface AchievementsData {
  achievements: AchievementData[];
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

// Mock data for testing
const mockAnalyticsData: AnalyticsData = {
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
  },
  transfer_stats: {
    most_common_transfers: [
      {
        from_stop_id: "60980",
        from_stop_name: "Waterfront Station",
        to_stop_id: "61125",
        to_stop_name: "Commercial-Broadway Station",
        count: 45
      }
    ]
  },
  personality: {
    personality_type: "City Explorer",
    common_time: "8:15 AM",
    details: "You've explored 28 different routes this year!"
  },
  achievements: {
    achievements: [
      {
        title: "Early Bird",
        description: "Caught the first train 20+ times"
      },
      {
        title: "Distance Champion",
        description: "Traveled over 1000km on transit"
      },
      {
        title: "City Explorer",
        description: "Used 25+ different routes"
      },
      {
        title: "Weekend Warrior",
        description: "Used transit on 15+ weekends"
      }
    ]
  },
  missing_taps: {
    missing_tap_ins: 4,
    missing_tap_outs: 7
  },
  carbon_footprint: {
    carbon_saved_kg: 486
  }
};

interface DataProviderProps {
  children: ReactNode;
}

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [file, setFile] = useState<File | null>(null);
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Add mock data for testing
  useEffect(() => {
    // Only load mock data if there is no data loaded already
    if (!analyticsData && !loading && !error) {
      // For development - uncomment this line to show mock data
      setAnalyticsData(mockAnalyticsData);
    }
  }, [analyticsData, loading, error]);

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