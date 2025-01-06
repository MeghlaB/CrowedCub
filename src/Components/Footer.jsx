
import React from 'react';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import logo from '../../src/assets/donate.png'
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    // <footer className="flex flex-col  bg-base-200 text-black  py-8">
    //         <div className="container mx-auto flex flex-col items-center justify-between gap-6 md:flex-row">
    //             {/* Footer Branding */}
    //             <div className="text-center md:text-left">
    //                 <h5 className="text-2xl font-bold">
    //                    <img src={logo} alt="" className="w-24 h-24 rounded-lg" />
    //                 </h5>
    //                 <h5 className="text-lg font-semibold mt-2">
    //                     <span className="text-hoverprimary">Contact Us:</span> meghlabiswas643gmail.com
    //                 </h5>
    //             </div>

    //             {/* Social Media Links */}
    //              <div className="flex gap-6 mt-6 lg:mt-4 justify-center lg:justify-start">
    //                                     <a href="https://mail.google.com/mail/u/3/#inbox" className="text-2xl text-white hover:text-hoverprimary">
    //                                         <FiMail />
    //                                     </a>
    //                                     <a href="https://www.facebook.com/onu.biswas.166205" className="text-2xl text-white hover:text-hoverprimary">
    //                                         <FaFacebook />
    //                                     </a>
    //                                     <a href="https://github.com/MeghlaB" className="text-2xl text-white hover:text-hoverprimary">
    //                                         <FaGithub/>
    //                                     </a>
    //                                 </div>
    //         </div>

    //         {/* Footer Bottom */}
    //         <aside className="mt-6 text-center text-sm">
    //             <p>&copy; 2025. All Rights Reserved.</p>
    //         </aside>
    //     </footer>
    <footer className="bg-gray-900 text-white py-12">
  <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
    {/* Website Logo */}
    <div className="flex items-center mb-6 md:mb-0">
      <img src={logo} alt="Website Logo" className="w-40" />
    </div>

    {/* Navigation Links */}
    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-center md:text-left">
      <Link to="/" className="hover:text-purple-500">Home</Link>
      <Link to="/about" className="hover:text-purple-500">About Us</Link>
      <Link to="/allCampaign" className="hover:text-purple-500">Campaigns</Link>
      <Link to="/contact" className="hover:text-purple-500">Contact</Link>
      <Link to="/blog" className="hover:text-purple-500">Blog</Link>
    </div>

    {/* Social Media Links */}
    <div className="flex space-x-6 mt-6 md:mt-0">
      <a href="https://www.facebook.com/groups/252388829152378" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600">
        <i className="fab fa-facebook-f text-2xl"></i>
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-800">
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
