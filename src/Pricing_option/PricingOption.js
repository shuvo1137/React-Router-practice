import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const PricingOption = (props) => {
  const { name, price } = props.option;
  return (
    <div className="bg-white p-4 rounded-lg">
      <h1 className="bg-indigo-200 py-4 rounded-2xl text-xl font-bold">
        {name}
      </h1>
      <span className="text-5xl font-extrabold py-4">{price}</span>
      <span>/month</span>
      <h3 className="text-2xl text-left">Benefits</h3>
      <p className="flex items-center">
        <ArrowRightIcon className="w-4 h-4 mr-4"></ArrowRightIcon> Awesome
      </p>

      <button className="flex justify-center items-center text-white w-full bg-green-600 p-2 rounded-lg mt-4">
        Buy here
        <ArrowRightIcon className="w-4 h-4 "></ArrowRightIcon>
      </button>
    </div>
  );
};

export default PricingOption;
