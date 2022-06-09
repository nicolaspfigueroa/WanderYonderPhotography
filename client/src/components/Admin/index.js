import React from 'react'
import UploadForm from '../UploadForm';

export default function Admin( {isAuthenticated, getAllPhotos} ) {
  if (isAuthenticated) {
    return (
      <div className = "container">
        <UploadForm getAllPhotos = {getAllPhotos}></UploadForm>
      </div>
    )
  }
  else {
    return (
      <div>Access Denied</div>
    )
  }
}
