import React from 'react';
import { FaPython, FaReact, FaHtml5, FaGithub } from 'react-icons/fa';
import './project.css';

const Projects = () => {
  // Example data for projects
  const projects = [
    {
      id: 1,
      title: 'Meal-Mate',
      description: 'The Python-based QR Code Attendance System is a comprehensive application designed to automate attendance tracking through QR code technology. This project leverages Python, QR code generation and scanning capabilities, SMS notifications.',
      icon: FaPython,
      color: '#306998', // Custom color for Python
      backgroundColor: '#C8E6C9', // Custom background color
      githubLink: 'https://github.com/THATIPALLISAISHIVA/MEAL-MATE', // GitHub link for the project
    },
    {
      id: 2,
      title: 'Todolist',
      description: 'The Todo List App is a simple yet powerful task management tool designed to help users organize their daily activities efficiently. Built with React.js and styled using Tailwind CSS, this application allows users to create, update, and delete tasks seamlessly.',
      icon: FaReact,
      color: '#61DAFB', // Custom color for React
      backgroundColor: '#E1F5FE', // Custom background color
      githubLink: 'https://github.com/THATIPALLISAISHIVA/iTask---Your-Task-Planner', // GitHub link for the project
    },
    {
      id: 3,
      title: 'Simple Calculator',
      description: 'The Simple Calculator is a basic web application designed to perform arithmetic operations such as addition, subtraction, multiplication, and division. Built using HTML, CSS and JavaScript.',
      icon: FaHtml5,
      color: '#E34F26', // Custom color for HTML
      backgroundColor: '#FFECB3', // Custom background color
      githubLink: 'https://github.com/THATIPALLISAISHIVA/Caluculator', // GitHub link for the project
    },
  ];

  return (
    <div className="bg-gradient-to-r from-purple-500 to-indigo-500 min-h-screen py-12 px-4 sm:px-6 lg:px-8 mt-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-6xl font-bold mb-12 text-center text-white font-serif myproject">My Projects</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.id} className="group bg-white bg-opacity-30 backdrop-blur-lg rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transform hover:scale-105 transition duration-300">
              <div className="w-full h-48 flex items-center justify-center" style={{ backgroundColor: project.backgroundColor }}>
                <project.icon size={80} color={project.color} />
              </div>
              <div className="p-6">
                <h2 className="text-3xl font-bold mb-2 heading flex items-center justify-between">
                  {project.title}
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <FaGithub size={30} className="text-gray-800 hover:text-black transition duration-300" />
                  </a>
                </h2>
                <p className="text-gray-200">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
