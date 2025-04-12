// hooks/useDashboardData.ts
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDashboardData } from '../api/dashboardApi';
import { RootState, AppDispatch } from '../store/store';
import { fetchDataStart, fetchDataSuccess, fetchDataFailure } from '../store/slices/dashboardSlice';

export const useDashboardData = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector((state: RootState) => state.dashboard);

  const refetch = async () => {
    dispatch(fetchDataStart());
    try {
      const data = await fetchDashboardData();
      dispatch(fetchDataSuccess(data));
    } catch (err) {
      dispatch(fetchDataFailure(err instanceof Error ? err.message : 'Unknown error'));
    }
  };

  useEffect(() => {
    refetch();
  }, [dispatch]);

  return { data, loading, error, refetch }; 
};
