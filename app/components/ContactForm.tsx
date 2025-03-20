"use client";

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FaPhone, FaEnvelope, FaUser, FaMapMarkerAlt, FaCheckCircle, FaExclamationTriangle, FaArrowRight, FaFire, FaCopy, FaCheck } from 'react-icons/fa';
import { saveContactForm, ContactFormData } from '../utils/formService';

type FormData = {
  name: string;
  email: string;
  phone: string;
  fireLocation: string;
  message: string;
  lossType: string[];
};

// Props for ContactForm component to know the context/service type it's being used in
interface ContactFormProps {
  serviceType?: string;
}

const ContactForm = ({ serviceType }: ContactFormProps = {}) => {
  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [copySuccess, setCopySuccess] = useState(false);
  const [formContext, setFormContext] = useState<string>('');
  
  // Set the form context based on page URL and service type
  useEffect(() => {
    // Get the page path and detailed info
    if (typeof window !== 'undefined') {
      const pathname = window.location.pathname;
      let detectedContext = 'General Contact';
      
      // Extract context from pathname
      if (pathname.includes('/services/')) {
        const service = pathname.split('/services/')[1];
        detectedContext = `Service - ${service.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}`;
      } else if (pathname.includes('/fires/')) {
        const fire = pathname.split('/fires/')[1];
        detectedContext = `Fire - ${fire.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}`;
      } else if (pathname.includes('/contact')) {
        detectedContext = 'Contact Page';
      } else if (serviceType) {
        detectedContext = `Service - ${serviceType}`;
      } else if (pathname !== '/') {
        // Get the page name from pathname
        const pageName = pathname.split('/').pop() || '';
        detectedContext = `Page - ${pageName.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}`;
      } else {
        detectedContext = 'Home Page';
      }
      
      setFormContext(detectedContext);
    }
  }, [serviceType]);
  
  // Reset copy success status after 2 seconds
  useEffect(() => {
    if (copySuccess) {
      const timer = setTimeout(() => {
        setCopySuccess(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [copySuccess]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("info@lafirerecoverylaw.com");
    setCopySuccess(true);
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // Add form context to the submission
      const contextData: ContactFormData = {
        ...data as ContactFormData,
        formContext
      };
      
      // Save form data to Firebase and send notification email
      await saveContactForm(contextData);
      
      setSubmitSuccess(true);
      reset();
    } catch (error) {
      setSubmitError('There was an error submitting your form. Please try again.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const lossTypes = [
    { id: 'home', label: 'Home Damage/Loss', icon: <FaHome className="h-4 w-4 mr-2" /> },
    { id: 'business', label: 'Business Damage/Loss', icon: <FaBuilding className="h-4 w-4 mr-2" /> },
    { id: 'income', label: 'Loss of Income', icon: <FaDollarSign className="h-4 w-4 mr-2" /> },
    { id: 'injury', label: 'Personal Injury', icon: <FaUserInjured className="h-4 w-4 mr-2" /> },
    { id: 'other', label: 'Other', icon: <FaEllipsisH className="h-4 w-4 mr-2" /> },
  ];

  const handleFocus = (fieldName: string) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  return (
    <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-xl overflow-hidden border border-gray-100">
      {submitSuccess ? (
        <div className="text-center py-12 px-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <FaCheckCircle className="w-10 h-10 text-green-500" />
          </div>
          <h3 className="text-2xl font-bold mb-3">Thank You!</h3>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Your message has been received. One of our attorneys will contact you shortly to discuss your case.
          </p>
          <button
            onClick={() => setSubmitSuccess(false)}
            className="btn bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Submit Another Inquiry
          </button>
        </div>
      ) : (
        <div className="lg:flex">
          <div className="lg:w-2/5 bg-gradient-to-br from-primary-600 to-primary-700 text-white lg:p-10 p-8">
            <div className="sticky top-8">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
                  <FaFire className="h-5 w-5 text-fire-400" />
                </div>
                <h3 className="text-2xl font-bold">Legal Support</h3>
              </div>
              
              <p className="mb-8 text-gray-100 leading-relaxed">
                Get expert legal assistance for your fire recovery claims. Our experienced attorneys are ready to help you navigate the complex insurance and legal processes.
              </p>
              
              <div className="space-y-5 mb-8">
                <div className="flex flex-col">
                  <div className="flex items-center mb-1">
                    <div className="bg-white/10 p-2 rounded-full mr-3 flex-shrink-0">
                      <FaPhone className="h-4 w-4 text-white" />
                    </div>
                    <h4 className="font-medium">Phone</h4>
                  </div>
                  <a href="tel:+11234567890" className="mt-1 px-3 py-2 bg-white/10 rounded-lg text-gray-100 text-sm flex items-center justify-center hover:bg-white/20 transition-colors">
                    (123) 456-7890
                  </a>
                </div>
                
                <div className="flex flex-col">
                  <div className="flex items-center mb-1">
                    <div className="bg-white/10 p-2 rounded-full mr-3 flex-shrink-0">
                      <FaEnvelope className="h-4 w-4 text-white" />
                    </div>
                    <h4 className="font-medium">Email</h4>
                  </div>
                  <div className="flex mt-1">
                    <a 
                      href="mailto:info@lafirerecoverylaw.com" 
                      className="grow py-2 px-3 bg-white/10 rounded-l-lg text-gray-100 hover:bg-white/20 transition-colors flex items-center justify-center"
                      title="Email us"
                    >
                      <div className="flex items-center">
                        <span className="text-sm">info@</span>
                        <span className="text-sm font-medium">fire-law.com</span>
                      </div>
                    </a>
                    <button
                      onClick={copyToClipboard}
                      className={`p-2 ${copySuccess ? 'bg-green-600/20' : 'bg-white/10'} rounded-r-lg text-gray-100 hover:bg-white/20 transition-colors flex-shrink-0 flex items-center justify-center`}
                      title={copySuccess ? "Copied!" : "Copy email address"}
                      aria-label="Copy email address to clipboard"
                    >
                      {copySuccess ? (
                        <FaCheck className="h-4 w-4 text-green-400" />
                      ) : (
                        <FaCopy className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <div className="flex items-center mb-1">
                    <div className="bg-white/10 p-2 rounded-full mr-3 flex-shrink-0">
                      <FaMapMarkerAlt className="h-4 w-4 text-white" />
                    </div>
                    <h4 className="font-medium">Office</h4>
                  </div>
                  <div className="mt-1 px-3 py-2 bg-white/10 rounded-lg text-gray-100 text-sm text-center">
                    123 Legal Street<br />Los Angeles, CA 90001
                  </div>
                </div>
              </div>
              
              <div className="hidden lg:block border-t border-white/20 pt-6">
                <p className="text-sm text-white/80 leading-relaxed">
                  "The team at LA Fire Recovery Law helped me get the compensation I deserved after losing everything in the wildfire."
                </p>
                <p className="text-sm mt-2 font-medium text-white/90">— Sarah M., Fire Victim</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-3/5 p-8 lg:p-10">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">Get Free Legal Consultation</h3>
              
              {submitError && (
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-md mb-6 flex items-start">
                  <FaExclamationTriangle className="text-red-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-red-700">{submitError}</p>
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className={`relative ${focusedField === 'name' ? 'focused' : ''}`}>
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaUser className={`h-5 w-5 ${errors.name ? 'text-red-400' : focusedField === 'name' ? 'text-primary-500' : 'text-gray-400'}`} />
                  </div>
                  <input
                    id="name"
                    type="text"
                    className={`w-full pl-10 pr-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-0 transition-colors duration-200 bg-white/50 ${
                      errors.name 
                        ? 'border-red-300 focus:border-red-500' 
                        : focusedField === 'name'
                          ? 'border-primary-300 focus:border-primary-500' 
                          : 'border-gray-200 focus:border-primary-500'
                    }`}
                    placeholder="Full Name*"
                    {...register('name', { required: 'Name is required' })}
                    onFocus={() => handleFocus('name')}
                    onBlur={handleBlur}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>
                
                <div className={`relative ${focusedField === 'email' ? 'focused' : ''}`}>
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaEnvelope className={`h-5 w-5 ${errors.email ? 'text-red-400' : focusedField === 'email' ? 'text-primary-500' : 'text-gray-400'}`} />
                  </div>
                  <input
                    id="email"
                    type="email"
                    className={`w-full pl-10 pr-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-0 transition-colors duration-200 bg-white/50 ${
                      errors.email 
                        ? 'border-red-300 focus:border-red-500' 
                        : focusedField === 'email'
                          ? 'border-primary-300 focus:border-primary-500' 
                          : 'border-gray-200 focus:border-primary-500'
                    }`}
                    placeholder="Email Address*"
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    onFocus={() => handleFocus('email')}
                    onBlur={handleBlur}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>
                
                <div className={`relative ${focusedField === 'phone' ? 'focused' : ''}`}>
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaPhone className={`h-5 w-5 ${errors.phone ? 'text-red-400' : focusedField === 'phone' ? 'text-primary-500' : 'text-gray-400'}`} />
                  </div>
                  <input
                    id="phone"
                    type="tel"
                    className={`w-full pl-10 pr-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-0 transition-colors duration-200 bg-white/50 ${
                      errors.phone 
                        ? 'border-red-300 focus:border-red-500' 
                        : focusedField === 'phone'
                          ? 'border-primary-300 focus:border-primary-500' 
                          : 'border-gray-200 focus:border-primary-500'
                    }`}
                    placeholder="Phone Number*"
                    {...register('phone', { required: 'Phone number is required' })}
                    onFocus={() => handleFocus('phone')}
                    onBlur={handleBlur}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                  )}
                </div>
                
                <div className={`relative ${focusedField === 'fireLocation' ? 'focused' : ''}`}>
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaMapMarkerAlt className={`h-5 w-5 ${focusedField === 'fireLocation' ? 'text-primary-500' : 'text-gray-400'}`} />
                  </div>
                  <select
                    id="fireLocation"
                    className={`w-full pl-10 pr-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-0 transition-colors duration-200 bg-white/50 appearance-none ${
                      focusedField === 'fireLocation'
                        ? 'border-primary-300 focus:border-primary-500' 
                        : 'border-gray-200 focus:border-primary-500'
                    }`}
                    {...register('fireLocation')}
                    onFocus={() => handleFocus('fireLocation')}
                    onBlur={handleBlur}
                  >
                    <option value="">Select a fire location</option>
                    <option value="Eaton">Eaton Fire</option>
                    <option value="Alta Dena">Alta Dena Fire</option>
                    <option value="Palisades">Palisades Fire</option>
                    <option value="Other">Other</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/80 p-6 rounded-lg border border-gray-200">
                <label className="block text-gray-700 font-medium mb-3">
                  Type of Loss (Select all that apply)
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {lossTypes.map((type) => (
                    <div key={type.id} className="flex items-center">
                      <input
                        id={`lossType-${type.id}`}
                        type="checkbox"
                        className="h-5 w-5 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                        value={type.id}
                        {...register('lossType')}
                      />
                      <label htmlFor={`lossType-${type.id}`} className="ml-2 text-gray-700 flex items-center">
                        {type.icon}
                        {type.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className={`relative ${focusedField === 'message' ? 'focused' : ''}`}>
                <textarea
                  id="message"
                  rows={5}
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-0 transition-colors duration-200 bg-white/50 ${
                    focusedField === 'message'
                      ? 'border-primary-300 focus:border-primary-500' 
                      : 'border-gray-200 focus:border-primary-500'
                  }`}
                  placeholder="Tell us about your situation..."
                  {...register('message')}
                  onFocus={() => handleFocus('message')}
                  onBlur={handleBlur}
                ></textarea>
              </div>
              
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-fire-500 to-fire-600 text-white rounded-lg flex items-center justify-center font-medium hover:from-fire-600 hover:to-fire-700 transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-70"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    <>
                      Get Free Consultation
                      <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
                <p className="text-sm text-gray-500 mt-4">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

import { FaHome, FaBuilding, FaDollarSign, FaUserInjured, FaEllipsisH } from 'react-icons/fa';

export default ContactForm; 