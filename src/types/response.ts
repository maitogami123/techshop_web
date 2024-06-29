import { Product } from './api';

export type CategoryProducts = {
    id: number;
    name: string;
    products: Product[];
};

export type ProductDetailed = {
    product: Product;
    brandId: number;
    categoryId: number;
    brandName: string;
    categoryName: string;
    warrantyPeriodId: number;
    thumbnailUri: string;
    imageUris: string[];
    productInfos: { id: number; productInformation: string }[];
    warrantyPeriod: number;
    stock: number;
};
