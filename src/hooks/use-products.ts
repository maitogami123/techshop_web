import { ProductItem, productApi } from '@/api';
import { UseQueryOptions, useQuery } from '@tanstack/react-query';

type ProductsQueryOptions = Omit<
    UseQueryOptions<ProductItem[]>,
    'queryKey' | 'queryFn'
>;

export const useProduct = (options?: ProductsQueryOptions) => {
    return useQuery({
        ...options,
        queryKey: ['product'],
        queryFn: productApi.getProduct
    });
};
