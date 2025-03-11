"use client";

import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { 
  FaHome, FaBuilding, FaCarSide, FaTree, FaBriefcase, FaUtensils, 
  FaTractor, FaHotel, FaStore, FaHammer, FaLaptop, FaGraduationCap, 
  FaBaby, FaKey, FaFirstAid, FaBrain, FaRunning, FaUniversity, 
  FaCaravan, FaSitemap, FaArrowLeft, FaBusinessTime, FaHandHoldingHeart, 
  FaUserTie, FaHouseUser
} from 'react-icons/fa';

export const metadata = {
  title: 'All Fire Recovery Claim Services | LA Fire Recovery Law',
  description: 'Browse our complete list of specialized legal services for different groups affected by the LA wildfires. Find the information most relevant to your situation.',
  keywords: 'fire recovery services, wildfire claims, LA fire claims, fire damage attorneys, property damage, business interruption, lost wages, fire injury'
};

// Similar structure to FindLegalHelpSection component
type Category = 'residential' | 'business' | 'workers' | 'special';

interface LandingPage {
  path: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: Category;
  longDescription?: string;
}

const landingPages: LandingPage[] = [
  // Residential Category
  {
    path: '/homeowners-fire-claims',
    title: 'Homeowners',
    description: 'Insurance claims and property damage recovery for homeowners',
    longDescription: 'Our firm specializes in helping homeowners navigate property damage claims, insurance disputes, and recovery for loss of use after wildfire damage.',
    icon: <FaHome className="h-6 w-6 text-fire-600" />,
    category: 'residential'
  },
  {
    path: '/renters-fire-claims',
    title: 'Renters',
    description: 'Personal property loss recovery for renters affected by fires',
    longDescription: 'We help renters recover for lost personal property, temporary relocation expenses, and security deposit issues after fire damage.',
    icon: <FaBuilding className="h-6 w-6 text-fire-600" />,
    category: 'residential'
  },
  {
    path: '/vehicle-fire-damage-claims',
    title: 'Vehicle Owners',
    description: 'Compensation for fire and smoke damage to vehicles',
    longDescription: 'Our attorneys assist with insurance claims for vehicles damaged by fire or smoke, helping to ensure fair compensation for repairs or replacement.',
    icon: <FaCarSide className="h-6 w-6 text-fire-600" />,
    category: 'residential'
  },
  {
    path: '/mobile-home-residents-wildfire-claims',
    title: 'Mobile Home Residents',
    description: 'Specialized claims for manufactured home communities',
    longDescription: 'We provide specialized legal support for mobile home residents dealing with unique insurance challenges and community-wide recovery issues.',
    icon: <FaCaravan className="h-6 w-6 text-fire-600" />,
    category: 'residential'
  },
  {
    path: '/landlords-property-managers-fire-claims',
    title: 'Landlords',
    description: 'Property damage and lost rental income recovery',
    longDescription: 'Our team helps landlords recover for property damage, lost rental income, and tenant relation issues resulting from wildfire damage.',
    icon: <FaKey className="h-6 w-6 text-fire-600" />,
    category: 'residential'
  },
  {
    path: '/hoa-boards-and-residents-fire-claims',
    title: 'HOA Boards & Residents',
    description: 'Coordinated recovery for community associations',
    longDescription: 'We provide guidance to HOA boards and residents on community-wide claims, common area damage, and coordinated recovery efforts.',
    icon: <FaSitemap className="h-6 w-6 text-fire-600" />,
    category: 'residential'
  },

  // Business Category
  {
    path: '/restaurant-bar-loss-of-income-fire-claims',
    title: 'Restaurant & Bar Owners',
    description: 'Business interruption claims for food service industry',
    longDescription: 'Our firm specializes in business interruption claims, spoiled inventory recovery, and health code compliance issues for restaurants affected by fires.',
    icon: <FaUtensils className="h-6 w-6 text-fire-600" />,
    category: 'business'
  },
  {
    path: '/farm-owners-agricultural-loss',
    title: 'Agricultural Workers',
    description: 'Crop loss and farm damage compensation',
    longDescription: 'We help farm owners and agricultural workers recover for crop loss, livestock damage, equipment damage, and long-term soil contamination issues.',
    icon: <FaTractor className="h-6 w-6 text-fire-600" />,
    category: 'business'
  },
  {
    path: '/hotel-motel-bnb-fire-damage-loss',
    title: 'Hotel & BnB Owners',
    description: 'Lost revenue and property repair for lodging providers',
    longDescription: 'Our attorneys assist lodging providers with business interruption claims, guest relocation issues, and property damage recovery.',
    icon: <FaHotel className="h-6 w-6 text-fire-600" />,
    category: 'business'
  },
  {
    path: '/office-retail-business-fire-claims',
    title: 'Office & Retail',
    description: 'Business recovery for commercial spaces',
    longDescription: 'We help retail and office businesses recover lost income, inventory damage, and customer migration issues resulting from wildfire disruption.',
    icon: <FaStore className="h-6 w-6 text-fire-600" />,
    category: 'business'
  },
  {
    path: '/contractors-construction-wildfire-claims',
    title: 'Contractors',
    description: 'Equipment and project loss recovery',
    longDescription: 'Our team assists construction professionals with equipment loss claims, project delay compensation, and rebuilding contract issues.',
    icon: <FaHammer className="h-6 w-6 text-fire-600" />,
    category: 'business'
  },

  // Workers Category
  {
    path: '/landscapers-gardeners-loss-of-income',
    title: 'Landscapers & Gardeners',
    description: 'Income loss recovery for landscaping businesses',
    longDescription: 'We help landscaping professionals recover for lost income, damaged equipment, and client base disruption following wildfire events.',
    icon: <FaTree className="h-6 w-6 text-fire-600" />,
    category: 'workers'
  },
  {
    path: '/house-cleaners-domestic-workers-fire-claims',
    title: 'House Cleaners',
    description: 'Lost wage claims for domestic workers',
    longDescription: 'Our attorneys specialize in helping domestic workers recover lost wages, secure unemployment benefits, and navigate immigration concerns.',
    icon: <FaBriefcase className="h-6 w-6 text-fire-600" />,
    category: 'workers'
  },
  {
    path: '/freelancers-independent-contractors-fire-losses',
    title: 'Freelancers',
    description: 'Income protection for independent contractors',
    longDescription: 'We provide assistance to freelancers and independent contractors facing client loss, project cancellations, and workspace damage.',
    icon: <FaLaptop className="h-6 w-6 text-fire-600" />,
    category: 'workers'
  },
  {
    path: '/teachers-childcare-providers-fire-claims',
    title: 'Teachers & Childcare',
    description: 'Lost wages for educational professionals',
    longDescription: 'Our firm helps educational professionals recover lost income, manage facility damage claims, and address student displacement issues.',
    icon: <FaGraduationCap className="h-6 w-6 text-fire-600" />,
    category: 'workers'
  },
  {
    path: '/nannies-domestic-caretakers-fire-losses',
    title: 'Nannies & Caretakers',
    description: 'Employment rights for domestic caregivers',
    longDescription: 'We assist caregivers with lost wage claims, employment rights issues, and temporary placement challenges after wildfire displacement.',
    icon: <FaBaby className="h-6 w-6 text-fire-600" />,
    category: 'workers'
  },
  {
    path: '/first-responders-firefighters-claims',
    title: 'First Responders',
    description: 'Compensation for firefighters and emergency workers',
    longDescription: 'Our team provides specialized support for injury claims, toxic exposure issues, and long-term health effects for those who battled the fires.',
    icon: <FaRunning className="h-6 w-6 text-fire-600" />,
    category: 'workers'
  },

  // Special Claims Category
  {
    path: '/personal-injury-fire-claims',
    title: 'Personal Injury',
    description: 'Compensation for fire-related injuries',
    longDescription: 'We handle all types of personal injury claims related to fires, including burns, respiratory damage, evacuation injuries, and vehicle accidents.',
    icon: <FaFirstAid className="h-6 w-6 text-fire-600" />,
    category: 'special'
  },
  {
    path: '/fire-trauma-mental-health-claims',
    title: 'Mental Health Trauma',
    description: 'PTSD and anxiety claims related to fire events',
    longDescription: 'Our attorneys help clients recover for psychological trauma, PTSD, anxiety, and other mental health impacts resulting from wildfire experiences.',
    icon: <FaBrain className="h-6 w-6 text-fire-600" />,
    category: 'special'
  },
  {
    path: '/public-entities-government-wildfire-claims',
    title: 'Government Entities',
    description: 'Cost recovery for public agencies',
    longDescription: 'We assist public entities with emergency response cost recovery, infrastructure damage claims, and interagency coordination challenges.',
    icon: <FaUniversity className="h-6 w-6 text-fire-600" />,
    category: 'special'
  }
];

const categories = [
  { id: 'residential', name: 'Residential Claims', icon: <FaHouseUser className="h-6 w-6" /> },
  { id: 'business', name: 'Business Claims', icon: <FaBusinessTime className="h-6 w-6" /> },
  { id: 'workers', name: 'Worker Claims', icon: <FaUserTie className="h-6 w-6" /> },
  { id: 'special', name: 'Special Claims', icon: <FaHandHoldingHeart className="h-6 w-6" /> }
];

export default function AllFireClaimServicesPage() {
  return (
    <main>
      <Header />
      
      <div className="bg-gray-50 py-12 md:py-20">
        <div className="container-custom">
          <Link href="/" className="inline-flex items-center text-fire-600 hover:text-fire-700 mb-6">
            <FaArrowLeft className="mr-2" />
            Back to Home
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">All Fire Recovery Claim Services</h1>
          <p className="text-xl text-gray-700 max-w-3xl mb-12">
            Browse our complete list of specialized legal services for different groups affected by the LA wildfires. Our experienced attorneys provide tailored assistance for each situation.
          </p>
          
          {categories.map((category, categoryIndex) => (
            <div key={category.id} className="mb-16">
              <div className="flex items-center mb-6">
                <div className="bg-fire-100 p-3 rounded-full mr-4">
                  {category.icon}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">{category.name}</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {landingPages
                  .filter(page => page.category === category.id)
                  .map((page, pageIndex) => (
                    <Link 
                      href={page.path} 
                      key={pageIndex} 
                      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100 overflow-hidden group"
                    >
                      <div className="p-6">
                        <div className="flex items-center mb-4">
                          <div className="bg-fire-100 p-3 rounded-full mr-4 group-hover:bg-fire-200 transition-colors">
                            {page.icon}
                          </div>
                          <h3 className="text-xl font-semibold">{page.title}</h3>
                        </div>
                        <p className="text-gray-700 mb-4">{page.description}</p>
                        <p className="text-gray-600 text-sm">{page.longDescription}</p>
                        <div className="mt-6 text-fire-600 font-medium group-hover:text-fire-700 flex items-center">
                          Learn More
                          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Footer />
    </main>
  );
} 