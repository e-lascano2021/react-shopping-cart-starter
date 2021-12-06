// import useState
import React, { useState } from 'react';
import './styles.css';
import AllTheThings from './components/AllTheThings';
import MyShoppingCart from './components/MyShoppingCart';
import Form from './components/Form';
import productsArr from './products';
import ShoppingItems from './components/ShoppingItems';

export default function App() {
  const [products, setProducts] = useState(productsArr);
  const [cart, setCart] = useState([]);

  const allThings = productsArr.map((element, index) => {
    return(
      <ShoppingItems
        name={element.name}
        price={element.price}
        key={index}
        handleClick={()=>addToCart(element)}
      />
    )
  })


  const myThings = cart.map((element, index) => {
    return(
      <ShoppingItems
        name={element.name}
        price={element.price}
        key={index}
        handleClick={()=>removeFromCart(index)}
      />
    )
  })
  
  function addToCart(product){
    return (
      setCart([...cart, product])
      )
    }
  
    function removeFromCart(index){
      let newCart = cart.filter((item, itemIdx) => {
        return index !== itemIdx
      })
      setCart(newCart)
    }

    
  return (
    <div className="App">
      <h1>Big Time Shopping</h1>
      <Form />
      <div className="products">
        <AllTheThings things={allThings}/>
        <MyShoppingCart myThings={myThings}/>
      </div>
    </div>
  );
}
