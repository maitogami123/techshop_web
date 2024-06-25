import { FunctionComponent } from 'react';
import ProductCard from './product-card';

interface ProductRowProps {}

const ProductRow: FunctionComponent<ProductRowProps> = () => {
    return (
        <div className="container grid grid-cols-4 gap-4">
            <ProductCard id={''} title={''} price={0} imageUrl={''} />
            <ProductCard id={''} title={''} price={0} imageUrl={''} />
            <ProductCard id={''} title={''} price={0} imageUrl={''} />
            <ProductCard id={''} title={''} price={0} imageUrl={''} />
        </div>
    );
};

export default ProductRow;
