import Axios, { InternalAxiosRequestConfig } from 'axios';

import { env } from '../config/env';
import { NotificationStore } from '../components/ui/notifications';

function authRequestInterceptor(config: InternalAxiosRequestConfig) {
    if (config.headers) {
        config.headers.Accept = 'application/json';
    }
    return config;
}
const store = new NotificationStore();
const { addNotification } = store;
export const api = Axios.create({
    baseURL: env.API_URL
});

api.interceptors.request.use(authRequestInterceptor);
api.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        const message = error.response?.data?.message || error.message;
        addNotification({ type: 'error', title: 'Error', message });
        return Promise.reject(error);
    }
);
