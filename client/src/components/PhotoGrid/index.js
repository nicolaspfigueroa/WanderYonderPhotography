import React from 'react'
import Photo from '../Photo';

export default function PhotoGrid({ photos }) {

  return (
    <>
    <div>PhotoGrid</div>
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
