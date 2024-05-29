import Button from '@/components/ui/button';
import { FunctionComponent } from 'react';

interface ProductCardProps {
    id: string;
    title: string;
    price: number;
    imageUrl: string;
}

const ProductCard: FunctionComponent<ProductCardProps> = () => {
    return (
        <div className="rounded-lg shadow-lg overflow-hidden flex-auto">
            <img
                className=""
                src="https://th.bing.com/th/id/OIP.H1a6Tc9FIQrP7ktPbRCtDwHaFj?rs=1&pid=ImgDetMain"
                alt=""
            />
            <div className="p-4 block">
                <h3 className="">MSI GF65 Thin 10UE</h3>
                <div className="flex justify-between">
                    <p className="">23.000.000đ</p>
                    <Button
                        buttonVariant="filled"
                        buttonStyled={{ color: 'filled' }}
                    >
                        Add to cart
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
