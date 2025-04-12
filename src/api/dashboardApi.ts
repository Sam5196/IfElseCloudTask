import apiClient from './apiClient';

export interface DashboardData {
  balance: number;
  auto_fill_date: string;
  auto_fill_amount: number;
}

export const fetchDashboardData = async (): Promise<DashboardData> => {
  try {
    const response = await apiClient.get<DashboardData>('/');
    return response;
  } catch (error) {
    throw new Error('Failed to fetch dashboard data');
  }
};