// src/Footer.js
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-200 py-6 w-full">
            <div className="container mx-auto text-center">
                <p>&copy; 2024 THATIPALLI SAI SHIVA. All Rights Reserved.</p>
                <div className="mt-4 flex justify-center space-x-6">
                    <a
                        href="https://github.com/THATIPALLISAISHIVA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-200 hover:text-teal-400"
                    >
                        <FaGithub size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/saishivathatipalli" target="_blank" rel="noopener noreferrer" className="text-white mr-4 hover:text-blue-400"><FaLinkedin size={24} /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
