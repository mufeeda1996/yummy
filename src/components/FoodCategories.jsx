import axios from "axios";
import React, { useState, useEffect } from "react";
import MealsList from "./MealsList";
import { useNavigate } from "react-router-dom";


const FoodCategories = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const navigate = useNavigate();

  // fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        setCategories(response.data.categories);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div className="mx-auto container">
      <h1 className="text-3xl font-bold mb-8 text-left ml-4">
        Order best food options
      </h1>

      {/* Categories */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-6 mb-10">
        {categories.map((item) => (
          <div
            key={item.idCategory}
            className="flex flex-col items-center cursor-pointer p-4 bg-white shadow rounded-lg hover:shadow-lg transition"
            onClick={() => setSelectedCategory(item.strCategory)}
          >
            <img
              src={item.strCategoryThumb}
              alt={item.strCategory}
              className="w-20 h-20 object-cover rounded-full border border-gray-300 mb-3"
            />
            <div className="text-sm font-medium text-gray-800 text-center" onClick={() => navigate(`/meals/${item.strCategory}`)}>
              {item.strCategory}
            </div>
          </div>
        ))}
      </div>

      {/* Meals */}
      {selectedCategory && <MealsList category={selectedCategory} />}
    </div>
  );
};

export default FoodCategories;
