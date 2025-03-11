"use client";

import Link from 'next/link';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <div className="flex items-center mb-6">
              <div className="bg-fire-600 p-1.5 rounded-md mr-3">
                <FaPhone className="h-4 w-4 text-white" />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-fire-400 to-primary-400 bg-clip-text text-transparent">LA Fire Recovery Law</h3>
            </div>
            <p className="text-gray-400 mb-6">
              Dedicated to helping victims of Los Angeles fires recover what they've lost through expert legal representation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-fire-400 transition-colors p-2 bg-gray-800 rounded-full">
                <FaFacebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-fire-400 transition-colors p-2 bg-gray-800 rounded-full">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-fire-400 transition-colors p-2 bg-gray-800 rounded-full">
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-fire-400 transition-colors p-2 bg-gray-800 rounded-full">
                <FaLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-wide">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-fire-500 rounded-full mr-2"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-fire-500 rounded-full mr-2"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-fire-500 rounded-full mr-2"></span>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-fire-500 rounded-full mr-2"></span>
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-fire-500 rounded-full mr-2"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-wide">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/fire-insurance-claims" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                  Fire Insurance Claims
                </Link>
              </li>
              <li>
                <Link href="/services/business-loss" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                  Business Loss Recovery
                </Link>
              </li>
              <li>
                <Link href="/services/personal-injury" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                  Personal Injury
                </Link>
              </li>
              <li>
                <Link href="/services/property-damage" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                  Property Damage
                </Link>
              </li>
              <li>
                <Link href="/services/loss-of-income" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                  Loss of Income
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-wide">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <div className="bg-gray-800 p-2 rounded-md mr-3 flex-shrink-0">
                  <FaMapMarkerAlt className="h-5 w-5 text-fire-500" />
                </div>
                <span className="text-gray-400">123 Legal Street, Los Angeles, CA 90001</span>
              </li>
              <li className="flex">
                <div className="bg-gray-800 p-2 rounded-md mr-3 flex-shrink-0">
                  <FaPhone className="h-5 w-5 text-fire-500" />
                </div>
                <a href="tel:+1234567890" className="text-gray-400 hover:text-white transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex">
                <div className="bg-gray-800 p-2 rounded-md mr-3 flex-shrink-0">
                  <FaEnvelope className="h-5 w-5 text-fire-500" />
                </div>
                <a href="mailto:info@lafirerecoverylaw.com" className="text-gray-400 hover:text-white transition-colors">
                  info@lafirerecoverylaw.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">© {currentYear} LA Fire Recovery Law. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="/privacy-policy" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 