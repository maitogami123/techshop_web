import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './ui/layouts/Index';
import Home from './pages/home';
import UserProfile from './pages/user/user-profile';

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
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
