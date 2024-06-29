import { api } from '@/lib/axios-client';

export type UserInformation = {
    accountDetail: {
        city: string;
        detailedAddress: string;
        district: string;
        firstName: string;
        id: number;
        lastName: string;
        default: boolean;
        phoneNumber: string;
        email: string;
    };
    username: string;
};

export const userApi = {
    getProfile: (): Promise<UserInformation> => api.get('/userDetail/all')
};
