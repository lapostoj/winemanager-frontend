import React from 'react';
import './header.css';
import logo from './grapes.svg';

export default function Header() {
  return (
    <header>
      <img src={logo} height="50" alt="logo-raisins" />
      <h1 className="title">Inventaire de cave</h1>
    </header>
  );
}
