import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      App
      <div className="container">
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/about" element = {<About />} />
          <Route path="/photos" element = {<Photos />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
