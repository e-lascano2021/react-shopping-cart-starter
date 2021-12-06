import React from 'react';

function MyShoppingCart({myThings}) {
  return (
    <div className="MyShoppingCart">
      <h2>Your Cart!</h2>
      {myThings}
    </div>
  );
}

export default MyShoppingCart;
