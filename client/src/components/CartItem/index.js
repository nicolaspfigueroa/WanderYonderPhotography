import React from 'react'
import './styles.css';

export default function CartItem({ item }) {
  return (
    <div className = "item">
      <img className = "item-image" src = {item.res.url} alt = ""></img>
      <div className = "item-text">
        Title: {item.res.title}<br></br> Print: {item.typePrint} <br></br> Quanitity: {item.quantity}
      </div>
    </div>
  )
}
