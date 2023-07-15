import React from 'react';
import logo from '../assets/image/logo-navbar.png';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className='bg-[#FFFFFF] flex justify-between p-20 m-auto font-bold'>
      <Link to='/'>
        <img src={logo} className='w-60' />
      </Link>
        <Link to='/about' className='self-center' >
          About
        </Link>
        <Link to='/menu' className='self-center'>
          Menu
        </Link>
        <Link to='/reservations' className='self-center'>
          Reservations
        </Link>
        <Link to='/orderonline' className='self-center'>
          Order Online
        </Link>   
    </nav>
  );
}
