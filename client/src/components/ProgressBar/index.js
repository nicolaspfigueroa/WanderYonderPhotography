import React, { useEffect } from 'react';
import useStorage from '../../hooks/useStorage';
import './styles.css';

export default function ProgressBar({ file, setFile }) {
  const { url, progress } = useStorage(file);
  console.log(progress, url);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile])

  return (
    <div className = "progress-bar" style = {{width: progress + '%'}}></div>
  )
}
