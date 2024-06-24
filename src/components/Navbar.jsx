import React from 'react';
import { FaCode, FaHome, FaInfoCircle, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-black text-white py-4 w-full fixed top-0 left-0 z-10 ">
      <div className="container mx-auto flex justify-center md:justify-between items-center px-4">
        <div className=" items-center space-x-2 hidden md:flex justify-center">
          <FaCode size={24} />
          <span className="text-xl font-bold">Thatipalli Sai Shiva</span>
        </div>
        <div className="space-x-6 md:space-x-10 flex items-center">
          <Link to="/" className="hover:text-gray-400 flex items-center space-x-1 text-sm md:text-base">
            <FaHome />
            <span>Home</span>
          </Link>
          <Link to="/about" className="hover:text-gray-400 flex items-center space-x-1 text-sm md:text-base">
            <FaInfoCircle />
            <span>About</span>
          </Link>
          <Link to="/projects" className="hover:text-gray-400 flex items-center space-x-1 text-sm md:text-base">
            <FaProjectDiagram />
            <span>Projects</span>
          </Link>
          <Link to="/contact" className="hover:text-gray-400 flex items-center space-x-1 text-sm md:text-base">
            <FaEnvelope />
            <span>Contact Us</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
