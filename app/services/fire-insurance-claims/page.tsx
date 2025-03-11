import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ContactForm from '../../components/ContactForm';
import Link from 'next/link';
import Image from 'next/image';
import { FaFireExtinguisher, FaArrowRight, FaHome, FaBuilding, FaFileInvoiceDollar, FaBalanceScale } from 'react-icons/fa';

export const metadata = {
  title: 'Fire Insurance Claims | LA Fire Recovery Law',
  description: 'Specialized legal services for homeowners, business owners, and individuals affected by the LA wildfires. Maximize your fire insurance claim compensation.',
  keywords: 'fire insurance claims, LA wildfires, property damage, insurance recovery, fire claim lawyer, fire loss attorney',
};

export default function FireInsuranceClaimsPage() {
  return (
    <main className="text-gray-800">
      <Header />
      
      {/* Hero Section */}
      <div className="relative text-white">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1602198089406-c96e4f7f4ea1?q=80&w=2070&auto=format&fit=crop"
            alt="Fire damaged property"
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
                <FaFireExtinguisher className="h-9 w-9 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white drop-shadow-sm tracking-tight">
                Fire Insurance Claims Services
              </h1>
            </div>
            <p className="text-xl md:text-2xl mb-12 text-white font-light leading-relaxed max-w-2xl tracking-wide">
              Expert legal representation to maximize your recovery after fire damage to your home, business, or property.
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
                  At LA Fire Recovery Law, we understand the devastation that wildfires can cause to your property and livelihood. Our team of specialized attorneys focuses exclusively on helping individuals and businesses recover the maximum compensation from their insurance providers after fire damage.
                </p>
                
                <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">Comprehensive Fire Insurance Claim Services</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  When wildfires strike, the aftermath can be overwhelming. Insurance companies often take advantage of this vulnerable time to minimize payouts and delay settlements. Our experienced attorneys level the playing field, ensuring you receive the full compensation you're entitled to under your policy.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="bg-fire-100 p-3 rounded-full mr-4">
                        <FaHome className="h-6 w-6 text-fire-600" />
                      </div>
                      <h3 className="text-xl font-bold">Residential Claims</h3>
                    </div>
                    <ul className="space-y-2 text-gray-700">
                      <li>- Homeowners insurance claims</li>
                      <li>- Renters property loss</li>
                      <li>- Condo and HOA complexities</li>
                      <li>- Additional living expenses</li>
                      <li>- Personal property inventories</li>
                    </ul>
                    <div className="mt-6">
                      <Link href="/homeowners-fire-claims" className="text-fire-600 font-semibold hover:text-fire-700 flex items-center">
                        Learn more
                        <FaArrowRight className="ml-2 h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="bg-fire-100 p-3 rounded-full mr-4">
                        <FaBuilding className="h-6 w-6 text-fire-600" />
                      </div>
                      <h3 className="text-xl font-bold">Commercial Claims</h3>
                    </div>
                    <ul className="space-y-2 text-gray-700">
                      <li>- Business interruption losses</li>
                      <li>- Commercial property damage</li>
                      <li>- Inventory and equipment loss</li>
                      <li>- Loss of income documentation</li>
                      <li>- Employee displacement issues</li>
                    </ul>
                    <div className="mt-6">
                      <Link href="/restaurant-bar-loss-of-income-fire-claims" className="text-fire-600 font-semibold hover:text-fire-700 flex items-center">
                        Learn more
                        <FaArrowRight className="ml-2 h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">Our Approach to Fire Insurance Claims</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-10">
                  Every wildfire claim is unique, but our methodology remains consistent: meticulous documentation, aggressive negotiation, and unwavering advocacy for our clients. We handle all aspects of your claim so you can focus on rebuilding your life.
                </p>
              </div>
              
              <div className="mt-16 bg-gradient-to-br from-gray-50 to-gray-100 p-10 rounded-2xl border border-gray-200 shadow-sm">
                <h2 className="text-3xl font-bold mb-8 text-gray-900 tracking-tight">How We Maximize Your Recovery</h2>
                
                <div className="space-y-10">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-fire-100 p-3 rounded-full shadow-md">
                        <FaFileInvoiceDollar className="h-6 w-6 text-fire-600" />
                      </div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Comprehensive Policy Analysis</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        We review every detail of your insurance policy to identify all available coverage, including hidden benefits that insurance adjusters may not disclose.
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
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Strategic Claim Negotiation</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        Our attorneys have decades of combined experience negotiating with insurance companies. We anticipate their tactics and counter with compelling evidence and legal arguments.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-fire-100 p-3 rounded-full shadow-md">
                        <FaHome className="h-6 w-6 text-fire-600" />
                      </div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Property Valuation Expertise</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        We work with industry-leading appraisers, contractors, and forensic accountants to accurately value your losses and substantiate your claim.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none mt-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">Fire Insurance Claim Types We Handle</h2>
                
                <div className="space-y-8 mb-12">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Dwelling & Structure Claims</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      We ensure proper valuation of your home's rebuilding costs, accounting for current construction prices and building code upgrades required by law.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Personal Property Claims</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Our team helps document and value all lost belongings, from everyday items to antiques and collectibles, ensuring proper replacement cost compensation.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Additional Living Expenses</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      If you've been displaced, we help recover costs for temporary housing, meals, and other necessary expenses while your home is uninhabitable.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Business Interruption Claims</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      For business owners, we calculate and substantiate lost income, ongoing expenses, and extra costs incurred due to fire damage.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Smoke and Ash Damage</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Even properties not directly burned can suffer significant smoke and ash damage. We help document these less visible but equally valid claims.
                    </p>
                  </div>
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our attorneys are experienced in addressing these complex scenarios, helping you navigate the claims process while maximizing your recovery at every step.
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200 p-8 mb-8 shadow-sm">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">Our Specialized Services</h3>
                  <div className="space-y-4">
                    <Link 
                      href="/homeowners-fire-claims" 
                      className="flex items-center p-4 bg-white rounded-xl border border-gray-200 hover:border-fire-200 transition-colors"
                    >
                      <div className="bg-fire-100 p-2 rounded-full mr-3">
                        <FaHome className="h-5 w-5 text-fire-600" />
                      </div>
                      <div>
                        <h4 className="font-bold">Homeowners Claims</h4>
                        <p className="text-sm text-gray-600">Residential property recovery</p>
                      </div>
                    </Link>
                    
                    <Link 
                      href="/renters-fire-claims" 
                      className="flex items-center p-4 bg-white rounded-xl border border-gray-200 hover:border-fire-200 transition-colors"
                    >
                      <div className="bg-fire-100 p-2 rounded-full mr-3">
                        <FaHome className="h-5 w-5 text-fire-600" />
                      </div>
                      <div>
                        <h4 className="font-bold">Renters Claims</h4>
                        <p className="text-sm text-gray-600">Personal property protection</p>
                      </div>
                    </Link>
                    
                    <Link 
                      href="/restaurant-bar-loss-of-income-fire-claims" 
                      className="flex items-center p-4 bg-white rounded-xl border border-gray-200 hover:border-fire-200 transition-colors"
                    >
                      <div className="bg-fire-100 p-2 rounded-full mr-3">
                        <FaBuilding className="h-5 w-5 text-fire-600" />
                      </div>
                      <div>
                        <h4 className="font-bold">Business Claims</h4>
                        <p className="text-sm text-gray-600">Commercial loss recovery</p>
                      </div>
                    </Link>
                    
                    <Link 
                      href="/vehicle-fire-damage-claims" 
                      className="flex items-center p-4 bg-white rounded-xl border border-gray-200 hover:border-fire-200 transition-colors"
                    >
                      <div className="bg-fire-100 p-2 rounded-full mr-3">
                        <FaFireExtinguisher className="h-5 w-5 text-fire-600" />
                      </div>
                      <div>
                        <h4 className="font-bold">Vehicle Damage</h4>
                        <p className="text-sm text-gray-600">Auto fire claim assistance</p>
                      </div>
                    </Link>
                    
                    <Link 
                      href="/all-fire-claim-services" 
                      className="flex items-center justify-center p-3 bg-fire-600 text-white rounded-xl hover:bg-fire-700 transition-colors font-medium mt-4"
                    >
                      View All Our Services
                      <FaArrowRight className="ml-2 h-3 w-3" />
                    </Link>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-fire-50 to-fire-100/50 rounded-2xl border border-fire-200 p-8 shadow-sm">
                  <div className="flex items-center mb-6">
                    <div className="bg-fire-100 p-3 rounded-full mr-4 shadow-sm">
                      <FaFireExtinguisher className="h-6 w-6 text-fire-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Free Claim Review</h3>
                  </div>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Our attorneys will analyze your policy, assess your damages, and determine the maximum compensation you're entitled to receive.
                  </p>
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center bg-white px-4 py-3 rounded-full text-fire-600 font-bold border border-fire-200 shadow-sm">
                      No Recovery, No Fee
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Don't Let Insurance Companies Shortchange Your Recovery</h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Our specialized fire insurance claim attorneys will fight for the maximum compensation you deserve after wildfire damage.
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
                <span>Start Your Claim Review</span>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Our Fire Insurance Claim Specialists</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Don't face the insurance company alone. Our experienced attorneys are ready to help you secure the compensation you deserve.
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