import { FunctionComponent } from 'react';
import { useParams } from 'react-router-dom';

interface ProductDetailsProps {}

const ProductDetails: FunctionComponent<ProductDetailsProps> = () => {
    const { prodId } = useParams<{ prodId: string }>();
    return <div>{prodId}</div>;
};

export default ProductDetails;
