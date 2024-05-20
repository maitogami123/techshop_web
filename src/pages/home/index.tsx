import { useProduct } from '@/hooks';

const Home = () => {
    // return <p>Hi, I'm gay</p>;
    const { data, isLoading, error } = useProduct();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <>
            <h1>Hello</h1>
            {data?.map((item) => {
                <div>
                    <h2>Welcome, {item?.productLine}!</h2>
                    <p>Your email is {item?.productName}.</p>
                </div>;
            })}
        </>
    );
};
export default Home;
