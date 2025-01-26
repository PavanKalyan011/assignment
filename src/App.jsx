import React, { useState } from 'react';
import ItemList from './ItemList';
import ItemForm from './ItemForm';

const App = () => {
  const [items, setItems] = useState([]);
  const [filterCategory, setFilterCategory] = useState('');
  const [sortOrder, setSortOrder] = useState('asc'); // 'asc' or 'desc'
  const [isAddingItem, setIsAddingItem] = useState(false); // State to toggle form visibility

  // Add new item to the inventory
  const handleAddItem = (item) => {
    setItems([...items, item]);
    setIsAddingItem(false); // Close the form after adding
  };

  // Edit an existing item
  const handleEditItem = (updatedItem) => {
    setItems(items.map(item => (item.id === updatedItem.id ? updatedItem : item)));
    setIsAddingItem(false); // Close the form after editing
  };

  // Delete an item from the inventory
  const handleDeleteItem = (itemId) => {
    setItems(items.filter(item => item.id !== itemId));
  };

  // Filter items by category (case-insensitive)
  const filteredItems = filterCategory
    ? items.filter(item => item.category.toLowerCase() === filterCategory.toLowerCase())
    : items;

  // Sort items by quantity
  const sortedItems = filteredItems.sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.quantity - b.quantity;
    } else {
      return b.quantity - a.quantity;
    }
  });

  return (
    <div className="p-6 bg-slate-400 h-[100vh] ">
      <h1 className=" text-3xl font-bold text-center mb-6">Inventory Management</h1>

      {/* Row with Add Item, Filter, and Sort */}
      <div className="flex items-center  mb-8 space-x-[100px] justify-center my-50px]">
        {/* Add Item Button */}
        <button
          onClick={() => setIsAddingItem(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add New Item
        </button>

        {/* Category Filter */}
        <div className="flex items-center space-x-2">
          <label className="text-sm font-medium">Filter by Category:</label>
          <select
            onChange={(e) => setFilterCategory(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            <option value="">All</option>
            <option value="Electronics">Electronics</option>
            <option value="Furniture">Furniture</option>
            <option value="Clothing">Clothing</option>
          </select>
        </div>

        {/* Sort by Quantity */}
        <button
          onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          {sortOrder === 'asc' ? 'Sort Descending' : 'Sort Ascending'}
        </button>
      </div>

      {/* Conditionally render the form or the table */}
      {isAddingItem ? (
        <ItemForm onAddItem={handleAddItem} onEditItem={handleEditItem} />
      ) : (
        <ItemList items={sortedItems} onDeleteItem={handleDeleteItem} />
      )}
    </div>
  );
};

export default App;
