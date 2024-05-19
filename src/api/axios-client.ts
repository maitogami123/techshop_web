import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'https://dummyapi.com/',
    headers: {
        'Content-Type': 'application/json'
    }
});

axiosClient.interceptors.request.use(
    (response) => response.data ?? response,
    (error) => Promise.reject(error)
);

export default axiosClient;
