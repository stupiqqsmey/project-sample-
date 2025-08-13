import React from "react";

const DataTable = ({ columns, data, onEdit, onDelete }) => {
    return (
        <div className="overflow-x-auto border rounded">
            <table className="min-w-full bg-white text-sm text-left">
                <thead className="bg-gray-100 text-gray-700 uppercase">
                <tr>
                    {columns.map((col, idx) => (
                        <th
                            key={col.accessor || idx}
                            className="px-4 py-2 border-b font-medium"
                        >
                            {col.header}
                        </th>
                    ))}
                    <th className="px-4 py-2 border-b font-medium">Actions</th>
                </tr>
                </thead>
                <tbody>
                {data.length === 0 ? (
                    <tr>
                        <td
                            colSpan={columns.length + 1}
                            className="text-center py-4 text-gray-500"
                        >
                            No data available.
                        </td>
                    </tr>
                ) : (
                    data.map((item, rowIdx) => (
                        <tr
                            key={item.id ?? rowIdx}
                            className="hover:bg-gray-50 even:bg-gray-50"
                        >
                            {columns.map((col, colIdx) => (
                                <td key={col.accessor || colIdx} className="px-4 py-2 border-b">
                                    {typeof col.render === "function"
                                        ? col.render(item)
                                        : item[col.accessor]}
                                </td>
                            ))}
                            <td className="px-4 py-2 border-b whitespace-nowrap">
                                <button
                                    onClick={() => onEdit(item)}
                                    className="text-blue-600 hover:underline mr-2"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => onDelete(item)}
                                    className="text-red-600 hover:underline"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))
                )}
                </tbody>
            </table>
        </div>
    );
};

export default DataTable;
