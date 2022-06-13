import React from 'react'
import CartItem from '../CartItem';
import './styles.css';

export default function Cart( { cart } ) {
  console.log(cart);
  if (cart.length === 0) {
    return (
      <div>Cart is empty!</div>
    )
  }
  else {
    return (
      <div className="cart-container">
        {cart.map((item) => {
          return <CartItem key = {item.res._id} item = {item}></CartItem>
          })
        }
      </div>
    )
  }
}
