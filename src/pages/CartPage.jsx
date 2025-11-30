import React from "react";
import { useCart, useDispatchCart } from "../context/CartContext";

// Single cart item card
function CartItem({ item, dispatch }) {
  const { product, qty } = item;

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 bg-white p-4 rounded-lg shadow">
      <img
        className="w-full sm:w-28 h-28 object-cover rounded"
        src={product.img}
        alt={product.name}
      />

      <div className="flex-1 flex flex-col sm:flex-row sm:justify-between w-full">
        <div>
          <h4 className="font-semibold text-lg">{product.name}</h4>
          <p className="text-sm text-gray-500">{product.desc}</p>
          <p className="text-green-700 font-bold mt-1">Unit: ${product.price.toFixed(2)}</p>
        </div>

        <div className="flex items-center gap-2 mt-3 sm:mt-0">
          <button
            onClick={() => dispatch({ type: "DECREASE", id: product.id })}
            className="px-3 py-1 border rounded hover:bg-gray-100"
          >
            -
          </button>
          <span className="px-3 py-1 border rounded">{qty}</span>
          <button
            onClick={() => dispatch({ type: "INCREASE", id: product.id })}
            className="px-3 py-1 border rounded hover:bg-gray-100"
          >
            +
          </button>
          <button
            onClick={() => dispatch({ type: "REMOVE", id: product.id })}
            className="ml-4 text-red-600 text-sm hover:underline"
          >
            Delete
          </button>
        </div>

        <div className="mt-2 sm:mt-0 font-semibold text-right">
          ${(product.price * qty).toFixed(2)}
        </div>
      </div>
    </div>
  );
}

// Main cart page
export default function CartPage() {
  const { items } = useCart();
  const dispatch = useDispatchCart();

  const itemList = Object.values(items);
  const totalQty = itemList.reduce((sum, it) => sum + it.qty, 0);
  const totalPrice = itemList.reduce((sum, it) => sum + it.qty * it.product.price, 0);

  const handleCheckout = () => {
    if (itemList.length === 0) return;

    const confirmOrder = window.confirm("Submit your order?");
    if (confirmOrder) {
      // Clear the cart
      dispatch({ type: "SET", items: {} });
      // Show success message
      alert("Your order has been placed!");
    }
  };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Cart Items */}
      <div className="lg:col-span-2 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Your Shopping Cart</h2>
        <p className="text-gray-500 text-sm mb-4">Review items before checkout</p>

        {itemList.length === 0 ? (
          <div className="bg-white p-8 rounded shadow text-center text-gray-500">
            Your cart is empty. Add some plants!
          </div>
        ) : (
          itemList.map((it) => <CartItem key={it.product.id} item={it} dispatch={dispatch} />)
        )}
      </div>

      {/* Summary */}
      <aside className="bg-white p-6 rounded shadow">
        <h3 className="text-lg font-semibold mb-3">Summary</h3>
        <div className="flex justify-between text-gray-600 mb-2">
          <span>Total plants:</span>
          <span>{totalQty}</span>
        </div>
        <div className="flex justify-between text-gray-600 mb-4">
          <span>Total price:</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
        <button
          onClick={handleCheckout}
          disabled={itemList.length === 0}
          className="w-full px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700 disabled:opacity-60"
        >
          Checkout
        </button>
      </aside>
    </section>
  );
}
