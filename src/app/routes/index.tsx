import { createBrowserRouter } from 'react-router-dom';
import AppRoot from './app/root';
import ProductRow from '@/features/product/components/product-row';
import { NotFoundRoute } from './not-found';

export const createRouter = (/* queryClient: QueryClient */) =>
    createBrowserRouter([
        {
            path: '/',
            element: <AppRoot />,
            children: [
                {
                    path: '',
                    element: <ProductRow />
                }
            ]
        },
        {
            path: '*',
            element: <NotFoundRoute />
        }
    ]);
