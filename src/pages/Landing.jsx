import React from "react";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();
  return (
    <section
      className="h-[60vh] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=1600&q=60&auto=format&fit=crop')",
      }}
    >
      <div className="bg-white/90 p-8 rounded-lg max-w-2xl text-center shadow-md">
        <h2 className="text-3xl font-bold text-green-800 mb-3">Welcome to Paradise Nursery</h2>
        <p className="text-gray-700 mb-6">
          Paradise Nursery brings high-quality houseplants to your doorstep. We carefully pick each plant for beauty and health to help you breathe easier and live greener.
        </p>
        <div>
          <button
            className="px-5 py-2 rounded-md bg-green-600 text-white hover:bg-green-700"
            onClick={() => navigate("/products")}
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
