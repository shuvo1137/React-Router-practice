import React from "react";
import { useParams } from "react-router-dom";

const Country = () => {
  const params = useParams();
  return <div>your country is {params.countryName}</div>;
};

export default Country;
