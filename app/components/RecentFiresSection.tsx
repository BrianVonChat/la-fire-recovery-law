"use client";

import Link from 'next/link';
import { FaFire, FaArrowRight } from 'react-icons/fa';

const RecentFiresSection = () => {
  const recentFires = [
    {
      id: 1,
      name: 'Eaton Fire',
      date: 'January 2025',
      description: 'The Eaton Fire devastated residential areas in eastern Los Angeles County, affecting over 500 homes and displacing thousands of residents.',
      link: '/fires/eaton',
      color: 'bg-red-600',
    },
    {
      id: 2,
      name: 'Alta Dena Fire',
      date: 'January 2025',
      description: 'Spreading through the Alta Dena region, this fire caused significant damage to commercial properties and local businesses, with ongoing recovery efforts.',
      link: '/fires/alta-dena',
      color: 'bg-orange-500',
    },
    {
      id: 3,
      name: 'Palisades Fire',
      date: 'January 2025',
      description: 'The Palisades Fire impacted luxury homes and natural areas, with complex insurance and property value issues affecting homeowners.',
      link: '/fires/palisades',
      color: 'bg-yellow-500',
    },
  ];

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Los Angeles Fires</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're actively helping victims of these recent fires recover their losses through legal action.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recentFires.map((fire) => (
            <div key={fire.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <div className={`${fire.color} h-2`}></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <FaFire className="h-6 w-6 text-red-500 mr-3" />
                  <h3 className="text-2xl font-bold">{fire.name}</h3>
                </div>
                <p className="text-gray-400 mb-3">{fire.date}</p>
                <p className="text-gray-300 mb-6">{fire.description}</p>
                <Link 
                  href={fire.link}
                  className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors"
                >
                  Learn More About Recovery
                  <FaArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-300 mb-6">
            If you've been affected by any of these fires, don't wait to seek legal assistance. 
            Time-sensitive deadlines may apply to your case.
          </p>
          <Link 
            href="/contact" 
            className="btn btn-primary"
          >
            Get Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecentFiresSection; 