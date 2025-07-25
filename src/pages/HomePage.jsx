import { useState, useEffect } from 'react';
import { ShoppingBag, Star, ArrowRight, Sparkles, Gift, TrendingUp, Eye, Heart } from 'lucide-react';

const HomePage = () => {
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [stats, setStats] = useState({
        totalProducts: 0,
        totalCategories: 0,
        featuredCount: 6
    });

    // Fetch data from Platzi Fake API
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);

                // Fetch products and categories
                const [productsRes, categoriesRes] = await Promise.all([
                    fetch('https://fakeapi.platzi.com/api/v1/products?limit=6'),
                    fetch('https://fakeapi.platzi.com/api/v1/categories')
                ]);

                const products = await productsRes.json();
                const categoriesData = await categoriesRes.json();

                setFeaturedProducts(products);
                setCategories(categoriesData.slice(0, 3));
                setStats({
                    totalProducts: 200,
                    totalCategories: categoriesData.length,
                    featuredCount: products.length
                });

            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-yellow-50 to-orange-50 relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-32 h-32 rounded-full opacity-20 animate-pulse"
                     style={{backgroundColor: '#799EFF'}}></div>
                <div className="absolute top-60 right-20 w-24 h-24 rounded-full opacity-20 animate-bounce"
                     style={{backgroundColor: '#FFDE63'}}></div>
                <div className="absolute bottom-40 left-1/4 w-20 h-20 rounded-full opacity-20 animate-pulse"
                     style={{backgroundColor: '#FFBC4C'}}></div>
                <div className="absolute bottom-20 right-1/3 w-28 h-28 rounded-full opacity-20 animate-bounce"
                     style={{backgroundColor: '#FEFFC4'}}></div>
            </div>

            <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-12">
                <div className="max-w-7xl mx-auto">
                    {/* Hero Section */}
                    <div className="text-center mb-16">
                        <div className="bg-white/80 backdrop-blur-lg p-12 rounded-3xl shadow-2xl border border-white/20 transform hover:scale-105 transition-all duration-500">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-pulse"
                                 style={{backgroundColor: '#FEFFC4', color: '#799EFF'}}>
                                <Sparkles className="w-4 h-4" />
                                {loading ? 'Loading...' : `${stats.featuredCount} Featured Products`}
                                <Sparkles className="w-4 h-4" />
                            </div>

                            {/* Main Heading */}
                            <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight">
                                <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                                    Welcome to
                                </span>
                                <br />
                                <span className="bg-gradient-to-r from-yellow-500 via-orange-400 to-yellow-600 bg-clip-text text-transparent animate-pulse">
                                    KolaqShop
                                </span>
                            </h1>

                            {/* Subtitle */}
                            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed font-medium">
                                Discover amazing products, unbeatable prices, and exceptional quality.
                                Your premium shopping experience starts here.
                            </p>

                            {/* Features */}
                            <div className="flex flex-wrap justify-center gap-6 mb-10">
                                <div className="flex items-center gap-2 px-4 py-2 rounded-full text-gray-700 font-medium"
                                     style={{backgroundColor: '#FEFFC4'}}>
                                    <Star className="w-5 h-5" style={{color: '#FFBC4C'}} />
                                    Premium Quality
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 rounded-full text-gray-700 font-medium"
                                     style={{backgroundColor: '#FEFFC4'}}>
                                    <Gift className="w-5 h-5" style={{color: '#FFBC4C'}} />
                                    Free Shipping
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 rounded-full text-gray-700 font-medium"
                                     style={{backgroundColor: '#FEFFC4'}}>
                                    <TrendingUp className="w-5 h-5" style={{color: '#FFBC4C'}} />
                                    Best Prices
                                </div>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <a
                                    href="/products"
                                    className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-lg text-white shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-2xl focus:ring-4 focus:ring-offset-2"
                                    style={{
                                        backgroundColor: '#799EFF',
                                        focusRingColor: '#799EFF'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.backgroundColor = '#5a7de6';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.backgroundColor = '#799EFF';
                                    }}
                                >
                                    <ShoppingBag className="w-6 h-6" />
                                    Shop Now
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </a>

                                <a
                                    href="/about"
                                    className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-lg border-2 transition-all duration-300 hover:scale-105 focus:ring-4 focus:ring-offset-2"
                                    style={{
                                        color: '#799EFF',
                                        borderColor: '#799EFF',
                                        focusRingColor: '#799EFF'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.backgroundColor = '#799EFF';
                                        e.target.style.color = 'white';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.backgroundColor = 'transparent';
                                        e.target.style.color = '#799EFF';
                                    }}
                                >
                                    Learn More
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>

                            {/* Dynamic Stats */}
                            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-200">
                                <div className="text-center">
                                    <div className="text-3xl font-black mb-2" style={{color: '#799EFF'}}>
                                        {loading ? '...' : `${stats.totalProducts}+`}
                                    </div>
                                    <div className="text-gray-600 font-medium">Products</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-black mb-2" style={{color: '#FFBC4C'}}>
                                        {loading ? '...' : `${stats.totalCategories}`}
                                    </div>
                                    <div className="text-gray-600 font-medium">Categories</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-black mb-2" style={{color: '#FFDE63'}}>99%</div>
                                    <div className="text-gray-600 font-medium">Satisfaction</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Featured Products Section */}
                    <div className="mb-16">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold mb-4" style={{color: '#799EFF'}}>
                                Featured Products
                            </h2>
                            <p className="text-xl text-gray-600">
                                Check out our handpicked selection of amazing products
                            </p>
                        </div>

                        {loading ? (
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {[...Array(6)].map((_, i) => (
                                    <div key={i} className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-6 animate-pulse">
                                        <div className="w-full h-48 bg-gray-300 rounded-xl mb-4"></div>
                                        <div className="h-4 bg-gray-300 rounded mb-2"></div>
                                        <div className="h-4 bg-gray-300 rounded w-2/3 mb-4"></div>
                                        <div className="h-6 bg-gray-300 rounded w-1/3"></div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {featuredProducts.map((product) => (
                                    <div key={product.id} className="group bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                                        <div className="relative overflow-hidden">
                                            <img
                                                src={product.images[0]}
                                                alt={product.title}
                                                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                            <div className="absolute top-4 right-4 flex gap-2">
                                                <button className="p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                                                    <Heart className="w-4 h-4 text-gray-600" />
                                                </button>
                                                <button className="p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                                                    <Eye className="w-4 h-4 text-gray-600" />
                                                </button>
                                            </div>
                                            <div className="absolute bottom-4 left-4">
                                                <span className="px-3 py-1 text-xs font-semibold rounded-full text-white"
                                                      style={{backgroundColor: '#FFBC4C'}}>
                                                    {product.category.name}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <h3 className="font-bold text-lg mb-2 text-gray-800 line-clamp-2">
                                                {product.title}
                                            </h3>
                                            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                                {product.description}
                                            </p>
                                            <div className="flex items-center justify-between">
                                                <span className="text-2xl font-black" style={{color: '#799EFF'}}>
                                                    ${product.price}
                                                </span>
                                                <button className="px-4 py-2 rounded-full font-semibold text-white transition-all hover:scale-105"
                                                        style={{backgroundColor: '#799EFF'}}>
                                                    Add to Cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Categories Section */}
                    <div className="grid md:grid-cols-3 gap-8">
                        {loading ? (
                            [...Array(3)].map((_, i) => (
                                <div key={i} className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg animate-pulse">
                                    <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4"></div>
                                    <div className="h-4 bg-gray-300 rounded mb-3 w-3/4 mx-auto"></div>
                                    <div className="h-3 bg-gray-300 rounded w-full"></div>
                                    <div className="h-3 bg-gray-300 rounded w-2/3 mx-auto mt-2"></div>
                                </div>
                            ))
                        ) : (
                            categories.map((category, index) => {
                                const colors = ['#799EFF', '#FFBC4C', '#FFDE63'];
                                const icons = [ShoppingBag, Gift, Star];
                                const IconComponent = icons[index];

                                return (
                                    <div key={category.id} className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                                        <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                                             style={{backgroundColor: colors[index]}}>
                                            <IconComponent className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold mb-3 text-center" style={{color: colors[index]}}>
                                            {category.name}
                                        </h3>
                                        <p className="text-gray-600 text-center">
                                            Explore our amazing collection of {category.name.toLowerCase()} with premium quality and great prices.
                                        </p>
                                    </div>
                                );
                            })
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;