import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import QuickIntakeForm from '../components/QuickIntakeForm';
import Link from 'next/link';
import Image from 'next/image';
import { FaCarSide, FaArrowRight, FaExchangeAlt, FaFileInvoiceDollar, FaSmog, FaCarCrash } from 'react-icons/fa';

export const metadata = {
  title: 'Vehicle Damage in LA Wildfires: Secure Your Insurance Payout',
  description: 'Has your car, motorcycle, or RV suffered fire damage? Our LA Fire Recovery attorneys help you navigate your auto insurance claim.',
  keywords: 'vehicle fire damage, car fire claims, LA fires, auto insurance, fire compensation',
};

export default function VehicleFireDamageClaimsPage() {
  return (
    <main className="text-gray-800">
      <Header />
      
      {/* Hero Section */}
      <div className="relative text-white">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1580274455191-1c62238fa333?q=80&w=2070&auto=format&fit=crop"
            alt="Vehicle damaged by fire"
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
                <FaCarSide className="h-9 w-9 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white drop-shadow-sm tracking-tight">
                Vehicle Owners: Get Full Coverage for Fire Damage
              </h1>
            </div>
            <p className="text-xl md:text-2xl mb-12 text-white font-light leading-relaxed max-w-2xl tracking-wide">
              Has your car, motorcycle, or RV been destroyed or significantly damaged by the LA Fires?
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
                  At LA Fire Recovery Law, we ensure insurance companies honor comprehensive coverage for fire damage, smoke damage, or total loss of your vehicle.
                </p>
                
                <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">Understanding Vehicle Fire Damage Claims</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  When wildfires strike, vehicles are often damaged or destroyed, leaving owners without transportation and facing complicated insurance claims. Whether your car, truck, motorcycle, or recreational vehicle suffered direct fire damage or extensive smoke contamination, you have rights under your insurance policy.
                </p>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">Comprehensive Coverage for Fire Damage</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-10">
                  Most auto insurance policies include comprehensive coverage that should protect your vehicle from fire damage. However, insurance companies frequently undervalue claims or attempt to deny coverage based on policy technicalities. Our attorneys are experienced in navigating these complexities to ensure you receive the full value of your claim.
                </p>
              </div>
              
              <div className="mt-16 bg-gradient-to-br from-gray-50 to-gray-100 p-10 rounded-2xl border border-gray-200 shadow-sm">
                <h2 className="text-3xl font-bold mb-8 text-gray-900 tracking-tight">Why Choose Us?</h2>
                
                <div className="space-y-10">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-fire-100 p-3 rounded-full shadow-md">
                        <FaExchangeAlt className="h-6 w-6 text-fire-600" />
                      </div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Detailed policy analysis to see if you qualify for a replacement vehicle</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        We review your policy to identify coverage for replacement costs versus actual cash value, ensuring maximum recovery.
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
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Negotiation with insurers for a fair settlement — avoid lowball offers</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        Insurance adjusters often undervalue vehicles. We use market data and expert assessments to counter their lowball offers.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-fire-100 p-3 rounded-full shadow-md">
                        <FaSmog className="h-6 w-6 text-fire-600" />
                      </div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Guidance on smoke damage and diminished value claims</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        Even vehicles without visible fire damage may suffer from smoke contamination that affects their value and performance.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-fire-100 p-3 rounded-full shadow-md">
                        <FaCarCrash className="h-6 w-6 text-fire-600" />
                      </div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Guidance on underinsured motorist and optional coverage claims</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        We identify all potential sources of recovery, including specialized policy provisions you may not be aware of.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none mt-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">Common Vehicle Fire Damage Issues</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Vehicle owners often face these challenges when dealing with fire insurance claims:
                </p>
                
                <ul className="text-lg text-gray-700 space-y-4 mb-10">
                  <li><strong>Total loss disputes</strong> when insurance companies refuse to declare a fire-damaged vehicle a total loss</li>
                  <li><strong>Valuation discrepancies</strong> that don't account for recent upgrades or the vehicle's true market value</li>
                  <li><strong>Rental car coverage limitations</strong> while your claim is being processed</li>
                  <li><strong>Hidden smoke damage</strong> that affects electronic components and air systems</li>
                  <li><strong>Loan/lease payoff gaps</strong> when the insurance settlement doesn't cover your outstanding balance</li>
                </ul>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our attorneys are familiar with these tactics and know how to address each issue effectively. We work to ensure your settlement covers not just the vehicle itself, but also related expenses like rental cars, personal items inside the vehicle, and diminished value.
                </p>
                
                <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">Protecting Your Transportation After a Fire</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Your vehicle is often essential to your livelihood and daily functioning. After a fire, you need reliable transportation to rebuild your life. Don't settle for less than what you deserve from your insurance company. Our legal team will fight for your rights and ensure you have the resources to replace or repair your vehicle properly.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Don't sign any settlement offer without consulting our attorneys first. Insurance companies often pressure claimants to accept quick, undervalued settlements before they understand their full rights.
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200 p-8 mb-8 shadow-sm">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">Discuss Your Vehicle Claim</h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    Don't settle for less. Contact us to discuss how we can get you the compensation you're entitled to.
                  </p>
                  <QuickIntakeForm />
                </div>
                
                <div className="bg-gradient-to-br from-fire-50 to-fire-100/50 rounded-2xl border border-fire-200 p-8 shadow-sm">
                  <div className="flex items-center mb-6">
                    <div className="bg-fire-100 p-3 rounded-full mr-4 shadow-sm">
                      <FaCarSide className="h-6 w-6 text-fire-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Get Back on the Road</h3>
                  </div>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    We've helped vehicle owners recover full replacement value for cars, motorcycles, RVs, and specialty vehicles damaged in wildfires.
                  </p>
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center bg-white px-4 py-3 rounded-full text-fire-600 font-bold border border-fire-200 shadow-sm">
                      Free Vehicle Claim Review
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Don't Let Insurers Devalue Your Vehicle Claim</h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Our team knows how to maximize your vehicle fire damage settlement and get you back on the road quickly.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Our Vehicle Claims Specialists</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Don't wait to get the compensation you deserve. Our fire recovery attorneys are ready to review your case.
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