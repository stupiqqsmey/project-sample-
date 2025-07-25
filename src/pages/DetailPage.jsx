import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DetailPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`);
                setProduct(response.data);
            } catch (error) {
                console.error('Failed to fetch product:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]);

    if (loading) return <p className="text-center text-lg text-brand-blue">Loading details...</p>;
    if (!product) return <p className="text-center text-lg text-red-500">Product not found.</p>;

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <img
                    src={product.images[0]}
                    alt={product.title}
                    className="w-full h-auto rounded-lg object-cover"
                />
                <div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">{product.title}</h1>
                    <span className="text-sm bg-brand-light-blue text-brand-blue font-semibold px-3 py-1 rounded-full">{product.category.name}</span>
                    <p className="text-gray-600 my-4">{product.description}</p>
                    <div className="flex items-center justify-between mt-6">
                        <p className="text-5xl font-extrabold text-brand-blue">${product.price}</p>
                        <button className="bg-brand-cyan text-white font-bold py-3 px-6 rounded-lg hover:bg-brand-blue transition-colors">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailPage;