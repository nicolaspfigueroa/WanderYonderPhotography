import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './styles.css';
import { imageService } from '../../services/imageService';

export default function PhotoDetail({ photos }) {
  const { id } = useParams();
  const [image, setImage] = useState([]);

  useEffect(() => {
    getPhoto();
  }, []);

  const getPhoto = async () => {
    const { res, error } = await imageService.getImage();

    if (!error) {
      setImage(res);
    }
    else {
      console.log(error);
    }
  }

  // const photo = photos.filter(image => image.id === id);
  // console.log(photo);
  console.log(image);

  return (
    <>
    <div className = "container">
      <img className = "detail" src = {image[0].url} alt = ""></img>
      <div>{image[0].title}</div>
    </div>
    </>
  )
}
