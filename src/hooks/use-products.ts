import { productApi } from '@/apis';
import { QueryKeys } from '@/constants/query-keys';
import { ResponseCustom } from '@/constants/type';
import { Product } from '@/types';
import { UseQueryOptions, useQuery } from '@tanstack/react-query';

type ProductsQueryOptions = Omit<
    UseQueryOptions<ResponseCustom<Product>>,
    'queryKey' | 'queryFn'
>;

export const useProduct = (options?: ProductsQueryOptions, params?: object) => {
    return useQuery({
        ...options,
        queryKey: [QueryKeys.PRODUCTS, params],
        queryFn: productApi.getProduct
    });
};
