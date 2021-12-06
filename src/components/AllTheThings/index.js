import React from 'react';

function AllTheThings({things}) {
 console.log("thingss", things)
  return (
    <div className="AllTheThings">
       <h2>Put these in your cart!</h2>
       {things}
    </div>
  );
}

export default AllTheThings;
