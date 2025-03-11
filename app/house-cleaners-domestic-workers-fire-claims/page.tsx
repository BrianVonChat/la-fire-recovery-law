import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import SuspenseQuickIntakeForm from '../components/SuspenseQuickIntakeForm';
import Link from 'next/link';
import Image from 'next/image';
import { FaBriefcase, FaArrowRight, FaFileAlt, FaCalendarCheck, FaHandHoldingUsd, FaSearchDollar } from 'react-icons/fa';

export const metadata = {
  title: 'House Cleaners & Domestic Workers: Claim Lost Wages Post-Fire',
  description: 'Struggling with lost wages from canceled cleaning jobs in the LA Fires? Our firm helps domestic workers file for compensation.',
  keywords: 'domestic workers fire claims, house cleaners compensation, LA fires, lost wages, domestic work',
};

export default function HouseCleanersDomesticWorkersFireClaimsPage() {
  return (
    <main className="text-gray-800">
      <Header />
      
      {/* Hero Section */}
      <div className="relative text-white">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?q=80&w=2070&auto=format&fit=crop"
            alt="Domestic worker cleaning a home"
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
                <FaBriefcase className="h-9 w-9 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white drop-shadow-sm tracking-tight">
                House Cleaners & Domestic Workers: Don't Let the Fires Ruin Your Income
              </h1>
            </div>
            <p className="text-xl md:text-2xl mb-12 text-white font-light leading-relaxed max-w-2xl tracking-wide">
              Have you lost your domestic work income because clients' homes are uninhabitable or they've evacuated?
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
                  You may have a right to recover lost wages or apply for Disaster Unemployment Assistance. LA Fire Recovery Law can guide you every step of the way, ensuring you're not left with zero income.
                </p>
                
                <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">Understanding Income Loss for Domestic Workers</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  As a house cleaner or domestic worker, your livelihood depends on access to clients' homes. When wildfires force evacuations or destroy properties, you can suddenly find yourself without income through no fault of your own. Many domestic workers aren't aware of their rights to compensation after disasters.
                </p>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">The Unique Challenges for Domestic Workers</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-10">
                  Unlike traditional employees, house cleaners and domestic workers often operate without formal contracts or employment benefits, making it particularly challenging to recover lost income. However, our legal team has extensive experience helping workers in your position navigate these complex situations and secure the financial support you need.
                </p>
              </div>
              
              <div className="mt-16 bg-gradient-to-br from-gray-50 to-gray-100 p-10 rounded-2xl border border-gray-200 shadow-sm">
                <h2 className="text-3xl font-bold mb-8 text-gray-900 tracking-tight">Areas of Support:</h2>
                
                <div className="space-y-10">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-fire-100 p-3 rounded-full shadow-md">
                        <FaFileAlt className="h-6 w-6 text-fire-600" />
                      </div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Filing lost wage claims or DUA applications</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        We'll help you navigate the complex process of applying for Disaster Unemployment Assistance, even if you're self-employed or work for cash.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-fire-100 p-3 rounded-full shadow-md">
                        <FaSearchDollar className="h-6 w-6 text-fire-600" />
                      </div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Checking for negligence-based lawsuits that could compensate you</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        If the fire was caused by negligence, you may be eligible for additional compensation beyond disaster assistance programs.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-fire-100 p-3 rounded-full shadow-md">
                        <FaCalendarCheck className="h-6 w-6 text-fire-600" />
                      </div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Helping you document your financial losses and future booking cancellations</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        We'll assist you in calculating and documenting your income loss, even if you don't have formal records of your work arrangements.
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
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Connecting you with emergency financial assistance programs</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        Beyond legal remedies, we can help identify emergency aid programs specifically for workers in your situation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none mt-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">Special Considerations for Domestic Workers</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Domestic workers face unique challenges when seeking compensation after disasters:
                </p>
                
                <ul className="space-y-4 mb-10">
                  <li className="flex items-start">
                    <span className="inline-block bg-fire-100 rounded-full p-1 mr-3 mt-1.5">
                      <span className="block w-2 h-2 bg-fire-600 rounded-full"></span>
                    </span>
                    <span><strong className="font-bold">Informal work arrangements</strong> that may lack documentation but still qualify for assistance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block bg-fire-100 rounded-full p-1 mr-3 mt-1.5">
                      <span className="block w-2 h-2 bg-fire-600 rounded-full"></span>
                    </span>
                    <span><strong className="font-bold">Multiple employers</strong> requiring coordination of several partial income loss claims</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block bg-fire-100 rounded-full p-1 mr-3 mt-1.5">
                      <span className="block w-2 h-2 bg-fire-600 rounded-full"></span>
                    </span>
                    <span><strong className="font-bold">Immigration status concerns</strong> that we can help navigate while protecting your rights</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block bg-fire-100 rounded-full p-1 mr-3 mt-1.5">
                      <span className="block w-2 h-2 bg-fire-600 rounded-full"></span>
                    </span>
                    <span><strong className="font-bold">Long-term income disruption</strong> if clients permanently relocate after the fire</span>
                  </li>
                </ul>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-10">
                  Our attorneys are sensitive to these issues and will work with you to overcome these obstacles. We understand the domestic work sector and can effectively advocate for your unique needs.
                </p>
                
                <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">Don't Wait to Seek Assistance</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Many disaster assistance programs have strict deadlines, often as short as 30 days after the disaster. Contact our team immediately to ensure you don't miss critical application windows that could provide the financial support you need while rebuilding your client base.
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-10 shadow-lg">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">Get Help Today</h3>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Fill out this quick form to start the process of recovering your lost income.
                  </p>
                  <SuspenseQuickIntakeForm />
                </div>
                
                <div className="bg-gradient-to-br from-fire-50 to-fire-100 rounded-2xl border border-fire-200 p-8 shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="bg-white p-3 rounded-full mr-4 shadow-md">
                      <FaBriefcase className="h-7 w-7 text-fire-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Protect Your Livelihood</h3>
                  </div>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    We've helped numerous domestic workers recover lost wages and secure financial assistance after devastating fires.
                  </p>
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center bg-white px-6 py-3 rounded-full text-fire-600 font-bold text-lg border border-fire-200 shadow-md">
                      Free Consultation
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
            <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">Rebuild Your Income After the Fires</h2>
            <p className="text-xl text-gray-200 mb-10 leading-relaxed">
              Our legal team specializes in helping domestic workers and house cleaners recover financially after disasters. Don't face this challenging time alone.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 tracking-tight">Contact Our Domestic Worker Advocacy Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Fill out the form below, and one of our attorneys who specializes in helping domestic workers will contact you within 24 hours.
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