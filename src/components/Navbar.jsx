import React from 'react';
import logo from '../assets/image/logo-navbar.png';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function Navbar() {
  // const [show, setShow]
  return (
    <nav className='bg-[#FFFFFF] flex justify-between pl-20 m-auto font-bold sticky top-0'>
      <Link to='/'>
        <img src={logo} className='w-60'/>
      </Link>
      <div className='self-center w-10 md:hidden'>
        <GiHamburgerMenu className='self-center' />
      </div>
      <div className='flex w-full justify-around max-md:hidden'>
        <Link to='/about' className='self-center'>
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
      </div>
    </nav>
  );
}
