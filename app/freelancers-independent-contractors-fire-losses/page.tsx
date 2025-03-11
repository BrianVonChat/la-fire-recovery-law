import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import SuspenseQuickIntakeForm from '../components/SuspenseQuickIntakeForm';
import Link from 'next/link';
import Image from 'next/image';
import { FaLaptop, FaArrowRight, FaFileInvoiceDollar, FaHandHoldingUsd, FaUserTie } from 'react-icons/fa';

export const metadata = {
  title: 'Freelancers: Recover Lost Income After LA Fires',
  description: 'Did the LA Wildfires cause canceled gigs or lost income? Our law firm can help freelancers secure rightful compensation.',
  keywords: 'freelancer fire claims, independent contractor fire loss, gig worker compensation, LA fires income loss, remote worker fire claim',
};

export default function FreelancersIndependentContractorsPage() {
  return (
    <main className="text-gray-800">
      <Header />
      
      {/* Hero Section */}
      <div className="relative text-white">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
            alt="Freelancer working remotely"
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
                <FaLaptop className="h-9 w-9 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white drop-shadow-sm tracking-tight">
                Freelancers & Gig Workers: Secure Your Lost Earnings
              </h1>
            </div>
            <p className="text-xl md:text-2xl mb-12 text-white font-light leading-relaxed max-w-2xl tracking-wide">
              Have the LA wildfires disrupted your freelance work, canceled gigs, or forced relocation? Get legal help to recover your lost income.
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
                  Freelancers, remote workers, and digital creatives face unique challenges during wildfires, from canceled client work to power outages or forced relocations. At LA Fire Recovery Law, we understand how to document lost income and recover compensation so you can keep your business afloat.
                </p>
                
                <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">Unique Challenges for Independent Workers</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  As a freelancer or independent contractor, your livelihood depends on your ability to deliver services consistently. When wildfires disrupt your work—whether through evacuation, power outages, internet disruption, or clients canceling projects—the financial impact can be severe and immediate. Unlike traditional employees, you may lack safety nets like paid time off or employer-provided insurance.
                </p>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">Documenting Income Loss Without Traditional Employment</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-10">
                  One of the biggest challenges for independent workers is proving income loss. Insurance companies and assistance programs often require documentation that doesn't fit the freelance business model. Our attorneys specialize in helping gig workers and freelancers properly document their losses using contracts, previous earnings history, canceled projects, and client testimonials to build compelling claims.
                </p>
              </div>
              
              <div className="mt-16 bg-gradient-to-br from-gray-50 to-gray-100 p-10 rounded-2xl border border-gray-200 shadow-sm">
                <h2 className="text-3xl font-bold mb-8 text-gray-900 tracking-tight">How We Help Independent Workers:</h2>
                
                <div className="space-y-10">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-fire-100 p-3 rounded-full shadow-md">
                        <FaFileInvoiceDollar className="h-6 w-6 text-fire-600" />
                      </div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Disaster Unemployment Assistance for gig workers</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        We help you navigate the complex eligibility requirements for DUA benefits specifically designed for self-employed individuals affected by declared disasters.
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
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Lost revenue claims for unfulfilled contracts</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        We document and pursue compensation for projects you couldn't complete due to wildfire conditions, including strategies for proving causation between the disaster and your income loss.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-fire-100 p-3 rounded-full shadow-md">
                        <FaUserTie className="h-6 w-6 text-fire-600" />
                      </div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Third-party negligence evaluation</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        We investigate whether the fire resulted from negligence that entitles you to additional compensation beyond standard disaster assistance programs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none mt-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">Common Freelancer Fire Loss Scenarios</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our firm has helped independent workers recover losses in various situations:
                </p>
                
                <ul className="text-lg text-gray-700 space-y-4 mb-10">
                  <li><strong>Forced evacuation</strong> preventing you from accessing your home office or equipment</li>
                  <li><strong>Extended power or internet outages</strong> making it impossible to complete client work</li>
                  <li><strong>Clients canceling projects</strong> due to their own wildfire-related financial constraints</li>
                  <li><strong>Inability to attend scheduled gigs</strong> due to road closures or evacuation orders</li>
                  <li><strong>Damage to specialized equipment</strong> needed for your work (cameras, instruments, etc.)</li>
                  <li><strong>Health impacts</strong> from smoke or stress preventing you from working at full capacity</li>
                </ul>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Each of these scenarios requires a different approach to documentation and compensation pursuit. Our attorneys tailor their strategies to your specific situation, ensuring no potential recovery avenue is overlooked.
                </p>
                
                <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">Rebuilding Your Independent Business</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Beyond immediate compensation, we help you develop strategies for business continuity during disaster recovery. This includes advice on contract language to protect your income during future disasters, insurance options specifically designed for freelancers, and diversification strategies to create more resilient income streams.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Stay focused on your craft while we handle the complex legal aspects of your recovery. Our goal is to help you not just recover lost income, but emerge with stronger protections for your independent business. Contact us for a free case assessment to discuss your specific situation.
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200 p-8 mb-8 shadow-sm">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">Discuss Your Income Loss</h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    Get specialized legal help for your freelance or independent contractor income losses due to the LA wildfires.
                  </p>
                  <SuspenseQuickIntakeForm />
                </div>
                
                <div className="bg-gradient-to-br from-fire-50 to-fire-100/50 rounded-2xl border border-fire-200 p-8 shadow-sm">
                  <div className="flex items-center mb-6">
                    <div className="bg-fire-100 p-3 rounded-full mr-4 shadow-sm">
                      <FaLaptop className="h-6 w-6 text-fire-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Protect Your Income</h3>
                  </div>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    We've helped freelancers and independent contractors recover significant compensation for income losses after natural disasters.
                  </p>
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center bg-white px-4 py-3 rounded-full text-fire-600 font-bold border border-fire-200 shadow-sm">
                      Free Income Loss Assessment
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Don't Let Wildfires Derail Your Independent Career</h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Get the legal support you need to recover lost income and get your freelance business back on track after the LA wildfires.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Our Freelancer Claims Specialists</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our experienced attorneys understand the unique challenges faced by independent workers after a disaster. Let us help you secure the compensation you deserve.
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