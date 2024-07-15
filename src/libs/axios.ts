import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

const baseConfig = {
  baseURL: import.meta.env.VITE_BASE_URL,
};

const reqInstance = axios.create(baseConfig);
const multipartInstance = axios.create(baseConfig);

const reqPrev = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  config.headers['Content-Type'] = 'application/json';
  return config;
};

const multipartReqPrev = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  config.headers['Content-Type'] = 'multipart/form-data';
  return config;
};

const onRequestRejected = (error: AxiosError) => {
  return Promise.reject(error);
};

const onResponseFulfilled = (response: AxiosResponse): AxiosResponse => {
  return response;
};

const onResponseRejected = (error: AxiosError) => {
  console.log(error);
  return Promise.reject(error);
};

reqInstance.interceptors.request.use(reqPrev, onRequestRejected);
reqInstance.interceptors.response.use(onResponseFulfilled, onResponseRejected);

multipartInstance.interceptors.request.use(multipartReqPrev, onRequestRejected);
multipartInstance.interceptors.response.use(onResponseFulfilled, onResponseRejected);

export { reqInstance, multipartInstance };
