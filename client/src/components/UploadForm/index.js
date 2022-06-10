import React from 'react'
import { useState } from 'react';
import ProgressBar from '../ProgressBar';
import { projectStorage } from '../../firebase/config';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { imageService } from '../../services/imageService';

const initialPhoto = {
  url: '',
  title: ''
}

export default function UploadForm( { getAllPhotos } ) {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [progress, setProgress] = useState(0);
  const [photo, setPhoto] = useState(initialPhoto);

  const types = ['image/png', 'image/jpg', 'image/jpeg'];

  const changeHandler = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('Please select an image file (png or jpeg)');
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPhoto((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // create reference
    const storageRef = ref(projectStorage, file.name);

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
        'state_changed',
        (snapshot) => {
            let percentage =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(percentage);
        },
        (err) => {
            setError(err);
        },
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then(async (url) => {
                console.log('calling service');
                photo.url = url;
                await imageService.createImage(photo);
                await getAllPhotos();
            });
        }
    );
    setPhoto(initialPhoto);
  }

  //create a function that runs on submit
  //will perform same function as useEffect on useStorage file
  //create progress in upload form, pass it as a prop into progress
  return (
    <form onSubmit = {submitHandler} >
      <input 
      type = "file" 
      onChange = {changeHandler} 
      />
      <input
          type="text"
          placeholder="title"
          name="title"
          value={photo.title}
          onChange={handleChange}
        />
      <div className = "output">
        { error && <div className = "error">{ error }</div> }
        { file && <div>{ file.name }</div> }
        { file && <ProgressBar  progress = {progress} />}
      </div>
      <button disabled={photo.title.length === 0 && true} type = "submit">Submit</button>
    </form>
  )
}
