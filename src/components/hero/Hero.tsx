import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { logout } from '../../services/auth/AuthApi';
import { removeItem } from '../../store/LocalStorage';
// import { logout } from '../../services/auth/auth/AuthApi';
// import { removeItem } from '../../services/auth/store/LocalStorage';
import { AuthContext } from '../context/Auth';

const Hero = () => {
  const navigate = useNavigate();
  const Auth = React.useContext(AuthContext);

  const SignOut = async () => {
    try {
      await logout();
      Auth.setIsAuthenticated(false);
      removeItem('token');
      Auth.setUser({
        email: '',
        nom: '',
        prenom: '',
      });
      navigate('/connexion');
    } catch (response) {
      console.log(response);
    }
  };

  const { user } = React.useContext(AuthContext);

  return (
    <div
      className=" px-5 col-span-5
        // bg-gradient-to-tr 
        background: linear-gradient(to bottom, #fa9966, #fD5e62);

         rounded-md flex items-center mb-2"
    >
      <div className=" w-full">
        <h1 className="text-[#6D625C] text-3xl p-0 m-0">
          Salut {user.nom} {user.prenom}
        </h1>

        {/* <p className="text-[#6D625C] mt-4 capitalize font-thin tracking-wider leading-7"></p> */}

        <div className="flex">
          <div>
            <a
              href="/admin"
              className="uppercase inline-block mt-2 text-sm bg-green-500 py-2 px-4 rounded font-semibold hover:bg-indigo-100 mr-10"
            >
              Admin
            </a>
            <NavLink to="/profile">
              <div className="uppercase inline-block mt-2 cursor-pointer text-sm bg-white py-2 px-4 rounded font-semibold hover:bg-indigo-100 backdrop: mr-10 ">
                Profile
              </div>
            </NavLink>
            <button
              onClick={() => SignOut()}
              className="uppercase inline-block mt-2 text-sm bg-red-500 text-white py-2 px-4 rounded font-semibold hover:cursor-pointer mr-10"
            >
              Déconnexion
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
