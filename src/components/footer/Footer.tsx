import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <footer className=" bottom-0 fixed  overflow-hidden  w-full    bg-[#E8E4D9] rounded-lg shadow md:px-6 md:py-3  mt-15">
      <div className="flex sm:items-center justify-between">
        <ul className=" items-center mb-6 text-lg text-[#6D625C] justify-center sm:mb-0 ">
          <li className="hover:text-xl lg:hover:text-2xl">
            {' '}
            <NavLink to="contact ">Nous contacter </NavLink>
          </li>

          <li className="hover:text-xl lg:hover:text-2xl">
            <NavLink to="postuler">postuler</NavLink>
          </li>
        </ul>
        <a href="/">
          <img alt="Logo Santélys" width={90} height={90} src={logo} />{' '}
        </a>
      </div>
      <p className="text-[#6D625C]  flex text-sm justify-center items-center w-full">
        {' '}
        © 2021 Santélys. Tous droits réservés.
      </p>
    </footer>
  );
};

export default Footer;
