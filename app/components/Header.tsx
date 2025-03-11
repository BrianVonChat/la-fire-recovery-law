"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaPhone, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/90 py-4'} backdrop-blur-sm sticky top-0 z-50 transition-all duration-300`}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="bg-fire-600 p-1.5 rounded-md mr-3">
              <FaPhone className="h-4 w-4 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-fire-700 to-primary-600 bg-clip-text text-transparent">LA Fire Recovery Law</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              About Us
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Services
            </Link>
            <Link href="/resources" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Resources
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Contact
            </Link>
          </nav>

          {/* Call Now Button */}
          <div className="hidden md:flex items-center">
            <a 
              href="tel:+1234567890" 
              className="btn btn-fire group py-2 px-4"
            >
              <FaPhone className="mr-2" />
              Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-primary-600 font-medium py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="text-gray-700 hover:text-primary-600 font-medium py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                href="/services" 
                className="text-gray-700 hover:text-primary-600 font-medium py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="/resources" 
                className="text-gray-700 hover:text-primary-600 font-medium py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Resources
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-700 hover:text-primary-600 font-medium py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <a 
                href="tel:+1234567890" 
                className="btn btn-fire mt-2 flex items-center justify-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <FaPhone className="mr-2" />
                Call Now
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 