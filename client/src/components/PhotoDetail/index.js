import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import './styles.css';

export default function PhotoDetail({ photos, getAllPhotos }) {
  const { id } = useParams();

  // useEffect(() => {
  //   getAllPhotos();
  //   console.log('used');
  // }, []);

  console.log(photos);

  

  const photo = photos.filter(image => image.id === id);
  console.log(photo);

  return (
    <>
    <div className = "container">
      <img className = "detail" src = {photo[0].url} alt = ""></img>
      <div>{photo[0].title}</div>
    </div>
    </>
  )
}
