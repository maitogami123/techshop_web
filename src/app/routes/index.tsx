import { createBrowserRouter } from 'react-router-dom';
import AppRoot from './app/root';
import ProductRow from '@/features/product/components/product-row';
import { NotFoundRoute } from './not-found';
import Hero from '@/components/sections/hero';
import ProductDetails from './app/product/product-details';

export const createRouter = (/* queryClient: QueryClient */) =>
    createBrowserRouter([
        {
            path: '/',
            element: <AppRoot />,
            children: [
                {
                    path: '',
                    element: (
                        <div className="">
                            <Hero />
                            <ProductRow />
                        </div>
                    )
                },
                {
                    path: '/:prodId',
                    element: <ProductDetails />
                }
            ]
        },
        {
            path: '*',
            element: <NotFoundRoute />
        }
    ]);
