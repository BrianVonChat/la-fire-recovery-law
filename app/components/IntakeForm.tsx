"use client";

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FaArrowRight, FaArrowLeft, FaSave, FaCheck } from 'react-icons/fa';
import { useSearchParams } from 'next/navigation';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../utils/firebase';
import { sendNotificationEmail } from '../utils/emailjs';
import { saveServiceForm } from '../utils/formService';

type FormData = {
  // Step 1: Personal Information
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  
  // Step 2: Fire Information
  fireLocation: string;
  dateOfLoss: string;
  propertyType: string;
  
  // Step 3: Loss Details
  lossTypes: string[];
  insuranceCompany: string;
  policyNumber: string;
  claimFiled: string;
  claimStatus: string;
  
  // Step 4: Additional Information
  injuryDescription: string;
  businessLossDescription: string;
  additionalInfo: string;
};

type QuickFormData = {
  name: string;
  email: string;
  affectedByFire: boolean;
};

const IntakeForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formProgress, setFormProgress] = useState(0);
  const [formData, setFormData] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [formKey, setFormKey] = useState(Date.now()); // For form reset
  const [isQuickFormDataUsed, setIsQuickFormDataUsed] = useState(false);
  
  const searchParams = useSearchParams();
  const fromQuickForm = searchParams?.get('fromQuickForm') === 'true';
  
  const { register, handleSubmit, formState: { errors, isValid }, getValues, reset, trigger, setValue } = useForm<FormData>({
    mode: 'onChange',
    defaultValues: formData,
  });
  
  const totalSteps = 4;
  
  // Check for quick form data
  useEffect(() => {
    if (fromQuickForm && !isQuickFormDataUsed) {
      try {
        const savedData = localStorage.getItem('quickFormData');
        if (savedData) {
          const quickData: QuickFormData = JSON.parse(savedData);
          
          // Prefill the relevant fields
          setValue('fullName', quickData.name);
          setValue('email', quickData.email);
          
          setIsQuickFormDataUsed(true);
          
          // Clear the localStorage after using it
          localStorage.removeItem('quickFormData');
        }
      } catch (error) {
        console.error('Error retrieving quick form data:', error);
      }
    }
  }, [fromQuickForm, isQuickFormDataUsed, setValue]);
  
  // Update progress bar
  useEffect(() => {
    setFormProgress(((currentStep - 1) / totalSteps) * 100);
  }, [currentStep]);
  
  // Load saved form data from localStorage
  useEffect(() => {
    const savedData = localStorage.getItem('intakeFormData');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setFormData(parsedData);
      reset(parsedData);
    }
  }, [reset, formKey]);

  const saveProgress = () => {
    const values = getValues();
    setFormData(prev => ({
      ...prev,
      ...values
    }));
  };

  const nextStep = async () => {
    saveProgress();
    
    if (currentStep < totalSteps) {
      // Store the current scroll position
      const formElement = document.getElementById('intake-form-container');
      const currentPosition = formElement ? formElement.getBoundingClientRect().top + window.scrollY : null;
      
      setCurrentStep(currentStep + 1);
      
      // Maintain scroll position after state update
      if (currentPosition) {
        setTimeout(() => {
          window.scrollTo({
            top: currentPosition,
            behavior: 'auto'
          });
        }, 0);
      }
    }
  };

  const prevStep = () => {
    saveProgress();
    
    if (currentStep > 1) {
      // Store the current scroll position
      const formElement = document.getElementById('intake-form-container');
      const currentPosition = formElement ? formElement.getBoundingClientRect().top + window.scrollY : null;
      
      setCurrentStep(currentStep - 1);
      
      // Maintain scroll position after state update
      if (currentPosition) {
        setTimeout(() => {
          window.scrollTo({
            top: currentPosition,
            behavior: 'auto'
          });
        }, 0);
      }
    }
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      console.log('Submitting detailed intake form:', data);
      
      // Save to Firestore and send notification email using the service form function
      const docRef = await saveServiceForm(
        {
          name: data.fullName,
          email: data.email,
          phone: data.phone,
          fireLocation: data.fireLocation || 'Not specified',
          message: `
Loss Date: ${data.dateOfLoss || 'Not specified'}
Property Type: ${data.propertyType || 'Not specified'}
Loss Types: ${data.lossTypes?.join(', ') || 'Not specified'}
Insurance Company: ${data.insuranceCompany || 'Not specified'}
Policy Number: ${data.policyNumber || 'Not specified'}
Claim Filed: ${data.claimFiled || 'Not specified'}
Claim Status: ${data.claimStatus || 'Not specified'}
Injury Description: ${data.injuryDescription || 'None'}
Business Loss Description: ${data.businessLossDescription || 'None'}
Additional Info: ${data.additionalInfo || 'None'}
          `,
          lossType: data.lossTypes ? data.lossTypes.join(', ') : 'Not specified'
        },
        'Detailed Intake Form'
      );
      console.log('Form submitted successfully with ID:', docRef);
      setIsComplete(true);
      
      // Reset form after successful submission
      reset();
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setIsComplete(false);
    setCurrentStep(1);
    reset();
    setFormData({});
  };
  
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Personal Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">
                  Full Name*
                </label>
                <input
                  id="fullName"
                  type="text"
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${errors.fullName ? 'border-red-500' : 'border-gray-300'}`}
                  {...register('fullName', { required: 'Full name is required' })}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email Address*
                </label>
                <input
                  id="email"
                  type="email"
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                  Phone Number*
                </label>
                <input
                  id="phone"
                  type="tel"
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                  {...register('phone', { required: 'Phone number is required' })}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>
            </div>
            
            <div>
              <label htmlFor="address" className="block text-gray-700 font-medium mb-2">
                Street Address*
              </label>
              <input
                id="address"
                type="text"
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${errors.address ? 'border-red-500' : 'border-gray-300'}`}
                {...register('address', { required: 'Address is required' })}
              />
              {errors.address && (
                <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>
              )}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label htmlFor="city" className="block text-gray-700 font-medium mb-2">
                  City*
                </label>
                <input
                  id="city"
                  type="text"
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${errors.city ? 'border-red-500' : 'border-gray-300'}`}
                  {...register('city', { required: 'City is required' })}
                />
                {errors.city && (
                  <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="state" className="block text-gray-700 font-medium mb-2">
                  State*
                </label>
                <input
                  id="state"
                  type="text"
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${errors.state ? 'border-red-500' : 'border-gray-300'}`}
                  {...register('state', { required: 'State is required' })}
                />
                {errors.state && (
                  <p className="text-red-500 text-sm mt-1">{errors.state.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="zip" className="block text-gray-700 font-medium mb-2">
                  ZIP Code*
                </label>
                <input
                  id="zip"
                  type="text"
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${errors.zip ? 'border-red-500' : 'border-gray-300'}`}
                  {...register('zip', { required: 'ZIP code is required' })}
                />
                {errors.zip && (
                  <p className="text-red-500 text-sm mt-1">{errors.zip.message}</p>
                )}
              </div>
            </div>
          </div>
        );
        
      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Fire Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fireLocation" className="block text-gray-700 font-medium mb-2">
                  Fire Location*
                </label>
                <select
                  id="fireLocation"
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${errors.fireLocation ? 'border-red-500' : 'border-gray-300'}`}
                  {...register('fireLocation', { required: 'Please select a fire location' })}
                >
                  <option value="">Select a fire location</option>
                  <option value="Eaton">Eaton Fire</option>
                  <option value="Alta Dena">Alta Dena Fire</option>
                  <option value="Palisades">Palisades Fire</option>
                  <option value="Other">Other</option>
                </select>
                {errors.fireLocation && (
                  <p className="text-red-500 text-sm mt-1">{errors.fireLocation.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="dateOfLoss" className="block text-gray-700 font-medium mb-2">
                  Date of Loss*
                </label>
                <input
                  id="dateOfLoss"
                  type="date"
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${errors.dateOfLoss ? 'border-red-500' : 'border-gray-300'}`}
                  {...register('dateOfLoss', { required: 'Date of loss is required' })}
                />
                {errors.dateOfLoss && (
                  <p className="text-red-500 text-sm mt-1">{errors.dateOfLoss.message}</p>
                )}
              </div>
            </div>
            
            <div>
              <label htmlFor="propertyType" className="block text-gray-700 font-medium mb-2">
                Property Type*
              </label>
              <select
                id="propertyType"
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${errors.propertyType ? 'border-red-500' : 'border-gray-300'}`}
                {...register('propertyType', { required: 'Please select a property type' })}
              >
                <option value="">Select property type</option>
                <option value="Single-Family Home">Single-Family Home</option>
                <option value="Multi-Family Home">Multi-Family Home</option>
                <option value="Condominium">Condominium</option>
                <option value="Apartment">Apartment</option>
                <option value="Commercial Property">Commercial Property</option>
                <option value="Land">Land</option>
                <option value="Other">Other</option>
              </select>
              {errors.propertyType && (
                <p className="text-red-500 text-sm mt-1">{errors.propertyType.message}</p>
              )}
            </div>
          </div>
        );
        
      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Loss Details</h3>
            
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Type of Loss (Select all that apply)*
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {[
                  { id: 'property', label: 'Property Damage' },
                  { id: 'personal', label: 'Personal Belongings' },
                  { id: 'business', label: 'Business Loss' },
                  { id: 'income', label: 'Loss of Income' },
                  { id: 'injury', label: 'Personal Injury' },
                  { id: 'other', label: 'Other' },
                ].map((type) => (
                  <div key={type.id} className="flex items-center">
                    <input
                      id={`lossType-${type.id}`}
                      type="checkbox"
                      className="h-5 w-5 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                      value={type.id}
                      {...register('lossTypes', { required: 'Please select at least one type of loss' })}
                    />
                    <label htmlFor={`lossType-${type.id}`} className="ml-2 text-gray-700">
                      {type.label}
                    </label>
                  </div>
                ))}
              </div>
              {errors.lossTypes && (
                <p className="text-red-500 text-sm mt-1">{errors.lossTypes.message}</p>
              )}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="insuranceCompany" className="block text-gray-700 font-medium mb-2">
                  Insurance Company
                </label>
                <input
                  id="insuranceCompany"
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  {...register('insuranceCompany')}
                />
              </div>
              
              <div>
                <label htmlFor="policyNumber" className="block text-gray-700 font-medium mb-2">
                  Policy Number
                </label>
                <input
                  id="policyNumber"
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  {...register('policyNumber')}
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="claimFiled" className="block text-gray-700 font-medium mb-2">
                  Have you filed a claim?*
                </label>
                <select
                  id="claimFiled"
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${errors.claimFiled ? 'border-red-500' : 'border-gray-300'}`}
                  {...register('claimFiled', { required: 'Please select an option' })}
                >
                  <option value="">Select an option</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                  <option value="In Progress">In Progress</option>
                </select>
                {errors.claimFiled && (
                  <p className="text-red-500 text-sm mt-1">{errors.claimFiled.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="claimStatus" className="block text-gray-700 font-medium mb-2">
                  Claim Status
                </label>
                <select
                  id="claimStatus"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  {...register('claimStatus')}
                >
                  <option value="">Select claim status</option>
                  <option value="Not Filed">Not Filed</option>
                  <option value="Filed - Awaiting Response">Filed - Awaiting Response</option>
                  <option value="In Review">In Review</option>
                  <option value="Partially Approved">Partially Approved</option>
                  <option value="Approved">Approved</option>
                  <option value="Denied">Denied</option>
                  <option value="Appeal Filed">Appeal Filed</option>
                </select>
              </div>
            </div>
          </div>
        );
        
      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Additional Information</h3>
            
            <div>
              <label htmlFor="injuryDescription" className="block text-gray-700 font-medium mb-2">
                If you suffered injuries, please describe
              </label>
              <textarea
                id="injuryDescription"
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Describe any injuries you suffered..."
                {...register('injuryDescription')}
              ></textarea>
            </div>
            
            <div>
              <label htmlFor="businessLossDescription" className="block text-gray-700 font-medium mb-2">
                If you suffered business losses, please describe
              </label>
              <textarea
                id="businessLossDescription"
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Describe any business losses..."
                {...register('businessLossDescription')}
              ></textarea>
            </div>
            
            <div>
              <label htmlFor="additionalInfo" className="block text-gray-700 font-medium mb-2">
                Any additional information you'd like to share
              </label>
              <textarea
                id="additionalInfo"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Share any additional details about your situation..."
                {...register('additionalInfo')}
              ></textarea>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };
  
  if (isComplete) {
    return (
      <div id="intake-form-container" className="bg-white rounded-lg shadow-lg p-8">
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaCheck className="h-8 w-8 text-green-500" />
          </div>
          <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
          <p className="text-gray-600 mb-6">
            Your intake form has been successfully submitted. One of our attorneys will review your information and contact you within 24 hours to discuss your case.
          </p>
          <button
            onClick={resetForm}
            className="btn btn-primary"
          >
            Submit Another Form
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <div id="intake-form-container" className="bg-white rounded-lg shadow-lg p-8">
      <div className="mb-8">
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            <div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-primary-600 bg-primary-200">
                Step {currentStep} of {totalSteps}
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs font-semibold inline-block text-primary-600">
                {Math.round(formProgress)}%
              </span>
            </div>
          </div>
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-primary-200">
            <div
              style={{ width: `${formProgress}%` }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary-600 transition-all duration-500"
            ></div>
          </div>
        </div>
      </div>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        {renderStep()}
        
        <div className="mt-8 flex flex-wrap justify-between items-center">
          <div>
            {currentStep > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="btn bg-gray-200 text-gray-800 hover:bg-gray-300 mr-2"
              >
                <FaArrowLeft className="mr-2" />
                Previous
              </button>
            )}
            
            <button
              type="button"
              onClick={saveProgress}
              className="btn bg-gray-200 text-gray-800 hover:bg-gray-300"
            >
              <FaSave className="mr-2" />
              Save Progress
            </button>
          </div>
          
          <div>
            {currentStep < totalSteps ? (
              <button
                type="button"
                onClick={nextStep}
                className="btn btn-primary"
              >
                Next
                <FaArrowRight className="ml-2" />
              </button>
            ) : (
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default IntakeForm; 