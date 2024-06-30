import React, { useState, useEffect } from 'react';
import { IoIosCloseCircle } from "react-icons/io";
import { BiSolidUser } from "react-icons/bi";
import { LuMenu } from "react-icons/lu";
import './navbar.scss';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [navbarBg, setNavbarBg] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbarBg(true);
    } else {
      setNavbarBg(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);

  const Links = [
    { name: "Home", link: "/" },
    { name: "Activity", link: "/" },
    { name: "Pages", link: "/" },
    { name: "Blog", link: "/" },
    { name: "Agent", link: "/" },
    { name: "Contact", link: "/" },
  ];

  return (
    <div className={`navbar fixed w-full top-0 left-0 ${navbarBg ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className='container mx-auto max-w-7xl'>
        <div className='md:flex items-center justify-between md:px-10 px-7 md:max-h-20'>
          <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800'>
            <span className='text-sm text-indigo-600 mr-1 pt-2 w-[150px] h-[150px] flex items-center'>
              <img src="https://themes.ongoingthemes.com/gootravel/assets/img/logo/logo1.png" alt="logo" />
            </span>
          </div>

          <div onClick={() => setOpen(!open)} className='text-4xl text-[#FF6525] absolute right-8 top-14 cursor-pointer md:hidden'>
            {open ? <IoIosCloseCircle /> : <LuMenu />}
          </div>

          <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:bg-transparent md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-26 ' : 'top-[-490px]'}`}>
            {Links.map((link) => (
              <li key={link.name} className='md:ml-8 text-base md:my-0 my-7'>
                <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
              </li>
            ))}
            <button className='md:ml-8 text-xl text-gray-800 hover:text-gray-400 duration-500'><BiSolidUser /></button>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
