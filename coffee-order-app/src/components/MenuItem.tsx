// src/components/MenuItem.tsx
import React from "react";

interface MenuItemProps {
  id: number;
  name: string;
  price: number;
  image: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ id, name, price, image }) => {
  return (
    <div className="border rounded-lg p-4 shadow-lg text-center">
      <img src={image} alt={name} className="w-full h-40 object-cover rounded-md mb-4" />
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-gray-600">{price}円</p>
      <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
        注文する
      </button>
    </div>
  );
};

export default MenuItem;
