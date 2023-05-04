import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MealDetail = () => {
  const [meal, setMeal] = useState([]);
  const params = useParams();
  // const[idMeal,setIdmeal]=useState();
  useEffect(() => {
    fetch(`www.themealdb.com/api/json/v1/1/lookup.php?i=52772`)
      .then((res) => res.json())
      .then((data) => setMeal(data.meals));
  }, [params]);
  return (
    <div>
      meal id {params.idMeal}
      {console.log(meal)}
    </div>
  );
};

export default MealDetail;
