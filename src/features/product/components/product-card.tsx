import Button from '@/components/ui/button';
import { formatPrice } from '@/utils/format';
import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
    id: number;
    title: string;
    price: number;
    imageUrl: string;
}

const ProductCard: FunctionComponent<ProductCardProps> = (props) => {
    return (
        <Link
            to={props.id.toString()}
            key={props.id}
            className="rounded-lg shadow-lg overflow-hidden h-fit"
        >
            <div className="w-full h-48">
                <img
                    className="w-full h-full object-cover"
                    src={props.imageUrl}
                    alt=""
                />
            </div>
            <div className="p-4 block h-auto">
                <h3 className="lg:text-lg font-bold h-14 mb-4 max-md:pb-2 max-md:text-sm text-ellipsis line-clamp-2">
                    {props.title}
                </h3>
                <div className="flex justify-between content-center max-xl:flex-wrap max-md:gap-3">
                    <p className="text-md font-bold max-md:text-sm ">
                        {formatPrice(props.price)}
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
