import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import AttorneysSection from './components/AttorneysSection';
import TestimonialsSection from './components/TestimonialsSection';
import RecentFiresSection from './components/RecentFiresSection';
import ContactForm from './components/ContactForm';
import SuspenseQuickIntakeForm from './components/SuspenseQuickIntakeForm';
import FindLegalHelpSection from './components/FindLegalHelpSection';
import Link from 'next/link';
import { FaPhone, FaComments, FaFireAlt, FaBalanceScale, FaShieldAlt, FaUsers } from 'react-icons/fa';

export default function Home() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Quick Intake Form Section */}
      <section className="py-12 bg-gray-50 relative -mt-8">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-1">
              <SuspenseQuickIntakeForm />
            </div>
            
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Fast Track Your Fire Recovery Claim</h2>
              <p className="text-lg text-gray-700 mb-8">
                Time is critical in fire damage claims. Our experienced attorneys can help you navigate the complex insurance and legal processes to ensure you receive the compensation you deserve.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="bg-fire-100 p-3 rounded-full">
                      <FaFireAlt className="h-6 w-6 text-fire-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Quick Response</h3>
                    <p className="text-gray-600">We respond to all inquiries within 24 hours.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="bg-fire-100 p-3 rounded-full">
                      <FaBalanceScale className="h-6 w-6 text-fire-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Expert Advice</h3>
                    <p className="text-gray-600">Specialized in fire damage claims and litigation.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="bg-fire-100 p-3 rounded-full">
                      <FaShieldAlt className="h-6 w-6 text-fire-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">No Fee Unless We Win</h3>
                    <p className="text-gray-600">We only get paid when you get compensated.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <ServicesSection />
      
      {/* Recent Fires Section */}
      <RecentFiresSection />
      
      {/* Attorneys Section */}
      <AttorneysSection />
      
      {/* Testimonials Section */}
      <TestimonialsSection />
      
      {/* Landing Pages Section - Using our new component */}
      <FindLegalHelpSection />
      
      {/* Contact Section */}
      <section className="py-16 bg-gray-100">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us Today</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't wait to get the legal help you need. Our team is ready to fight for your rights and help you recover what you've lost.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
            
            <div>
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary-100 p-3 rounded-full">
                      <FaPhone className="h-5 w-5 text-primary-600" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold mb-1">Call Us</h4>
                      <p className="text-gray-600">
                        <a 
                          href="tel:+1234567890" 
                          className="hover:text-primary-600 transition-colors"
                        >
                          (123) 456-7890
                        </a>
                      </p>
                      <p className="text-gray-500 text-sm mt-1">
                        Available 24/7 for emergencies
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary-100 p-3 rounded-full">
                      <FaComments className="h-5 w-5 text-primary-600" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold mb-1">Live Chat</h4>
                      <p className="text-gray-600">
                        Chat with our legal team for immediate assistance
                      </p>
                      <p className="text-gray-500 text-sm mt-1">
                        Our team is available 24/7 for emergency consultations. Don't hesitate to reach out.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 