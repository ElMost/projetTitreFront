import React, { useState } from 'react';
import Navbar from './components/navbar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import About from './pages/about/About';
import Engagement from './pages/engagement/Engagement';
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import Devis from './pages/devis/Devis';
import Postuler from './pages/postuler/Postuler';
import Login from './components/authentification/login/Login';
import { hasAuthenticated } from './services/auth/AuthApi';
import { AuthContext } from './components/context/Auth';
import Dashbord from './pages/dashboard/Dashbord';
import FormulaireAuthentification from './pages/authentification/FormulaireAuthentification';
import NosServices from './pages/nosServices/NosServices';
import NavBar from './components/navbar/NavBar';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(hasAuthenticated());
  const [user, setUser] = useState({
    email: '',
    nom: '',
    prenom: '',
  });

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        setUser,
        user,
      }}
    >
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="devis" element={<Devis />} />
          <Route path="contact" element={<Contact />} />
          <Route path="services" element={<NosServices />} />
          <Route path="postuler" element={<Postuler />} />
          <Route path="a_propos" element={<About />} />
          <Route path="engagement" element={<Engagement />} />
          <Route path="connexion" element={<Login />} />
          <Route path="dashboard" element={<Dashbord />} />

          {/* {isAuthenticated ? (
            <Route path="dashbord" element={<Dashbord />} />
          ) : (
            <Route path="connexion" element={<FormulaireAuthentification />} />
          )} */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
