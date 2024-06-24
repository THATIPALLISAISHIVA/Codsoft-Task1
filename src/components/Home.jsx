import React from 'react';
import profileImage from '../assets/profileImage.png';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './home.css'; // Assuming this file contains additional styles for the home page

const HomePage = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-purple-500 to-indigo-500 min-h-screen flex items-center justify-center mt-10 overflow-hidden min-w-fit">
        <div className="container mx-auto px-6 py-4 lg:px-24">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-12">
            <div className="w-full lg:w-1/2 lg:mr-8 flex justify-center lg:justify-start mb-8 lg:mb-0">
              <img
                src={profileImage}
                alt="Profile"
                className="rounded-full md:w-[50vw]  w-[80vw] lg:w-96 lg:h-96 object-cover shadow-lg transform transition duration-500 hover:scale-105"
              />
            </div>
            <div className="sm:w-full lg:w-1/2 w-[90vw]  bg-white rounded-lg shadow-lg p-8 glassmorphism">
              <h1 className="lg:text-4xl md:text-4xl font-bold mb-4 text-center lg:text-left text-white font-sans text-2xl">Welcome to My Portfolio</h1>
              <p className="lg:text-lg text-gray-200 mb-6 md:text-xl text-lg">
                Hello, I'm Thatipalli Sai Shiva, a passionate developer with expertise in creating dynamic and user-friendly web applications. I specialize in modern web technologies and enjoy bringing creative ideas to life.
              </p>
              <p className="lg:text-lg text-gray-200 mb-6 md:text-xl text-lg">
                Feel free to explore my projects and learn more about my skills and experiences.
              </p>
              <div className="flex justify-center lg:justify-start mb-4">
                <a href="https://github.com/THATIPALLISAISHIVA" target="_blank" rel="noopener noreferrer" className="text-white mr-4 hover:text-blue-400">
                  <FaGithub className="lg:text-4xl md:text-4xl text-3xl" />
                </a>
                <a href="https://www.linkedin.com/in/saishivathatipalli" target="_blank" rel="noopener noreferrer" className="text-white mr-4 hover:text-blue-400">
                  <FaLinkedin className="lg:text-4xl md:text-4xl text-3xl" />
                </a>
                <a href="mailto:saishivathatipalli@gmail.com" className="text-white hover:text-blue-400">
                  <FaEnvelope className="lg:text-4xl md:text-4xl text-3xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
