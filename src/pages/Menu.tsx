import React from 'react';

const Menu: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Menu</h2>
      {/* Display menu items and their details */}
      {/* For simplicity, assuming a JSON structure for menu items */}
      {menuItems.map((item) => (
        <div key={item.id} className="mb-4">
          <h3 className="text-xl font-bold">{item.name}</h3>
          <p>{item.description}</p>
          <p className="text-gray-600">${item.price}</p>
        </div>
      ))}
    </div>
  );
};

const menuItems = [
  { id: 1, name: 'Item 1', description: 'Description of item 1', price: 10.99 },
  { id: 2, name: 'Item 2', description: 'Description of item 2', price: 8.99 },
  // Add more menu items as needed
];

export default Menu;
