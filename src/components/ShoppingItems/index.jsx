import React from "react";

function ShoppingItems({name, price, handleClick}){
  return(
    <div
      onClick={handleClick}
      className="item">
        {name}- ${price}
    </div>
  )
}


export default ShoppingItems