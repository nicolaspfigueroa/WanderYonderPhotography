import React from 'react';
import './styles.css';

export default function Photo({ photo }) {
  return (
    <div className = "image-container">
    <img src = {photo.url}></img>
    <div>{photo.title}</div>
    </div>
  )
}
