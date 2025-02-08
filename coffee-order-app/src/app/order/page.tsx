// src/app/order/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import OrderItem from "@/components/OrderItem";
import { useRouter } from "next/navigation";

interface MenuItem {
  id: number;
  name: string;
  price: number;
  image: string;
}

const OrderPage = () => {
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});
  const router = useRouter();

  useEffect(() => {
    // メニューを取得
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
        setQuantities(data.reduce((acc: any, item: MenuItem) => ({ ...acc, [item.id]: 0 }), {}));
      });
  }, []);

  const handleQuantityChange = (id: number, newQuantity: number) => {
    setQuantities((prev) => ({ ...prev, [id]: newQuantity }));
  };

  const totalPrice = menu.reduce((sum, item) => sum + (quantities[item.id] || 0) * item.price, 0);

  const handleOrder = () => {
    const orderItems = menu
      .filter((item) => quantities[item.id] > 0)
      .map((item) => ({ id: item.id, name: item.name, quantity: quantities[item.id], price: item.price }));

    if (orderItems.length === 0) {
      alert("注文を選択してください！");
      return;
    }

    localStorage.setItem("order", JSON.stringify(orderItems));
    router.push("/confirm");
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">注文ページ</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {menu.map((item) => (
          <OrderItem
            key={item.id}
            {...item}
            quantity={quantities[item.id]}
            onQuantityChange={handleQuantityChange}
          />
        ))}
      </div>
      <div className="mt-6 text-right">
        <p className="text-xl font-semibold">合計: {totalPrice}円</p>
        <button
          className="mt-4 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-700"
          onClick={handleOrder}
        >
          注文を確定
        </button>
      </div>
    </div>
  );
};

export default OrderPage;
