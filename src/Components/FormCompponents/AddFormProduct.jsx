// src/Components/FormCompponents/AddFormProduct.jsx
import React, { useEffect, useState } from "react";
import {
    useCreateProductsMutation,
    useUpdateProductMutation,
    useGetProductByIdQuery,
} from "../../redux/api";
import { useNavigate, useParams } from "react-router-dom";

const AddFormProduct = ({ mode = "create" }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [form, setForm] = useState({
        model: "",
        brand: "",
        year: "",
        price: "",
    });

    const { data: productData } = useGetProductByIdQuery(id, {
        skip: mode !== "edit",
    });

    useEffect(() => {
        if (mode === "edit" && productData) {
            setForm({
                model: productData.model || "",
                brand: productData.brand || "",
                year: productData.year || "",
                price: productData.price || "",
            });
        }
    }, [mode, productData]);

    const [createProduct, { isLoading: creating }] = useCreateProductsMutation();
    const [updateProduct, { isLoading: updating }] = useUpdateProductMutation();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = "your_token_here"; // Replace with your actual token

        try {
            if (mode === "edit") {
                await updateProduct({
                    id,
                    updatedCar: { ...form, year: Number(form.year), price: Number(form.price) },
                    accessToken: token,
                }).unwrap();
                alert("Product updated!");
            } else {
                await createProduct({
                    newCar: { ...form, year: Number(form.year), price: Number(form.price) },
                    accessToken: token,
                }).unwrap();
                alert("Product created!");
            }
            navigate("/products");
        } catch (error) {
            alert("Error: " + error.message);
        }
    };

    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
            <h2 className="text-xl font-bold mb-4">
                {mode === "edit" ? "Edit Product" : "Add Product"}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="model"
                    placeholder="Model"
                    className="border p-2 rounded w-full"
                    value={form.model}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="brand"
                    placeholder="Brand"
                    className="border p-2 rounded w-full"
                    value={form.brand}
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    name="year"
                    placeholder="Year"
                    className="border p-2 rounded w-full"
                    value={form.year}
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    className="border p-2 rounded w-full"
                    value={form.price}
                    onChange={handleChange}
                    required
                />

                <button
                    type="submit"
                    disabled={creating || updating}
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
                >
                    {mode === "edit" ? "Update Product" : "Add Product"}
                </button>
            </form>
        </div>
    );
};

export default AddFormProduct;
