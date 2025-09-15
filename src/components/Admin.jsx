import React from 'react';

const Admin = () => {
  return (
    <div className="min-h-screen bg-orange-50 flex flex-col items-center justify-center px-4">
      {/* Login / Signup Card */}
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg mb-12">
        <h1 className="text-3xl font-bold text-center text-orange-600 mb-6">Yummy Admin</h1>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"
            />
          </div>
          <button className="w-full bg-orange-600 text-white py-2 rounded-md font-semibold hover:bg-orange-700 transition">
            Log In
          </button>
        </form>
      </div>

      {/* Steps Section */}
      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-orange-600 text-center mb-8">
          Get your restaurant delivery-ready in 24hrs!
        </h2>

        <div className="grid sm:grid-cols-3 gap-6 text-center">
          {/* Step 1 */}
          <div className="flex flex-col items-center">
            <div className="bg-orange-100 text-orange-600 rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mb-4">
              1
            </div>
            <h3 className="font-semibold mb-2">Install the Yummy  Owner App</h3>
            <p className="text-gray-600 text-sm">
              Download the app from Play Store or App Store to get started.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center">
            <div className="bg-orange-100 text-orange-600 rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mb-4">
              2
            </div>
            <h3 className="font-semibold mb-2">Login/Register using your phone number</h3>
            <p className="text-gray-600 text-sm">
              Use your restaurant phone number to register or login quickly.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center">
            <div className="bg-orange-100 text-orange-600 rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mb-4">
              3
            </div>
            <h3 className="font-semibold mb-2">Enter restaurant details</h3>
            <p className="text-gray-600 text-sm">
              Add your restaurant info and upload a background image for your profile.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
