import React from 'react';
import Navbar from '../src/components/navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';

function App() {
  return (
  <BrowserRouter>
    <Navbar />
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
    </Routes>
    <Footer/>

  </BrowserRouter>
  )
}

export default App;
