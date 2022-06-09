import React from 'react'
import PhotoGrid from '../PhotoGrid';
import UploadForm from '../UploadForm';
import Photo from '../Photo';

export default function Admin( {isAuthenticated, getAllPhotos, photos} ) {
  if (isAuthenticated) {
    return (
      <div className = "container">
        <UploadForm getAllPhotos = {getAllPhotos}></UploadForm>
        <div className= "photo-grid-container">
          {photos.map((photo => {
            return <div>
              <Photo key = {photo._id} photo = {photo}/>
              <button>Delete</button>
              </div>;
            }))
          }
        </div>
      </div>
    )
  }
  else {
    return (
      <div>Access Denied</div>
    )
  }
}
