import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { imageService } from './services/imageService';
import auth from './utils/auth';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Photos from './pages/Photos';
import PhotoDetail from './components/PhotoDetail';
import Login from './components/Login';
import Logout from './components/Logout';
import Admin from './components/Admin';


function App() {
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(null);

  const initialState = auth.isAuthenticated();
  const [isAuthenticated, setIsAuthenticated] = useState(initialState);

  useEffect(() => {
    getAllPhotos();
    if (localStorage.getItem('accessToken')) {
      setIsAuthenticated(true);
    }
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

  const handleDelete = async (id) => {
    await imageService.deleteImage(id);
    setPhotos((prevValue) => {
      const allButId = prevValue.filter((photo) => photo._id !== id);
      return allButId;
    });
  };

  return (
    <Router>
      <div className="App">
        <NavBar isAuthenticated = { isAuthenticated }/>
        <div className="container">
          <Routes>
            <Route path="/" element = {<Home />} />
            <Route path="/about" element = {<About />} />
            <Route path="/photos" element = {<Photos photos = {photos}/>} />
            <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />}/>
            <Route path="/logout" element={<Logout setIsAuthenticated={setIsAuthenticated} />}/>
            <Route path="/admin" element = {<Admin isAuthenticated = { isAuthenticated } getAllPhotos = {getAllPhotos} photos = {photos} handleDelete = {handleDelete}/>} />
            <Route path = "/photos/:id" element = {<PhotoDetail photos = {photos} getAllPhotos = {getAllPhotos}/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
