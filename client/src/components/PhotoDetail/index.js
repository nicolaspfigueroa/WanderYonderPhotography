import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './styles.css';
import { imageService } from '../../services/imageService';

export default function PhotoDetail( { cart, setCart } ) {
  const { id } = useParams();
  const [image, setImage] = useState([]);

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
    const { res, error } = await imageService.getImage(id);
    if (!error) {
      setCart((prevValue) => [...prevValue, res])
    }
  }

  return (
    <>
    <div className = "detail-container">
      <div className = "detail">
        <img className = "detail-image" src = {image.url} alt = ""></img>
        <div>{image.title}</div>
      </div>
      <div className = "cart-buttons">
        <button onClick = {handleCartSubmit}>Add to Cart</button>
      </div>
    </div>
    </>
  )
}
