import { api } from '@/lib/axios-client';
import { QueryConfig } from '@/lib/react-query';
import { ProductDetailed } from '@/types/response';
import { queryOptions, useQuery } from '@tanstack/react-query';

export const getProduct = (productLine: string): Promise<ProductDetailed> => {
    return api.get(`/product/` + productLine);
};

export const getProductQueryOptions = (productLine: string) => {
    return queryOptions({
        queryKey: [productLine],
        queryFn: () => getProduct(productLine)
    });
};

type UseProductOptions = {
    productLine: string;
    queryConfig?: QueryConfig<typeof getProductQueryOptions>;
};

export const useProduct = ({ productLine, queryConfig }: UseProductOptions) => {
    return useQuery({
        ...getProductQueryOptions(productLine),
        ...queryConfig
    });
};
