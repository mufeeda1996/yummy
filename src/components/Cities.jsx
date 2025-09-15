import React, { useState } from "react";

const citiesData = {
  "Dubai": [
    "Jumeirah", "Al Barsha", "Deira", "Bur Dubai", "Business Bay", "Downtown"
  ],
  "Abu Dhabi": [
    "Al Khalidiyah", "Mussafah", "Al Reem Island", "Khalifa City", "Yas Island"
  ],
  "Sharjah": [
    "Al Majaz", "Al Nahda", "Muwaileh", "Rollah", "Al Taawun"
  ],
  "Ajman": ["Al Rashidiya", "Ajman Corniche", "Al Jurf"],
  "Fujairah": ["Dibba", "Fujairah City", "Kalba"],
  "Ras Al Khaimah": ["Al Hamra", "Al Dhait", "Julphar"],
  "Umm Al-Quwain": ["Al Raas", "Old Town", "Al Dar Al Baida"],
  "Al Ain": ["Al Jimi", "Al Mutarad", "Al Hili", "Industrial Area"]
};

export default function CitiesWeServe() {
  const [activeCity, setActiveCity] = useState("Dubai");
 const image="https://www.talabat.com/assets/images/map_bg.png"
  return (
    <section className="bg-gray-50 py-12 px-6"  style={{
        backgroundImage:
          `url${(image)}`,
      }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Cities We Serve in UAE
        </h2>

        {/* Cities Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {Object.keys(citiesData).map((city) => (
            <button
              key={city}
              onClick={() => setActiveCity(city)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition 
                ${
                  activeCity === city
                    ? "bg-orange-500 text-white"
                    : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
                }`}
            >
              {city}
            </button>
          ))}
        </div>

        {/* Active City Areas */}
        <div className="bg-white shadow rounded-2xl p-6">
          <h3 className="text-xl font-semibold mb-4 text-orange-600">
            Areas in {activeCity}
          </h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-gray-700">
            {citiesData[activeCity].map((area, index) => (
              <li
                key={index}
                className="p-3 border border-gray-200 rounded-lg hover:bg-orange-50 transition cursor-pointer"
              >
                {area}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
