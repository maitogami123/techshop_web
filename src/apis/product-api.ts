import { ResponseCustom } from '@/constants/type';
import axiosClient from '../config/axios-client';

export type ProductItem = {
    id: number;
    productName: string;
    productLine: string;
    discount: number;
    price: number;
    thumbnailUri: string;
    stock: number;
    categoryName: string;
    brandName: string;
};

export const productApi = {
    getProduct: (): Promise<ResponseCustom<ProductItem>> =>
        axiosClient.get('product/all')
};
