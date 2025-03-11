"use client";

import Link from 'next/link';
import Image from 'next/image';
import { FaPhone, FaArrowRight, FaExclamationTriangle } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="relative text-white">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://firebasestorage.googleapis.com/v0/b/fire-protection-attorneys.firebasestorage.app/o/fire_recovery_hero_image.jpg?alt=media&token=e29e1094-898a-444d-b2cf-30defb487ed6"
          alt="Eaton Fire damage in Altadena, California"
          fill
          priority
          style={{ objectFit: 'cover' }}
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/65 to-black/55"></div>
      </div>
      
      <div className="container-custom relative z-10 py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-white drop-shadow-sm">
            Recover What You've Lost in the LA&nbsp;Fires
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-100 font-light leading-relaxed">
            Expert legal representation for fire victims seeking insurance claims, business loss recovery, and personal injury compensation.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="tel:+1234567890" 
              className="btn btn-white group"
            >
              <FaPhone className="mr-3 text-primary-600 group-hover:text-primary-700 transition-colors" />
              <span>Call Now for Free Consultation</span>
            </a>
            <Link 
              href="/contact" 
              className="btn btn-fire group"
            >
              <span>Get Started</span>
              <FaArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
      
      {/* Emergency Banner - Fixed for better visibility */}
      <div className="bg-red-700 py-4 text-center relative z-10 shadow-md">
        <div className="container-custom">
          <p className="font-medium tracking-wide text-white text-base md:text-lg flex items-center justify-center flex-wrap">
            <FaExclamationTriangle className="text-yellow-300 mr-2 h-5 w-5" />
            <span className="font-bold mr-2">URGENT:</span> 
            <span className="text-white">If you've been affected by the recent Eaton, Alta Dena, or Palisades fires, contact us immediately for time-sensitive legal assistance.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero; 