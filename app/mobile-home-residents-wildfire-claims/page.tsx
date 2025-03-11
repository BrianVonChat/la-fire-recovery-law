import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import QuickIntakeForm from '../components/QuickIntakeForm';
import Link from 'next/link';
import Image from 'next/image';
import { FaHome, FaArrowRight, FaFileAlt, FaExchangeAlt, FaShoppingBag, FaHandHoldingUsd } from 'react-icons/fa';

export const metadata = {
  title: 'Mobile Home Fire Claims: Secure Your Property & Living Expense Recovery',
  description: 'Mobile and manufactured home owners often face unique challenges in wildfire claims. We can help you maximize your settlement.',
  keywords: 'mobile home fire claims, manufactured home damage, LA fires, wildfire insurance, mobile home community recovery',
};

export default function MobileHomeResidentsWildfireClaimsPage() {
  return (
    <main className="text-gray-800">
      <Header />
      
      {/* Hero Section */}
      <div className="relative text-white">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1566908829550-e6551b00979b?q=80&w=2069&auto=format&fit=crop"
            alt="Mobile home community affected by fire"
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
                Mobile Home Residents: Don't Let the Fire Displace You Forever
              </h1>
            </div>
            <p className="text-xl md:text-2xl mb-12 text-white font-light leading-relaxed max-w-2xl tracking-wide">
              Has your mobile or manufactured home been destroyed or damaged beyond repair? Get the legal help you need to secure fair compensation.
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
                  The LA wildfires often leave mobile home communities particularly vulnerable. At LA Fire Recovery Law, we ensure you receive fair compensation from your specialized mobile home insurance or disaster assistance programs.
                </p>
                
                <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">Unique Challenges for Mobile Home Owners</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Mobile and manufactured homes are often subject to different insurance rules and valuation methods than traditional homes. When wildfires strike, the damage can be catastrophic, and many owners face significant gaps in their coverage or disputes with insurance companies over fair valuation and replacement costs.
                </p>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">Manufactured Home-Specific Recovery Strategies</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-10">
                  Our attorneys understand the unique challenges faced by mobile home owners, including park lease agreements, title issues, and specialized insurance policies. We develop tailored strategies to address these complexities and maximize your recovery so you can rebuild or relocate with dignity.
                </p>
              </div>
              
              <div className="mt-16 bg-gradient-to-br from-gray-50 to-gray-100 p-10 rounded-2xl border border-gray-200 shadow-sm">
                <h2 className="text-3xl font-bold mb-8 text-gray-900 tracking-tight">We Provide:</h2>
                
                <div className="space-y-10">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-fire-100 p-3 rounded-full shadow-md">
                        <FaFileAlt className="h-6 w-6 text-fire-600" />
                      </div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Policy reviews specific to manufactured homes</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        We carefully analyze your insurance policy to identify all available coverage options and ensure the insurer honors their obligations under your specific policy type.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-fire-100 p-3 rounded-full shadow-md">
                        <FaExchangeAlt className="h-6 w-6 text-fire-600" />
                      </div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Assistance with relocation expenses and alternative housing</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        We help you secure funds for temporary housing and navigate the complex process of finding permanent replacement housing after a fire.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-fire-100 p-3 rounded-full shadow-md">
                        <FaShoppingBag className="h-6 w-6 text-fire-600" />
                      </div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Advocacy for evacuation costs and personal property losses</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        We document and fight for compensation for all your losses, from the structure itself to your personal belongings and the expenses incurred during evacuation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none mt-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">Common Mobile Home Fire Claim Issues</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Mobile home residents often face these specific challenges after a wildfire:
                </p>
                
                <ul className="text-lg text-gray-700 space-y-4 mb-10">
                  <li><strong>Undervaluation of mobile homes</strong> by insurers who fail to account for market values and improvements</li>
                  <li><strong>Lot lease complications</strong> when the land and home are owned by different parties</li>
                  <li><strong>Outdated replacement cost provisions</strong> that don't account for modern manufactured home prices</li>
                  <li><strong>Park regulations</strong> that may restrict rebuilding options or require upgrades</li>
                  <li><strong>Title issues</strong> that can complicate insurance claims and disaster assistance eligibility</li>
                </ul>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our attorneys are familiar with these unique obstacles and know how to overcome them. We've helped numerous mobile home owners secure the funds they need to recover after devastating wildfires.
                </p>
                
                <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">Navigating Mobile Home Park Rules Post-Fire</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  When your mobile home is located within a park or community, the recovery process can be even more complex. Many residents face uncertainty about their right to rebuild, potential rent increases, or even the risk that the entire park might close or redevelop after a fire.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our legal team helps you understand your rights under California's mobile home residency laws and works to protect your interests throughout the recovery process. We'll advocate on your behalf with park management, insurers, and assistance programs to ensure you aren't unfairly displaced from your community.
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200 p-8 mb-8 shadow-sm">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">Discuss Your Mobile Home Claim</h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    Get specialized legal help for your manufactured home fire damage. We understand the unique challenges you face.
                  </p>
                  <QuickIntakeForm />
                </div>
                
                <div className="bg-gradient-to-br from-fire-50 to-fire-100/50 rounded-2xl border border-fire-200 p-8 shadow-sm">
                  <div className="flex items-center mb-6">
                    <div className="bg-fire-100 p-3 rounded-full mr-4 shadow-sm">
                      <FaHandHoldingUsd className="h-6 w-6 text-fire-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Maximum Recovery</h3>
                  </div>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    We've helped mobile home residents recover full replacement value, relocation expenses, and compensation for personal property losses after wildfires.
                  </p>
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center bg-white px-4 py-3 rounded-full text-fire-600 font-bold border border-fire-200 shadow-sm">
                      Free Mobile Home Claim Review
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Take the First Step to Rebuild Your Life</h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Don't let insurance companies undervalue your mobile home. Our legal team will fight for the maximum compensation you deserve.
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
                <span>Start Your Claim Now</span>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Our Mobile Home Claims Specialists</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Talk to our legal team today about your mobile or manufactured home fire damage. We understand the unique challenges you face.
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