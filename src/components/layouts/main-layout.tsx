import { FunctionComponent } from 'react';
import { Head } from '../seo';
import MainHeader from '../ui/header/main-header';
import { Outlet } from 'react-router-dom';
import Footer from '../ui/footer/footer';

interface MainLayoutProps {}

const MainLayout: FunctionComponent<MainLayoutProps> = () => {
    return (
        <>
            <Head />
            <MainHeader />
            <div className="container mx-auto">
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default MainLayout;
