import Button from '@/components/ui/button';
import {
    getProductQueryOptions,
    useProduct
} from '@/features/product/api/get-product';
import { formatPrice } from '@/utils/format';
import { QueryClient } from '@tanstack/react-query';
import { ChevronRight, CircleCheck } from 'lucide-react';
import { FunctionComponent } from 'react';
import { TbHome } from 'react-icons/tb';
import { Link, LoaderFunctionArgs, useParams } from 'react-router-dom';
import { NotFoundRoute } from '../../not-found';

interface ProductDetailsProps {}

export const productDetailsLoader =
    (queryClient: QueryClient) =>
    async ({ params }: LoaderFunctionArgs) => {
        const productLine = params.productLine as string;
        const productDetailsQuery = getProductQueryOptions(productLine);

        return (
            queryClient.getQueryData(productDetailsQuery.queryKey) ??
            (await queryClient.fetchQuery(productDetailsQuery))
        );
    };

const ProductDetails: FunctionComponent<ProductDetailsProps> = () => {
    const params = useParams();
    const productLine = params.productLine as string;

    const productDetails = useProduct({
        productLine: productLine
    });

    if (!productDetails.data) return <NotFoundRoute />;

    return (
        <div className="container flex flex-col gap-8">
            <div className="flex items-center gap-4">
                <Link to={'/'}>
                    <div className="flex items-center gap-2">
                        <TbHome size={21} /> Trang chủ
                    </div>
                </Link>
                <ChevronRight size={21} />
                {productLine}
            </div>
            <div className="grid grid-cols-12 gap-16">
                <div className="col-span-4 col-start-2">
                    <img
                        src={`http://127.0.0.1:8080/product/get-file?filePath=${productDetails.data.thumbnailUri}`}
                        alt=""
                    />
                </div>
                <div className="col-span-6 col-start-6 gap-4 flex flex-col">
                    <h1 className="">
                        {productDetails.data.product.productName}
                    </h1>
                    {productDetails.data.productInfos.length > 0 && (
                        <div className="border-solid border-2 border-gray-200 p-4 rounded-lg flex flex-col gap-4 bg-white shadow-md">
                            {productDetails.data.productInfos.map((info) => (
                                <div
                                    className="flex items-start gap-2"
                                    key={info.id}
                                >
                                    <CircleCheck
                                        className="min-w-5"
                                        size={21}
                                    />
                                    <p className="block">
                                        {info.productInformation}
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}
                    <div className="flex flex-col">
                        <span className="font-extralight text-gray-400 line-through">
                            {formatPrice(productDetails.data.product.price)}
                        </span>
                        <span className="font-bold text-blue-500 text-2xl">
                            {formatPrice(productDetails.data.product.price)}
                        </span>
                    </div>
                    <Button
                        buttonVariant="filled"
                        buttonStyled={{
                            color: 'primary',
                            size: 'md',
                            rounded: 'sm',
                            behavior: 'block'
                        }}
                    >
                        Mua ngay
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
