import React, { useEffect, useState } from "react";
import {
    useCreateProductsMutation,
    useUpdateProductMutation,
    useGetProductByIdQuery,
} from "../../redux/features/car/car.js";
import { useNavigate, useParams } from "react-router-dom";

const AddFormProduct = ({ mode = "create" }) => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        model: "",
        brand: "",
        year: "",
        price: "",
        mileage: "",
        description: "",
        color: "",
        fuel_type: "",
        transmission: "",
        image: "",
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
                mileage: productData.mileage || "",
                description: productData.description || "",
                color: productData.color || "",
                fuel_type: productData.fuel_type || "",
                transmission: productData.transmission || "",
                image: productData.image || "",
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

        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJwb2RvMjE0NEBnbWFpbC5jb20iLCJleHAiOjE3NTQzNTYyOTQsInR5cGUiOiJhY2Nlc3MifQ.zqlgFJdYF1x3Th2yhN1Nhh-UEMIMEUxpLQA098Q5A98"; // Replace with dynamic token from Redux ideally

        try {
            const payload = {
                ...form,
                year: Number(form.year),
                price: Number(form.price),
                mileage: Number(form.mileage),
            };

            if (mode === "edit") {
                await updateProduct({ id, updatedCar: payload, accessToken: token }).unwrap();
                alert("Product updated!");
            } else {
                await createProduct({ newCar: payload, accessToken: token }).unwrap();
                alert("Product created!");
            }
            navigate("/products");
        } catch (error) {
            alert("Error: " + (error?.data?.message || error.message));
        }
    };

    return (
        <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
            <h2 className="text-xl font-bold mb-4">
                {mode === "edit" ? "Edit Product" : "Add Product"}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                {[
                    { name: "model", placeholder: "Model" },
                    { name: "brand", placeholder: "Brand" },
                    { name: "year", placeholder: "Year", type: "number" },
                    { name: "price", placeholder: "Price", type: "number" },
                    { name: "mileage", placeholder: "Mileage", type: "number" },
                    { name: "description", placeholder: "Description" },
                    { name: "color", placeholder: "Color" },
                    { name: "fuel_type", placeholder: "Fuel Type" },
                    { name: "transmission", placeholder: "Transmission" },
                    { name: "image", placeholder: "Image URL" },
                ].map(({ name, placeholder, type = "text" }) => (
                    <input
                        key={name}
                        type={type}
                        name={name}
                        placeholder={placeholder}
                        className="border p-2 rounded w-full"
                        value={form[name]}
                        onChange={handleChange}
                        required
                    />
                ))}

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
