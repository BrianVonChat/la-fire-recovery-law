import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import SuspenseQuickIntakeForm from '../components/SuspenseQuickIntakeForm';
import Link from 'next/link';
import Image from 'next/image';
import { FaHardHat, FaArrowRight, FaTruck, FaFileContract, FaUserInjured } from 'react-icons/fa';

export const metadata = {
  title: 'Contractors Affected by LA Fires: Recoup Lost Projects & Equipment',
  description: 'Lost projects or equipment to the LA Fires? Our legal team helps contractors and construction companies claim damages and income losses.',
  keywords: 'contractor fire claims, construction company fire loss, equipment damage wildfire, LA fires construction, project delay fire damage',
};

export default function ContractorsConstructionPage() {
  return (
    <main className="text-gray-800">
      <Header />
      
      {/* Hero Section */}
      <div className="relative text-white">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
            alt="Construction site affected by fire"
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
                <FaHardHat className="h-9 w-9 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white drop-shadow-sm tracking-tight">
                Contractors: Protect Your Business When the Fires Strike
              </h1>
            </div>
            <p className="text-xl md:text-2xl mb-12 text-white font-light leading-relaxed max-w-2xl tracking-wide">
              Do you have unfinished contracts or equipment lost in the LA Fires? Get expert legal help to recover your losses and keep your construction business moving forward.
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
                  Whether you specialize in residential builds or commercial construction, we can help you recover lost materials, delay penalties, and business interruption costs. Our legal team understands the complex challenges contractors face when wildfires disrupt ongoing projects.
                </p>
                
                <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">Unique Challenges for Construction Businesses</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  When wildfires strike, construction companies face a cascade of complications beyond the immediate safety concerns. Ongoing projects may be damaged or become inaccessible, expensive equipment might be destroyed, and contractual obligations can become impossible to fulfill. These disruptions threaten not only your current revenue but also your company's reputation and future business opportunities.
                </p>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">Protecting Your Assets and Contractual Rights</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-10">
                  Construction companies often have significant capital invested in equipment, materials, and ongoing projects. Our attorneys help you navigate the complex insurance claims process to ensure you recover the full value of your losses. We also review your contracts to identify force majeure provisions and other clauses that may protect you from penalties for wildfire-related delays or non-performance.
                </p>
              </div>
              
              <div className="mt-16 bg-gradient-to-br from-gray-50 to-gray-100 p-10 rounded-2xl border border-gray-200 shadow-sm">
                <h2 className="text-3xl font-bold mb-8 text-gray-900 tracking-tight">We Help You With:</h2>
                
                <div className="space-y-10">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-fire-100 p-3 rounded-full shadow-md">
                        <FaTruck className="h-6 w-6 text-fire-600" />
                      </div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Insurance claims for equipment and materials</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        We help document and pursue claims for trucks, heavy machinery, building materials, and other valuable assets damaged or destroyed in the wildfires.
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
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Contract delay and cancellation damages</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        We review your contracts to identify provisions that protect you from penalties for wildfire-related delays and help negotiate fair compensation for projects impacted by the fires.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-fire-100 p-3 rounded-full shadow-md">
                        <FaUserInjured className="h-6 w-6 text-fire-600" />
                      </div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Workers' compensation guidance</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        We provide guidance on workers' compensation claims for employees injured during wildfire events and help ensure your business meets all legal obligations while protecting your interests.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none mt-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">Common Construction Industry Fire Claim Challenges</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our firm has helped contractors and construction companies overcome these specific obstacles:
                </p>
                
                <ul className="text-lg text-gray-700 space-y-4 mb-10">
                  <li><strong>Project timeline disputes</strong> with clients and subcontractors due to fire-related delays</li>
                  <li><strong>Equipment valuation challenges</strong> when specialized or custom machinery is damaged</li>
                  <li><strong>Business interruption calculations</strong> that account for seasonal construction patterns</li>
                  <li><strong>Material price increases</strong> that occur between the time of loss and project resumption</li>
                  <li><strong>Permit and inspection delays</strong> due to overwhelmed local government resources</li>
                  <li><strong>Workforce retention issues</strong> during extended project suspensions</li>
                </ul>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Each of these challenges requires specialized knowledge of both construction industry practices and disaster recovery law. Our attorneys bring experience in both areas to help you navigate these complex issues effectively.
                </p>
                
                <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">Rebuilding Your Construction Business</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Beyond immediate recovery, we help you develop strategies to strengthen your business against future disasters. This includes advice on contract language, insurance coverage optimization, and risk management practices that can protect your company from similar disruptions in the future.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Don't let the fire derail your company's momentum. Our goal is to help you not only recover your immediate losses but position your construction business for continued success in the rebuilding efforts that will follow these wildfires.
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200 p-8 mb-8 shadow-sm">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">Discuss Your Construction Claim</h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    Get specialized legal help for your construction company's fire-related losses and contract issues.
                  </p>
                  <SuspenseQuickIntakeForm />
                </div>
                
                <div className="bg-gradient-to-br from-fire-50 to-fire-100/50 rounded-2xl border border-fire-200 p-8 shadow-sm">
                  <div className="flex items-center mb-6">
                    <div className="bg-fire-100 p-3 rounded-full mr-4 shadow-sm">
                      <FaHardHat className="h-6 w-6 text-fire-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Contractor Support</h3>
                  </div>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    We've helped construction companies recover millions in equipment losses, contract damages, and business interruption claims after wildfire disasters.
                  </p>
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center bg-white px-4 py-3 rounded-full text-fire-600 font-bold border border-fire-200 shadow-sm">
                      Free Construction Claim Review
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Keep Your Construction Business Moving Forward</h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Don't let fire damage derail your projects and threaten your business. Our legal team will help you recover losses and get back to building.
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
                <span>Schedule Free Case Review</span>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Our Construction Claims Specialists</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our experienced attorneys understand the unique challenges faced by contractors and construction companies after a wildfire. Let us help you secure the compensation you deserve.
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