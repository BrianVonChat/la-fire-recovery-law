"use client";

import Link from 'next/link';
import { FaFileAlt, FaBuilding, FaUserInjured, FaHome, FaDollarSign, FaArrowRight, FaTree, FaLeaf } from 'react-icons/fa';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: 'Fire Insurance Claims',
      description: 'We help you navigate complex insurance policies to ensure you receive the full compensation you deserve for your fire-related losses.',
      icon: <FaFileAlt className="h-10 w-10 text-primary-500" />,
      link: '/services/fire-insurance-claims',
    },
    {
      id: 2,
      title: 'Business Loss Recovery',
      description: 'Our team specializes in helping business owners recover lost income, property damage, and other business-related losses due to fires.',
      icon: <FaBuilding className="h-10 w-10 text-primary-500" />,
      link: '/services/business-loss',
    },
    {
      id: 3,
      title: 'Personal Injury',
      description: "If you've suffered injuries from a fire, we'll fight to get you compensation for medical bills, pain and suffering, and lost wages.",
      icon: <FaUserInjured className="h-10 w-10 text-primary-500" />,
      link: '/services/personal-injury',
    },
    {
      id: 4,
      title: 'Property Damage',
      description: 'We help homeowners and renters recover the full value of their damaged or destroyed property, including structures and personal belongings.',
      icon: <FaHome className="h-10 w-10 text-primary-500" />,
      link: '/services/property-damage',
    },
    {
      id: 5,
      title: 'Loss of Income',
      description: "If fires have prevented you from working, we'll help you recover lost wages and income through various legal channels.",
      icon: <FaDollarSign className="h-10 w-10 text-primary-500" />,
      link: '/services/loss-of-income',
    },
    {
      id: 6,
      title: 'Environmental Claims',
      description: 'We handle claims related to environmental damage from fires, including soil contamination, water quality issues, and destruction of natural resources.',
      icon: <FaLeaf className="h-10 w-10 text-primary-500" />,
      link: '/services/environmental-claims',
    },
  ];

  return (
    <section className="py-24 pb-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-14">
          <p className="text-fire-700 font-medium mb-3 tracking-wide uppercase">Professional Legal Assistance</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Our Legal Services</h2>
          <div className="w-24 h-1 bg-fire-700 mx-auto mb-6 opacity-70"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive legal support for all aspects of fire recovery, from insurance claims to personal injury.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg transition-all duration-300 group hover:shadow-xl">
              <div className="p-8 border border-gray-100 rounded-lg h-full flex flex-col relative overflow-hidden">
                {/* Subtle side accent */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-fire-600 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Icon and content */}
                <div className="flex items-start">
                  <div className="bg-gray-50 text-gray-700 p-4 rounded-lg mr-5 group-hover:bg-fire-50 group-hover:text-fire-700 transition-colors duration-300">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
                
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <Link 
                    href={service.link}
                    className="inline-flex items-center text-fire-700 font-medium hover:text-fire-800 transition-colors"
                  >
                    <span>Learn More</span>
                    <FaArrowRight className="ml-2 h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link 
            href="/services"
            className="inline-flex items-center px-8 py-3.5 rounded-lg bg-white border border-gray-200 text-gray-800 hover:bg-gray-50 hover:border-fire-200 transition-colors font-medium shadow-sm hover:shadow group"
          >
            <span>View All Services</span>
            <FaArrowRight className="ml-3 h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
