import axiosClient from './axios-client';

export type ProductItem = {
    id: number;
    productName: string;
    productLine: string;
    discount: number;
    price: number;
    thumbnailUri: string;
    stock: number;
};

export const productApi = {
    getProduct: (): Promise<{ data: ProductItem[] }> =>
        axiosClient.get('product/all')
};
