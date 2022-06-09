import React from 'react';
import './styles.css';

export default function Photo({ photo }) {
  return (
    <>
    <img src = {photo.url}></img>
    <div>{photo.title}</div>
    </>
  )
}
