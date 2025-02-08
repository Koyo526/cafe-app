// src/app/confirm/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface OrderItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const ConfirmPage = () => {
  const [order, setOrder] = useState<OrderItem[]>([]);
  const router = useRouter();

  useEffect(() => {
    const savedOrder = localStorage.getItem("order");
    if (savedOrder) {
      setOrder(JSON.parse(savedOrder));
    }
  }, []);

  const totalPrice = order.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleConfirmOrder = () => {
    // 本来はここでバックエンドに注文データを送信する
    alert("注文が確定されました！");
    localStorage.removeItem("order");
    router.push("/");
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">注文確認</h1>
      {order.length === 0 ? (
        <p>注文がありません。</p>
      ) : (
        <div className="border p-4 rounded-lg shadow-lg">
          <ul>
            {order.map((item) => (
              <li key={item.id} className="flex justify-between py-2 border-b">
                <span>{item.name} × {item.quantity}</span>
                <span>{item.price * item.quantity}円</span>
              </li>
            ))}
          </ul>
          <p className="text-xl font-semibold text-right mt-4">合計: {totalPrice}円</p>
          <div className="flex justify-between mt-6">
            <button
              className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-600"
              onClick={() => router.push("/order")}
            >
              修正する
            </button>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
              onClick={handleConfirmOrder}
            >
              注文を確定
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConfirmPage;
