// eslint-disable-next-line no-unused-vars
import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css';
const Header = () => {
  return (
    <nav className='headerContainer'>
      <img src={logo} alt="" />
        <div className='headerLeftItem'>
        <a href="/order">Order</a>
        <a href="/order review">Order Review</a>
        <a href="/manage inventory">Manage Inventory</a>
        <a href="/login">Login</a>
      </div>
    </nav>
  );
};

export default Header;