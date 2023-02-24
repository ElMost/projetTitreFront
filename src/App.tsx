import React from 'react';
import Navbar from '../src/components/navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
    <Navbar />
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
    </Routes>

  </BrowserRouter>
  )
}

export default App;
