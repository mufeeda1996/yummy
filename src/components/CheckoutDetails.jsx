import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../redux/ProductSlice";

const CheckoutDetails = () => {
  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState("cod");
  const [coupon, setCoupon] = useState("");
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handlePlaceOrder = () => {
    if (!address) {
      alert("Please enter your delivery address");
      return;
    }
    if (cartItems.length === 0) {
      alert("Your cart is empty");
      return;
    }

    // build order object
    const order = {
      id: Date.now(),
      items: cartItems,
      address,
      payment,
      coupon: coupon || null,
      total: cartItems.reduce((sum, i) => sum + i.price * (i.qty || 1), 0) + 5 + 2,
      status: "pending",
    };

    // Save order to localStorage (mock)
    const savedOrders = JSON.parse(localStorage.getItem("orders") || "[]");
    localStorage.setItem("orders", JSON.stringify([...savedOrders, order]));

    // clear cart after order
    dispatch(clearCart());

    alert("✅ Order placed successfully!");
  };

  return (
    <div className="space-y-6">
      {/* Address Section */}
      <div>
        <h3 className="text-lg font-semibold">Delivery Address</h3>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter your delivery address"
          className="w-full mt-2 p-3 border border-gray-300 rounded-lg"
        />
      </div>

      {/* Payment Methods */}
      <div>
        <h3 className="text-lg font-semibold">Payment Method</h3>
        <div className="mt-2 space-y-2">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="payment"
              value="card"
              checked={payment === "card"}
              onChange={(e) => setPayment(e.target.value)}
            />
            <span>Credit / Debit Card</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="payment"
              value="cod"
              checked={payment === "cod"}
              onChange={(e) => setPayment(e.target.value)}
            />
            <span>Cash on Delivery</span>
          </label>
        </div>
      </div>

      {/* Coupon Input */}
      <div>
        <h3 className="text-lg font-semibold">Apply Coupon</h3>
        <input
          type="text"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          placeholder="Enter coupon code"
          className="w-full mt-2 p-3 border border-gray-300 rounded-lg"
        />
        <button
          type="button"
          className="mt-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700"
        >
          Apply
        </button>
      </div>

      {/* Place Order Button */}
      <button
        onClick={handlePlaceOrder}
        className="w-full py-3 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700"
      >
        Place Order
      </button>
    </div>
  );
};

export default CheckoutDetails;
