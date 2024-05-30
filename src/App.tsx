import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './app/pages/home';
import UserProfile from './app/pages/user/user-profile';
import MainLayout from './components/layouts/Index';
import ProductCard from './features/product/components/product-card';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        <Route index element={<Home />}></Route>
                    </Route>
                    <Route path="/user" element={<MainLayout />}>
                        <Route index element={<UserProfile />}></Route>
                    </Route>
                    <Route path="/test" element={<MainLayout />}>
                        <Route
                            path="product-card"
                            element={
                                <div className="grid grid-cols-4 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1">
                                    <ProductCard
                                        id={''}
                                        title={''}
                                        price={0}
                                        imageUrl={''}
                                    />
                                    <ProductCard
                                        id={''}
                                        title={''}
                                        price={0}
                                        imageUrl={''}
                                    />
                                    <ProductCard
                                        id={''}
                                        title={''}
                                        price={0}
                                        imageUrl={''}
                                    />
                                    <ProductCard
                                        id={''}
                                        title={''}
                                        price={0}
                                        imageUrl={''}
                                    />
                                </div>
                            }
                        ></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
