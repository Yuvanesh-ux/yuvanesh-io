import './App.css';
import {Home} from './components/Home'
import {Experience} from './components/Experience'
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';


function App() {

  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/experience" element={<Experience/>}/>
        </Routes>
      </Router>
    );
}

export default App;
