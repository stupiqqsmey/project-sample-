import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from '../src/redux/store.js';

import './index.css';

// Layouts
import Navbar from './Components/Navbar-Footer/Navbar.jsx';
import Footer from './Components/Navbar-Footer/Footer.jsx';
import AuthLayout from './Components/layouts/AuthLayout';

// Pages
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import DetailPage from './pages/DetailPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Login from './Components/AuthComponents/Login';
import SignUp from './Components/AuthComponents/SignUp';
import ForgotPassword from './Components/AuthComponents/ForgotPassword';
import AddFormProduct from "./Components/FormCompponents/AddFormProduct.jsx";



// --- Layout Components ---
// eslint-disable-next-line react-refresh/only-export-components
const MainPageLayout = () => (
    <>
        <Navbar/>
        <main className="container mx-auto p-4">
            <Outlet/>
        </main>
        <Footer/>
    </>
);

// --- Define Routes with createBrowserRouter ---
const router = createBrowserRouter([
    {
        element: <MainPageLayout/>,
        children: [
            {path: '/', element: <HomePage/>},
            {path: '/products/', element: <ProductPage/>},
            {path: '/products/:id', element: <DetailPage/>},
            {path: '/about', element: <AboutPage/>},
            {path: '/contact', element: <ContactPage/>},
            {path: '/form', element: <AddFormProduct/>},
            {path: '/products/new', element: <AddFormProduct mode="create" />},
            {path: '/products/:id/edit', element: <AddFormProduct mode="edit" />},


        ],
    },
    {
        element: <AuthLayout/>,
        children: [
            {path: '/login', element: <Login/>},
            {path: '/signup', element: <SignUp/>},
            {path: '/forgot-password', element: <ForgotPassword/>},
        ],
    },
    {
        path: '*',
        element: (
            <div className="flex items-center justify-center h-screen bg-gray-100">
                <div className="text-center">
                    <h1 className="text-6xl font-bold text-brand-blue">404</h1>
                    <p className="text-xl text-gray-800 mt-2">Page Not Found</p>
                    <a
                        href="/"
                        className="mt-6 inline-block bg-brand-blue text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
                    >
                        Go Home
                    </a>
                </div>
            </div>
        ),
    },
]);

// --- Mount React App ---
const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    </React.StrictMode>
);