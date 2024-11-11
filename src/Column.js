

import React from 'react';

const Column = ({ names, currentPage, itemsPerPage }) => {
    const startIndex = (currentPage - 1) * itemsPerPage;

    return (
        <div className="p-4">
            {names.length > 0 ? (
                <table className="min-w-full table-auto border-collapse border border-gray-200 shadow-lg">
                    <thead>
                        <tr className="bg-cyan-800 text-gray-200">
                            <th className="px-4 py-2 border-b">ID</th>
                            <th className="px-4 py-2 border-b">Name</th>
                            <th className="px-4 py-2 border-b">Country</th>
                            <th className="px-4 py-2 border-b">State</th>
                            <th className="px-4 py-2 border-b">City</th>
                            <th className="px-4 py-2 border-b">Week</th>
                            <th className="px-4 py-2 border-b">Option</th>
                        </tr>
                    </thead>
                    <tbody>
                        {names.map((name, index) => (
                            <tr key={name.id} className="hover:bg-gray-50">
                                <td className="px-4 py-2 border-b">{startIndex + index+1    }</td> {/* Display continuous index */}
                                <td className="px-4 py-2 border-b">{name.name1}</td>
                                <td className="px-4 py-2 border-b">{name.country}</td>
                                <td className="px-4 py-2 border-b">{name.state}</td>
                                <td className="px-4 py-2 border-b">{name.city}</td>
                                <td className="px-4 py-2 border-b">{name.week}</td>
                                <td className="px-4 py-2 border-b">{name.option}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <div className="text-center text-gray-600 py-6 ">
                    Select the criteria, No data found.
                </div>
            )}
        </div>
    );
};

export default Column;
