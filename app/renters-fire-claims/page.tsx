import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import QuickIntakeForm from '../components/QuickIntakeForm';
import Link from 'next/link';
import Image from 'next/image';
import { FaHome, FaArrowRight, FaShieldAlt, FaTshirt, FaHandHoldingUsd, FaFileContract } from 'react-icons/fa';

export const metadata = {
  title: 'Renters: Recover Personal Property Damages from LA Wildfires',
  description: 'Get help recovering your lost personal property as a renter affected by the LA Fires. We fight for fair compensation.',
  keywords: 'renters fire claims, LA fires, personal property, fire damage, renters insurance',
};

export default function RentersFireClaimsPage() {
  return (
    <main className="text-gray-800">
      <Header />
      
      {/* Hero Section */}
      <div className="relative text-white">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"
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
                <FaHome className="h-9 w-9 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white drop-shadow-sm tracking-tight">
                Renters: Don't Let Fire Damage Set You Back
              </h1>
            </div>
            <p className="text-xl md:text-2xl mb-12 text-white font-light leading-relaxed max-w-2xl tracking-wide">
              Even if you don't own your home, you still have a right to recover losses for personal property damaged or destroyed in the wildfires.
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
                  Our legal team at LA Fire Recovery Law can help you file a claim or pursue legal action against any responsible parties to recover your lost belongings and restore your life.
                </p>
                
                <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">Understanding Renters' Rights After a Fire</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  As a renter, you may feel uncertain about your rights after a fire has damaged or destroyed your apartment or rental home. While you don't own the building, you do own your personal belongings inside—and you have legal rights to seek compensation for those losses.
                </p>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">Your Personal Property Has Value</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-10">
                  From clothing and furniture to electronics and sentimental items, the value of your personal belongings can add up quickly. Most renters underestimate the true value of their possessions until they're lost. Our attorneys can help you properly document and value these items to ensure maximum recovery.
                </p>
              </div>
              
              <div className="mt-16 bg-gradient-to-br from-gray-50 to-gray-100 p-10 rounded-2xl border border-gray-200 shadow-sm">
                <h2 className="text-3xl font-bold mb-8 text-gray-900 tracking-tight">How We Assist Renters:</h2>
                
                <div className="space-y-10">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-fire-100 p-3 rounded-full shadow-md">
                        <FaShieldAlt className="h-6 w-6 text-fire-600" />
                      </div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Reviewing renter's insurance policies to ensure coverage</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        We analyze your policy to identify all available coverage for your personal property and temporary living expenses.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-fire-100 p-3 rounded-full shadow-md">
                        <FaTshirt className="h-6 w-6 text-fire-600" />
                      </div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Pursuing compensation for clothing, electronics, furniture, and valuables</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        We help inventory and document all your lost or damaged personal items to ensure proper compensation.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-fire-100 p-3 rounded-full shadow-md">
                        <FaFileContract className="h-6 w-6 text-fire-600" />
                      </div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Navigating landlord-tenant obligations post-fire</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        We'll help you understand your rights regarding your lease, security deposit, and landlord responsibilities after a fire.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-fire-100 p-3 rounded-full shadow-md">
                        <FaHandHoldingUsd className="h-6 w-6 text-fire-600" />
                      </div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Guiding you through government relief programs if you lack renter's insurance</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        Even without renter's insurance, we can help you access FEMA assistance, SBA loans, and other relief programs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none mt-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">Common Challenges for Renters After a Fire</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Renters face unique challenges following a fire that differ from homeowners:
                </p>
                
                <ul className="space-y-4 mb-10">
                  <li className="flex items-start">
                    <span className="inline-block bg-fire-100 rounded-full p-1 mr-3 mt-1.5">
                      <span className="block w-2 h-2 bg-fire-600 rounded-full"></span>
                    </span>
                    <span><strong className="font-bold">Displacement with limited options</strong> for temporary housing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block bg-fire-100 rounded-full p-1 mr-3 mt-1.5">
                      <span className="block w-2 h-2 bg-fire-600 rounded-full"></span>
                    </span>
                    <span><strong className="font-bold">Disputes with landlords</strong> over lease obligations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block bg-fire-100 rounded-full p-1 mr-3 mt-1.5">
                      <span className="block w-2 h-2 bg-fire-600 rounded-full"></span>
                    </span>
                    <span><strong className="font-bold">Insufficient documentation</strong> of personal property</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block bg-fire-100 rounded-full p-1 mr-3 mt-1.5">
                      <span className="block w-2 h-2 bg-fire-600 rounded-full"></span>
                    </span>
                    <span><strong className="font-bold">Insurance companies minimizing</strong> the value of lost items</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block bg-fire-100 rounded-full p-1 mr-3 mt-1.5">
                      <span className="block w-2 h-2 bg-fire-600 rounded-full"></span>
                    </span>
                    <span><strong className="font-bold">Uncertainty about rights</strong> when a landlord's negligence contributed to the fire</span>
                  </li>
                </ul>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-10">
                  Our attorneys understand these challenges and can help you navigate each one effectively. We'll work to ensure you're not left bearing the financial burden of fire losses that should be covered by insurance or other responsible parties.
                </p>
                
                <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">Why You Need Legal Representation</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Insurance companies often take advantage of renters' lack of knowledge about their rights. With our legal team on your side, you'll have experienced advocates who understand the complexities of renter's insurance claims and can stand up to insurance adjusters who may try to minimize your losses.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Don't let your status as a renter diminish the value of your claim. Your possessions matter, and you deserve fair compensation for everything you've lost.
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-10 shadow-lg">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">Get Your Free Evaluation</h3>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Ready to reclaim your lost belongings and peace of mind? Contact us today.
                  </p>
                  <QuickIntakeForm />
                </div>
                
                <div className="bg-gradient-to-br from-fire-50 to-fire-100 rounded-2xl border border-fire-200 p-8 shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="bg-white p-3 rounded-full mr-4 shadow-md">
                      <FaShieldAlt className="h-7 w-7 text-fire-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Protect Your Rights</h3>
                  </div>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Even without renter's insurance, you may have options for recovery. Don't give up without exploring all possibilities.
                  </p>
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center bg-white px-6 py-3 rounded-full text-fire-600 font-bold text-lg border border-fire-200 shadow-md">
                      Free Case Assessment
                    </div>
                  </div>
                  <div className="border-t border-fire-200 pt-6">
                    <a 
                      href="tel:+1234567890" 
                      className="block w-full py-4 text-center bg-fire-600 text-white rounded-lg font-bold text-lg shadow-md hover:bg-fire-700 hover:shadow-lg transition-all duration-300"
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
      <section className="py-20 bg-gradient-to-r from-gray-900 to-fire-900 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">Don't Face Fire Losses Alone</h2>
            <p className="text-xl text-gray-200 mb-10 leading-relaxed">
              Our experienced attorneys can help you navigate insurance claims, landlord disputes, and recovery options.
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
                <span>Request a Free Evaluation</span>
                <FaArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section id="contact-form" className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 tracking-tight">Contact Our Renter's Claims Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Fill out the form below, and one of our attorneys who specializes in renter's fire claims will contact you within 24 hours.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 