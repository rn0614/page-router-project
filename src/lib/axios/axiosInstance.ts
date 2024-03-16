import axios, { AxiosRequestConfig } from "axios";

const config: AxiosRequestConfig = {
  baseURL: process.env.BASE_URL,
  timeout: 60000,
  headers: {
    "Content-Type": "application/json",
  },
};
export const axiosInstance = axios.create(config);

const formConfig: AxiosRequestConfig = {
  baseURL: process.env.BASE_URL,
  timeout: 60000,
  headers: {
    "Content-Type": "multipart/form-data",
  },
};
export const axiosFormInstance = axios.create(formConfig);

/* react-query에서 이미 체크를 해서 axios는 체크 안하기로 함
axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

axiosInstance.interceptors.response.use(
  (config) => {
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);
*/