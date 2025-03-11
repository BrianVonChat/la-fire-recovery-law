import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import QuickIntakeForm from '../components/QuickIntakeForm';
import Link from 'next/link';
import Image from 'next/image';
import { FaFireAlt, FaSearchDollar, FaFileAlt, FaHome, FaArrowRight, FaClipboardCheck, FaComments, FaMoneyBillWave } from 'react-icons/fa';

export const metadata = {
  title: 'Homeowners Affected by LA Wildfires: Recover Full Insurance Benefits',
  description: 'If your home was damaged in the LA Fires, our experienced fire recovery attorneys can help you maximize your insurance claim.',
  keywords: 'homeowners fire claims, LA fires, insurance claims, property damage, fire recovery',
};

export default function HomeownersFireClaimsPage() {
  return (
    <main className="text-gray-800">
      <Header />
      
      {/* Hero Section */}
      <div className="relative text-white">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1625227123328-a1bbe6cf49c1?q=80&w=2070&auto=format&fit=crop"
            alt="Damaged home after a wildfire"
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
                Homeowners: Protect Your Rights and Recover Your Losses
              </h1>
            </div>
            <p className="text-xl md:text-2xl mb-12 text-white font-light leading-relaxed max-w-2xl tracking-wide">
              Were you forced to evacuate or suffer fire damage in the recent Eaton, Alta Dena, or Palisades fires?
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
                  At LA Fire Recovery Law, we focus on homeowner claims and work tirelessly to ensure you receive the maximum insurance compensation for property damage, additional living expenses, and lost belongings.
                </p>
                
                <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">How We Can Help Homeowners Affected by Fires</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  When your home is damaged or destroyed by fire, you're confronted with immediate challenges while trying to navigate complex insurance claims. Our experienced attorneys specialize in representing homeowners in fire recovery cases, ensuring you receive the full compensation you deserve.
                </p>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">We Handle All Aspects of Your Fire Insurance Claim</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-10">
                  Our comprehensive approach leaves no stone unturned. We'll review your entire insurance policy to identify all possible coverage, document your losses thoroughly, and aggressively negotiate with insurance companies who may try to minimize your payout.
                </p>
              </div>
              
              <div className="mt-16 bg-gradient-to-br from-gray-50 to-gray-100 p-10 rounded-2xl border border-gray-200 shadow-sm">
                <h2 className="text-3xl font-bold mb-8 text-gray-900 tracking-tight">Key Benefits for Homeowners:</h2>
                
                <div className="space-y-10">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-fire-100 p-3 rounded-full shadow-md">
                        <FaClipboardCheck className="h-6 w-6 text-fire-600" />
                      </div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Comprehensive insurance policy review to identify coverage gaps</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        We meticulously analyze your policy to uncover all available coverage, ensuring nothing is overlooked.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-fire-100 p-3 rounded-full shadow-md">
                        <FaComments className="h-6 w-6 text-fire-600" />
                      </div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Aggressive negotiation with insurance adjusters on your behalf</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        We know the tactics adjusters use to minimize payouts and have the expertise to counter them effectively.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-fire-100 p-3 rounded-full shadow-md">
                        <FaFileAlt className="h-6 w-6 text-fire-600" />
                      </div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Handling structural damage and personal property claims</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        From your home's foundation to your personal belongings, we ensure everything is properly documented and valued.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-fire-100 p-3 rounded-full shadow-md">
                        <FaMoneyBillWave className="h-6 w-6 text-fire-600" />
                      </div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">No upfront legal fees — we only get paid if we secure your compensation</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        Our contingency fee structure means you pay nothing unless we win your case.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none mt-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">Common Homeowner Challenges After a Fire</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Many homeowners face similar obstacles when dealing with insurance companies after a fire:
                </p>
                
                <ul className="space-y-4 mb-10">
                  <li className="flex items-start">
                    <span className="inline-block bg-fire-100 rounded-full p-1 mr-3 mt-1.5">
                      <span className="block w-2 h-2 bg-fire-600 rounded-full"></span>
                    </span>
                    <span><strong className="font-bold">Delay tactics</strong> by insurance companies hoping you'll settle for less</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block bg-fire-100 rounded-full p-1 mr-3 mt-1.5">
                      <span className="block w-2 h-2 bg-fire-600 rounded-full"></span>
                    </span>
                    <span><strong className="font-bold">Undervaluation</strong> of your property damage and personal belongings</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block bg-fire-100 rounded-full p-1 mr-3 mt-1.5">
                      <span className="block w-2 h-2 bg-fire-600 rounded-full"></span>
                    </span>
                    <span><strong className="font-bold">Denied claims</strong> for smoke damage, which can be extensive even without visible fire damage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block bg-fire-100 rounded-full p-1 mr-3 mt-1.5">
                      <span className="block w-2 h-2 bg-fire-600 rounded-full"></span>
                    </span>
                    <span><strong className="font-bold">Inadequate coverage</strong> for temporary housing and additional living expenses</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block bg-fire-100 rounded-full p-1 mr-3 mt-1.5">
                      <span className="block w-2 h-2 bg-fire-600 rounded-full"></span>
                    </span>
                    <span><strong className="font-bold">Disputes</strong> over policy interpretation and coverage limits</span>
                  </li>
                </ul>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-10">
                  Our attorneys have seen these tactics before and know exactly how to counter them. We'll fight tirelessly to ensure your rights are protected and you receive fair compensation for all your losses.
                </p>
                
                <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">Don't Delay in Seeking Legal Help</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Time is critical in fire insurance claims. Evidence can disappear, memories fade, and insurance companies count on your lack of documentation. Contact our experienced fire recovery attorneys today to protect your rights and maximize your recovery.
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-10 shadow-lg">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">Get Your Free Consultation</h3>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Don't let insurance red tape stand between you and the recovery you deserve.
                  </p>
                  <QuickIntakeForm />
                </div>
                
                <div className="bg-gradient-to-br from-fire-50 to-fire-100 rounded-2xl border border-fire-200 p-8 shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="bg-white p-3 rounded-full mr-4 shadow-md">
                      <FaSearchDollar className="h-7 w-7 text-fire-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Maximum Recovery</h3>
                  </div>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    We've helped homeowners recover millions in insurance claims after devastating fires.
                  </p>
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center bg-white px-6 py-3 rounded-full text-fire-600 font-bold text-lg border border-fire-200 shadow-md">
                      No Recovery, No Fee
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
            <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">Ready to Protect Your Home Investment?</h2>
            <p className="text-xl text-gray-200 mb-10 leading-relaxed">
              Our fire recovery specialists are standing by to review your case and help you navigate the complex insurance claim process.
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
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 tracking-tight">Contact Our Fire Recovery Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Fill out the form below, and one of our experienced homeowner claims attorneys will contact you within 24 hours.
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