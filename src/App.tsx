import React from 'react';
import Navbar from '../src/components/navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import About from './pages/about/About';
import Engagement from './pages/engagement/Engagement';
import Home from './pages/home/Home';

function App() {
  return (
  <BrowserRouter>
    <Navbar />
    <Routes>
       <Route path="/" element={<Home />} />
      {/* <Route path="devis" element={<Devis />} /> */}
      {/* <Route path="contact" element={<Contact />} /> */}
      {/* <Route path="postuler" element={<Postuler />} /> */}
      <Route path="a_propos" element={<About />} />
      <Route path="engagement" element={<Engagement />} />
      
    </Routes>
    <Footer/>

  </BrowserRouter>
  )
}

export default App;
