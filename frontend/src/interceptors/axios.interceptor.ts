import { ApiBaseUrl } from '@/constants';
import axios from 'axios';


const Axios = axios.create({
  baseURL: ApiBaseUrl,
  withCredentials: true,
});

// // Request interceptor
Axios.interceptors.request.use(
  (config) => {
   // Add dynamic authorization logic here
   

//    if (token) {
//      config.headers['Authorization'] = `Bearer ${token}`;
//    }
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  },
);

export default Axios;
