import React from "react";
import { useCart, useDispatchCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { items } = useCart();
  const dispatch = useDispatchCart();
  const inCart = !!items[product.id];

  function addToCart() {
    if (!inCart) dispatch({ type: "ADD", product });
  }

  return (
    <div className="bg-white rounded-lg shadow p-3 flex flex-col">
      <img className="w-full h-40 object-cover rounded-md mb-3" src={product.img} alt={product.name} />
      <div className="flex-1">
        <h4 className="font-semibold text-lg">{product.name}</h4>
        <div className="text-green-700 font-bold mt-1">${product.price.toFixed(2)}</div>
        <p className="text-sm text-gray-500 mt-2">{product.desc}</p>
      </div>
      <div className="mt-4">
        <button
          className={`w-full px-4 py-2 rounded-md text-white ${inCart ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"}`}
          onClick={addToCart}
          disabled={inCart}
        >
          {inCart ? "Added to Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}
