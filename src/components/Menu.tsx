import React from "react";
import MenuItem from "./MenuItem.";

const Menu = ({ setFilter, setFilterName }: any) => {
  return (
    <nav>
        <ul className="flex justify-around mb-4 border-b border-b-white">
            <MenuItem 
                value={'all'}
                textValue={'All'}
                setFilter={setFilter}
                setFilterName={setFilterName}
                />
            <MenuItem 
                value={'completed'}
                textValue={'Completed'}
                setFilter={setFilter}
                setFilterName={setFilterName}
                />
            <MenuItem 
                value={'pending'}
                textValue={'Pending'}
                setFilter={setFilter}
                setFilterName={setFilterName}
            />
        </ul>
    </nav>
  );
};

export default Menu;