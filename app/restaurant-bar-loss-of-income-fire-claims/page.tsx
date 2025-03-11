import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import QuickIntakeForm from '../components/QuickIntakeForm';
import Link from 'next/link';
import Image from 'next/image';
import { FaUtensils, FaArrowRight, FaStore, FaChartLine, FaClipboardCheck, FaCoins } from 'react-icons/fa';

export const metadata = {
  title: 'LA Fire Business Loss: Restaurant & Bar Owners Recover Your Income',
  description: 'Did your eatery close or lose revenue from the LA Fires? Our attorneys specialize in business interruption and property damage claims.',
  keywords: 'restaurant fire claims, bar business interruption, LA fires, business loss, food service compensation',
};

export default function RestaurantBarLossOfIncomeFireClaimsPage() {
  return (
    <main className="text-gray-800">
      <Header />
      
      {/* Hero Section */}
      <div className="relative text-white">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2074&auto=format&fit=crop"
            alt="Restaurant impacted by fire"
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
                <FaUtensils className="h-9 w-9 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white drop-shadow-sm tracking-tight">
                Restaurant & Bar Owners: Reopen and Recover With Expert Legal Help
              </h1>
            </div>
            <p className="text-xl md:text-2xl mb-12 text-white font-light leading-relaxed max-w-2xl tracking-wide">
              Devastated by forced closures, evacuation orders, or destroyed inventory? The LA wildfires can leave restaurant and bar owners in financial freefall.
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
                  At LA Fire Recovery Law, we help you file business interruption claims, tackle property damage disputes, and negotiate with insurers so you can get back to serving your community.
                </p>
                
                <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">Understanding Fire Impact on Food Service Businesses</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Restaurants, bars, and cafes face unique challenges after wildfires. Beyond physical damage, you may experience extended closures due to power outages, water contamination, smoke damage, or evacuations. Even when your establishment isn't directly damaged, the impact on your bottom line can be devastating as customers evacuate and tourism declines.
                </p>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">The High Cost of Restaurant Downtime</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-10">
                  With slim profit margins and high overhead costs, even short closures can threaten the survival of restaurants and bars. Inventory spoilage, staff wages, rent, and other ongoing expenses continue while revenue drops to zero. Our attorneys understand these industry-specific challenges and will help you recover these losses through all available channels.
                </p>
              </div>
              
              <div className="mt-16 bg-gradient-to-br from-gray-50 to-gray-100 p-10 rounded-2xl border border-gray-200 shadow-sm">
                <h2 className="text-3xl font-bold mb-8 text-gray-900 tracking-tight">Key Services:</h2>
                
                <div className="space-y-10">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-fire-100 p-3 rounded-full shadow-md">
                        <FaClipboardCheck className="h-6 w-6 text-fire-600" />
                      </div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Business interruption insurance analysis and claim filing</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        We'll review your policy to identify all available coverage for lost revenue, employee wages, fixed costs, and extra expenses incurred during closure.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-fire-100 p-3 rounded-full shadow-md">
                        <FaStore className="h-6 w-6 text-fire-600" />
                      </div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Property repair or rebuild claims for kitchens, seating areas, and equipment</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        We ensure fair valuations for specialized equipment, fixtures, and improvements you've made to your space, whether owned or leased.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-fire-100 p-3 rounded-full shadow-md">
                        <FaCoins className="h-6 w-6 text-fire-600" />
                      </div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Recovery for spoiled inventory and extra expenses</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        We'll help document and claim for perishable inventory losses, cleaning costs, and additional expenses to resume operations.
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
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Legal action against negligent parties if their actions caused the fire</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        When fires are caused by utility companies or other negligent parties, we can pursue additional compensation beyond your insurance coverage.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none mt-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">Common Challenges for Restaurant & Bar Owners</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Food service businesses face specific obstacles when recovering from wildfires:
                </p>
                
                <ul className="space-y-4 mb-10">
                  <li className="flex items-start">
                    <span className="inline-block bg-fire-100 rounded-full p-1 mr-3 mt-1.5">
                      <span className="block w-2 h-2 bg-fire-600 rounded-full"></span>
                    </span>
                    <span><strong className="font-bold">Complex business interruption calculations</strong> that must account for seasonal variations, tips, and projected growth</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block bg-fire-100 rounded-full p-1 mr-3 mt-1.5">
                      <span className="block w-2 h-2 bg-fire-600 rounded-full"></span>
                    </span>
                    <span><strong className="font-bold">Health department and licensing requirements</strong> that can delay reopening even after repairs are complete</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block bg-fire-100 rounded-full p-1 mr-3 mt-1.5">
                      <span className="block w-2 h-2 bg-fire-600 rounded-full"></span>
                    </span>
                    <span><strong className="font-bold">Employee retention challenges</strong> during extended closures that may be covered under certain policies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block bg-fire-100 rounded-full p-1 mr-3 mt-1.5">
                      <span className="block w-2 h-2 bg-fire-600 rounded-full"></span>
                    </span>
                    <span><strong className="font-bold">Loss of customer base</strong> if an area experiences population decline after major fires</span>
                  </li>
                </ul>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-10">
                  Our attorneys have specific experience with restaurant and bar claims. We understand the unique aspects of food service businesses and how to effectively document and present your losses to insurance companies and courts.
                </p>
                
                <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">Rebuilding Your Restaurant Business</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Restaurants and bars are often the heart of communities. We're committed to helping you reopen as quickly as possible with the full financial resources you deserve. Our comprehensive approach includes:
                </p>
                
                <ul className="space-y-4 mb-10">
                  <li className="flex items-start">
                    <span className="inline-block bg-fire-100 rounded-full p-1 mr-3 mt-1.5">
                      <span className="block w-2 h-2 bg-fire-600 rounded-full"></span>
                    </span>
                    <span>Coordinating with forensic accountants to document pre-fire financial performance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block bg-fire-100 rounded-full p-1 mr-3 mt-1.5">
                      <span className="block w-2 h-2 bg-fire-600 rounded-full"></span>
                    </span>
                    <span>Working with contractors experienced in restaurant build-outs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block bg-fire-100 rounded-full p-1 mr-3 mt-1.5">
                      <span className="block w-2 h-2 bg-fire-600 rounded-full"></span>
                    </span>
                    <span>Investigating all possible sources of recovery, from insurance to disaster loans</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block bg-fire-100 rounded-full p-1 mr-3 mt-1.5">
                      <span className="block w-2 h-2 bg-fire-600 rounded-full"></span>
                    </span>
                    <span>Negotiating with landlords and lenders during your recovery period</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-10 shadow-lg">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">Get Back to Business</h3>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Fill out this form to start the process of recovering your restaurant or bar's losses.
                  </p>
                  <QuickIntakeForm />
                </div>
                
                <div className="bg-gradient-to-br from-fire-50 to-fire-100 rounded-2xl border border-fire-200 p-8 shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="bg-white p-3 rounded-full mr-4 shadow-md">
                      <FaUtensils className="h-7 w-7 text-fire-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Hospitality Recovery Experts</h3>
                  </div>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    We've helped dozens of restaurants and bars reopen after fire disasters through aggressive insurance and legal advocacy.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">Ready to Reopen Your Restaurant or Bar?</h2>
            <p className="text-xl text-gray-200 mb-10 leading-relaxed">
              Our legal team understands the unique challenges of food service businesses and will fight to get you the maximum compensation so you can welcome customers again.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 tracking-tight">Contact Our Restaurant & Bar Claims Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Fill out the form below, and one of our attorneys who specializes in restaurant and hospitality business claims will contact you within 24 hours.
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