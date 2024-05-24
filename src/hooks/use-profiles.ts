import { UserInformation, userApi } from '@/api';
import { QueryKeys } from '@/constants/query-keys';
import { UseQueryOptions, useQuery } from '@tanstack/react-query';

type UserProfileQueryOptions = Omit<
    UseQueryOptions<UserInformation>,
    'queryKey' | 'queryFn'
>;

export const useProfile = (
    options?: UserProfileQueryOptions,
    params?: object
) => {
    return useQuery({
        ...options,
        queryKey: [QueryKeys.USERS, params],
        queryFn: userApi.getProfile
    });
};
