
import React, { useContext } from 'react';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import logo from '../../src/assets/donate.png'
import { Link } from 'react-router-dom';
import { ThemeContext } from '../AddProvider/ThemeProvider';

export default function Footer() {
  const { theme } = useContext(ThemeContext);

  return (
   
<footer className={`py-12 ${theme === "dark" ? 'bg-gray-900' : 'bg-[#F2F2F2]'} text-gray-700`}>

  <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
    {/* Website Logo */}
    <div className="flex flex-col items-center mb-6 md:mb-0">
      <img src={logo} alt="Website Logo" className="w-20 lg:w-40 mb-2" />
      <p className={`text-lg font-semibold pt-6${theme === 'dark' ? 'text-white/75' : 'text-gray-900'}`}>CrowedCub Inc.</p>

    </div>

    {/* Navigation Links */}
    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-center md:text-left">
      <Link to="/" className="hover:text-purple-500">Home</Link>
      <Link to="/about" className="hover:text-purple-500">About Us</Link>
      <Link to="/allCampaign" className="hover:text-purple-500">Campaigns</Link>
   
    </div>

    {/* Social Media Links */}
    <div className={`flex space-x-6 mt-6 md:mt-0 ${theme === "dark"? "text-white/90":"text-gray-900"}`}>
      <a href="https://www.facebook.com/groups/252388829152378" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-600">
        <i className="fab fa-facebook-f text-2xl"></i>
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-800">
        <i className="fab fa-linkedin-in text-2xl"></i>
      </a>
      {/* Add other social media icons if needed */}
    </div>
  </div>

  {/* Footer Bottom */}
  <div className="text-center mt-6 text-sm">
    <p>&copy; {new Date().getFullYear()} CrowedCub. All rights reserved.</p>
  </div>
</footer>

  );
}
