import React from 'react';
import './about.css';
import myphoto from '../assets/myphoto.png';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaPython } from 'react-icons/fa';
import { SiC, SiCplusplus, SiTailwindcss } from 'react-icons/si';

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 text-white font-sans flex flex-col mt-10 justify-between">
      <header className="text-center py-10">
        <h1 className="text-5xl font-bold mb-4 header colour">Who Am I?</h1>
        <p className="text-xl max-w-2xl mx-auto">
          I'm a dedicated and passionate enthusiast in Data Structures and Algorithms (DSA). My curiosity drives me to stay on the cutting edge of technology, always eager to learn and adopt the latest advancements. With a strong entrepreneurial spirit, I aspire to establish my own startup, bringing innovative solutions to life. My love for web development fuels my creativity, enabling me to build dynamic and responsive web applications that provide excellent user experiences.
        </p>
      </header>

      <main className="container mx-auto px-4">
        <section className="flex flex-wrap items-center justify-center my-10">
          <div className="w-full md:w-1/2 text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-3xl font-semibold mb-4 text-green-300 header">Major Achievements</h2>
            <ul className="list-disc list-inside text-lg">
              <li>Solved 100 Leetcode questions.</li>
              <li>Earned a 50-days badge on Leetcode.</li>
              <li>Developed a web application using React.</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 shadow-2xl rounded-full overflow-hidden glassmorphism-card">
              <img src={myphoto} alt="Thatipalli sai shiva" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-blue-500 opacity-50"></div>
            </div>
          </div>
        </section>

        <section className="my-10">
          <h2 className="text-3xl font-semibold text-center mb-8 text-pink-300 header">Skills</h2>
          <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 justify-items-center gap-6">
            <SkillCard icon={<FaHtml5 className='text-5xl md:text-7xl' />} color="text-orange-500" title="HTML" level="Advanced" />
            <SkillCard icon={<FaCss3Alt className='text-5xl md:text-7xl' />} color="text-blue-500" title="CSS" level="Advanced" />
            <SkillCard icon={<FaJs className='text-5xl md:text-7xl' />} color="text-yellow-500" title="JavaScript" level="Advanced" />
            <SkillCard icon={<FaReact className='text-5xl md:text-7xl' />} color="text-blue-400" title="React" level="Advanced" />
            <SkillCard icon={<SiTailwindcss className='text-5xl md:text-7xl' />} color="text-teal-400" title="Tailwind" level="Intermediate" />
            <SkillCard icon={<FaBootstrap className='text-5xl md:text-7xl' />} color="text-purple-600" title="Bootstrap" level="Intermediate" />
            <SkillCard icon={<SiCplusplus className='text-5xl md:text-7xl' />} color="text-blue-600" title="C++" level="Intermediate" />
            <SkillCard icon={<SiC className='text-5xl md:text-7xl' />} color="text-blue-500" title="C" level="Advanced" />
            <SkillCard icon={<FaPython className='text-5xl md:text-7xl'/>} color="text-yellow-400" title="Python" level="Beginner" />
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-gray-400 py-8 mt-auto">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-4 text-red-300">Hobbies & Qualifications</h3>
          <p className="text-lg mb-2">Hobbies: competitive programming, reading books</p>
          <p className="text-lg">Qualifications: Pre University Course</p>
        </div>
      </footer>
    </div>
  );
}

function SkillCard({ icon, color, title, level }) {
  return (
    <div className={` md:w-48 md:h-48 w-36 h-36 flex flex-col items-center justify-center bg-white rounded-lg shadow-lg ${color} p-4`}>
      <div  className="mb-2 ">{icon}</div>
      <h4 className="font-bold text-2xl">{title}</h4>
      <p className="text-lg">{level}</p>
    </div>
  );
}

export default About;
