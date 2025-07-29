// Components/DataTable/DataTableProduct.jsx
import React, { useState } from 'react';
import DataTable from './DataTable';
import { useGetProductsQuery, useDeleteProductMutation } from '../../redux/api.js';
import { useNavigate } from 'react-router-dom';

const PRODUCTS_PER_PAGE = 10;

const DataTableProduct = () => {
    const [page, setPage] = useState(0);
    const { data, isLoading, isError } = useGetProductsQuery({ page: page * PRODUCTS_PER_PAGE, limit: PRODUCTS_PER_PAGE });
    const [deleteProduct] = useDeleteProductMutation();
    const navigate = useNavigate();

    if (isLoading) return <p>Loading...</p>;
    if (isError || !data) return <p>Error loading products.</p>;

    const handleEdit = (product) => {
        navigate(`/products/${product.id}/edit`);
    };

    const handleDelete = async (product) => {
        const confirmed = window.confirm(`Delete ${product.title}?`);
        if (confirmed) {
            try {
                await deleteProduct({ id: product.id, accessToken: 'yourAccessTokenHere' });
            } catch (err) {
                console.error('Failed to delete:', err);
            }
        }
    };

    const columns = [
        { header: 'ID', accessor: 'id' },
        { header: 'Model', accessor: 'model' },
        { header: 'Make', accessor: 'make' },
        { header: 'Year', accessor: 'year' },
        { header: 'Price', accessor: 'price' },
    ];

    return (
        <div>
            <DataTable
                columns={columns}
                data={data?.cars || []}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />

            {/* Pagination Controls */}
            <div className="flex justify-between mt-4">
                <button
                    onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
                    className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded"
                    disabled={page === 0}
                >
                    Previous
                </button>
                <span className="text-sm text-gray-700">Page {page + 1}</span>
                <button
                    onClick={() => setPage((prev) => prev + 1)}
                    className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default DataTableProduct;
