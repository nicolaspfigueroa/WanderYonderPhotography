import React from 'react'

export default function Photo({ photo }) {
  return (
    <>
    <img src = {photo.url}></img>
    <div>{photo.title}</div>
    </>
  )
}
