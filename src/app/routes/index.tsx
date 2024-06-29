import { createBrowserRouter } from 'react-router-dom';
import AppIndex from './app';
import ProductDetails from './app/product/product-details';
import AppRoot from './app/root';
import Login from './auth/login';
import Register from './auth/register';
import AuthRoot from './auth/root';
import { NotFoundRoute } from './not-found';

export const createRouter = (/* queryClient: QueryClient */) =>
    createBrowserRouter([
        {
            path: '/',
            element: <AppRoot />,
            children: [
                {
                    path: '',
                    element: <AppIndex />
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
