import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import QuickIntakeForm from '../components/QuickIntakeForm';
import Link from 'next/link';
import Image from 'next/image';
import { FaChalkboardTeacher, FaArrowRight, FaFileContract, FaHandHoldingHeart, FaUniversity } from 'react-icons/fa';

export const metadata = {
  title: 'Teachers & Childcare Providers: Financial Recovery After Wildfires',
  description: 'If you lost income or were displaced by the LA Fires, our attorneys can help with wage claims and relocation expenses.',
  keywords: 'teacher fire claims, childcare provider fire loss, educator wildfire assistance, LA fires school closure, daycare fire damage',
};

export default function TeachersChildcareProvidersPage() {
  return (
    <main className="text-gray-800">
      <Header />
      
      {/* Hero Section */}
      <div className="relative text-white">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop"
            alt="Classroom affected by fire"
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
                <FaChalkboardTeacher className="h-9 w-9 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white drop-shadow-sm tracking-tight">
                Teachers & Caregivers: Don't Let the Fires Close Your Classroom
              </h1>
            </div>
            <p className="text-xl md:text-2xl mb-12 text-white font-light leading-relaxed max-w-2xl tracking-wide">
              Has your school, daycare, or in-home childcare service been impacted by the LA wildfires? Get legal help to recover lost wages and expenses.
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
                  Whether you teach at a public school, private daycare, or run an in-home childcare service, the LA Fires may have derailed your routine and impacted your income. Our legal team helps teachers and caregivers file for lost wages, relocation expenses, and any property loss claims.
                </p>
                
                <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">Unique Challenges for Education Professionals</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  When wildfires force school closures or damage educational facilities, teachers and childcare providers face distinct challenges. Beyond the immediate safety concerns, you may experience income disruption, loss of teaching materials, and uncertainty about employment status. For in-home childcare providers, the impact can be even more severe when your home and workplace are simultaneously affected.
                </p>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">Securing Your Income During Closures</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-10">
                  School closures due to wildfires can create confusion about pay continuity, especially for substitute teachers, part-time staff, or private childcare providers. Our attorneys help clarify your employment rights and pursue all available compensation to ensure financial stability during these disruptions.
                </p>
              </div>
              
              <div className="mt-16 bg-gradient-to-br from-gray-50 to-gray-100 p-10 rounded-2xl border border-gray-200 shadow-sm">
                <h2 className="text-3xl font-bold mb-8 text-gray-900 tracking-tight">We'll Support You By:</h2>
                
                <div className="space-y-10">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-fire-100 p-3 rounded-full shadow-md">
                        <FaFileContract className="h-6 w-6 text-fire-600" />
                      </div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Verifying employment contracts to secure your income</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        We review your employment agreements to identify provisions for emergency closures and advocate for continued pay during wildfire-related disruptions.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-fire-100 p-3 rounded-full shadow-md">
                        <FaHandHoldingHeart className="h-6 w-6 text-fire-600" />
                      </div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Exploring insurance coverage for educational materials</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        We help document and claim compensation for personal teaching supplies, educational materials, and childcare equipment damaged or destroyed in the fires.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-fire-100 p-3 rounded-full shadow-md">
                        <FaUniversity className="h-6 w-6 text-fire-600" />
                      </div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Connecting you with government assistance programs</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        We identify and help you apply for educator-specific disaster relief programs and grants designed to support teachers and childcare providers affected by natural disasters.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none mt-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">Common Challenges for Educators After Wildfires</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our firm has helped teachers and childcare providers navigate these specific issues:
                </p>
                
                <ul className="text-lg text-gray-700 space-y-4 mb-10">
                  <li><strong>Wage continuity disputes</strong> during extended school or facility closures</li>
                  <li><strong>Personal teaching materials losses</strong> that may not be covered by school insurance</li>
                  <li><strong>In-home childcare business interruption</strong> when your home is damaged or evacuated</li>
                  <li><strong>Temporary relocation expenses</strong> when seeking alternative teaching arrangements</li>
                  <li><strong>Student/child displacement issues</strong> affecting enrollment and income stability</li>
                  <li><strong>Mental health support needs</strong> for both educators and the children in their care</li>
                </ul>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Each situation requires a tailored approach to ensure you receive appropriate compensation and support. Our attorneys understand the educational sector's unique employment structures and will advocate for your specific needs.
                </p>
                
                <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">Supporting Your Return to Teaching</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Beyond immediate financial recovery, we help you plan for a successful return to your educational role. This includes advocating for accommodations during transitional periods, ensuring your employment rights are protected, and connecting you with resources to support both your students and your own wellbeing during the recovery process.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  As dedicated professionals who nurture our community's children, you deserve specialized support during this challenging time. Don't face this alone—our compassionate legal team is ready to help you navigate the recovery process with expertise and care.
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200 p-8 mb-8 shadow-sm">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">Discuss Your Educator Claim</h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    Get specialized legal help for teachers and childcare providers affected by the LA wildfires.
                  </p>
                  <QuickIntakeForm />
                </div>
                
                <div className="bg-gradient-to-br from-fire-50 to-fire-100/50 rounded-2xl border border-fire-200 p-8 shadow-sm">
                  <div className="flex items-center mb-6">
                    <div className="bg-fire-100 p-3 rounded-full mr-4 shadow-sm">
                      <FaChalkboardTeacher className="h-6 w-6 text-fire-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Educator Support</h3>
                  </div>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    We've helped teachers and childcare providers recover lost wages, replace educational materials, and navigate employment challenges after wildfire disruptions.
                  </p>
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center bg-white px-4 py-3 rounded-full text-fire-600 font-bold border border-fire-200 shadow-sm">
                      Free Educator Claim Review
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Back to What Matters: Teaching</h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Let us handle the legal complexities while you focus on supporting your students and rebuilding your educational practice.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Our Education Claims Specialists</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our experienced attorneys understand the unique challenges faced by teachers and childcare providers after a disaster. Let us help you secure the support you deserve.
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