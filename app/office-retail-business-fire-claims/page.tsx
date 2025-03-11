import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import QuickIntakeForm from '../components/QuickIntakeForm';
import Link from 'next/link';
import Image from 'next/image';
import { FaStore, FaArrowRight, FaClipboardCheck, FaChartLine, FaBalanceScale } from 'react-icons/fa';

export const metadata = {
  title: 'Office & Retail Owners in LA Fires: Recover Lost Revenue & Repair Costs',
  description: 'If your store, office, or commercial space was damaged in the LA Fires, we\'ll help you pursue insurance, liability, and income claims.',
  keywords: 'retail fire damage, office fire claims, commercial property fire, LA fires business, store fire insurance',
};

export default function OfficeRetailBusinessFireClaimsPage() {
  return (
    <main className="text-gray-800">
      <Header />
      
      {/* Hero Section */}
      <div className="relative text-white">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1604754742629-3e0498a8211f?q=80&w=2070&auto=format&fit=crop"
            alt="Retail store affected by fire"
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
                <FaStore className="h-9 w-9 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white drop-shadow-sm tracking-tight">
                Office & Retail Owners: Resume Operations Faster
              </h1>
            </div>
            <p className="text-xl md:text-2xl mb-12 text-white font-light leading-relaxed max-w-2xl tracking-wide">
              Has your retail store or office space been destroyed or closed due to the LA wildfires? Get expert legal support to recover and reopen.
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
                  Our attorneys work diligently to recover lost income, lease obligations, and property damage costs. From micro-businesses to established brands, LA Fire Recovery Law has you covered with specialized legal support for retail and office businesses.
                </p>
                
                <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">Comprehensive Recovery for Commercial Spaces</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  When wildfires damage your retail store or office space, the impact extends far beyond physical property damage. You face lost revenue, customer disruption, inventory losses, and potential lease complications. Our attorneys understand these complex challenges and develop tailored strategies to address each aspect of your recovery.
                </p>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">Minimizing Business Downtime</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-10">
                  Every day your business remains closed means lost revenue and potential customer attrition. Our legal team works to expedite your recovery by simultaneously pursuing all available compensation channels while advising on temporary relocation options and business continuity strategies to minimize disruption.
                </p>
              </div>
              
              <div className="mt-16 bg-gradient-to-br from-gray-50 to-gray-100 p-10 rounded-2xl border border-gray-200 shadow-sm">
                <h2 className="text-3xl font-bold mb-8 text-gray-900 tracking-tight">Assistance Includes:</h2>
                
                <div className="space-y-10">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-fire-100 p-3 rounded-full shadow-md">
                        <FaClipboardCheck className="h-6 w-6 text-fire-600" />
                      </div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Comprehensive coverage analysis (building structure, inventory, fixtures)</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        We thoroughly review your insurance policies to identify all available coverage for your physical losses, including specialized coverage for unique inventory, custom fixtures, and business equipment.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-fire-100 p-3 rounded-full shadow-md">
                        <FaChartLine className="h-6 w-6 text-fire-600" />
                      </div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Business interruption claims for lost sales and unavoidable expenses</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        We help document and substantiate your revenue losses and continuing expenses to maximize your business interruption claim, including extended period of indemnity coverage.
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
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Legal representation against negligent parties or insurance bad faith</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        When insurers act in bad faith or when wildfires result from negligence, we pursue additional legal remedies to secure the full compensation you deserve.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none mt-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">Common Retail & Office Fire Claim Challenges</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Commercial businesses often face these specific obstacles after a wildfire:
                </p>
                
                <ul className="text-lg text-gray-700 space-y-4 mb-10">
                  <li><strong>Inventory valuation disputes</strong> especially for seasonal merchandise or specialized goods</li>
                  <li><strong>Lease complications</strong> including rent abatement rights and restoration obligations</li>
                  <li><strong>Customer retention challenges</strong> during extended closure periods</li>
                  <li><strong>Employee retention costs</strong> to maintain your workforce during rebuilding</li>
                  <li><strong>Extra expense coverage limitations</strong> for temporary relocation and operations</li>
                </ul>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our attorneys have extensive experience addressing these industry-specific challenges. We work with forensic accountants, inventory specialists, and commercial real estate experts to build comprehensive claims that account for all aspects of your business losses.
                </p>
                
                <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">Strategic Reopening and Business Continuity</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Beyond securing immediate compensation, we help you develop a strategic reopening plan that positions your business for future success. This includes advice on lease negotiations, insurance policy enhancements, and risk mitigation strategies to protect your business from future disasters.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  From micro-businesses to established brands, our goal is to help you not just recover, but emerge stronger with improved protection and business resilience. Schedule a free case review today to expedite your recovery and get your business back on track.
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200 p-8 mb-8 shadow-sm">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">Discuss Your Business Claim</h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    Get specialized legal help for your retail store or office space fire damage and business interruption losses.
                  </p>
                  <QuickIntakeForm />
                </div>
                
                <div className="bg-gradient-to-br from-fire-50 to-fire-100/50 rounded-2xl border border-fire-200 p-8 shadow-sm">
                  <div className="flex items-center mb-6">
                    <div className="bg-fire-100 p-3 rounded-full mr-4 shadow-sm">
                      <FaStore className="h-6 w-6 text-fire-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Reopen Your Business</h3>
                  </div>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    We've helped retail stores and office-based businesses recover millions in property damage, inventory losses, and business interruption claims after wildfire disasters.
                  </p>
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center bg-white px-4 py-3 rounded-full text-fire-600 font-bold border border-fire-200 shadow-sm">
                      Free Business Claim Review
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Expedite Your Business Recovery</h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Don't let fire damage keep your business closed longer than necessary. Our legal team will help you secure the compensation needed to reopen and thrive.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Our Business Claims Specialists</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our experienced attorneys understand the unique challenges faced by retail and office-based businesses after a fire. Let us help you reopen your doors.
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