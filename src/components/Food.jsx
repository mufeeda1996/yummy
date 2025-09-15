import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Food = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    const fetchMeal = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        setMeal(response.data.meals[0]); // ✅ take the first meal object
      } catch (error) {
        console.log(error);
      }
    };
    fetchMeal();
  }, [id]);

  if (!meal) return <div className="p-6">Loading...</div>; // ✅ guard for null state

  return (
    <div className="mx-auto container p-6 ">
        <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={meal.strMealThumb}
      alt={meal.strMeal} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
    {meal.strMeal}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p> <strong>Category:</strong> {meal.strCategory}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
      {/* <h1 className="text-3xl font-bold mb-4">{meal.strMeal}</h1>
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-64 h-64 object-cover rounded mb-4"
      />
      <p className="text-lg text-gray-700 mb-2">
        <strong>Category:</strong> {meal.strCategory}
      </p>
      <p className="text-lg text-gray-700 mb-2">
        <strong>Area:</strong> {meal.strArea}
      </p>
      <p>$120</p>
      <button className='btn-circle bg-orange-600 text-white px-6 py-4 flex items-center gap-2 hover:bg-orange-700 transition'>Add to cart</button>
      <p className="text-gray-600 whitespace-pre-line">{meal.strInstructions}</p>
      </div> */}
    </div>
  );
};

export default Food;
