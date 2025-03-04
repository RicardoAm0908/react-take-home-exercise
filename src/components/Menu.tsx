import React from "react";
import MenuItem from "./MenuItem.";

const Menu = ({ setFilter }: any) => {
  return (
    <nav>
        <ul className="flex justify-around mb-4 border-b border-b-white">
            <MenuItem 
                value={'all'}
                textValue={'All'}
                setFilter={setFilter}
            />
            <MenuItem 
                value={'completed'}
                textValue={'Completed'}
                setFilter={setFilter}
            />
            <MenuItem 
                value={'pending'}
                textValue={'Pending'}
                setFilter={setFilter}
            />
        </ul>
    </nav>
  );
};

export default Menu;