import { Product } from './api';

export type CategoryProducts = {
    id: number;
    name: string;
    products: Product[];
};
