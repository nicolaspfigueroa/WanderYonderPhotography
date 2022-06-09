import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Photos from './pages/Photos';
import { imageService } from './services/imageService';

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
            <Route path="/photos" element = {<Photos getAllPhotos = {getAllPhotos}/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
