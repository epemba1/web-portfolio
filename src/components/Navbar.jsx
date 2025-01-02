import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { BsPersonFill } from 'react-icons/bs';
import { Link } from 'react-scroll';



const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const navItems = [
    { label: 'Home', to: 'home' },
    { label: 'About', to: 'about' },
    { label: 'Skills', to: 'skills' },
    { label: 'Projects', to: 'project' },
    { label: 'Contact', to: 'contact' },
  ];

  const socialIcons = [
    { label: 'Linkedin', link: 'https://www.linkedin.com/in/eric-pemba-9a238b216', component: <FaLinkedin size={30} />, bgColor: 'bg-blue-600' },
    { label: 'Github', link: 'https://github.com/epemba1', component: <FaGithub size={30} />, bgColor: 'bg-[#333333]' },
    { label: 'Resume', link: 'https://drive.google.com/file/d/1lh4iLeZQ9GGdau41hV0H-TuiG_tDNuOi/view?usp=sharing', component: <BsPersonFill size={30} />, bgColor: 'bg-[#6fc2b0]' },
    { label: 'Twitter', link: '/', component: <FaTwitter size={30} />, bgColor: 'bg-[#1DA1F2]' },
  ];

  return (
    <div className='fixed w-full h-20 flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 '>
      <div>
      <p className='text-pink-600 text-2xl '>{'<Pemba Eric/>'}</p>
      </div>

      {/* Menu */}
      <ul className='hidden md:flex space-x-4 ml-auto'>
        {navItems.map((item, index) => (
          <li key={index}>
            <Link to={item.to} smooth={true} duration={500} className="hover:text-pink-600 hover:border-pink-600 transition border-b-2 border-slate-900">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile-menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        {navItems.map((item, index) => (
          <li key={index} className='py-6 text-4xl'>
            <Link onClick={handleClick} to={item.to} smooth={true} duration={500} className="hover:text-pink-600">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Social-Icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          {socialIcons.map((icon, index) => (
            <li key={index} className={`w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 ${icon.bgColor}`}>
              <a className='flex justify-between items-center w-full text-gray-300' href={icon.link} target="_blank" rel="noopener noreferrer">
                {icon.label} {icon.component}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
