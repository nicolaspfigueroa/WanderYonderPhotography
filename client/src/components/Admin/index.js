import React from 'react'
import UploadForm from '../UploadForm';
import AdminElement from '../AdminElement';

export default function Admin( {isAuthenticated, getAllPhotos, photos, handleDelete} ) {

  if (isAuthenticated) {
    return (
      <div className = "container">
        <UploadForm getAllPhotos = {getAllPhotos}></UploadForm>
        <div className= "photo-grid-container">
          {photos.map((photo => {
            return <AdminElement key = {photo._id} handleDelete = {handleDelete} photo = {photo} getAllPhotos = {getAllPhotos}>
            </AdminElement>;
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
