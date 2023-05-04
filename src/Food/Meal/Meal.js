import React from "react";

const Meal = (props) => {
  const { strMeal, strMealThumb } = props.meal;
  return (
    <div className="">
      {/* <img
        className="h-auto max-w-lg transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0" 
        src={strMealThumb}
      ></img> */}
      <img
        className="h-sm max-w-sm transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
        src={strMealThumb}
        alt=""
        srcset=""
      />

      <h2>{strMeal}</h2>
    </div>
  );
};

export default Meal;
