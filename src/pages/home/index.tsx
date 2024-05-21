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
export default Home;
