import Hero from '@/components/ui/hero';
import Section from '@/components/ui/sections';
import {
    getProductsQueryOptions,
    useProducts
} from '@/features/product/api/get-products';
import ProductRow from '@/features/product/components/product-row';
import { QueryClient } from '@tanstack/react-query';
import { FunctionComponent } from 'react';

interface AppIndexProps {}

export const productLoader = (queryClient: QueryClient) => async () => {
    const query = getProductsQueryOptions();

    return (
        queryClient.getQueryData(query.queryKey) ??
        (await queryClient.fetchQuery(query))
    );
};

const AppIndex: FunctionComponent<AppIndexProps> = () => {
    const productQuery = useProducts();

    if (!productQuery.data) return null;

    return (
        <>
            <Hero />
            {productQuery.data.map(
                (data) =>
                    data.products.length > 0 && (
                        <Section heading={data.name}>
                            <ProductRow products={data.products} />
                        </Section>
                    )
            )}
        </>
    );
};

export default AppIndex;
