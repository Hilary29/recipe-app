import React from 'react';
import { BrowserRouter as Router, Routes, Route } from'react-router-dom';
import LandingPage from './pages/LandingPage/';
import ConnexionPage from './pages/ConnexionPage';
import HomePage from './pages/HomePage';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/Connexion" element={<ConnexionPage />}></Route>
        <Route path='/HomePage' element={<HomePage />}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
