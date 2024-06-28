import { createBrowserRouter } from 'react-router-dom';
import AppRoot from './app/root';
import ProductRow from '@/features/product/components/product-row';
import { NotFoundRoute } from './not-found';
import Hero from '@/components/ui/hero';
import ProductDetails from './app/product/product-details';
import Section from '@/components/ui/sections';
import AuthRoot from './auth/root';
import Login from './auth/login';
import Register from './auth/register';

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
                            <Section heading="New Products">
                                <ProductRow />
                            </Section>
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
            path: '/auth',
            element: <AuthRoot />,
            children: [
                {
                    path: '/auth/login',
                    element: <Login />
                },
                {
                    path: '/auth/register',
                    element: <Register />
                }
            ]
        },
        {
            path: '*',
            element: <NotFoundRoute />
        }
    ]);
