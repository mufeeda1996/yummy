import axios from "axios";
import React, { useEffect, useRef,useState } from "react";
// import data from '../data/db.json'

const images = [
  "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp",
  "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp",
  "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp",
  "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp",
  "https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp",
  "https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp",
  "https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp",
];



export default function AutoSlider() {
  const carouselRef = useRef(null);

  const [restaurantName,setRestaurentName]=useState([])
  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get('/public/db.json') // ensure correct path
        setRestaurentName(response.data)
        console.log("Fetched restaurants:", response.data.name)
      } catch (error) {
        console.error("Error fetching restaurants:", error)
      }
    }
    fetchRestaurants()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const { scrollLeft, clientWidth, scrollWidth } = carouselRef.current;

        if (scrollLeft + clientWidth >= scrollWidth) {
          carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          carouselRef.current.scrollBy({ left: clientWidth, behavior: "smooth" });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container  mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-left ml-4">Trending restaurents</h2>

      <div
        ref={carouselRef}
        className="carousel carousel-center bg-[#e3780e] rounded-box w-full space-x-4 p-4 overflow-x-auto scroll-smooth"
      >
        {restaurantName.map((item, index) => (
          <div key={index} className="carousel-item flex flex-col">
            <img
              src={item.image}
              alt={`slide-${index}`}
              className="rounded-box w-64 h-40 object-cover"
            />
            <div className="text-xl font-semibold text-[#ffffff] text-center">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
