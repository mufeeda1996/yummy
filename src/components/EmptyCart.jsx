import React from "react";

export default function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      {/* Cart Illustration */}
      <div className="w-40 h-40 mb-6">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png" // replace with Swiggy-style illustration
          alt="Empty Cart"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Message */}
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        Your cart is empty
      </h2>
      <p className="text-gray-500 mb-6 max-w-sm">
        Looks like you haven’t added anything to your cart yet. Browse and add
        some delicious meals!
      </p>

      {/* Button */}
      <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-orange-600 transition">
        Browse Restaurants
      </button>
    </div>
  );
}
