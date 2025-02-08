// src/components/OrderItem.tsx
import React from "react";

interface OrderItemProps {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  onQuantityChange: (id: number, newQuantity: number) => void;
}

const OrderItem: React.FC<OrderItemProps> = ({ id, name, price, image, quantity, onQuantityChange }) => {
  return (
    <div className="border rounded-lg p-4 shadow-lg flex items-center space-x-4">
      <img src={image} alt={name} className="w-24 h-24 object-cover rounded-md" />
      <div className="flex-1">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-gray-600">{price}円</p>
        <div className="flex items-center space-x-2 mt-2">
          <button
            className="bg-gray-300 px-3 py-1 rounded"
            onClick={() => onQuantityChange(id, Math.max(0, quantity - 1))}
          >－</button>
          <span className="text-lg">{quantity}</span>
          <button
            className="bg-gray-300 px-3 py-1 rounded"
            onClick={() => onQuantityChange(id, quantity + 1)}
          >＋</button>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
