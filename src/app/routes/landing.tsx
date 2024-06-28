// import { useUser } from '@/lib/auth';
import { Head } from '@/components/seo';
import MainHeader from '@/components/ui/header/main-header';
import { useProduct } from '@/hooks';

export const LandingRoute = () => {
    // const navigate = useNavigate();
    // const user = useUser();

    // const handleStart = () => {
    //     if (user.data) {
    //         navigate('/app');
    //     } else {
    //         navigate('/auth/login');
    //     }
    // };

    const { data, isLoading, error } = useProduct();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <>
            <Head description="Welcome to bulletproof react" />
            <MainHeader />
            <h1>Hello</h1>
            {data &&
                Array.isArray(data.data) &&
                data.data.map((item, index) => (
                    <div key={index}>
                        <h2>Dòng sản phẩm: -- {item.productLine} --</h2>
                        <p>Tên sản phẩm: -- {item.productName} --</p>
                    </div>
                ))}
        </>
    );
};
