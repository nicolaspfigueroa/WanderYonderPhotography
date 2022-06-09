import React from 'react'
import { useParams } from 'react-router-dom';

export default function PhotoDetail({ photos }) {
  const { title } = useParams();

  return (
    <>
    <div>PhotoDetail</div>
    <div className = "container">
    </div>
    </>
  )
}
