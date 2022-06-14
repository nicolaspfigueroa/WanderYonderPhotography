import React from 'react'
import { useEffect } from 'react';
import './styles.css';

export default function CartItem({ item, handleDeleteCart, cart}) {
  console.log(cart);
  return (
    <div className = "item">
      <img className = "item-image" src = {item.res.url} alt = ""></img>
      <div className = "item-text">
        Title: {item.res.title}<br></br> Print: {item.typePrint} <br></br> Quanitity: {item.quantity}
      </div>
      <div className = "price">Subtotal: ${item.price}</div>
      <div className = "deleteButton">
        <button onClick = {() => (handleDeleteCart(item.res._id))}>Delete</button>
      </div>
    </div>
  )
}
