import React from 'react';
import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <nav>
      <div>
        <div>
          <div>
            <a href="/">
              <img alt="Logo Santélys" width={90} height={90} src={logo} />{' '}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
