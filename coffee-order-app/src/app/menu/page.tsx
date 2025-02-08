// src/app/menu/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import MenuItem from "@/components/MenuItem";

interface MenuItem {
  id: number;
  name: string;
  price: number;
  image: string;
}

const MenuPage = () => {
  const [menu, setMenu] = useState<MenuItem[]>([]);

  useEffect(() => {
    // ダミーデータを `/public/menu.json` から取得
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => setMenu(data));
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">メニュー一覧</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {menu.map((item) => (
          <MenuItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
