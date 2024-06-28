import { FunctionComponent } from 'react';
import { Outlet } from 'react-router-dom';
import { Head } from '../seo';
import Footer from '../ui/footer/footer';
import MainHeader from '../ui/header/main-header';

interface AuthLayoutProps {}

const AuthLayout: FunctionComponent<AuthLayoutProps> = () => {
    return (
        <>
            <Head />
            <MainHeader />
            <div className="container mx-auto my-10">
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default AuthLayout;
