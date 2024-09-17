import { QueryKeys } from '@/constants';
import { api } from '@/lib/axios-client';
import { QueryConfig } from '@/lib/react-query';
import { CategoryProducts } from '@/types/response';
import { queryOptions, useQuery } from '@tanstack/react-query';

export const getProductsByCategory = (): Promise<CategoryProducts[]> => {
    return api.get(`/category/allOfCategory`);
};

export const getProductsQueryOptions = () => {
    return queryOptions({
        queryKey: [QueryKeys.PRODUCTS],
        queryFn: () => getProductsByCategory()
    });
};

type UseProductsOptions = {
    queryConfig?: QueryConfig<typeof getProductsQueryOptions>;
};

export const useProducts = ({ queryConfig }: UseProductsOptions = {}) => {
    return useQuery({
        ...getProductsQueryOptions(),
        ...queryConfig
    });
};
