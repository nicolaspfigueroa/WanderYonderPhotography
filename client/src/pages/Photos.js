import React from 'react'
import UploadForm from '../components/UploadForm';
import PhotoGrid from '../components/PhotoGrid';



export default function Photos({ photos } ) {


  return (
    <>
    <PhotoGrid photos = { photos }/>
    </>
  )
}
