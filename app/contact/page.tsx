import Header from '../components/Header';
import Footer from '../components/Footer';
import IntakeForm from '../components/IntakeForm';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export const metadata = {
  title: 'Contact Us | LA Fire Recovery Law',
  description: 'Contact LA Fire Recovery Law for expert legal assistance with fire insurance claims, loss of income, and personal injury cases. Free consultations available.',
};

export default function ContactPage() {
  return (
    <main>
      <Header />
      
      {/* Page Header */}
      <div className="bg-primary-700 text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-3xl">
            Our team is ready to help you recover what you've lost. Fill out our detailed intake form below or contact us directly.
          </p>
        </div>
      </div>
      
      {/* Contact Information */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaPhone className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">Our team is available 24/7 for emergency consultations</p>
              <a href="tel:+1234567890" className="text-primary-600 font-bold text-lg hover:text-primary-800 transition-colors">
                (123) 456-7890
              </a>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaEnvelope className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">Send us an email and we'll get back to you within 24 hours</p>
              <a href="mailto:info@lafirerecoverylaw.com" className="text-primary-600 font-bold hover:text-primary-800 transition-colors">
                info@lafirerecoverylaw.com
              </a>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaMapMarkerAlt className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Visit Us</h3>
              <p className="text-gray-600 mb-4">Come to our office for an in-person consultation</p>
              <address className="not-italic text-primary-600 font-bold">
                123 Legal Street<br />
                Los Angeles, CA 90001
              </address>
            </div>
          </div>
        </div>
      </section>
      
      {/* Intake Form Section */}
      <section className="py-16 bg-gray-100">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Detailed Intake Form</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Please fill out our detailed intake form to help us better understand your case. This information will be kept confidential and will help us provide you with the best legal assistance.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <IntakeForm />
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Our Location</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We're conveniently located in downtown Los Angeles, easily accessible from all major highways.
            </p>
          </div>
          
          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Map will be embedded here</p>
          </div>
          
          <div className="mt-8 text-center">
            <h3 className="text-xl font-bold mb-2">Office Hours</h3>
            <p className="text-gray-600">
              Monday - Friday: 9:00 AM - 6:00 PM<br />
              Saturday: 10:00 AM - 2:00 PM<br />
              Sunday: Closed
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 