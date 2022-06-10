import React from 'react'
import UploadForm from '../UploadForm';
import Photo from '../Photo';

export default function Admin( {isAuthenticated, getAllPhotos, photos, handleDelete} ) {
  if (isAuthenticated) {
    return (
      <div className = "container">
        <UploadForm getAllPhotos = {getAllPhotos}></UploadForm>
        <div className= "photo-grid-container">
          {photos.map((photo => {
            return <div key = {photo._id}>
              <Photo key = {photo._id} photo = {photo}/>
              <button onClick={() => (handleDelete(photo._id))}>Delete</button>
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
