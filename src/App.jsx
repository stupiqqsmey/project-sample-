//
// import { Routes, Route, Outlet } from 'react-router-dom';
//
// import Navbar from './Components/Navbar-Footer/Navbar';
// import Footer from './Components/Navbar-Footer/footer';  // Add this import
// import AuthLayout from './Components/layouts/AuthLayout';
// import HomePage from './pages/HomePage';
// import ProductPage from './pages/ProductPage';
// import DetailPage from './pages/DetailPage';
// import AboutPage from './pages/AboutPage';
// import ContactPage from './pages/ContactPage';
//
// import Store from '../src/redux/store.js';
// import {Provider} from 'react-redux';
//
//
// // Auth
// import Login from './Components/AuthComponents/Login';
// import SignUp from './Components/AuthComponents/SignUp';
// import ForgotPassword from './Components/AuthComponents/ForgotPassword';
//
// const MainPagesLayout = () => (
//     <>
//         <Navbar />
//         <main className="container mx-auto p-4">
//             <Outlet /> {/* Child route component will be rendered here */}
//         </main>
//         <Footer />
//     </>
// );
//
// function App() {
//     return (
//         <Routes>
//             <Route element={<MainPagesLayout />}>
//                 <Route path="/" element={<HomePage />} />
//                 <Route path="/products" element={<ProductPage />} />
//                 <Route path="/products/:id" element={<DetailPage />} />
//                 <Route path="/about" element={<AboutPage />} />
//                 <Route path="/contact" element={<ContactPage />} />
//             </Route>
//
//             <Route element={<AuthLayout />}>
//                 <Route path="/login" element={<Login />} />
//                 <Route path="/signup" element={<SignUp />} />
//                 <Route path="/forgot-password" element={<ForgotPassword />} />
//             </Route>
//
//             <Route path="*" element={
//                 <div className="flex items-center justify-center h-screen bg-gray-100">
//                     <div className="text-center">
//                         <h1 className="text-6xl font-bold text-brand-blue">404</h1>
//                         <p className="text-xl text-gray-800 mt-2">Page Not Found</p>
//                         <a href="/" className="mt-6 inline-block bg-brand-cyan text-red-700 font-bold py-2 px-4 rounded hover:bg-brand-blue">
//                             Go Home
//                         </a>
//                     </div>
//                 </div>
//             } />
//         </Routes>
//     );
// }
//
// export default App;