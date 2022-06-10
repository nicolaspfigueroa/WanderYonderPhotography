import React from 'react'
import PhotoGrid from '../PhotoGrid';

export default function Cart( { cart } ) {
  if (!cart) {
    return (
      <div>Cart is empty!</div>
    )
  }
  else {
    return (
      <div className="cart-container">
        <PhotoGrid photos = { cart }></PhotoGrid>
      </div>
    )
  }
}
