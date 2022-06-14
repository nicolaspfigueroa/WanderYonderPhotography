import React from 'react'
import { useState } from 'react';
import CartItem from '../CartItem';
import './styles.css';

export default function Cart( { cart, handleDeleteCart } ) {
  const [price, setPrice] = useState([]);

  const getTotal = () => {
    let total = 0;
    if (price.length === 0) {
      return '';
    }
    else {
      total = price.reduce((a,b) => {
        return a+b;
      })
    }
    return total;
  }

  if (cart.length === 0) {
    return (
      <div>Cart is empty!</div>
    )
  }
  else {
    return (
      <div className="cart-container">
        <div className = "cart-item-container">
        {cart.map((item) => {
          return <CartItem key = {item.res._id} item = {item} setPrice = {setPrice} handleDeleteCart = {handleDeleteCart}></CartItem>
          })
        }
        </div>
        <div className = "total">Total: ${getTotal()}</div>
      </div>
    )
  }
}
