import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import QuickIntakeForm from '../components/QuickIntakeForm';
import Link from 'next/link';
import Image from 'next/image';
import { FaHotel, FaArrowRight, FaSearch, FaHandshake, FaBalanceScale } from 'react-icons/fa';

export const metadata = {
  title: 'Hotels & BnBs Impacted by LA Fires: Business Loss Recovery',
  description: 'Did the LA Fires cancel your bookings or damage your lodging? Get legal help to recover lost revenue and property repairs.',
  keywords: 'hotel fire damage, motel fire claims, BnB fire loss, LA fires hospitality business, lodging fire insurance',
};

export default function HotelMotelBnbFireDamageLossPage() {
  return (
    <main className="text-gray-800">
      <Header />
      
      {/* Hero Section */}
      <div className="relative text-white">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1568084680786-a84f91d1153c?q=80&w=2074&auto=format&fit=crop"
            alt="Hotel affected by fire damage"
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
                <FaHotel className="h-9 w-9 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white drop-shadow-sm tracking-tight">
                Hospitality Industry: Rebuild, Reopen, and Recover
              </h1>
            </div>
            <p className="text-xl md:text-2xl mb-12 text-white font-light leading-relaxed max-w-2xl tracking-wide">
              From canceled reservations to smoke-damaged rooms, get expert legal help to restore your hotel, motel, or BnB business after wildfire losses.
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
                  At LA Fire Recovery Law, we specialize in property damage and business loss claims to help you restore your hospitality business. Our experienced attorneys understand the unique challenges faced by hotels, motels, and bed & breakfast establishments after wildfires.
                </p>
                
                <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">Unique Challenges for Hospitality Businesses</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  When wildfires strike, lodging businesses face immediate and severe financial impacts. Beyond physical property damage, you may suffer extensive business interruption losses from canceled reservations, evacuations, and prolonged closures. Even properties spared from direct fire damage may experience significant losses from smoke damage, power outages, or road closures affecting guest access.
                </p>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">Comprehensive Recovery Strategies</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-10">
                  Our attorneys develop tailored legal strategies to address the complex challenges of hospitality industry claims. We understand the interplay between property damage, business interruption, and the unique seasonal nature of many lodging operations, particularly in vacation and tourist areas affected by the LA wildfires.
                </p>
              </div>
              
              <div className="mt-16 bg-gradient-to-br from-gray-50 to-gray-100 p-10 rounded-2xl border border-gray-200 shadow-sm">
                <h2 className="text-3xl font-bold mb-8 text-gray-900 tracking-tight">What We Provide:</h2>
                
                <div className="space-y-10">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-fire-100 p-3 rounded-full shadow-md">
                        <FaSearch className="h-6 w-6 text-fire-600" />
                      </div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Insurance policy reviews for business interruption coverage</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        We analyze your policies to identify all available coverage for lost income, including extended business interruption for the recovery period and extra expense coverage.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-fire-100 p-3 rounded-full shadow-md">
                        <FaHandshake className="h-6 w-6 text-fire-600" />
                      </div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Negotiations for property restoration costs and lost reservations</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        We advocate for fair compensation for both physical repairs and business income losses, including future bookings that were canceled due to the fire.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-fire-100 p-3 rounded-full shadow-md">
                        <FaBalanceScale className="h-6 w-6 text-fire-600" />
                      </div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Representation if negligence caused the wildfire</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        When wildfires result from utility company negligence or other third-party actions, we pursue additional compensation beyond insurance claims.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none mt-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">Common Hospitality Fire Claim Challenges</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Lodging businesses often face these specific challenges when pursuing fire claims:
                </p>
                
                <ul className="text-lg text-gray-700 space-y-4 mb-10">
                  <li><strong>Insurance disputes over business value</strong> especially for seasonal operations or recently established properties</li>
                  <li><strong>Smoke damage remediation</strong> that must meet heightened hospitality industry standards</li>
                  <li><strong>Code upgrade requirements</strong> that significantly increase renovation costs beyond basic restoration</li>
                  <li><strong>Extended recovery periods</strong> that continue to impact revenue long after repairs are complete</li>
                  <li><strong>Online reputation management</strong> that affects future bookings and recovery potential</li>
                </ul>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our attorneys understand these industry-specific issues and develop strategies to address them in your recovery plan. We work with hospitality business valuation experts, restoration specialists, and industry consultants to build compelling claims that maximize your recovery.
                </p>
                
                <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">Strategic Reopening and Future Protection</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Beyond immediate recovery, we help you develop a strategic reopening plan that incorporates business continuity planning, enhanced insurance coverage, and risk mitigation strategies for future fire seasons. Our goal is not just to help you reopen, but to emerge stronger and more resilient.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Don't let fire damage keep your doors closed longer than necessary. Our legal team will fight to secure the compensation you need to rebuild, reopen, and recover your hospitality business as quickly as possible.
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200 p-8 mb-8 shadow-sm">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">Discuss Your Hospitality Claim</h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    Get specialized legal help for your hotel, motel, or BnB fire damage and business interruption losses.
                  </p>
                  <QuickIntakeForm />
                </div>
                
                <div className="bg-gradient-to-br from-fire-50 to-fire-100/50 rounded-2xl border border-fire-200 p-8 shadow-sm">
                  <div className="flex items-center mb-6">
                    <div className="bg-fire-100 p-3 rounded-full mr-4 shadow-sm">
                      <FaHotel className="h-6 w-6 text-fire-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Reopen Your Doors</h3>
                  </div>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    We've helped numerous hospitality businesses recover millions in property damage, lost bookings, and business interruption claims after wildfire disasters.
                  </p>
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center bg-white px-4 py-3 rounded-full text-fire-600 font-bold border border-fire-200 shadow-sm">
                      Free Hospitality Claim Review
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Don't Let Your Business Stay Closed Longer Than It Has To</h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Our experienced legal team will help you navigate complex insurance claims and secure the compensation needed to rebuild your hospitality business.
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
                <span>No-Obligation Consultation</span>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Our Hospitality Claims Specialists</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our experienced attorneys understand the unique challenges faced by hotels, motels, and bed & breakfast owners after a fire. Let us help you reopen your doors.
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