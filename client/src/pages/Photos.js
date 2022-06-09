import React from 'react'
import UploadForm from '../components/UploadForm';
import PhotoGrid from '../components/PhotoGrid';
import { useState, useEffect } from 'react';
import { imageService } from '../services/imageService';


export default function Photos( ) {
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllPhotos();
  }, []);

  const getAllPhotos = async () => {
    const { res, error } = await imageService.getImages();

    if (!error) {
      setPhotos(res);
    }
    else {
      setError(res);
    }
  }

  return (
    <>
    <div>Photos</div>
    <PhotoGrid photos = { photos }/>
    <UploadForm />
    </>
  )
}
