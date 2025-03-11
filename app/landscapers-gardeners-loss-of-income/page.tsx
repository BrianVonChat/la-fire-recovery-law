import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import QuickIntakeForm from '../components/QuickIntakeForm';
import Link from 'next/link';
import Image from 'next/image';
import { FaTree, FaArrowRight, FaFileContract, FaMoneyBillWave, FaTools, FaHandHoldingUsd } from 'react-icons/fa';

export const metadata = {
  title: 'Landscapers & Gardeners: Recover Lost Income from LA Fires',
  description: 'If your landscaping or gardening business suffered income loss due to the LA Fires, we can help you claim damages or insurance funds.',
  keywords: 'landscaper fire claims, gardener loss of income, LA fires, business interruption, fire damage',
};

export default function LandscapersGardenersLossOfIncomePage() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <div className="relative text-white">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1623237436204-0e9efaca4dc8?q=80&w=1932&auto=format&fit=crop"
            alt="Landscaper working in garden"
            fill
            priority
            style={{ objectFit: 'cover' }}
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-fire-900/80 via-fire-800/70 to-gray-900/70"></div>
        </div>
        
        <div className="container-custom relative z-10 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="flex items-center mb-6">
              <div className="bg-fire-600 p-3 rounded-lg mr-4">
                <FaTree className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white drop-shadow-sm">
                Landscapers & Gardeners: Rebuild Your Business After the Fires
              </h1>
            </div>
            <p className="text-xl md:text-2xl mb-10 text-gray-100 font-light leading-relaxed">
              When wildfires strike, landscapers and gardeners often lose weeks or even months of income due to property damage, evacuation orders, and canceled contracts.
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
      
      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <p className="lead text-xl text-gray-700">
                  At LA Fire Recovery Law, our lawyers help you pursue insurance and liability claims for lost revenue, damaged equipment, and future bookings.
                </p>
                
                <h2>Understanding Income Loss for Landscaping Professionals</h2>
                <p>
                  As a landscaper or gardener, your livelihood depends on access to properties and the ability to deliver consistent service. When wildfires force evacuations or destroy landscapes, your business suffers immediate and sometimes long-term financial impacts that can be devastating without proper compensation.
                </p>
                
                <h3>Business Interruption Claims for Service Professionals</h3>
                <p>
                  Many landscapers and gardeners don't realize they may have avenues for recovering lost income after a wildfire. Whether through business insurance, liability claims against responsible parties, or government assistance programs, our attorneys can help identify and pursue all potential sources of compensation.
                </p>
              </div>
              
              <div className="mt-12 bg-gray-50 p-8 rounded-xl border border-gray-100">
                <h2 className="text-2xl font-bold mb-6">Services We Offer:</h2>
                
                <div className="space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-fire-100 p-2 rounded-full">
                        <FaFileContract className="h-5 w-5 text-fire-600" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold">Reviewing business interruption insurance or commercial policies</h3>
                      <p className="text-gray-600">
                        We analyze your existing coverage to identify all potential claims for income loss, equipment damage, and business expenses.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-fire-100 p-2 rounded-full">
                        <FaMoneyBillWave className="h-5 w-5 text-fire-600" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold">Filing loss of income claims if you cannot work due to fire-related closures</h3>
                      <p className="text-gray-600">
                        We help document your normal income, current losses, and projected future losses to maximize your recovery.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-fire-100 p-2 rounded-full">
                        <FaTools className="h-5 w-5 text-fire-600" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold">Recovering costs for damaged equipment and tools</h3>
                      <p className="text-gray-600">
                        We ensure your valuable equipment—from mowers to hand tools to specialized machinery—is properly valued and included in your claim.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-fire-100 p-2 rounded-full">
                        <FaHandHoldingUsd className="h-5 w-5 text-fire-600" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold">Seeking damages from negligent parties (if a utility or other entity caused the fire)</h3>
                      <p className="text-gray-600">
                        When wildfires are caused by negligence, we can help you pursue additional compensation from responsible parties.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none mt-12">
                <h2>Unique Challenges for Landscaping Businesses</h2>
                <p>
                  Landscapers and gardeners face specific challenges after wildfires that other businesses may not experience:
                </p>
                
                <ul>
                  <li><strong>Extended recovery periods</strong> as landscapes need time to regrow and properties are rebuilt</li>
                  <li><strong>Seasonal income variations</strong> that may complicate loss calculations</li>
                  <li><strong>Client relationships</strong> that may be permanently disrupted when clients relocate</li>
                  <li><strong>Smoke and ash contamination</strong> of soil and garden areas that require remediation</li>
                  <li><strong>Vehicle and equipment damage</strong> that limits your ability to resume operations</li>
                </ul>
                
                <p>
                  Our attorneys understand these industry-specific issues and can effectively communicate your losses to insurance companies, courts, and settlement negotiations. We ensure that all aspects of your business impact are considered, not just surface-level losses.
                </p>
                
                <h2>Rebuilding Your Landscaping Business</h2>
                <p>
                  We recognize that your business represents years of hard work building expertise, client relationships, and community reputation. Our goal is to help you secure the compensation needed to bridge the gap until you can fully resume operations, including coverage for:
                </p>
                <ul>
                  <li>Lost income based on historical earnings</li>
                  <li>Ongoing business expenses that continue during interruption</li>
                  <li>Equipment replacement or repair costs</li>
                  <li>Marketing expenses to rebuild your client base</li>
                  <li>Employee wages if you have staff you need to retain</li>
                </ul>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <div className="bg-gray-50 rounded-xl border border-gray-100 p-8 mb-8">
                  <h3 className="text-2xl font-bold mb-6">Get Your Free Consultation</h3>
                  <p className="text-gray-600 mb-6">
                    Let us help you restore your operations and secure your livelihood. Contact us today.
                  </p>
                  <QuickIntakeForm />
                </div>
                
                <div className="bg-fire-50 rounded-xl border border-fire-100 p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-fire-100 p-2 rounded-full mr-3">
                      <FaTree className="h-6 w-6 text-fire-600" />
                    </div>
                    <h3 className="text-xl font-bold">Specialized Business Recovery</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    We've helped numerous landscapers and gardeners recover lost income and get back to work after devastating wildfires.
                  </p>
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center bg-white px-4 py-2 rounded-full text-fire-600 font-bold border border-fire-200">
                      No Recovery, No Fee
                    </div>
                  </div>
                  <div className="border-t border-fire-100 pt-6">
                    <a 
                      href="tel:+1234567890" 
                      className="block w-full py-3 text-center bg-fire-600 text-white rounded-lg font-medium hover:bg-fire-700 transition-colors"
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
      <section className="py-16 bg-gray-900 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Don't Let Fire Disruption Ruin Your Business</h2>
            <p className="text-xl text-gray-300 mb-8">
              Our specialized legal team understands the landscaping industry and can help you recover lost income and rebuild your client base.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="tel:+1234567890" 
                className="btn btn-fire group"
              >
                <span>Call For Free Consultation</span>
              </a>
              <Link 
                href="#contact-form" 
                className="btn btn-white group"
              >
                <span>Start Your Claim Now</span>
                <FaArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section id="contact-form" className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Contact Our Business Loss Recovery Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fill out the form below, and one of our attorneys who specializes in landscaping business claims will contact you within 24 hours.
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