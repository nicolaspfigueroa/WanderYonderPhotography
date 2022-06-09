import React from 'react'
import { useParams } from 'react-router-dom';

export default function PhotoDetail({ photos }) {
  const { title } = useParams();

  const photo = photos.filter(image => image.title === title);

  return (
    <>
    <div className = "container">
      <img src = {photo[0].url}></img>
      <div>{photo[0].title}</div>
    </div>
    </>
  )
}
