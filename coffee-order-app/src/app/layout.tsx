// src/app/layout.tsx
import React from "react";
import "../styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 container mx-auto p-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
