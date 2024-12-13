import React from 'react';
import logo from './img/Logo.svg';

function Nav() {
  return (
    <nav>
      <div className="nav-content">
        <img src={logo} alt="Little Lemon Logo" />
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#reservations">Reservations</a></li>
          <li><a href="#order">Order Online</a></li>
          <li><a href="#login">Login</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;