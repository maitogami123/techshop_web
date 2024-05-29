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
                                <div className="flex  gap-3">
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
