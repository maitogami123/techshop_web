import { ResponseCustom } from '@/constants/type';
import { api } from '@/lib/axios-client';
import { Product } from '@/types';

export const productApi = {
    getProduct: (): Promise<ResponseCustom<Product>> => api.get('product/all')
};
