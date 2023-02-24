import React from 'react';
import logo from '../../assets/logo.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [navbar, setNavbar] = React.useState(false);
  return (
    <nav className="top-0 w-full sticky bg-[#e8e4d9] shadow  z-10">
      <div className="w-full mx-auto lg:items-center lg:flex ">
        <div>
          <div className="flex  items-center justify-between py-1 lg:py-5">
            <a href="/">
              <img alt="Logo Santélys" width={90} height={90} src={logo} />{' '}
            </a>

            <NavLink
              className="  lg:ml-1 lg:mt-5 lg:w-48   lg:h-9    text-white text-center bg-red-500 rounded-lg shadow z-99 p-1 px-5"
              to="devis"
            >
              Devis gratuit
            </NavLink>

            <div className="lg:hidden">
              <button
                className="p-2 text-gray-700 rounded-lg outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
                aria-label="toggle menu"
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-[#6D625C]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-[#6D625C]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div
        //   className={`pb-3 mt-0 lg:block lg:pb-0 lg:mt-0 ${
        //     navbar ? 'block' : 'hidden'
        //   }`}
        >
          <div
            className={` w-full lg:flex lg:items-center lg:w-auto ${
              navbar ? 'block' : 'hidden'
            }`}
          >
            <ul
              className="  w-full lg:flex items-center justify-between text-base text-white 
            pt-4 lg:pt-4
            "
            >
              <li className="w-full">
                <NavLink
                  className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-[#6D625C] text-[#684f0b] "
                  to="/a_propos"
                  // activeClassName="border-[#6D625C]"
                >
                  Santélys
                </NavLink>
              </li>
              <li className="w-full">
                <NavLink
                  className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-[#6D625C] text-[#684f0b] "
                  to="/services"
                  // activeClassName="border-[#6D625C]"
                >
                  Services
                </NavLink>
              </li>
              <li className="w-full">
                <NavLink
                  className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-[#6D625C] text-[#684f0b] "
                  to="/engagement"
                  // activeClassName="border-[#6D625C]"
                >
                  Engagement
                </NavLink>
              </li>
              <li className="w-full">
                <NavLink
                  className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-[#6D625C] text-[#684f0b] "
                  to="/postuler"
                  // activeClassName="border-[#6D625C]"
                >
                  Postuler
                </NavLink>
              </li>
              <li className="w-full">
                <NavLink
                  className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-[#6D625C] text-[#684f0b] "
                  to="/connexion"

                  // activeClassName="border-[#6D625C]"
                >
                  Connexion
                </NavLink>
              </li>
              <li className=" w-full">
                <NavLink
                  className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-[#6D625C] text-[#684f0b] "
                  to="/interface"
                  // activeClassName="border-[#6D625C]"
                >
                  Interface
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
