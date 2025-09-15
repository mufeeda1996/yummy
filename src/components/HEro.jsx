import React from "react";
import { Search } from "lucide-react";
import Card from "./Card";

export default function SwiggyHero() {
  return (
<div className="min-h-screen flex flex-col bg-[#e3780e] text-white m-0 p-0">
      {/* Navbar */}
     

      {/* Hero Content */}
      <div className="flex flex-col justify-center items-center flex-1 px-6 text-center ">
        <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
          Hungry?
        </h2>
        <p className="text-lg opacity-90 mb-8">
          Order food from your favourite restaurants near you.
        </p>

        {/* Search Box */}
        <div className="flex w-full max-w-lg bg-white rounded-lg shadow-lg overflow-hidden">
          <input
            type="text"
            placeholder="Enter your delivery location"
            aria-label="Delivery location"
            className="flex-1 px-4 py-3 text-gray-700 focus:outline-none"
          />
          <button className="bg-orange-600 text-white px-6 flex items-center gap-2 hover:bg-orange-700 transition">
            <Search size={18} />
            Search
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-6 m-6">
        <Card img="/image/hero.jpeg" title="Food Delivery" btn_text="Explore" />
        <Card img="/image/hero.jpeg" title="Pickup Your Food" btn_text="Explore" />
      </div>
    </div>
  );
}
