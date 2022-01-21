import React from 'react';
import sidebar from '../images/sidebar.png'

export default function Navbar() {
  return (
  <nav>
    <input className='menu-button' type="image" src={sidebar}></input>
  </nav>
  );
}
