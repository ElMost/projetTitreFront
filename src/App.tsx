import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import About from './pages/about/About';
import Engagement from './pages/engagement/Engagement';
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import Devis from './pages/devis/Devis';
import Postuler from './pages/postuler/Postuler';
// import { hasAuthenticated, isUserAdmin } from './services/auth/auth/AuthApi';
import { AuthContext } from './components/context/Auth';
import NosServices from './pages/nosServices/NosServices';
import NavBar from './components/navbar/Navbar';
import FormulaireAuthentification from './pages/authentification/FormulaireAuthentification';
import Dashboard from './pages/dashboard/Dashbord';
import Profile from './pages/profile/Profile';
import { Admin } from './pages/admin/Admin';
import { hasAuthenticated, isUserAdmin } from './services/auth/AuthApi';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(hasAuthenticated());
  const Auth = useContext(AuthContext);

  const [user, setUser] = useState({
    email: '',
    nom: '',
    prenom: '',
    isAdmin: false,
  });

  function updateIsAdmin(value: any) {
    setUser((prevState) => ({ ...prevState, isAdmin: value }));
  }

  useEffect(() => {
    if (isAuthenticated) {
      isUserAdmin().then((isAdmin) => {
        setUser((user) => ({ ...user, isAdmin: isAdmin }));
      });
    }
  }, [isAuthenticated]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        setUser: (user: any) => {
          setUser(user);
        },
        // setUser,
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
          <Route path="profile" element={<Profile />} />
          <Route path="admin" element={<Admin />} />
          {/* <Route path="connexion" element={<Login />} />
          <Route path="dashboard" element={<Dashbord />} /> */}

          {isAuthenticated ? (
            <Route
              path="/dashboard"
              element={<Dashboard updateIsAdmin={updateIsAdmin} />}
            />
          ) : (
            <Route path="connexion" element={<FormulaireAuthentification />} />
          )}
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
