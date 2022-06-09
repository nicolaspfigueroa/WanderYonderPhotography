import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { imageService } from './services/imageService';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Photos from './pages/Photos';
import UploadForm from './components/UploadForm';
import PhotoDetail from './components/PhotoDetail';


function App() {
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
    <Router>
      <div className="App">
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" element = {<Home />} />
            <Route path="/about" element = {<About />} />
            <Route path="/photos" element = {<Photos photos = {photos}/>} />
            <Route path="/admin" element = {<UploadForm />} />
            <Route path = "/photos/:title" element = {<PhotoDetail photos = {photos}/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
