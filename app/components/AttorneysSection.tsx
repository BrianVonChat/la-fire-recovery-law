"use client";

import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa';

const AttorneysSection = () => {
  const attorneys = [
    {
      id: 1,
      name: 'James N. Dicks',
      title: 'Founding Attorney, jD Law, P.C.',
      image: 'https://firebasestorage.googleapis.com/v0/b/fire-protection-attorneys.firebasestorage.app/o/fire_recovery_attorney_jdlaw.png?alt=media&token=0bb48ed1-9fa8-422a-99e5-4077465d85e9',
      specialties: ['Personal Injury', 'Criminal Law', 'Insurance Claims'],
      bio: 'James N. Dicks brings a unique investigative perspective from his background as an LAPD officer to his legal practice. With over 35 years of experience, he specializes in personal injury law, insurance claims, and trial litigation, helping victims of accidents and disasters secure fair compensation.',
      linkedin: '#',
      objectPosition: 'center top',
    },
  ];

  return (
    <section className="pt-8 pb-16 bg-gray-50 AttorneysSection">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Meet Our Attorney</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our experienced legal team is dedicated to helping you recover what you've lost in the recent Los Angeles fires.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {attorneys.map((attorney) => (
            <div key={attorney.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col lg:flex-row">
              <div className="lg:w-1/2 relative h-72 md:h-80 lg:h-auto">
                <Image 
                  src={attorney.image}
                  alt={`Attorney ${attorney.name}`}
                  className="object-cover"
                  style={{ objectPosition: attorney.objectPosition || 'center top' }}
                  priority
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 500px"
                />
              </div>
              <div className="lg:w-1/2 p-6 lg:p-6 bg-white">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold mb-1 text-gray-900">{attorney.name}</h3>
                    <p className="text-primary-600 font-medium mb-3">{attorney.title}</p>
                  </div>
                  <a 
                    href={attorney.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary-600 transition-colors"
                  >
                    <FaLinkedin className="h-6 w-6" />
                  </a>
                </div>
                
                <div className="mb-4 flex flex-wrap">
                  {attorney.specialties.map((specialty, index) => (
                    <span 
                      key={index} 
                      className="bg-primary-100 text-primary-800 text-sm px-3 py-1 rounded-full mr-2 mb-2"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
                
                <p className="text-gray-600 mb-5">{attorney.bio}</p>
                
                <Link 
                  href={`/about#${attorney.name.toLowerCase().replace(/\s+/g, '-').replace('.', '')}`}
                  className="text-primary-600 font-medium hover:text-primary-800 transition-colors inline-flex items-center"
                >
                  Read Full Bio
                  <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AttorneysSection; 