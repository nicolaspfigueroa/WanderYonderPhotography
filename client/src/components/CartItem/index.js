import React from 'react'
import { useEffect } from 'react';
import './styles.css';

export default function CartItem({ item, handleDeleteCart, cart}) {
  // useEffect(() => {
  //   let newPrice = getPrice()
  //   setPrice((prevValue) => {
  //     console.log(prevValue);
  //     return [...prevValue, newPrice]});
  // }, [])

  // const getPrice = () => {
  //   let thisPrice = 0;
  //   if (item.typePrint === 'Photo Paper') {
  //     thisPrice = 40
  //   }
  //   if (item.typePrint === 'Canvas') {
  //     thisPrice = 80;
  //   }
  //   if (item.typePrint === 'Metal Board') {
  //     thisPrice = 100;
  //   }

  //   return thisPrice * parseInt(item.quantity)
  // }

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
