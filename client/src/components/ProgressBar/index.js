import React, { useEffect } from 'react';
//import useStorage from '../../hooks/useStorage';
import './styles.css';

export default function ProgressBar({  progress,  }) {
  console.log(progress);

  return (
    <div className = "progress-bar" style = {{width: progress + '%'}}></div>
  )
}
