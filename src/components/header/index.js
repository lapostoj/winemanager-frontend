import React from 'react';
import './header.css';
import logo from './grapes.svg';

const Header = () => (
  <header>
    <img src={logo} height="50" alt="logo-raisins" />
    <h1 className="title">Inventaire de cave</h1>
  </header>
);

export default Header;