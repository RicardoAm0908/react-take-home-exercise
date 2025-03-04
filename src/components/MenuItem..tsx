import React from "react";


const MenuItem = ({ value, textValue, setFilter, setFilterName }: any) => {
  return (
    <li className="filter-button text-white font-bold px-6 cursor-pointer w-full text-center" onClick={() => {setFilter(value); setFilterName(textValue)}} id={value + "Button"}>{textValue}</li>
  );
};

export default MenuItem;