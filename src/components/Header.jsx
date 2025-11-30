import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Header() {
  const { items } = useCart();
  const totalItems = Object.values(items).reduce((s, it) => s + it.qty, 0);
  const navigate = useNavigate();

  return (
    <header className=" from-green-50 to-white/80 border-b border-gray-100">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate("/")}>
          <img className="w-10 h-10 rounded-md" src="https://img.icons8.com/fluency/48/000000/leaf.png" alt="logo" />
          <div>
            <h1 className="font-semibold text-lg text-green-800">Paradise Nursery</h1>
            <div className="text-xs text-gray-500">Bringing a little green into your home</div>
          </div>
        </div>

        <nav className="flex items-center gap-4">
          <Link to="/products" className="text-sm text-gray-600 hover:text-green-700">Plants</Link>
          <button
            onClick={() => navigate("/cart")}
            className="relative inline-flex items-center gap-2 px-3 py-1 text-sm bg-white border rounded-md shadow-sm hover:shadow"
          >
            <span>🛒</span>
            <span className="text-xs text-gray-600">Cart</span>
            <span className="ml-1 inline-block bg-green-600 text-white text-xs px-2 py-0.5 rounded-full">{totalItems}</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
