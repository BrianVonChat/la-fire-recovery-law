import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { 
  FaFileAlt, 
  FaBuilding, 
  FaUserInjured, 
  FaHome, 
  FaDollarSign, 
  FaLeaf, 
  FaArrowRight, 
  FaPhone,
  FaCarSide,
  FaBriefcase,
  FaTree,
  FaUtensils,
  FaTractor,
  FaHotel,
  FaUsers,
  FaSchool,
  FaHammer,
  FaLaptop
} from 'react-icons/fa';

export const metadata = {
  title: 'Fire Recovery Legal Services | LA Fire Recovery Law',
  description: 'Comprehensive legal services for wildfire victims, including insurance claims, property damage, business loss, and personal injury representation.',
  keywords: 'fire insurance claims, property damage attorney, business loss recovery, personal injury lawyer, loss of income claims, fire victim legal services',
};

export default function ServicesPage() {
  // Main service categories
  const mainServices = [
    {
      id: 1,
      title: 'Fire Insurance Claims',
      description: 'We help you navigate complex insurance policies to ensure you receive the full compensation you deserve for your fire-related losses. Our attorneys have decades of experience dealing with insurance companies and know how to counter common tactics used to minimize or deny legitimate claims.',
      icon: <FaFileAlt className="h-12 w-12 text-primary-500" />,
      link: '/services/fire-insurance-claims',
      benefits: [
        'Policy review and coverage analysis',
        'Documentation of losses and damages',
        'Negotiation with insurance adjusters',
        'Appeals of denied or underpaid claims',
        'Bad faith insurance litigation when necessary'
      ]
    },
    {
      id: 2,
      title: 'Business Loss Recovery',
      description: 'Our team specializes in helping business owners recover lost income, property damage, and other business-related losses due to fires. We understand the complex nature of business interruption claims and work diligently to ensure your business can recover financially.',
      icon: <FaBuilding className="h-12 w-12 text-primary-500" />,
      link: '/services/business-loss',
      benefits: [
        'Business interruption claim assistance',
        'Lost revenue documentation and recovery',
        'Inventory and equipment loss valuation',
        'Employee wage reimbursement claims',
        'Business relocation assistance'
      ]
    },
    {
      id: 3,
      title: 'Personal Injury',
      description: "If you've suffered injuries from a fire, we'll fight to get you compensation for medical bills, pain and suffering, and lost wages. Fire-related injuries can be severe and life-changing, and we're committed to helping victims secure the resources needed for recovery.",
      icon: <FaUserInjured className="h-12 w-12 text-primary-500" />,
      link: '/services/personal-injury',
      benefits: [
        'Medical expense recovery',
        'Pain and suffering compensation',
        'Long-term care and rehabilitation costs',
        'Lost wages and diminished earning capacity',
        'Emotional distress and trauma claims'
      ]
    },
    {
      id: 4,
      title: 'Property Damage',
      description: 'We help homeowners and renters recover the full value of their damaged or destroyed property, including structures and personal belongings. Our attorneys work with professional assessors to ensure all damage is properly documented and fairly valued.',
      icon: <FaHome className="h-12 w-12 text-primary-500" />,
      link: '/services/property-damage',
      benefits: [
        'Structural damage assessment',
        'Personal property inventory assistance',
        'Smoke and water damage claims',
        'Temporary housing reimbursement',
        'Home rebuilding and restoration oversight'
      ]
    },
    {
      id: 5,
      title: 'Loss of Income',
      description: "If fires have prevented you from working, we'll help you recover lost wages and income through various legal channels. Whether you're an employee, independent contractor, or business owner, we have strategies to help recover your financial losses.",
      icon: <FaDollarSign className="h-12 w-12 text-primary-500" />,
      link: '/services/loss-of-income',
      benefits: [
        'Wage loss documentation and claims',
        'Self-employment income recovery',
        'Commission and bonus compensation',
        'Future income loss projections',
        'Disaster unemployment assistance applications'
      ]
    },
    {
      id: 6,
      title: 'Environmental Claims',
      description: 'We handle claims related to environmental damage from fires, including soil contamination, water quality issues, and destruction of natural resources. Our environmental law specialists work to secure compensation for property devaluation and remediation costs.',
      icon: <FaLeaf className="h-12 w-12 text-primary-500" />,
      link: '/services/environmental-claims',
      benefits: [
        'Soil and water contamination assessment',
        'Property value diminution claims',
        'Environmental remediation cost recovery',
        'Air quality impact documentation',
        'Long-term environmental monitoring'
      ]
    },
  ];

  // Client-specific services
  const clientServices = [
    {
      id: 1,
      title: 'Homeowners',
      description: 'Comprehensive legal support for homeowners dealing with property damage, insurance claims, and rebuilding challenges.',
      icon: <FaHome className="h-9 w-9 text-fire-600" />,
      link: '/homeowners-fire-claims',
    },
    {
      id: 2,
      title: 'Renters',
      description: 'Assistance with personal property claims, tenant rights after fires, and recovery of security deposits and prepaid rent.',
      icon: <FaBuilding className="h-9 w-9 text-fire-600" />,
      link: '/renters-fire-claims',
    },
    {
      id: 3,
      title: 'Vehicle Owners',
      description: 'Help with auto insurance claims for vehicles damaged or destroyed in wildfires, including valuation disputes.',
      icon: <FaCarSide className="h-9 w-9 text-fire-600" />,
      link: '/vehicle-fire-damage-claims',
    },
    {
      id: 4,
      title: 'Business Owners',
      description: 'Specialized legal services for business interruption, commercial property damage, and customer/revenue loss after fires.',
      icon: <FaBriefcase className="h-9 w-9 text-fire-600" />,
      link: '/office-retail-business-fire-claims',
    },
    {
      id: 5,
      title: 'Landscapers & Gardeners',
      description: 'Legal support for landscaping businesses facing income loss, equipment damage, and contract cancellations due to fires.',
      icon: <FaTree className="h-9 w-9 text-fire-600" />,
      link: '/landscapers-gardeners-loss-of-income',
    },
    {
      id: 6,
      title: 'Restaurant & Bar Owners',
      description: 'Specialized assistance for food service businesses dealing with property damage, food spoilage, and revenue loss.',
      icon: <FaUtensils className="h-9 w-9 text-fire-600" />,
      link: '/restaurant-bar-loss-of-income-fire-claims',
    },
    {
      id: 7,
      title: 'Farm & Agricultural Owners',
      description: 'Legal help for agricultural businesses with crop and livestock losses, equipment damage, and land remediation needs.',
      icon: <FaTractor className="h-9 w-9 text-fire-600" />,
      link: '/farm-owners-agricultural-loss',
    },
    {
      id: 8,
      title: 'Hotel & Rental Property Owners',
      description: 'Support for hospitality businesses with property damage, booking cancellations, and business interruption claims.',
      icon: <FaHotel className="h-9 w-9 text-fire-600" />,
      link: '/hotel-motel-bnb-fire-damage-loss',
    },
    {
      id: 9,
      title: 'HOA Boards & Residents',
      description: 'Legal guidance for homeowners associations dealing with common area damage, insurance disputes, and resident claims.',
      icon: <FaUsers className="h-9 w-9 text-fire-600" />,
      link: '/hoa-boards-and-residents-fire-claims',
    },
    {
      id: 10,
      title: 'Teachers & Childcare Providers',
      description: 'Assistance for educators and caregivers facing workplace disruption, lost materials, and employment challenges.',
      icon: <FaSchool className="h-9 w-9 text-fire-600" />,
      link: '/teachers-childcare-providers-fire-claims',
    },
    {
      id: 11,
      title: 'Contractors & Construction',
      description: 'Legal support for construction businesses with project disruptions, equipment losses, and contract disputes.',
      icon: <FaHammer className="h-9 w-9 text-fire-600" />,
      link: '/contractors-construction-wildfire-claims',
    },
    {
      id: 12,
      title: 'Freelancers & Independent Contractors',
      description: 'Help for self-employed professionals with income documentation, client loss, and business interruption recovery.',
      icon: <FaLaptop className="h-9 w-9 text-fire-600" />,
      link: '/freelancers-independent-contractors-fire-losses',
    },
  ];

  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-gray-900 to-primary-900 text-white py-20">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Comprehensive Fire Recovery Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 font-light leading-relaxed mb-8">
              Expert legal representation for all aspects of wildfire loss and recovery in Los Angeles.
            </p>
            <div className="h-1 w-24 bg-fire-500 mb-8"></div>
            <p className="text-gray-200 mb-6">
              At LA Fire Recovery Law, we provide a full range of legal services to help wildfire victims navigate insurance claims, property damage assessments, business interruption losses, and personal injury cases. Our experienced attorneys are dedicated to helping you receive the maximum compensation you deserve.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a 
                href="tel:+1800FIRELAW" 
                className="btn btn-fire group py-3 px-6"
              >
                <FaPhone className="mr-2" />
                Call For Free Consultation
              </a>
              <Link 
                href="/contact" 
                className="btn btn-outline-light group py-3 px-6"
              >
                Contact Us
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
        
        {/* Background pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:16px_16px]"></div>
      </div>
      
      {/* Main Services Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-fire-700 font-medium mb-3 tracking-wide uppercase">Our Expertise</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Core Legal Services</h2>
            <div className="w-24 h-1 bg-fire-700 mx-auto mb-6 opacity-70"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive legal support to help you recover from every aspect of wildfire damage and loss.
            </p>
          </div>
          
          <div className="space-y-12">
            {mainServices.map((service) => (
              <div 
                key={service.id} 
                className="bg-gray-50 rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-8">
                    <div className="flex items-center mb-6">
                      <div className="bg-white text-gray-700 p-4 rounded-lg mr-5 shadow-sm">
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">How We Help:</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {service.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start">
                            <span className="mr-2 text-fire-600 mt-1">•</span>
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Link 
                      href={service.link}
                      className="inline-flex items-center text-fire-700 font-medium hover:text-fire-800 transition-colors"
                    >
                      <span>Learn More About {service.title}</span>
                      <FaArrowRight className="ml-2 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                  
                  <div className="lg:col-span-4 bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                      <FaPhone className="h-4 w-4 mr-2 text-fire-600" />
                      Get {service.title} Help Now
                    </h4>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      Our specialized attorneys can provide immediate guidance on your {service.title.toLowerCase()} case. Don't delay in seeking the compensation you deserve.
                    </p>
                    <a 
                      href="tel:+1800FIRELAW" 
                      className="btn btn-fire w-full justify-center mb-3"
                    >
                      <FaPhone className="mr-2" />
                      Call For Free Assessment
                    </a>
                    <Link 
                      href="/contact" 
                      className="btn btn-outline-primary w-full justify-center"
                    >
                      Contact Online
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Client-Specific Services */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-fire-700 font-medium mb-3 tracking-wide uppercase">Targeted Solutions</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Services By Client Type</h2>
            <div className="w-24 h-1 bg-fire-700 mx-auto mb-6 opacity-70"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer specialized legal services for different types of fire victims, tailored to your specific situation and needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clientServices.map((service) => (
              <Link 
                key={service.id}
                href={service.link}
                className="bg-white rounded-lg border border-gray-100 p-6 hover:shadow-lg transition-shadow group"
              >
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <div className="text-fire-700 font-medium flex items-center">
                  <span>View Services</span>
                  <FaArrowRight className="ml-2 h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-gray-100 mb-8 leading-relaxed">
                Our team of experienced fire recovery attorneys is ready to help you navigate the complex process of recovering what you've lost. Contact us today for a free, no-obligation consultation.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="tel:+1800FIRELAW" 
                  className="btn btn-fire-light group py-3 px-6"
                >
                  <FaPhone className="mr-2" />
                  Call Now
                </a>
                <Link 
                  href="/contact" 
                  className="btn btn-outline-light group py-3 px-6"
                >
                  Schedule Consultation
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">Our Service Guarantee</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="mr-3 text-fire-400 mt-1">•</span>
                  <span>Free initial consultations with no obligation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-fire-400 mt-1">•</span>
                  <span>No fees unless we recover compensation for you</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-fire-400 mt-1">•</span>
                  <span>Experienced attorneys dedicated to your case</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-fire-400 mt-1">•</span>
                  <span>Regular updates and transparent communication</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-fire-400 mt-1">•</span>
                  <span>Proven results for Los Angeles fire victims</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 