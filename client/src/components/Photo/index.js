import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

export default function Photo({ photo }) {
  return (
    <div className = "image-container">
      <Link to = {`/photos/${photo.title}`}>
        <img className = "photo" src = {photo.url} alt = ""></img>
      </Link>
      <div>{photo.title}</div>
    </div>
  )
}
