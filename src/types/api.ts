export type BaseEntity = {
    id: string;
    createdAt: number;
};

export type Entity<T> = {
    [K in keyof T]: T[K];
} & BaseEntity;

export type User = Entity<{
    firstName: string;
    lastName: string;
    email: string;
    role: 'ADMIN' | 'USER';
}>;

export type Product = {
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
