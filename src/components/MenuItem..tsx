import React from "react";


const MenuItem = ({ value, textValue, setFilter }: any) => {
  return (
    <li className="filter-button text-white font-bold px-2 cursor-pointer" onClick={() => setFilter(value)} id={value + "Button"}>{textValue}</li>
  );
};

export default MenuItem;