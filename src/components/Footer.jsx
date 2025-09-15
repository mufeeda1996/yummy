import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-12 pb-6">
      <div className="px-6 grid grid-cols-1 md:grid-cols-4 container mx-auto">
        {/* Logo & Description */}
        <div>
          <h1 className="text-2xl font-bold text-white mb-3">Yummy</h1>
          <p className="text-gray-400">
            Delivering your favorite meals from restaurants near you. Fresh, fast, and always delicious.
          </p>
          <div className="flex mt-4 space-x-4">
            <a href="#" className="hover:text-white"><Facebook size={20} /></a>
            <a href="#" className="hover:text-white"><Twitter size={20} /></a>
            <a href="#" className="hover:text-white"><Instagram size={20} /></a>
            <a href="#" className="hover:text-white"><Linkedin size={20} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Services</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold text-white mb-3">Support</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">FAQs</a></li>
            <li><a href="#" className="hover:text-white">Help Center</a></li>
            <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold text-white mb-3">Newsletter</h3>
          <p className="text-gray-400 mb-3 ">
            Subscribe to get the latest offers and updates.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-l-md focus:outline-none "
            />
            <button className="bg-orange-600 text-white px-4 rounded-r-md hover:bg-orange-700 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="text-center text-stone-500 text-sm mt-8">
        &copy; {new Date().getFullYear()} Yummy. All rights reserved.
      </div>
    </footer>
  );
}
