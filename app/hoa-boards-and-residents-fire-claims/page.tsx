import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import SuspenseQuickIntakeForm from '../components/SuspenseQuickIntakeForm';
import Link from 'next/link';
import Image from 'next/image';
import { FaBuilding, FaArrowRight, FaFileContract, FaHandshake, FaUsers, FaShieldAlt } from 'react-icons/fa';

export const metadata = {
  title: 'HOAs & Residents: Collaborative Wildfire Claims & Restoration',
  description: 'If your HOA community suffered common area damage or structural losses, our attorneys can coordinate insurance and legal remedies.',
  keywords: 'HOA fire claims, condominium fire damage, community association insurance, LA fires, wildfire HOA recovery',
};

export default function HOABoardsResidentsFireClaimsPage() {
  return (
    <main className="text-gray-800">
      <Header />
      
      {/* Hero Section */}
      <div className="relative text-white">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1579632652768-6cb9dcf85912?q=80&w=2071&auto=format&fit=crop"
            alt="HOA community affected by fire"
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
                <FaBuilding className="h-9 w-9 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white drop-shadow-sm tracking-tight">
                HOA Boards & Residents: Unite for a Strong Fire Recovery
              </h1>
            </div>
            <p className="text-xl md:text-2xl mb-12 text-white font-light leading-relaxed max-w-2xl tracking-wide">
              When wildfires damage your community, navigate complex master policy claims with expert legal support.
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
                  At LA Fire Recovery Law, our attorneys have extensive HOA experience, ensuring both the association and individual owners receive the compensation they deserve.
                </p>
                
                <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">Unique Challenges for HOA Communities</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  When wildfires damage condominiums, townhomes, or common areas, both the HOA board and residents must navigate complex master policy claims. The interplay between association and individual coverage can create confusion and delays in the recovery process.
                </p>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">Balancing HOA and Individual Interests</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-10">
                  HOA boards have a fiduciary responsibility to the entire community, while individual owners are focused on their personal losses. Our firm helps balance these interests, ensuring a fair and comprehensive recovery strategy that addresses both common area restoration and individual unit damage.
                </p>
              </div>
              
              <div className="mt-16 bg-gradient-to-br from-gray-50 to-gray-100 p-10 rounded-2xl border border-gray-200 shadow-sm">
                <h2 className="text-3xl font-bold mb-8 text-gray-900 tracking-tight">Our HOA Services</h2>
                
                <div className="space-y-10">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-fire-100 p-3 rounded-full shadow-md">
                        <FaFileContract className="h-6 w-6 text-fire-600" />
                      </div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Interpreting master insurance policies vs. individual coverage</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        We analyze master policies and CC&Rs to determine which entity is responsible for various aspects of recovery and restoration.
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
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Coordinating common area restoration and assessing members' claims</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        We help boards prioritize repairs while ensuring individual owners receive timely attention to their specific losses.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-fire-100 p-3 rounded-full shadow-md">
                        <FaUsers className="h-6 w-6 text-fire-600" />
                      </div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Handling liability and dispute resolution with insurance carriers</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        We represent the HOA in negotiations with insurers and mediate potential conflicts between association and member interests.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-fire-100 p-3 rounded-full shadow-md">
                        <FaShieldAlt className="h-6 w-6 text-fire-600" />
                      </div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Navigating special assessments and financial planning</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        We advise boards on legally compliant approaches to funding recovery when insurance proceeds are insufficient.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none mt-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">Common HOA Fire Recovery Challenges</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  HOA communities often face these specific hurdles when dealing with wildfire damage:
                </p>
                
                <ul className="text-lg text-gray-700 space-y-4 mb-10">
                  <li><strong>Allocation disputes</strong> regarding what falls under the master policy versus individual responsibility</li>
                  <li><strong>Rebuilding standards conflicts</strong> when upgrading to current building codes increases costs</li>
                  <li><strong>Assessment challenges</strong> when some owners face financial hardship due to the disaster</li>
                  <li><strong>Decision-making delays</strong> when boards struggle to achieve consensus during crisis</li>
                  <li><strong>Construction coordination</strong> across multiple units and common areas</li>
                </ul>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our attorneys are experienced in addressing these complex scenarios, helping boards make decisions that protect the association while being sensitive to individual members' concerns.
                </p>
                
                <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">Building Community Resilience After Fire Damage</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Beyond the immediate insurance recovery, we help HOAs implement strategies that strengthen the community's legal and financial position for the future. This includes reviewing and updating CC&Rs, enhancing insurance coverage, and establishing disaster response protocols.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  The recovery process can actually create stronger associations when managed properly, turning a crisis into an opportunity for community enhancement and increased property values.
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200 p-8 mb-8 shadow-sm">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">Discuss Your HOA Claim</h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    Contact us for a strategy tailored to your association's unique recovery needs.
                  </p>
                  <SuspenseQuickIntakeForm />
                </div>
                
                <div className="bg-gradient-to-br from-fire-50 to-fire-100/50 rounded-2xl border border-fire-200 p-8 shadow-sm">
                  <div className="flex items-center mb-6">
                    <div className="bg-fire-100 p-3 rounded-full mr-4 shadow-sm">
                      <FaBuilding className="h-6 w-6 text-fire-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Community Recovery</h3>
                  </div>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    We've helped dozens of HOA communities throughout Southern California navigate post-disaster recovery with balanced solutions.
                  </p>
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center bg-white px-4 py-3 rounded-full text-fire-600 font-bold border border-fire-200 shadow-sm">
                      Free HOA Claim Assessment
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Unite Your HOA for Stronger Recovery</h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Let our experienced team help your community navigate complex HOA fire insurance claims and restoration decisions.
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
                <span>Start Your Community's Claim</span>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Our HOA Claims Specialists</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Don't let your community struggle alone. Our fire recovery attorneys are ready to help your HOA navigate this challenging time.
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