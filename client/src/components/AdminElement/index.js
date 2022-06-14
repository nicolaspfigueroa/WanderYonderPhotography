import React from 'react'
import Photo from '../Photo';
import { useState } from 'react';
import { imageService } from '../../services/imageService';

export default function AdminElement({handleDelete, photo, getAllPhotos}) {
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


  return (
    <div>
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
    </form></div>
  )
}
