    import { Link } from 'react-router-dom';
    import { useGetProductsQuery } from '../redux/api';
    import { useState } from 'react';

    const PRODUCTS_PER_PAGE = 12;
    const TOTAL_PRODUCTS = 20; // Fake Store API only has 20 items

    const ProductPage = () => {
        const [currentPage, setCurrentPage] = useState(1);
        const totalPages = Math.ceil(TOTAL_PRODUCTS / PRODUCTS_PER_PAGE);

        const offset = (currentPage - 1) * PRODUCTS_PER_PAGE;

        const {
            data: products = [],
            error,
            isLoading,
        } = useGetProductsQuery({ offset, limit: PRODUCTS_PER_PAGE });

        const getPageNumbers = () => {
            const pages = [];
            let startPage, endPage;

            if (totalPages <= 3) {
                startPage = 1;
                endPage = totalPages;
            } else if (currentPage <= 2) {
                startPage = 1;
                endPage = 3;
            } else if (currentPage + 1 >= totalPages) {
                startPage = totalPages - 2;
                endPage = totalPages;
            } else {
                startPage = currentPage - 1;
                endPage = currentPage + 1;
            }

            for (let i = startPage; i <= endPage; i++) {
                pages.push(i);
            }

            return pages;
        };

        const handlePageChange = (page) => {
            setCurrentPage(page);
            window.scrollTo(0, 0);
        };

        return (
            <div className="p-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Our Products</h1>

                {isLoading ? (
                    <p className="text-center text-lg text-blue-500">Loading products...</p>
                ) : error ? (
                    <>
                        <p className="text-red-500 text-center">Failed to load products.</p>
                        {console.log('API Error:', error)}
                    </>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {products.map((product) => (
                            <Link to={`/products/${product.id}`} key={product.id} className="block group">
                                <div className="bg-white rounded-lg shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-xl">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-full h-48 object-contain bg-gray-100"
                                    />
                                    <div className="p-4">
                                        <h2 className="text-lg font-semibold text-gray-800 truncate group-hover:text-blue-600">
                                            {product.title}
                                        </h2>
                                        <p className="text-blue-600 font-bold text-xl mt-2">${product.price}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}

                {/* Pagination */}
                <div className="flex justify-center items-center mt-10 space-x-2">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
                    >
                        Previous
                    </button>

                    {getPageNumbers().map((number) => (
                        <button
                            key={number}
                            onClick={() => handlePageChange(number)}
                            className={`px-4 py-2 rounded-md border ${
                                currentPage === number
                                    ? 'bg-blue-500 text-white border-blue-500'
                                    : 'bg-white text-gray-700 hover:bg-blue-100 border-gray-300'
                            }`}
                        >
                            {number}
                        </button>
                    ))}

                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
            </div>
        );
    };

    export default ProductPage;
