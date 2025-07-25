import {
    Mail,
    Phone,
    MapPin,
    Facebook,
    Twitter,
    Instagram,
    Youtube,
    ArrowUp
} from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const Logo = () => (
        <svg width="40" height="40" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="45" stroke="#799EFF" strokeWidth="8" fill="none"></circle>
            <path d="M50 30C40 30 35 45 45 50C55 55 60 70 50 70" stroke="#799EFF" strokeWidth="6" fill="none"></path>
        </svg>
    );

    return (
        <footer className="bg-gray-900 text-white">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">

                    {/* Company Info */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-3 mb-4">
                            <Logo />
                            <h3 className="text-2xl font-bold">KolaqShop</h3>
                        </div>
                        <p className="text-gray-300 mb-6 max-w-md">
                            Your trusted online destination for premium products, exceptional quality,
                            and outstanding customer service. Shop with confidence at KolaqShop.
                        </p>

                        {/* Social Media */}
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors duration-300">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors duration-300">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors duration-300">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors duration-300">
                                <Youtube className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-4" style={{color: '#FFBC4C'}}>
                            Quick Links
                        </h4>
                        <ul className="space-y-2">
                            {['Home', 'Products', 'About Us', 'Contact'].map((link) => (
                                <li key={link}>
                                    <a href={`/${link.toLowerCase().replace(' ', '-')}`}
                                       className="text-gray-300 hover:text-white transition-colors duration-300">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div>
                        <h4 className="text-lg font-bold mb-4" style={{color: '#FFDE63'}}>
                            Customer Service
                        </h4>
                        <ul className="space-y-2">
                            {[
                                'Help Center',
                                'Track Order',
                                'Returns',
                                'Shipping Info',
                                'FAQ'
                            ].map((link) => (
                                <li key={link}>
                                    <a href="#"
                                       className="text-gray-300 hover:text-white transition-colors duration-300">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-4" style={{color: '#799EFF'}}>
                            Contact Us
                        </h4>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-gray-300">
                                <Mail className="w-5 h-5" style={{color: '#799EFF'}} />
                                <span className="text-sm">lonraksmey828282@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-300">
                                <Phone className="w-5 h-5" style={{color: '#FFBC4C'}} />
                                <span className="text-sm">+(855) 963-246-022</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-300">
                                <MapPin className="w-5 h-5" style={{color: '#FFDE63'}} />
                                <span className="text-sm">Phnom Penh, Cambodia</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm text-center sm:text-left">
                            © 2025 KolaqShop. All rights reserved.
                        </p>

                        <div className="flex items-center gap-6">
                            <div className="flex gap-4 text-sm">
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    Privacy Policy
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    Terms
                                </a>
                            </div>

                            {/* Back to Top Button */}
                            <button
                                onClick={scrollToTop}
                                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-all duration-300 group"
                            >
                                <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;