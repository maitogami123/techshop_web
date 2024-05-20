import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'http://127.0.0.1:8080/',
    headers: {
        'Content-Type': 'application/json'
    }
});

axiosClient.interceptors.request.use(
    (response) => response.data ?? response,
    (error) => Promise.reject(error)
);

export default axiosClient;
