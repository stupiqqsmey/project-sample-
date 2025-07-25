import {
    ShoppingBag,
    Users,
    Award,
    Target,
    Heart,
    Code,
    Zap,
    Shield,
    TrendingUp,
    Globe,
    Star,
    CheckCircle
} from 'lucide-react';

const AboutPage = () => {
    const features = [
        {
            icon: Code,
            title: "Modern Technology",
            description: "Built with React, Tailwind CSS, and cutting-edge web technologies for optimal performance.",
            color: "#799EFF"
        },
        {
            icon: Zap,
            title: "Lightning Fast",
            description: "Optimized for speed with efficient code structure and responsive design principles.",
            color: "#FFBC4C"
        },
        {
            icon: Shield,
            title: "Secure & Reliable",
            description: "Implementing best practices for security and reliability in e-commerce applications.",
            color: "#FFDE63"
        }
    ];

    const stats = [
        { number: "10K+", label: "Happy Customers", icon: Users, color: "#799EFF" },
        { number: "5K+", label: "Products", icon: ShoppingBag, color: "#FFBC4C" },
        { number: "99%", label: "Satisfaction Rate", icon: Star, color: "#FFDE63" },
        { number: "24/7", label: "Support", icon: Heart, color: "#FEFFC4" }
    ];

    const values = [
        {
            icon: Target,
            title: "Our Mission",
            description: "To create exceptional e-commerce experiences that connect people with products they love, while demonstrating the power of modern web development."
        },
        {
            icon: Award,
            title: "Quality First",
            description: "We prioritize code quality, user experience, and performance in every aspect of our application development process."
        },
        {
            icon: Globe,
            title: "Innovation",
            description: "Constantly exploring new technologies and approaches to deliver cutting-edge solutions for modern e-commerce needs."
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-yellow-50 to-orange-50 relative overflow-hidden">
            {/* Animated Background Elements */}
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
                    <div className="text-center mb-20">
                        <div className="bg-white/80 backdrop-blur-lg p-12 rounded-3xl shadow-2xl border border-white/20">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
                                 style={{backgroundColor: '#FEFFC4', color: '#799EFF'}}>
                                <Heart className="w-4 h-4" />
                                Built with Passion
                                <Heart className="w-4 h-4" />
                            </div>

                            <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight">
                <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                  About
                </span>
                                <br />
                                <span className="bg-gradient-to-r from-yellow-500 via-orange-400 to-yellow-600 bg-clip-text text-transparent">
                  KolaqShop
                </span>
                            </h1>

                            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
                                Welcome to KolaqShop - a demonstration of modern e-commerce excellence built with
                                cutting-edge web technologies and designed for the future of online shopping.
                            </p>
                        </div>
                    </div>

                    {/* Stats Section */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                        {stats.map((stat, index) => {
                            const IconComponent = stat.icon;
                            return (
                                <div key={index} className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg text-center transform hover:scale-105 transition-all duration-300">
                                    <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                                         style={{backgroundColor: stat.color}}>
                                        <IconComponent className="w-8 h-8 text-white" />
                                    </div>
                                    <div className="text-3xl font-black mb-2" style={{color: stat.color}}>
                                        {stat.number}
                                    </div>
                                    <div className="text-gray-600 font-medium">{stat.label}</div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid lg:grid-cols-2 gap-12 mb-20">

                        {/* Story Section */}
                        <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
                            <h2 className="text-3xl font-bold mb-6" style={{color: '#799EFF'}}>
                                Our Story
                            </h2>
                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p>
                                    KolaqShop represents the perfect fusion of modern web development practices and
                                    exceptional user experience design. Built as a demonstration project, it showcases
                                    the power of React and contemporary web technologies.
                                </p>
                                <p>
                                    Our application leverages the Platzi Fake Store API to provide real product data,
                                    creating an authentic e-commerce experience while serving as a testament to
                                    clean, scalable code architecture.
                                </p>
                                <p>
                                    Every component has been crafted with attention to detail, from responsive design
                                    principles to smooth animations, ensuring that users enjoy a premium shopping
                                    experience across all devices.
                                </p>
                            </div>
                        </div>

                        {/* Technology Stack */}
                        <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
                            <h2 className="text-3xl font-bold mb-6" style={{color: '#FFBC4C'}}>
                                Technology Stack
                            </h2>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/50">
                                    <CheckCircle className="w-5 h-5" style={{color: '#799EFF'}} />
                                    <span className="font-semibold text-gray-800">React 18</span>
                                    <span className="text-gray-600">- Modern component architecture</span>
                                </div>
                                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/50">
                                    <CheckCircle className="w-5 h-5" style={{color: '#FFBC4C'}} />
                                    <span className="font-semibold text-gray-800">Tailwind CSS</span>
                                    <span className="text-gray-600">- Utility-first styling</span>
                                </div>
                                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/50">
                                    <CheckCircle className="w-5 h-5" style={{color: '#FFDE63'}} />
                                    <span className="font-semibold text-gray-800">React Router</span>
                                    <span className="text-gray-600">- Seamless navigation</span>
                                </div>
                                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/50">
                                    <CheckCircle className="w-5 h-5" style={{color: '#FEFFC4'}} />
                                    <span className="font-semibold text-gray-800">Platzi API</span>
                                    <span className="text-gray-600">- Real product data</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Features Section */}
                    <div className="mb-20">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold mb-4" style={{color: '#799EFF'}}>
                                Why Choose MyShop?
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Discover what makes our e-commerce platform stand out from the competition
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {features.map((feature, index) => {
                                const IconComponent = feature.icon;
                                return (
                                    <div key={index} className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center">
                                        <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                                             style={{backgroundColor: feature.color}}>
                                            <IconComponent className="w-10 h-10 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-bold mb-4" style={{color: feature.color}}>
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Values Section */}
                    <div className="mb-20">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold mb-4" style={{color: '#FFBC4C'}}>
                                Our Values
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                The principles that guide our development process and user experience design
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {values.map((value, index) => {
                                const IconComponent = value.icon;
                                const colors = ['#799EFF', '#FFBC4C', '#FFDE63'];
                                return (
                                    <div key={index} className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-12 h-12 rounded-full flex items-center justify-center"
                                                 style={{backgroundColor: colors[index]}}>
                                                <IconComponent className="w-6 h-6 text-white" />
                                            </div>
                                            <h3 className="text-xl font-bold" style={{color: colors[index]}}>
                                                {value.title}
                                            </h3>
                                        </div>
                                        <p className="text-gray-600 leading-relaxed">
                                            {value.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="bg-white/80 backdrop-blur-lg p-12 rounded-3xl shadow-2xl border border-white/20 text-center">
                        <h2 className="text-4xl font-bold mb-4" style={{color: '#799EFF'}}>
                            Ready to Explore?
                        </h2>
                        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                            Experience the future of e-commerce with our carefully crafted shopping platform.
                            Every detail has been designed with you in mind.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/products"
                                className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-lg text-white shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-2xl"
                                style={{backgroundColor: '#799EFF'}}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = '#5a7de6';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = '#799EFF';
                                }}
                            >
                                <ShoppingBag className="w-6 h-6" />
                                Start Shopping
                            </a>

                            <a
                                href="/contact"
                                className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-lg border-2 transition-all duration-300 hover:scale-105"
                                style={{
                                    color: '#FFBC4C',
                                    borderColor: '#FFBC4C'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = '#FFBC4C';
                                    e.target.style.color = 'white';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = 'transparent';
                                    e.target.style.color = '#FFBC4C';
                                }}
                            >
                                <Heart className="w-6 h-6" />
                                Get in Touch
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;