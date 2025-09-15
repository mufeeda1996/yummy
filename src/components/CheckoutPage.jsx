// CheckoutPage.jsx
import React from "react";
import { useSelector } from "react-redux";
import CartSummary from "./CartSummary";
import CheckoutDetails from "./CheckoutDetails";
import EmptyCart from "./EmptyCart";

const CheckoutPage = () => {
  // get cart items from redux
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <>
      {cartItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="min-h-screen bg-gray-100 flex flex-col lg:flex-row container mx-auto px-4 py-8 gap-6">
          {/* Left: Cart summary */}
          <div className="lg:w-1/3 bg-white rounded-lg shadow p-4 space-y-4">
            <CartSummary />
          </div>

          {/* Right: Delivery / Payment etc */}
          <div className="lg:w-2/3 bg-white rounded-lg shadow p-4 space-y-4">
            <CheckoutDetails />
          </div>
        </div>
      )}
    </>
  );
};

export default CheckoutPage;
