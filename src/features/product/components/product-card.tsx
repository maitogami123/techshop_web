import Button from '@/components/ui/button';
import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
    id: string;
    title: string;
    price: number;
    imageUrl: string;
}

const ProductCard: FunctionComponent<ProductCardProps> = () => {
    return (
        <Link
            to={'test' + Math.random().toString()}
            key={'test' + Math.random().toString()}
            className="rounded-lg shadow-lg overflow-hidden h-fit"
        >
            <div className="w-full h-1/2">
                <img
                    className="w-full h-full"
                    src="https://th.bing.com/th/id/OIP.H1a6Tc9FIQrP7ktPbRCtDwHaFj?rs=1&pid=ImgDetMain"
                    alt=""
                />
            </div>
            <div className="p-4 block h-auto">
                <h3 className="lg:text-lg font-bold h-14 mb-4 max-md:pb-2 max-md:text-sm text-ellipsis line-clamp-2">
                    Lorem ipsum dolor sit,
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
                        onClick={(e) => {
                            e.preventDefault();
                        }}
                    >
                        Add to cart
                    </Button>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
