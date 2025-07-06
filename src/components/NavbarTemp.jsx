import React from 'react';
import Logo from '../assets/skillswap-logo.png';

function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 px-6 md:px-20 flex items-center justify-between">

      {/* LOGO */}
      <div>
        <img src={Logo} alt="skillswap logo" style={{ height: '150px', width: '100px', marginLeft: '40rem' }} 
          className="object-contain transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1"/>
          <div className="absolute top-0 left-0 w-full h-full rounded-lg pointer-events-none group-hover:animate-shine bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-0 group-hover:opacity-100" />
      </div>

      {/* LINKS */}
      <div className="hidden md:flex gap-8 text-gray-700 font-medium">
        <a href="#" className="hover:text-blue-600">Home</a>
        <a href="#" className="hover:text-blue-600">Explore</a>
        <a href="#" className="hover:text-blue-600">About</a>
        <a href="#" className="hover:text-blue-600">Contact</a>
      </div>

      {/* BUTTON */}
      <button className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
        Get Started
      </button>
    </nav>
  );
}

export default Navbar;
