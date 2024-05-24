import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './app/pages/home';
import UserProfile from './app/pages/user/user-profile';
import MainLayout from './components/layouts/Index';

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
