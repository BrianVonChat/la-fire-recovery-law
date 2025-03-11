import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import QuickIntakeForm from '../components/QuickIntakeForm';
import Link from 'next/link';
import Image from 'next/image';
import { FaTractor, FaArrowRight, FaLeaf, FaSeedling, FaClipboardCheck, FaFileInvoiceDollar } from 'react-icons/fa';

export const metadata = {
  title: 'Farm Owners & Agricultural Workers: Secure Wildfire Compensation',
  description: 'Crops destroyed in LA Fires? Our firm helps farmers, ranchers, and ag workers recover losses and protect their livelihoods.',
  keywords: 'agricultural fire claims, farm fire damage, LA fires, crop loss, livestock compensation',
};

export default function FarmOwnersAgriculturalLossPage() {
  return (
    <main className="text-gray-800">
      <Header />
      
      {/* Hero Section */}
      <div className="relative text-white">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1500076656116-558758c991c1?q=80&w=2071&auto=format&fit=crop"
            alt="Agricultural land affected by fire"
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
                <FaTractor className="h-9 w-9 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white drop-shadow-sm tracking-tight">
                Farmers & Ranchers: Reclaim Your Agricultural Losses
              </h1>
            </div>
            <p className="text-xl md:text-2xl mb-12 text-white font-light leading-relaxed max-w-2xl tracking-wide">
              Smoke damage, burned crops, and destroyed livestock are only a few of the catastrophic losses farmers face during the LA Fires.
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
                  Our legal team knows agricultural claims, from specialized crop insurance to liability suits if a negligent utility sparked the flames.
                </p>
                
                <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">Understanding Agricultural Fire Losses</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Farms and ranches are uniquely vulnerable to wildfire damage. Your livelihood depends on physical assets—soil, plants, animals, and equipment—that can't simply be relocated when fire threatens. Beyond the immediate loss, the effects can extend for seasons or even years as you work to restore damaged land and rebuild livestock operations.
                </p>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">The Far-Reaching Impact on Agricultural Operations</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-10">
                  Even when flames don't directly touch your property, smoke contamination can render crops unmarketable, while evacuation orders and power outages can disrupt critical operations like irrigation, milking, or harvesting. Our attorneys understand these unique agricultural challenges and will help document and recover these consequential losses.
                </p>
              </div>
              
              <div className="mt-16 bg-gradient-to-br from-gray-50 to-gray-100 p-10 rounded-2xl border border-gray-200 shadow-sm">
                <h2 className="text-3xl font-bold mb-8 text-gray-900 tracking-tight">We Handle:</h2>
                
                <div className="space-y-10">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-fire-100 p-3 rounded-full shadow-md">
                        <FaLeaf className="h-6 w-6 text-fire-600" />
                      </div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Crop loss assessments and insurance claims</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        We work with agricultural experts to document yield reduction, quality degradation, and market value losses for all affected crops.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-fire-100 p-3 rounded-full shadow-md">
                        <FaSeedling className="h-6 w-6 text-fire-600" />
                      </div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Livestock replacement costs and lost breeding stock</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        We ensure proper valuation of animals lost, including their genetic value, future production potential, and organic certification premiums.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-fire-100 p-3 rounded-full shadow-md">
                        <FaClipboardCheck className="h-6 w-6 text-fire-600" />
                      </div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Business interruption coverage for farm operations</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        We'll help document ongoing expenses, lost revenue, and additional costs incurred during the recovery period when normal operations are impossible.
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
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Lawsuits against responsible parties for fire damages</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        When negligence by utilities or other entities causes fires, we can pursue additional compensation beyond your insurance coverage.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none mt-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">Special Considerations for Agricultural Claims</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Agricultural fire claims involve unique complexities not found in other industries:
                </p>
                
                <ul className="space-y-4 mb-10">
                  <li className="flex items-start">
                    <span className="inline-block bg-fire-100 rounded-full p-1 mr-3 mt-1.5">
                      <span className="block w-2 h-2 bg-fire-600 rounded-full"></span>
                    </span>
                    <span><strong className="font-bold">Long-term soil damage</strong> that may affect productivity for years after the fire</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block bg-fire-100 rounded-full p-1 mr-3 mt-1.5">
                      <span className="block w-2 h-2 bg-fire-600 rounded-full"></span>
                    </span>
                    <span><strong className="font-bold">Water contamination issues</strong> from fire retardants and ash that impact irrigation systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block bg-fire-100 rounded-full p-1 mr-3 mt-1.5">
                      <span className="block w-2 h-2 bg-fire-600 rounded-full"></span>
                    </span>
                    <span><strong className="font-bold">Loss of organic certifications</strong> that take years to reinstate</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block bg-fire-100 rounded-full p-1 mr-3 mt-1.5">
                      <span className="block w-2 h-2 bg-fire-600 rounded-full"></span>
                    </span>
                    <span><strong className="font-bold">Customer contract penalties</strong> for inability to deliver promised crops or products</span>
                  </li>
                </ul>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-10">
                  Our attorneys work with agricultural specialists who understand these specific impacts and can properly document how fire damage affects your operation's sustainability and profitability.
                </p>
                
                <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">Navigating Complex Agricultural Insurance</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Farm insurance policies are often more complex than standard property coverage. They may involve:
                </p>
                
                <ul className="space-y-4 mb-10">
                  <li className="flex items-start">
                    <span className="inline-block bg-fire-100 rounded-full p-1 mr-3 mt-1.5">
                      <span className="block w-2 h-2 bg-fire-600 rounded-full"></span>
                    </span>
                    <span>Federal crop insurance programs with specific claim procedures</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block bg-fire-100 rounded-full p-1 mr-3 mt-1.5">
                      <span className="block w-2 h-2 bg-fire-600 rounded-full"></span>
                    </span>
                    <span>Multiple coverage types (property, liability, business interruption) under different policy sections</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block bg-fire-100 rounded-full p-1 mr-3 mt-1.5">
                      <span className="block w-2 h-2 bg-fire-600 rounded-full"></span>
                    </span>
                    <span>Specialized livestock policies with unique valuation formulas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block bg-fire-100 rounded-full p-1 mr-3 mt-1.5">
                      <span className="block w-2 h-2 bg-fire-600 rounded-full"></span>
                    </span>
                    <span>Separate equipment and farm building coverage with different deductibles</span>
                  </li>
                </ul>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our team is experienced in interpreting and maximizing these specialized agricultural policies to ensure you receive the full compensation available under your coverage.
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-10 shadow-lg">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">Protect Your Farm's Future</h3>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Time is critical in documenting evidence and losses. Contact us today.
                  </p>
                  <QuickIntakeForm />
                </div>
                
                <div className="bg-gradient-to-br from-fire-50 to-fire-100 rounded-2xl border border-fire-200 p-8 shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="bg-white p-3 rounded-full mr-4 shadow-md">
                      <FaTractor className="h-7 w-7 text-fire-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Agricultural Claim Specialists</h3>
                  </div>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    We've helped farmers and ranchers recover millions in damages after wildfires threatened their operations and livelihoods.
                  </p>
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center bg-white px-6 py-3 rounded-full text-fire-600 font-bold text-lg border border-fire-200 shadow-md">
                      Free Farm Assessment
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
            <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">Ready to Restore Your Agricultural Operation?</h2>
            <p className="text-xl text-gray-200 mb-10 leading-relaxed">
              Our legal team has the specialized knowledge needed to help you recover the full value of your agricultural losses and get your farm or ranch back to productivity.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 tracking-tight">Contact Our Agricultural Claims Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Fill out the form below, and one of our attorneys who specializes in farm and agricultural claims will contact you within 24 hours.
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