import React from 'react'
import Photo from '../Photo';

export default function AdminElement({handleDelete, submitHandler, setTitle, title, photo}) {
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
