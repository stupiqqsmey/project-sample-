import React from "react";

const DataTable = ({ columns, data, onEdit, onDelete }) => {
    return (
        <div className="overflow-x-auto border rounded">
            <table className="min-w-full bg-white">
                <thead className="bg-gray-100">
                <tr>
                    {columns.map((col, idx) => (
                        <th
                            key={idx}
                            className="text-left px-4 py-2 border-b font-medium"
                        >
                            {col.header}
                        </th>
                    ))}
                    <th className="text-left px-4 py-2 border-b font-medium">Actions</th>
                </tr>
                </thead>
                <tbody>
                {data.length === 0 ? (
                    <tr>
                        <td colSpan={columns.length + 1} className="text-center py-4">
                            No data available.
                        </td>
                    </tr>
                ) : (
                    data.map((item, idx) => (
                        <tr
                            key={item.id || idx}
                            className="hover:bg-gray-50 even:bg-gray-50"
                        >
                            {columns.map((col, cIdx) => (
                                <td key={cIdx} className="px-4 py-2 border-b">
                                    {col.render
                                        ? col.render(item)
                                        : item[col.accessor]}
                                </td>
                            ))}
                            <td className="px-4 py-2 border-b space-x-2">
                                <button
                                    onClick={() => onEdit(item)}
                                    className="text-blue-600 hover:underline"
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
