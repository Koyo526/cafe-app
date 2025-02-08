// src/components/Header.tsx
import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white py-4 px-6 flex justify-between items-center">
      <h1 className="text-xl font-bold">
        <Link href="/">Coffee Order</Link>
      </h1>
      <nav>
        <ul className="flex space-x-4">
          <li><Link href="/menu">メニュー</Link></li>
          <li><Link href="/order">注文</Link></li>
          <li><Link href="/confirm">確認</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
