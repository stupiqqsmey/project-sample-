import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const activeLinkClass = 'bg-primary text-white';
    const inactiveLinkClass = 'text-gray-700 hover:bg-brand-light-blue hover:text-brand-blue';

    return (
        <nav className="bg-secondary shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-3">
                    <NavLink to="/" className="flex items-center space-x-2 text-2xl font-bold text-brand-blue">
                        <svg width="40" height="40" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            {/* Outer Circle */}
                            <circle cx="50" cy="50" r="45" stroke="#3B82F6" strokeWidth="8" fill="none"></circle>
                            {/* Stylized Q Tail */}
                            <path d="M50 30C40 30 35 45 45 50C55 55 60 70 50 70" stroke="#3B82F6" strokeWidth="6" fill="none"></path>
                        </svg>
                        <span>KolaqShop</span>
                    </NavLink>
                    <div className="hidden md:flex items-center space-x-2">
                        <NavLink to="/" className={({ isActive }) => `${isActive ? activeLinkClass : inactiveLinkClass} px-3 py-2 rounded-md text-sm font-medium transition-colors`}>Home</NavLink>
                        <NavLink to="/products" className={({ isActive }) => `${isActive ? activeLinkClass : inactiveLinkClass} px-3 py-2 rounded-md text-sm font-medium transition-colors`}>Products</NavLink>
                        <NavLink to="/about" className={({ isActive }) => `${isActive ? activeLinkClass : inactiveLinkClass} px-3 py-2 rounded-md text-sm font-medium transition-colors`}>About</NavLink>
                        <NavLink to="/contact" className={({ isActive }) => `${isActive ? activeLinkClass : inactiveLinkClass} px-3 py-2 rounded-md text-sm font-medium transition-colors`}>Contact</NavLink>
                    </div>
                    <div className="hidden md:flex items-center space-x-2">
                        <NavLink to="/login" className="bg-tertiary text-gray-600 hover:bg-brand-blue px-4 py-2 rounded-md text-sm font-medium transition-colors">
                            Login
                        </NavLink>
                        <NavLink to="/signup" className="bg-tertiary text-gray-600 hover:bg-brand-blue px-4 py-2 rounded-md text-sm font-medium transition-colors">
                            Sign Up
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;