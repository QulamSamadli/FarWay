import React from "react";

const Item = ({ item, quantity, packed = true }) => {
  return (
    <li>
      <span className={` line-through`}>
        {quantity} {item}
      </span>
      <button>❌</button>
    </li>
  );
};

export default Item;
