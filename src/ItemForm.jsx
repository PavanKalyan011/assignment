import React, { useState } from 'react';

const ItemForm = ({ onAddItem, onEditItem }) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [id, setId] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (quantity < 0) {
      setError('Quantity cannot be negative.');
      return;
    }

    const newItem = { id: id || Date.now(), name, category, quantity };
    if (id === null) {
      onAddItem(newItem); // Add item
    } else {
      onEditItem(newItem); // Edit item
    }
    clearForm();
  };

  const clearForm = () => {
    setName('');
    setCategory('');
    setQuantity(0);
    setId(null);
    setError('');
  };

  const handleQuantityChange = (value) => {
    if (value > 0) {
      setQuantity(value);
      setError(''); // Clear error if input is valid
    } else {
      setError('Quantity cannot be Les. than 1');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">{id ? 'Edit Item' : 'Add New Item'}</h2>

      <input
        type="text"
        placeholder="Item Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
        className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => handleQuantityChange(Number(e.target.value))}
        required
        className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      
      {/* Error Message */}
      {error && <p className="text-red-500 mb-4">{error}</p>}

      <button
        type="submit"
        className="w-full p-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        disabled={error !== ''} // Disable the button if there's an error
      >
        {id ? 'Edit Item' : 'Add Item'}
      </button>
    </form>
  );
};

export default ItemForm;
