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
        <div className="rounded-lg shadow-lg overflow-hidden h-fit">
            <div className="w-full h-1/2">
                <img
                    className="w-full h-full"
                    src="https://th.bing.com/th/id/OIP.H1a6Tc9FIQrP7ktPbRCtDwHaFj?rs=1&pid=ImgDetMain"
                    alt=""
                />
            </div>
            <div className="p-4 block h-auto">
                <h3 className="lg:text-lg font-bold pb-4 max-md:pb-2 max-md:text-sm">
                    MSI GF65 Thin 10UE
                </h3>
                <div className="flex justify-between content-center max-xl:flex-wrap max-md:gap-3">
                    <p className="text-md font-bold max-md:text-sm ">
                        23.000.000đ
                    </p>
                    <Button
                        buttonVariant="filled"
                        buttonStyled={{
                            color: 'primary',
                            hPadding: 'lg',
                            size: 'md',
                            rounded: 'sm'
                        }}
                    >
                        Add to cart
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
