import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAddProductMutation } from '../../redux//api.js';

const productSchema = z.object({
    title: z.string().min(3),
    price: z.number().min(0),
    description: z.string().min(10),
    category: z.string().min(3),
    image: z.string().url(),
});

const FormComponent = () => {
    const [addProduct, { isLoading, isSuccess, isError, error }] = useAddProductMutation();
    const [submitted, setSubmitted] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: zodResolver(productSchema),
        defaultValues: {
            title: '',
            price: 0,
            description: '',
            category: '',
            image: '',
        },
    });

    const onSubmit = async (data) => {
        try {
            await addProduct(data).unwrap();
            reset();
            setSubmitted(true);
        } catch (err) {
            console.error('Submit failed:', err);
        }
    };

    return (
        <div className="max-w-xl mx-auto p-6 bg-white rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-4">Create Product</h2>

            {isSuccess && submitted && (
                <p className="mb-4 text-green-600">✅ Product submitted successfully!</p>
            )}

            {isError && (
                <p className="mb-4 text-red-500">❌ Failed to submit product. Try again.</p>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Title */}
                <div>
                    <label className="block mb-1 font-medium">Title</label>
                    <input
                        {...register('title')}
                        className="w-full px-4 py-2 border border-gray-300 rounded"
                    />
                    {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
                </div>

                {/* Price */}
                <div>
                    <label className="block mb-1 font-medium">Price</label>
                    <input
                        type="number"
                        step="0.01"
                        {...register('price', { valueAsNumber: true })}
                        className="w-full px-4 py-2 border border-gray-300 rounded"
                    />
                    {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}
                </div>

                {/* Description */}
                <div>
                    <label className="block mb-1 font-medium">Description</label>
                    <textarea
                        {...register('description')}
                        className="w-full px-4 py-2 border border-gray-300 rounded"
                    />
                    {errors.description && (
                        <p className="text-red-500 text-sm">{errors.description.message}</p>
                    )}
                </div>

                {/* Category */}
                <div>
                    <label className="block mb-1 font-medium">Category</label>
                    <input
                        {...register('category')}
                        className="w-full px-4 py-2 border border-gray-300 rounded"
                    />
                    {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}
                </div>

                {/* Image */}
                <div>
                    <label className="block mb-1 font-medium">Image URL</label>
                    <input
                        {...register('image')}
                        className="w-full px-4 py-2 border border-gray-300 rounded"
                    />
                    {errors.image && <p className="text-red-500 text-sm">{errors.image.message}</p>}
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition disabled:opacity-50"
                >
                    {isLoading ? 'Submitting...' : 'Submit Product'}
                </button>
            </form>
        </div>
    );
};

export default FormComponent;
