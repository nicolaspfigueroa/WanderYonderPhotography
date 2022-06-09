import { useState, useEffect} from 'react';
import { projectStorage, projectFirestore } from '../firebase/config';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
//import { collection, addDoc } from "firebase/firestore";
//import { doc, setDoc } from "firebase/firestore";
import { imageService } from '../services/imageService';

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // create reference
    console.log(projectStorage);
    const storageRef = ref(projectStorage, file.name);
    console.log(storageRef);
    //const collectionRef = projectFirestore.collection('images');

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
                setUrl(url)
                console.log('calling service');
                await imageService.createImage(url);
            });
        }
    );
  }, []);

  return { progress, url, error };
}

export default useStorage;