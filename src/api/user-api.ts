import axiosClient from './axios-client';

export const getUserProfile = async () => {
    const response = await axiosClient.get('/user');
    return response.data;
};
