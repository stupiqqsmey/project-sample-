import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// --- Pagination Constants ---
const PRODUCTS_PER_PAGE = 12; // How many products to show on each page
const TOTAL_PRODUCTS = 200; // The API's approximate total number of products

const ProductPage = () => {
    // --- State Management ---
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate the total number of pages
    const totalPages = Math.ceil(TOTAL_PRODUCTS / PRODUCTS_PER_PAGE);

    // --- Data Fetching Effect ---
    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const offset = (currentPage - 1) * PRODUCTS_PER_PAGE;
                const response = await axios.get(
                    `https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${PRODUCTS_PER_PAGE}`
                );
                setProducts(response.data);
            } catch (error) {
                console.error("Failed to fetch products:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, [currentPage]); // Re-fetch whenever currentPage changes

    // --- Pagination Logic for rendering buttons ---
    const getPageNumbers = () => {
        const pages = [];
        let startPage, endPage;

        if (totalPages <= 3) {
            // If there are 3 or fewer pages, show all of them
            startPage = 1;
            endPage = totalPages;
        } else {
            // If there are more than 3 pages, create a sliding window
            if (currentPage <= 2) {
                startPage = 1;
                endPage = 3;
            } else if (currentPage + 1 >= totalPages) {
                startPage = totalPages - 2;
                endPage = totalPages;
            } else {
                startPage = currentPage - 1;
                endPage = currentPage + 1;
            }
        }

        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }
        return pages;
    };

    const pageNumbers = getPageNumbers();

    // --- Event Handlers ---
    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo(0, 0); // Scroll to top for better UX
    };

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Our Products</h1>

            {loading ? (
                <p className="text-center text-lg text-brand-blue">Loading products...</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <Link to={`/products/${product.id}`} key={product.id} className="block group">
                            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-xl">
                                <img
                                    src={product.images[0]}
                                    alt={product.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h2 className="text-lg font-semibold text-gray-800 truncate group-hover:text-brand-blue">{product.title}</h2>
                                    <p className="text-brand-blue font-bold text-xl mt-2">${product.price}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            )}

            {/* --- Pagination Controls --- */}
            <div className="flex justify-center items-center mt-10 space-x-2">
                {/* Previous Button */}
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-red-600 border border-blue-400 rounded-md text-gray-700 hover:bg-brand-light-blue disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Previous
                </button>

                {/* Page Number Buttons */}
                {pageNumbers.map((number) => (
                    <button
                        key={number}
                        onClick={() => handlePageChange(number)}
                        className={`px-4 py-2 rounded-md border border-gray-300 ${
                            currentPage === number
                                ? 'bg-primary text-gray-600 border-brand-blue'
                                : 'bg-white text-gray-600 hover:bg-brand-light-blue'
                        }`}
                    >
                        {number}
                    </button>
                ))}

                {/* Next Button */}
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-blue-600 border border-gray-300 rounded-md text-gray-700 hover:bg-brand-light-blue disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default ProductPage;