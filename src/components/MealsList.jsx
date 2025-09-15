import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/ProductSlice"; 


const MealsList = () => {
  const { category } = useParams();
  const [meals, setMeals] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // some random restaurant names
  const restaurantNames = [
    "Spice Garden",
    "Golden Spoon",
    "Urban Tandoor",
    "Foodie Haven",
    "The Hungry Chef",
    "Ocean Breeze Diner",
    "Curry Corner",
    "Taste & Twist",
    "Royal Feast",
    "Street Bites",
  ];

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
        );

        // attach random restaurant name to each meal
        const mealsWithRestaurant = response.data.meals.map((meal) => ({
          ...meal,
          restaurant:
            restaurantNames[Math.floor(Math.random() * restaurantNames.length)],
        }));

        setMeals(mealsWithRestaurant);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMeals();
  }, [category]);

  return (
    <div className="mx-auto container bg-orange-50 mb-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
  {meals.map((meal) => (
    <div
      key={meal.idMeal}
      className="card bg-base-100 shadow-sm hover:shadow-md transition cursor-pointer"
      onClick={() => navigate(`/meal/${meal.idMeal}`)}
    >
      <figure>
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="h-48 w-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {meal.strMeal}
          <div className="badge badge-secondary">{meal.restaurant}</div>
        </h2>
        <p className="text-sm text-gray-600">
          Delicious {category} dish served fresh.
        </p>
        <div className="card-actions justify-between items-center mt-2">
          <span className="text-orange-600 font-semibold">$120</span>
          <button
            className="btn btn-xs bg-orange-500 text-white rounded-full hover:bg-orange-600 transition"
            onClick={(e) => {
              e.stopPropagation(); // prevent card navigation
              console.log("Added to cart:", meal.strMeal);
              dispatch(addToCart(meal));
            }} 
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  ))}
</div>

      {/* <h2 className="text-2xl font-semibold mb-6 ml-4">{category} Dishes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {meals.map((meal) => (
      <div className="card bg-base-100 w-80 shadow-sm">
  <figure>
    <img
      src={meal.strMealThumb}
      alt={meal.strMeal} onClick={() => navigate(`/meal/${meal.idMeal}`)}/>
  </figure>
  <div className="card-body">
    <h2 className="card-title" onClick={() => navigate(`/meal/${meal.idMeal}`)}>
    {meal.strMeal}
      <div className="badge badge-secondary">{meal.restaurant}</div>
    </h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>))}</div> */}
      {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {meals.map((meal) => (
          <div
            key={meal.idMeal}
            className="flex flex-col items-center bg-white p-3 rounded-lg shadow hover:shadow-lg transition"
          >
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-24 h-24 object-cover rounded-lg mb-3"
              
            />

           
            <div
              className="text-sm text-gray-700 font-medium text-center cursor-pointer"
              onClick={() => navigate(`/meal/${meal.idMeal}`)}
            >
              {meal.strMeal}
            </div>

            
            <p className="text-xs text-gray-500 italic mt-1">
              {meal.restaurant}
            </p>

           
            <p className="text-sm font-semibold mt-2">$120</p>
            <button className="btn-circle bg-orange-600 text-white px-6 py-2 rounded-full mt-2 hover:bg-orange-700 transition">
              Add to cart
            </button>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default MealsList;
