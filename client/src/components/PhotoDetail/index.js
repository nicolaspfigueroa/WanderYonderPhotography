import React from 'react'
import { useParams } from 'react-router-dom';
import './styles.css';

export default function PhotoDetail({ photos }) {
  const { title } = useParams();
  console.log(photos);
  console.log(title);

  const photo = photos.filter(image => image.title === title);
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
