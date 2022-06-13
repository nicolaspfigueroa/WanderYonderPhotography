import React from 'react'
import PhotoGrid from '../PhotoGrid';

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
        {cart[0].typePrint}
      </div>
    )
  }
}
