import { useState, useEffect} from 'react';
import { projectStorage } from '../firebase/config';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // create reference
    console.log(projectStorage);
    const storageRef = ref(projectStorage, file.name);
    console.log(storageRef);

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
            getDownloadURL(uploadTask.snapshot.ref).then((url) =>
                setUrl(url)
            );
        }
    );
  }, [file]);

  // useEffect(() => {
  //   //references
  //   const storageRef = projectStorage.ref(file.name);

  //   storageRef.put(file).on('state_changed', (snap) => {
  //     let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
  //     setProgress(percentage);
  //   }, (err) => {
  //     setError(err);
  //   }, async () => {
  //     const url = await storageRef.getDownloadURL();
  //     setUrl(url);
  //   });
  // }, [file]);

  return { progress, url, error };
}

export default useStorage;