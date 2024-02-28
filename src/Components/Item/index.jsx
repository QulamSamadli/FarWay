import React from "react";

const Item = ({ item, quantity, packed }) => {
  return (
    <li>
      <span className={packed ? "line-through" : ""}>
        
        {quantity} {item}
      </span>
      <button>❌</button>
    </li>
  );
};

export default Item;
