import React from 'react'
import UploadForm from '../UploadForm';
import Photo from '../Photo';
import { imageService } from '../../services/imageService';
import { useEffect, useState } from 'react';

export default function Admin( {isAuthenticated, getAllPhotos, photos, handleDelete} ) {

  const [title, setTitle] = useState('');

  const submitHandler = async (e, id, title) => {
    e.preventDefault();
    console.log(e.target);
    console.log(id);
    //const { name, value } = e.target;
    await imageService.changeTitle(id, title);
    await getAllPhotos();
    setTitle('');
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
              <form onSubmit = {(e) => {
                submitHandler(e, photo._id, title)}}>
                <input 
                placeholder = "Change Title"
                type = "text"
                value = {title}
                onChange = {(e) => setTitle(e.target.value)}
                >
                </input>
                <button type = "submit">Submit New Title</button>
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
