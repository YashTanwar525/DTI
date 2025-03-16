import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="flex items-center mb-8 md:mb-0">
            <img
              src="/profile.jpg"
              alt="Yash Tanwar"
              className="w-12 h-12 rounded-full mr-4"
            />
            <span className="text-xl">Yash Tanwar</span>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="mr-2">📍</span>
              <span>Bennett University,Near village Dabra,Greater Noida</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2">📞</span>
              <span>987-654-3210</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2">📧</span>
              <span>yashtanwar52005@gmail.com</span>
            </div>
          </div>

          <div className="flex space-x-6 mt-8 md:mt-0">
            <FaFacebook className="text-2xl hover:text-gray-300 cursor-pointer" />
            <FaTwitter className="text-2xl hover:text-gray-300 cursor-pointer" />
            <FaInstagram className="text-2xl hover:text-gray-300 cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;