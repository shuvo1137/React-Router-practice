import React, { useEffect, useState } from "react";
import Meal from "../Meal/Meal";

const Meals = () => {
  const [mealText, setMealText] = useState("");
  const [meal, setMeal] = useState([]);
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealText}
    `)
      .then((res) => res.json())
      .then((data) => setMeal(data.meals));
  }, [mealText]);
  const searchfood = (e) => {
    setMealText(e.target.value);
  };
  return (
    <div>
      <h1>whatever food you want</h1>
      <input onChange={searchfood} type="text" name="" id="" />
      <h3>{meal?.length}</h3>
      <div className="grid grid-cols-2 gap-2">
        {meal.map((singleMeal) => {
          return <Meal meal={singleMeal}></Meal>;
        })}
      </div>
    </div>
  );
};

export default Meals;
