import { UserInformation, userApi } from '@/api';
import { UseQueryOptions, useQuery } from '@tanstack/react-query';

type UserProfileQueryOptions = Omit<
    UseQueryOptions<UserInformation>,
    'queryKey' | 'queryFn'
>;

export const useProfile = (options?: UserProfileQueryOptions) => {
    return useQuery({
        ...options,
        queryKey: ['profile'],
        queryFn: userApi.getProfile
    });
};
