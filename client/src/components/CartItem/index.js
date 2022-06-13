import React from 'react'
import './styles.css';

export default function CartItem({ item }) {

  const getPrice = () => {
    let price = 0;
    if (item.typePrint === 'Photo Paper') {
      price = 40
    }
    if (item.typePrint === 'Canvas') {
      price = 80;
    }
    if (item.typePrint === 'Metal Board') {
      price = 100;
    }

    return price * parseInt(item.quantity)
  }

  return (
    <div className = "item">
      <img className = "item-image" src = {item.res.url} alt = ""></img>
      <div className = "item-text">
        Title: {item.res.title}<br></br> Print: {item.typePrint} <br></br> Quanitity: {item.quantity}
      </div>
      <div className = "price">Subtotal: ${getPrice()}</div>
    </div>
  )
}
