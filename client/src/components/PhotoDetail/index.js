import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './styles.css';
import { imageService } from '../../services/imageService';

export default function PhotoDetail() {
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


  return (
    <>
    <div className = "container">
      <img className = "detail" src = {image.url} alt = ""></img>
      <div>{image.title}</div>
    </div>
    </>
  )
}
