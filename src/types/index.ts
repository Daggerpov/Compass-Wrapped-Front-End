export interface AnalyticsData {
  // Add your analytics data structure here
  [key: string]: any; // Temporary type until we know the exact structure
}

export interface APIResponse {
  success: boolean;
  data?: AnalyticsData;
  error?: string;
}

export type UserStatsResponse = APIResponse; 