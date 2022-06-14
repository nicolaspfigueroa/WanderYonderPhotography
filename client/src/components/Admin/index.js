import React from 'react'
import UploadForm from '../UploadForm';
import AdminElement from '../AdminElement';
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
            return <AdminElement key = {photo._id} handleDelete = {handleDelete} submitHandler = {submitHandler} title = {title} setTitle = {setTitle} photo =  {photo}>
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
