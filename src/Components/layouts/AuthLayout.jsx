import { Outlet, Link } from 'react-router-dom';

const AuthLayout = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-brand-light-blue p-4">
            <div className="mb-8">
                <Link to="/" className="text-quaternary text-4xl font-bold text-brand-blue">
                    KolaqShop
                </Link>
            </div>
            <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-8">
                <Outlet />
            </div>
        </div>
    );
};

export default AuthLayout;