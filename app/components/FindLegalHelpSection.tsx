"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  FaHome, FaBuilding, FaCarSide, FaTree, FaBriefcase, FaUtensils, 
  FaTractor, FaHotel, FaStore, FaHammer, FaLaptop, FaGraduationCap, 
  FaBaby, FaKey, FaFirstAid, FaBrain, FaRunning, FaUniversity, 
  FaCaravan, FaSitemap, FaAngleDown, FaAngleUp, FaFilter, FaUsers,
  FaBusinessTime, FaHandHoldingHeart, FaUserTie, FaHouseUser
} from 'react-icons/fa';

// Define categories for our landing pages
type Category = 'residential' | 'business' | 'workers' | 'special' | 'all';

// Define the structure for landing page data
interface LandingPage {
  path: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: Category;
}

const landingPages: LandingPage[] = [
  // Residential Category
  {
    path: '/homeowners-fire-claims',
    title: 'Homeowners',
    description: 'Insurance claims and property damage recovery for homeowners',
    icon: <FaHome className="h-5 w-5 text-fire-600" />,
    category: 'residential'
  },
  {
    path: '/renters-fire-claims',
    title: 'Renters',
    description: 'Personal property loss recovery for renters affected by fires',
    icon: <FaBuilding className="h-5 w-5 text-fire-600" />,
    category: 'residential'
  },
  {
    path: '/vehicle-fire-damage-claims',
    title: 'Vehicle Owners',
    description: 'Compensation for fire and smoke damage to vehicles',
    icon: <FaCarSide className="h-5 w-5 text-fire-600" />,
    category: 'residential'
  },
  {
    path: '/mobile-home-residents-wildfire-claims',
    title: 'Mobile Home Residents',
    description: 'Specialized claims for manufactured home communities',
    icon: <FaCaravan className="h-5 w-5 text-fire-600" />,
    category: 'residential'
  },
  {
    path: '/landlords-property-managers-fire-claims',
    title: 'Landlords',
    description: 'Property damage and lost rental income recovery',
    icon: <FaKey className="h-5 w-5 text-fire-600" />,
    category: 'residential'
  },
  {
    path: '/hoa-boards-and-residents-fire-claims',
    title: 'HOA Boards & Residents',
    description: 'Coordinated recovery for community associations',
    icon: <FaSitemap className="h-5 w-5 text-fire-600" />,
    category: 'residential'
  },

  // Business Category
  {
    path: '/restaurant-bar-loss-of-income-fire-claims',
    title: 'Restaurant & Bar Owners',
    description: 'Business interruption claims for food service industry',
    icon: <FaUtensils className="h-5 w-5 text-fire-600" />,
    category: 'business'
  },
  {
    path: '/farm-owners-agricultural-loss',
    title: 'Agricultural Workers',
    description: 'Crop loss and farm damage compensation',
    icon: <FaTractor className="h-5 w-5 text-fire-600" />,
    category: 'business'
  },
  {
    path: '/hotel-motel-bnb-fire-damage-loss',
    title: 'Hotel & BnB Owners',
    description: 'Lost revenue and property repair for lodging providers',
    icon: <FaHotel className="h-5 w-5 text-fire-600" />,
    category: 'business'
  },
  {
    path: '/office-retail-business-fire-claims',
    title: 'Office & Retail',
    description: 'Business recovery for commercial spaces',
    icon: <FaStore className="h-5 w-5 text-fire-600" />,
    category: 'business'
  },
  {
    path: '/contractors-construction-wildfire-claims',
    title: 'Contractors',
    description: 'Equipment and project loss recovery',
    icon: <FaHammer className="h-5 w-5 text-fire-600" />,
    category: 'business'
  },

  // Workers Category
  {
    path: '/landscapers-gardeners-loss-of-income',
    title: 'Landscapers & Gardeners',
    description: 'Income loss recovery for landscaping businesses',
    icon: <FaTree className="h-5 w-5 text-fire-600" />,
    category: 'workers'
  },
  {
    path: '/house-cleaners-domestic-workers-fire-claims',
    title: 'House Cleaners',
    description: 'Lost wage claims for domestic workers',
    icon: <FaBriefcase className="h-5 w-5 text-fire-600" />,
    category: 'workers'
  },
  {
    path: '/freelancers-independent-contractors-fire-losses',
    title: 'Freelancers',
    description: 'Income protection for independent contractors',
    icon: <FaLaptop className="h-5 w-5 text-fire-600" />,
    category: 'workers'
  },
  {
    path: '/teachers-childcare-providers-fire-claims',
    title: 'Teachers & Childcare',
    description: 'Lost wages for educational professionals',
    icon: <FaGraduationCap className="h-5 w-5 text-fire-600" />,
    category: 'workers'
  },
  {
    path: '/nannies-domestic-caretakers-fire-losses',
    title: 'Nannies & Caretakers',
    description: 'Employment rights for domestic caregivers',
    icon: <FaBaby className="h-5 w-5 text-fire-600" />,
    category: 'workers'
  },
  {
    path: '/first-responders-firefighters-claims',
    title: 'First Responders',
    description: 'Compensation for firefighters and emergency workers',
    icon: <FaRunning className="h-5 w-5 text-fire-600" />,
    category: 'workers'
  },

  // Special Claims Category
  {
    path: '/personal-injury-fire-claims',
    title: 'Personal Injury',
    description: 'Compensation for fire-related injuries',
    icon: <FaFirstAid className="h-5 w-5 text-fire-600" />,
    category: 'special'
  },
  {
    path: '/fire-trauma-mental-health-claims',
    title: 'Mental Health Trauma',
    description: 'PTSD and anxiety claims related to fire events',
    icon: <FaBrain className="h-5 w-5 text-fire-600" />,
    category: 'special'
  },
  {
    path: '/public-entities-government-wildfire-claims',
    title: 'Government Entities',
    description: 'Cost recovery for public agencies',
    icon: <FaUniversity className="h-5 w-5 text-fire-600" />,
    category: 'special'
  }
];

const categories = [
  { id: 'all', name: 'All Claims', icon: <FaFilter /> },
  { id: 'residential', name: 'Residential', icon: <FaHouseUser /> },
  { id: 'business', name: 'Business', icon: <FaBusinessTime /> },
  { id: 'workers', name: 'Workers', icon: <FaUserTie /> },
  { id: 'special', name: 'Special Claims', icon: <FaHandHoldingHeart /> }
];

export default function FindLegalHelpSection() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [isExpanded, setIsExpanded] = useState(false);

  const filteredPages = activeCategory === 'all' 
    ? landingPages 
    : landingPages.filter(page => page.category === activeCategory);

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Find Legal Help For Your Specific Situation</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse our specialized landing pages to find information most relevant to your circumstances.
          </p>
        </div>

        {/* Mobile Dropdown */}
        <div className="md:hidden mb-6">
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow-sm"
          >
            <span className="font-medium">Browse by Category</span>
            {isExpanded ? <FaAngleUp /> : <FaAngleDown />}
          </button>
          
          {isExpanded && (
            <div className="mt-2 bg-white rounded-lg shadow-lg p-2 border border-gray-200">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveCategory(category.id as Category);
                    setIsExpanded(false);
                  }}
                  className={`w-full text-left p-3 rounded flex items-center ${
                    activeCategory === category.id 
                      ? 'bg-fire-100 text-fire-600' 
                      : 'hover:bg-gray-100'
                  }`}
                >
                  <span className="mr-3">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Desktop Category Tabs */}
        <div className="hidden md:flex mb-8 border-b border-gray-200">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id as Category)}
              className={`flex items-center px-6 py-3 font-medium text-sm ${
                activeCategory === category.id 
                  ? 'text-fire-600 border-b-2 border-fire-600' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Search Results */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredPages.map((page, index) => (
            <Link 
              href={page.path} 
              key={index}
              className="flex items-center p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow group"
            >
              <div className="bg-fire-100 p-2 rounded-full mr-3 group-hover:bg-fire-200 transition-colors">
                {page.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-sm truncate">{page.title}</h3>
                <p className="text-xs text-gray-600 truncate">{page.description}</p>
              </div>
            </Link>
          ))}
        </div>
        
        {/* View All Link */}
        <div className="text-center mt-8">
          <Link href="/all-fire-claim-services" className="inline-flex items-center text-fire-600 hover:text-fire-700 font-medium">
            View All Our Fire Claim Services
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
} 