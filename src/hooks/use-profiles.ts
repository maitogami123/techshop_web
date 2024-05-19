import { useQuery } from '@tanstack/react-query';
import { getUserProfile } from '../api/user-api';

export const useProfile = () => {
    return useQuery({ queryKey: ['profile'], queryFn: getUserProfile });
};
