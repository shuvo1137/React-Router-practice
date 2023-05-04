import React from "react";
import PricingOption from "../Pricing_option/PricingOption";

const Pricing = () => {
  const pricingOption = [
    { id: 0, name: "basic", price: 300 },
    { id: 1, name: "Standard", price: 500 },
    { id: 2, name: "Premium", price: 1000 },
  ];
  return (
    <div className="bg-indigo-200 p-4 mt-8">
      <h1 className="text-6xl ">Best Deal in the town</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo nisi
        nihil cum reiciendis, autem non dolores. In, dignissimos doloribus?
        Dicta nihil molestiae voluptate, quam architecto excepturi ea odit unde
        fuga?
      </p>
      <div className="grid md:grid-cols-3 gap-3 mt-8">
        {pricingOption.map((option) => (
          <PricingOption key={option.id} option={option}></PricingOption>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
