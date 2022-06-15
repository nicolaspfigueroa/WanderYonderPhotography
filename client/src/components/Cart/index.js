import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../CartItem';
import './styles.css';
import apiService from '../../services/ApiService';

export default function Cart( { cart, handleDeleteCart } ) {

  const getTotal = () => {
    let total = 0;
    if (cart.length === 0) {
      return '';
    }
    else {
      total = cart.reduce((a,b) => {
        return a + b.price;
      }, 0)
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
          return <CartItem key = {item.res._id} item = {item} handleDeleteCart = {handleDeleteCart} cart = {cart}></CartItem>
          })
        }
        </div>
        <div className = "total">Total: ${getTotal()}</div>
        <div className = "checkout">
        <button onClick = {() => (apiService.createCheckoutSession(cart))}>CHECKOUT</button>
        </div>
      </div>
    )
  }
}
