import axios from 'axios';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

import { API_URL } from '@/utilities/constants';

const http = axios.create({ baseURL: API_URL, withCredentials: true });

NProgress.configure({ showSpinner: false });

// before a request is made start the nprogress
http.interceptors.request.use(
  (config) => {
    NProgress.start();
    return config;
  },
  (error) => Promise.reject(error),
);

http.interceptors.response.use(
  // before a response is returned stop nprogress
  (response) => {
    NProgress.done();
    return response;
  },
  async (error) => Promise.reject(error),
);

export { http };
