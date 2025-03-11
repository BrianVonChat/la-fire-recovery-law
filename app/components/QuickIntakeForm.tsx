"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { FaArrowRight, FaExclamationTriangle } from 'react-icons/fa';
import { saveQuickIntakeForm, QuickIntakeFormData } from '../utils/formService';

type QuickFormData = {
  name: string;
  email: string;
  affectedByFire: boolean;
};

const QuickIntakeForm = () => {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm<QuickFormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: QuickFormData) => {
    setIsSubmitting(true);
    
    try {
      // Save form data to Firebase and send notification email
      await saveQuickIntakeForm(data as QuickIntakeFormData);
      
      // Save to localStorage for retrieval in the full form
      localStorage.setItem('quickFormData', JSON.stringify(data));
      
      // Redirect to the full intake form
      router.push('/contact?fromQuickForm=true');
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden">
      <div className="bg-fire-50 p-4 border-l-4 border-fire-600">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <FaExclamationTriangle className="h-5 w-5 text-fire-600" />
          </div>
          <div className="ml-3">
            <h3 className="text-lg font-medium text-fire-800">
              Affected by LA Wildfires?
            </h3>
            <p className="text-fire-700 text-sm">
              Get immediate legal assistance. Start with this quick form.
            </p>
          </div>
        </div>
      </div>
      
      <form onSubmit={handleSubmit(onSubmit)} className="p-6">
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Your Name*
            </label>
            <input
              id="name"
              type="text"
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="John Doe"
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address*
            </label>
            <input
              id="email"
              type="email"
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="john@example.com"
              {...register('email', { 
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address'
                }
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
            )}
          </div>
          
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="affectedByFire"
                type="checkbox"
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                {...register('affectedByFire')}
              />
            </div>
            <label htmlFor="affectedByFire" className="ml-3 text-sm text-gray-700">
              I have been affected by the LA wildfires
            </label>
          </div>
        </div>
        
        <div className="mt-6">
          <button
            type="submit"
            className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-fire-600 hover:bg-fire-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-fire-500"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Processing...' : (
              <>
                Get Free Legal Assistance
                <FaArrowRight className="ml-2" />
              </>
            )}
          </button>
        </div>
        
        <p className="mt-4 text-xs text-gray-500 text-center">
          Your information is confidential and protected by attorney-client privilege.
        </p>
      </form>
    </div>
  );
};

export default QuickIntakeForm; 