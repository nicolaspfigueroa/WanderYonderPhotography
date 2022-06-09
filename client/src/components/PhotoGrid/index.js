import React from 'react'
import Photo from '../Photo';
import './styles.css';

export default function PhotoGrid({ photos }) {

  return (
    <>
    <div className= "photo-grid-container">
      {photos.map((photo => {
        return <Photo
        key = {photo._id}
        photo = {photo}/>;
      }))
      }
    </div>
    </>
  )
}
