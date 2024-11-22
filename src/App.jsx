import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './Components/Navigation/Navbar'; 
import Home from './Components/Navigation/Home';
import Carousel from './Components/Carousel/Carousel'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AppContent = () => {
  return (
    <>
      <Navbar /> 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Carousel' element={<Carousel/>}/>
        <Route path='/registration' element={<div>Registration Page</div>} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
