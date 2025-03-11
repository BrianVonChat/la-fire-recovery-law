import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ContactForm from '../../components/ContactForm';
import Link from 'next/link';
import Image from 'next/image';
import { FaFire, FaCalendarAlt, FaMapMarkerAlt, FaUsers, FaHome, FaBuilding, FaArrowRight } from 'react-icons/fa';

export const metadata = {
  title: 'Eaton Fire Recovery | LA Fire Recovery Law',
  description: 'Legal assistance for victims of the January 2025 Eaton Fire in Los Angeles. Get help with insurance claims, property damage, and personal injury cases.',
  keywords: 'Eaton fire, fire insurance claims, property damage, Los Angeles fire, fire recovery, legal help',
};

export default function EatonFirePage() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
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
          <div className="absolute inset-0 bg-gradient-to-r from-fire-900/65 via-fire-800/55 to-gray-900/55"></div>
        </div>
        
        <div className="container-custom relative z-10 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="flex items-center mb-6">
              <div className="bg-fire-600 p-3 rounded-lg mr-4">
                <FaFire className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white drop-shadow-sm">
                Eaton Fire Recovery
              </h1>
            </div>
            <p className="text-xl md:text-2xl mb-10 text-gray-100 font-light leading-relaxed">
              Expert legal assistance for victims of the January 2025 Eaton Fire in eastern Los Angeles County.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="tel:+1234567890" 
                className="btn btn-white group"
              >
                <span>Call For Free Consultation</span>
              </a>
              <Link 
                href="#contact-form" 
                className="btn btn-fire group"
              >
                <span>Get Started Now</span>
                <FaArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Fire Information */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-6">
              <div className="flex items-center mb-4">
                <div className="bg-fire-100 p-2 rounded-lg mr-3">
                  <FaCalendarAlt className="h-6 w-6 text-fire-600" />
                </div>
                <h3 className="text-xl font-bold">Date</h3>
              </div>
              <p className="text-gray-700">January 15-20, 2025</p>
            </div>
            
            <div className="card p-6">
              <div className="flex items-center mb-4">
                <div className="bg-fire-100 p-2 rounded-lg mr-3">
                  <FaMapMarkerAlt className="h-6 w-6 text-fire-600" />
                </div>
                <h3 className="text-xl font-bold">Location</h3>
              </div>
              <p className="text-gray-700">Eastern Los Angeles County</p>
            </div>
            
            <div className="card p-6">
              <div className="flex items-center mb-4">
                <div className="bg-fire-100 p-2 rounded-lg mr-3">
                  <FaUsers className="h-6 w-6 text-fire-600" />
                </div>
                <h3 className="text-xl font-bold">Impact</h3>
              </div>
              <p className="text-gray-700">500+ homes affected, thousands displaced</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Fire Details */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">About the Eaton Fire</h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  The Eaton Fire began on January 15, 2025, in eastern Los Angeles County and quickly spread through residential areas due to strong Santa Ana winds and dry conditions. The fire burned for five days before being fully contained on January 20.
                </p>
                <p>
                  This devastating fire affected over 500 homes, with approximately 200 completely destroyed and 300 sustaining significant damage. Thousands of residents were evacuated, and many lost not only their homes but also personal belongings, vehicles, and suffered business interruptions.
                </p>
                <p>
                  The cause of the fire is still under investigation, but preliminary reports suggest it may have been sparked by downed power lines during high winds.
                </p>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Common Legal Issues</h2>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="bg-fire-100 p-2 rounded-lg mr-4 mt-1 flex-shrink-0">
                    <FaHome className="h-6 w-6 text-fire-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Homeowner Insurance Claims</h3>
                    <p className="text-gray-700">
                      Many insurance companies are delaying, underpaying, or denying legitimate claims for fire damage.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-fire-100 p-2 rounded-lg mr-4 mt-1 flex-shrink-0">
                    <FaBuilding className="h-6 w-6 text-fire-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Business Interruption</h3>
                    <p className="text-gray-700">
                      Local businesses have suffered significant losses due to closures, evacuations, and damage.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-fire-100 p-2 rounded-lg mr-4 mt-1 flex-shrink-0">
                    <FaUsers className="h-6 w-6 text-fire-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Evacuation Expenses</h3>
                    <p className="text-gray-700">
                      Many residents incurred significant expenses during mandatory evacuations that should be covered.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* How We Can Help */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">How We Can Help Eaton Fire Victims</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card group p-8 hover:border-primary-200">
              <h3 className="text-xl font-bold mb-4">Insurance Claim Assistance</h3>
              <p className="text-gray-600 mb-6">
                We'll review your policy, document your losses, and negotiate with insurance companies to ensure you receive the full compensation you deserve.
              </p>
              <Link 
                href="/services/fire-insurance-claims" 
                className="inline-flex items-center text-primary-600 font-medium hover:text-primary-800 transition-colors"
              >
                Learn More
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </Link>
            </div>
            
            <div className="card group p-8 hover:border-primary-200">
              <h3 className="text-xl font-bold mb-4">Property Damage Claims</h3>
              <p className="text-gray-600 mb-6">
                Our team will help you document all property damage, from structural damage to personal belongings, to maximize your recovery.
              </p>
              <Link 
                href="/services/property-damage" 
                className="inline-flex items-center text-primary-600 font-medium hover:text-primary-800 transition-colors"
              >
                Learn More
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </Link>
            </div>
            
            <div className="card group p-8 hover:border-primary-200">
              <h3 className="text-xl font-bold mb-4">Business Loss Recovery</h3>
              <p className="text-gray-600 mb-6">
                If your business was affected by the Eaton Fire, we can help you recover lost income, inventory, and other business-related losses.
              </p>
              <Link 
                href="/services/business-loss" 
                className="inline-flex items-center text-primary-600 font-medium hover:text-primary-800 transition-colors"
              >
                Learn More
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Timeline */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-16 text-center">Important Deadlines for Eaton Fire Claims</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-fire-500"></div>
              
              {/* Timeline Items */}
              <div className="space-y-16">
                <div className="relative">
                  <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 w-10 h-10 rounded-full bg-fire-500 flex items-center justify-center z-10 mb-4 md:mb-0 shadow-lg">
                    <span className="font-bold">1</span>
                  </div>
                  <div className="md:w-5/12 md:ml-auto md:pl-10">
                    <h3 className="text-xl font-bold mb-3">Immediate</h3>
                    <p className="text-gray-300">
                      Notify your insurance company about your loss as soon as possible. Document all damage with photos and videos.
                    </p>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 w-10 h-10 rounded-full bg-fire-500 flex items-center justify-center z-10 mb-4 md:mb-0 shadow-lg">
                    <span className="font-bold">2</span>
                  </div>
                  <div className="md:w-5/12 md:mr-auto md:pr-10 md:text-right">
                    <h3 className="text-xl font-bold mb-3">60 Days</h3>
                    <p className="text-gray-300">
                      Submit a complete inventory of damaged or destroyed items to your insurance company.
                    </p>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 w-10 h-10 rounded-full bg-fire-500 flex items-center justify-center z-10 mb-4 md:mb-0 shadow-lg">
                    <span className="font-bold">3</span>
                  </div>
                  <div className="md:w-5/12 md:ml-auto md:pl-10">
                    <h3 className="text-xl font-bold mb-3">1 Year</h3>
                    <p className="text-gray-300">
                      File a lawsuit against your insurance company if they have denied or underpaid your claim.
                    </p>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 w-10 h-10 rounded-full bg-fire-500 flex items-center justify-center z-10 mb-4 md:mb-0 shadow-lg">
                    <span className="font-bold">4</span>
                  </div>
                  <div className="md:w-5/12 md:mr-auto md:pr-10 md:text-right">
                    <h3 className="text-xl font-bold mb-3">2 Years</h3>
                    <p className="text-gray-300">
                      Statute of limitations for personal injury claims related to the fire.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form */}
      <section id="contact-form" className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Get Help With Your Eaton Fire Claim</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't wait to get the legal help you need. Our team specializes in helping Eaton Fire victims recover what they've lost.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 