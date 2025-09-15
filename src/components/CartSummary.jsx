// CartSummary.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/ProductSlice";

const CartSummary = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // compute subtotal
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * (item.qty || 1),
    0
  );

  const deliveryFee = cartItems.length > 0 ? 5 : 0;
  const taxes = cartItems.length > 0 ? 2 : 0;
  const total = subtotal + deliveryFee + taxes;

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.idMeal}
              className="flex items-center justify-between space-x-4 border-b pb-3"
            >
             <img
  src={item.thumb}
  alt={item.name}
  className="w-16 h-16 object-cover rounded-lg"
/>
<div className="font-medium">{item.name}</div>
<div className="font-semibold">${item.price}</div>

              <div className="font-semibold">${item.price}</div>
              <button
                onClick={() => dispatch(removeFromCart(item.idMeal))}
                className="text-red-500 text-sm hover:underline"
              >
                Remove
              </button>
            </div>
          ))}

          {/* Totals */}
          <div className="border-t pt-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-semibold">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span className="font-semibold">${deliveryFee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Taxes</span>
              <span className="font-semibold">${taxes.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-lg font-bold border-t pt-2">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartSummary;
