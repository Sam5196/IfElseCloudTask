import axios, { AxiosInstance } from 'axios';

const apiClient: AxiosInstance = axios.create({
  baseURL: 'http://01.fy25ey02.64mb.io/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

apiClient.interceptors.response.use(
  (response) => {
    console.log('Response', response.data);
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;