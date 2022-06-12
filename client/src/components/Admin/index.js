import React from 'react'
import UploadForm from '../UploadForm';
import Photo from '../Photo';
import { imageService } from '../../services/imageService';

export default function Admin( {isAuthenticated, getAllPhotos, photos, handleDelete} ) {

  const submitHandler = async (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    await imageService.changeTitle(value);
  }

  if (isAuthenticated) {
    return (
      <div className = "container">
        <UploadForm getAllPhotos = {getAllPhotos}></UploadForm>
        <div className= "photo-grid-container">
          {photos.map((photo => {
            return <div key = {photo._id}>
              <Photo key = {photo._id} photo = {photo}/>
              <button onClick={() => (handleDelete(photo._id))}>Delete</button>
              <form onSubmit = {submitHandler}>
                <input>
                </input>
                <button></button>
              </form>
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
