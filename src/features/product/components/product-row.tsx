import { Product } from '@/types';
import { FunctionComponent } from 'react';
import ProductCard from './product-card';

interface ProductRowProps {
    products: Product[];
}

const ProductRow: FunctionComponent<ProductRowProps> = (props) => {
    return (
        <div className="container grid grid-cols-4 gap-4">
            {props.products.map((product) => {
                return (
                    <ProductCard
                        id={product.id}
                        productLine={product.productLine}
                        name={product.productName}
                        price={product.price}
                        imageUrl={
                            'http://127.0.0.1:8080/product/get-file?filePath=' +
                            product.thumbnailUri
                        }
                    />
                );
            })}
        </div>
    );
};

export default ProductRow;
