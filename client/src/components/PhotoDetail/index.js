import React from 'react'
import { useParams } from 'react-router-dom';
import './styles.css';

export default function PhotoDetail({ photos }) {
  const { title } = useParams();

  const photo = photos.filter(image => image.title === title);

  return (
    <>
    <div className = "container">
      <img className = "detail" src = {photo[0].url}></img>
      <div>{photo[0].title}</div>
    </div>
    </>
  )
}
