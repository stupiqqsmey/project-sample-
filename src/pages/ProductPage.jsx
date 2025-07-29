import React from "react";
import { Link } from "react-router-dom";

import DataTableProduct from "../Components/table-component/DataTableProduct.jsx";

const ProductPage = () => {
    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Products</h1>
                <Link
                    to="/products/new"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    + Add Product
                </Link>
            </div>
            <DataTableProduct />
        </div>
    );
};

export default ProductPage;
