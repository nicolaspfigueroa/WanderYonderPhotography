import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './styles.css';
import { imageService } from '../../services/imageService';

export default function PhotoDetail( { cart, setCart } ) {
  const { id } = useParams();
  const [image, setImage] = useState([]);
  const [typePrint, setTypePrint] = useState('Photo Paper');
  const [quantity, setQuantity] = useState("1");

  useEffect(() => {
    getPhoto();
  }, []);

  const getPhoto = async () => {
    const { res, error } = await imageService.getImage(id);
    if (!error) {
      setImage(res);
    }
    else {
      console.log(error);
    }
  }

  const handleCartSubmit = async (e) => {
    e.preventDefault();
    let check = false;
    const { res, error } = await imageService.getImage(id);
    if (!error) {
      cart.forEach(item => {
        if (item.res._id === res._id && item.typePrint === typePrint) {
          check = true;
          item.quantity = (parseInt(item.quantity) + parseInt(quantity)) + '';
        }
      })
      if (!check) {
        const item = {res, typePrint, quantity};
        setCart((prevValue) => [...prevValue, item])
      }
    }
  }

  return (
    <>
    <div className = "detail-container">
      <div className = "detail">
        <img className = "detail-image" src = {image.url} alt = ""></img>
        <div className = "image-title">{image.title}</div>
      </div>
      <form className = "cart-buttons">
        <label>Select Print Type</label>
        <select
          value = {typePrint}
          onChange = {(e) => setTypePrint(e.target.value)}
        >
          <option value = "Photo Paper">Photo Paper - $45</option>
          <option value = "Canvas">Canvas - $80</option>
          <option value = "Metal Board">Metal Board - $100</option>
        </select>
        <label>Select Quantity</label>
        <select
        value = {quantity}
        onChange = {(e) => setQuantity(e.target.value)}
        >
        <option value = "1">1</option>
        <option value = "2">2</option>
        <option value = "3">3</option>
        <option value = "4">4</option>
        <option value = "5">5</option>
        </select>
        <button onClick = {handleCartSubmit}>Add to Cart</button>
      </form>
    </div>
    </>
  )
}
