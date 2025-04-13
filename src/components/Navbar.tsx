import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Tent, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Tent className="h-8 w-8 text-orange-500" />
              <span className="ml-2 text-xl font-bold text-gray-800">EventPro</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-orange-500 px-3 py-2 font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-orange-500 px-3 py-2 font-medium">
              About
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-orange-500 px-3 py-2 font-medium">
              Services
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-orange-500 px-3 py-2 font-medium">
              Contact
            </Link>
            <a
              href="tel:+1234567890"
              className="inline-flex items-center bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
            >
              <Phone className="h-4 w-4 mr-2" />
              (+91) 123456-789
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-orange-500 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 text-gray-700 hover:text-orange-500 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-gray-700 hover:text-orange-500 font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/services"
              className="block px-3 py-2 text-gray-700 hover:text-orange-500 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-gray-700 hover:text-orange-500 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <a
              href="tel:+1234567890"
              className="inline-flex items-center bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
            >
              <Phone className="h-4 w-4 mr-2" />
              (123) 456-7890
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;