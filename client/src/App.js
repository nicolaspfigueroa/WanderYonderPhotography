import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Photos from './pages/Photos';


function App() {

  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" element = {<Home />} />
            <Route path="/about" element = {<About />} />
            <Route path="/photos" element = {<Photos />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
