import React, { useContext, useState, useEffect } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import { BsBag } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Logo from '../img/logo.svg';
import axios from 'axios';

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  }, []);

   
  

  return (
    <header className={`${isActive ? 'bg-white py-4 shadow-md' : 'bg-none py-6'} fixed w-full z-10 transition-all`}>
      <div className='container mx-auto flex items-center justify-between h-full'>
        <Link to='/'>
          <div>
            <img className='w-[40px]' src={Logo} alt='' />
          </div>
        </Link>
        <div className='flex items-center'>
          <Link to='/about' className='text-sm font-medium text-white ml-0 bg-black px-3 py-1 rounded'>About Us</Link>
          {isLoggedIn ? (
            <Link to='/profile' className='text-sm font-medium text-white ml-4 bg-black px-3 py-1 rounded'>Your Profile</Link>
          ) : (
            <>
              <Link to='/signup' className='text-sm font-medium text-white ml-4 bg-black px-3 py-1 rounded'>Signup</Link>
            </>
          )}
          <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer flex relative max-w-[50px] ml-8'>
            <BsBag className='text-3xl -ml-0' />
            <div className='bg-red-500 absolute -right-0 -bottom-2 text-[12px] w-[18px] text-white rounded-full flex justify-center items-center'>{itemAmount}</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
