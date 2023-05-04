import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div>
      <h1 className="text-3xl">
        welcome to {countries.length} countries the world
      </h1>
      {countries.map((country) => {
        return (
          <h3>
            <Link to={`/countries/${country.name.common}`}>
              {country?.population}: {country.name.common}
            </Link>
          </h3>
        );
      })}
    </div>
  );
};

export default Countries;
