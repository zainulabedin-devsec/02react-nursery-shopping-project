import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-6 flex-1">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </main>
      <footer className="text-center text-sm text-gray-500 py-4">© {new Date().getFullYear()} Paradise Nursery</footer>
    </div>
  );
}
