import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img src="/logo.png" alt="Krishak Kalyan" className="h-8 w-auto" />
            </Link>
            <div className="ml-6 flex space-x-8">
              <Link to="/" className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md">
                Home
              </Link>
              <Link to="/services" className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md">
                Services
              </Link>
              <Link to="/gallery" className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md">
                Gallery
              </Link>
              <Link to="/contact" className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md">
                Contact
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <FaFacebook className="text-gray-600 hover:text-gray-900" />
            <FaTwitter className="text-gray-600 hover:text-gray-900" />
            <FaInstagram className="text-gray-600 hover:text-gray-900" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;