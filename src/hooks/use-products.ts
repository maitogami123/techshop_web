import { ProductItem, productApi } from '@/api';
import { QueryKeys } from '@/constants/query-keys';
import { ResponseCustom } from '@/constants/type';
import { UseQueryOptions, useQuery } from '@tanstack/react-query';

type ProductsQueryOptions = Omit<
    UseQueryOptions<ResponseCustom<ProductItem>>,
    'queryKey' | 'queryFn'
>;

export const useProduct = (options?: ProductsQueryOptions, params?: object) => {
    return useQuery({
        ...options,
        queryKey: [QueryKeys.PRODUCTS, params],
        queryFn: productApi.getProduct
    });
};
