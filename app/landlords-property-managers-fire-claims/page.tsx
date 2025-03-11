import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import SuspenseQuickIntakeForm from '../components/SuspenseQuickIntakeForm';
import Link from 'next/link';
import Image from 'next/image';
import { FaBuilding, FaArrowRight, FaFileInvoiceDollar, FaHandHoldingUsd, FaShieldAlt } from 'react-icons/fa';

export const metadata = {
  title: 'Landlords & Property Managers: Recover Damages from LA Fires',
  description: 'Has your rental property been destroyed in the LA Fires? We handle insurance claims, lost rent, and property restoration costs.',
  keywords: 'landlord fire claims, rental property damage, LA fires, property management fire loss, rental income loss',
};

export default function LandlordsPropertyManagersFireClaimsPage() {
  return (
    <main className="text-gray-800">
      <Header />
      
      {/* Hero Section */}
      <div className="relative text-white">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop"
            alt="Apartment building affected by fire"
            fill
            priority
            style={{ objectFit: 'cover' }}
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-fire-900/80 via-fire-800/70 to-gray-900/70"></div>
        </div>
        
        <div className="container-custom relative z-10 py-28 md:py-36">
          <div className="max-w-3xl">
            <div className="flex items-center mb-8">
              <div className="bg-fire-600 p-3 rounded-lg mr-5 shadow-lg">
                <FaBuilding className="h-9 w-9 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white drop-shadow-sm tracking-tight">
                Protect Your Investment: Landlords & Property Managers
              </h1>
            </div>
            <p className="text-xl md:text-2xl mb-12 text-white font-light leading-relaxed max-w-2xl tracking-wide">
              Are you grappling with fire-damaged rental units or lost income? Get expert legal help to protect your real estate investments.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <a 
                href="tel:+1234567890" 
                className="btn btn-white group text-lg px-8 py-4 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <span>Call For Free Consultation</span>
              </a>
              <Link 
                href="#contact-form" 
                className="btn btn-fire group text-lg px-8 py-4 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <span>Get Started Now</span>
                <FaArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <p className="lead text-2xl text-gray-700 mb-10 font-light leading-relaxed">
                  At LA Fire Recovery Law, we specialize in landlord-tenant fire claims, ensuring you recoup property restoration costs and lost rental income. Our experienced attorneys understand the unique challenges rental property owners face after a wildfire disaster.
                </p>
                
                <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">Comprehensive Recovery for Rental Properties</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  When wildfires damage your rental properties, you face complex challenges beyond just property damage. From displaced tenants and lost income to insurance coverage disputes and potential liability issues, rental property owners need specialized legal representation.
                </p>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">Balancing Property and Tenant Interests</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-10">
                  As a landlord or property manager, you must navigate the delicate balance of protecting your investments while also addressing tenant concerns. Our attorneys help you maintain positive tenant relationships while ensuring your financial interests are protected during the recovery process.
                </p>
              </div>
              
              <div className="mt-16 bg-gradient-to-br from-gray-50 to-gray-100 p-10 rounded-2xl border border-gray-200 shadow-sm">
                <h2 className="text-3xl font-bold mb-8 text-gray-900 tracking-tight">What We Cover:</h2>
                
                <div className="space-y-10">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-fire-100 p-3 rounded-full shadow-md">
                        <FaBuilding className="h-6 w-6 text-fire-600" />
                      </div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Insurance claims for building structure and landlord's furnishings</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        We ensure your insurance company properly values building damage, appliances, fixtures, and other owned property to maximize your recovery.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-fire-100 p-3 rounded-full shadow-md">
                        <FaFileInvoiceDollar className="h-6 w-6 text-fire-600" />
                      </div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Navigating loss of rent coverage if tenants must relocate</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        We help you recover lost rental income through business interruption coverage or other policy provisions while your property is being restored.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-fire-100 p-3 rounded-full shadow-md">
                        <FaShieldAlt className="h-6 w-6 text-fire-600" />
                      </div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Avoiding liability pitfalls for tenant claims</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        We provide guidance on tenant communications, lease obligations, and security deposit handling to prevent potential liability issues.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none mt-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">Common Landlord Fire Claim Challenges</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Rental property owners often face these specific obstacles after a wildfire:
                </p>
                
                <ul className="text-lg text-gray-700 space-y-4 mb-10">
                  <li><strong>Tenant lease uncertainty</strong> when units are damaged but not destroyed</li>
                  <li><strong>Insurance coverage gaps</strong> between landlord and tenant policies</li>
                  <li><strong>Fair Housing Act compliance</strong> during temporary relocations and rebuilding</li>
                  <li><strong>Mortgage obligations</strong> that continue despite loss of rental income</li>
                  <li><strong>Building code upgrades</strong> that increase restoration costs beyond policy limits</li>
                </ul>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our attorneys guide you through these complex issues, ensuring your recovery strategy addresses both immediate restoration needs and long-term financial protection for your investment properties.
                </p>
                
                <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">Rebuilding Your Rental Business</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Beyond immediate recovery, we help you develop a comprehensive strategy for rebuilding your rental business. This includes advice on insurance policy enhancements, lease provisions for future disasters, and property improvements that may reduce future fire risks.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our goal is not just to restore your property, but to help you emerge from the disaster with a stronger, more resilient rental business that's better protected against future losses.
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200 p-8 mb-8 shadow-sm">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">Discuss Your Landlord Claim</h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    Get specialized legal help for your rental property fire damage. Maximize your recovery while minimizing liability risks.
                  </p>
                  <SuspenseQuickIntakeForm />
                </div>
                
                <div className="bg-gradient-to-br from-fire-50 to-fire-100/50 rounded-2xl border border-fire-200 p-8 shadow-sm">
                  <div className="flex items-center mb-6">
                    <div className="bg-fire-100 p-3 rounded-full mr-4 shadow-sm">
                      <FaHandHoldingUsd className="h-6 w-6 text-fire-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Recover Lost Income</h3>
                  </div>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    We've helped landlords recover millions in property damage, lost rent, and additional expenses after wildfire disasters.
                  </p>
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center bg-white px-4 py-3 rounded-full text-fire-600 font-bold border border-fire-200 shadow-sm">
                      Free Landlord Claim Assessment
                    </div>
                  </div>
                  <div className="border-t border-fire-200 pt-6">
                    <a 
                      href="tel:+1234567890" 
                      className="block w-full py-4 text-center bg-fire-600 text-white rounded-lg font-medium hover:bg-fire-700 transition-colors shadow-md hover:shadow-lg"
                    >
                      Call Now: (123) 456-7890
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Safeguard Your Real Estate Investments</h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Don't let fire damage erode your property's value. Our legal team will help you recover and rebuild stronger than before.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a 
                href="tel:+1234567890" 
                className="btn btn-fire group text-lg px-8 py-4 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <span>Call For Free Consultation</span>
              </a>
              <Link 
                href="#contact-form" 
                className="btn btn-white group text-lg px-8 py-4 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <span>Explore Your Legal Options</span>
                <FaArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section id="contact-form" className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Our Landlord Claims Specialists</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our experienced attorneys understand the unique challenges rental property owners face after a fire. Let us help you protect your investment.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 