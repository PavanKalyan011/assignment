import React from 'react';

const ItemList = ({ items, onDeleteItem }) => {
  return (
    <div className="max-w-4xl mx-auto mt-8 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Inventory List</h2>
      <p className="mb-4 text-sm text-gray-600">
        <span className="font-bold text-red-500">Note:</span> Items with a quantity less than 5 are highlighted in red.
      </p>
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Category</th>
            <th className="px-4 py-2 text-left">Quantity</th>
            <th className="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id} className={`hover:bg-gray-100 ${item.quantity < 5 ? 'bg-red-100' : ''}`}>
              <td className="px-4 py-2">{item.name}</td>
              <td className="px-4 py-2">{item.category}</td>
              <td className="px-4 py-2">{item.quantity}</td>
              <td className="px-4 py-2">
                <button
                  className="text-white bg-red-500 px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                  onClick={() => onDeleteItem(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemList;
