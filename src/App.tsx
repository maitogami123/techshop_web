import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './ui/layouts/Index';
import Home from './pages/home';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        <Route index element={<Home />}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
