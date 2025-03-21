import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase';
import { sendNotificationEmail } from './emailjs';

// Helper function to get the current page path
const getFormOrigin = (): string => {
  if (typeof window !== 'undefined') {
    // Get the full URL
    const fullPath = window.location.href;
    // Extract pathname
    const pathname = window.location.pathname;
    
    return `${pathname} (${fullPath})`;
  }
  return 'Unknown origin';
};

// ContactForm data type
export type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  fireLocation: string;
  message: string;
  lossType?: string;
  formContext?: string; // Where in the site the form was submitted from
};

// QuickIntakeForm data type
export type QuickIntakeFormData = {
  name: string;
  email: string;
  affectedByFire: boolean;
};

// Save contact form submission to Firebase
export const saveContactForm = async (formData: ContactFormData) => {
  console.log('Attempting to save contact form:', formData);
  try {
    // Get form origin
    const formOrigin = getFormOrigin();
    
    // Add a timestamp to the data
    const dataWithTimestamp = {
      ...formData,
      createdAt: serverTimestamp(),
      formType: 'Main Contact Form',
      formOrigin
    };
    
    // Save to Firestore
    const docRef = await addDoc(collection(db, 'formSubmissions'), dataWithTimestamp);
    console.log('Form submission saved with ID:', docRef.id);
    
    // Send email notification
    try {
      await sendNotificationEmail({
        form_type: 'Main Contact Form',
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        fire_location: formData.fireLocation || 'Not specified',
        message: formData.message || 'No message provided',
        loss_type: formData.lossType || 'Not specified',
        form_context: formData.formContext || 'Not specified',
        form_origin: formOrigin,
        submission_id: docRef.id
      });
      console.log('Email notification sent successfully');
    } catch (emailError) {
      console.error('Failed to send email notification:', emailError);
      // Continue execution even if email fails
    }
    
    return docRef.id;
  } catch (error) {
    console.error('Error saving form submission:', error);
    throw error;
  }
};

// Save quick intake form submission to Firebase
export const saveQuickIntakeForm = async (formData: QuickIntakeFormData) => {
  console.log('Attempting to save quick intake form:', formData);
  try {
    // Get form origin
    const formOrigin = getFormOrigin();
    
    // Add a timestamp to the data
    const dataWithTimestamp = {
      ...formData,
      createdAt: serverTimestamp(),
      formType: 'Quick Intake Form',
      formOrigin
    };
    
    // Save to Firestore
    const docRef = await addDoc(collection(db, 'formSubmissions'), dataWithTimestamp);
    console.log('Quick intake form saved with ID:', docRef.id);
    
    // Send email notification
    try {
      await sendNotificationEmail({
        form_type: 'Quick Intake Form',
        name: formData.name,
        email: formData.email,
        affected_by_fire: formData.affectedByFire ? 'Yes' : 'No',
        form_origin: formOrigin,
        submission_id: docRef.id
      });
      console.log('Email notification sent successfully for quick intake');
    } catch (emailError) {
      console.error('Failed to send email notification for quick intake:', emailError);
      // Continue execution even if email fails
    }
    
    return docRef.id;
  } catch (error) {
    console.error('Error saving quick intake form:', error);
    throw error;
  }
};

// Function to handle service-specific form submissions
export const saveServiceForm = async (formData: ContactFormData, serviceType: string) => {
  console.log('Attempting to save service form:', formData, 'Service:', serviceType);
  try {
    // Get form origin
    const formOrigin = getFormOrigin();
    
    // Add a timestamp and service type to the data
    const dataWithTimestamp = {
      ...formData,
      createdAt: serverTimestamp(),
      formType: `Service Form - ${serviceType}`,
      serviceType,
      formOrigin
    };
    
    // Save to Firestore
    const docRef = await addDoc(collection(db, 'formSubmissions'), dataWithTimestamp);
    console.log('Service form submission saved with ID:', docRef.id);
    
    // Send email notification
    try {
      await sendNotificationEmail({
        form_type: `Service Form - ${serviceType}`,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        fire_location: formData.fireLocation || 'Not specified',
        message: formData.message || 'No message provided',
        loss_type: formData.lossType || 'Not specified',
        service_type: serviceType,
        form_origin: formOrigin,
        submission_id: docRef.id
      });
      console.log('Email notification sent successfully for service form');
    } catch (emailError) {
      console.error('Failed to send email notification for service form:', emailError);
      // Continue execution even if email fails
    }
    
    return docRef.id;
  } catch (error) {
    console.error('Error saving service form submission:', error);
    throw error;
  }
};

// Function to handle deadline form submissions
export const saveDeadlineForm = async (formData: ContactFormData, deadlineType: string) => {
  console.log('Attempting to save deadline form:', formData, 'Deadline:', deadlineType);
  try {
    // Get form origin
    const formOrigin = getFormOrigin();
    
    // Add a timestamp and deadline type to the data
    const dataWithTimestamp = {
      ...formData,
      createdAt: serverTimestamp(),
      formType: `Deadline Form - ${deadlineType}`,
      deadlineType,
      formOrigin
    };
    
    // Save to Firestore
    const docRef = await addDoc(collection(db, 'formSubmissions'), dataWithTimestamp);
    console.log('Deadline form submission saved with ID:', docRef.id);
    
    // Send email notification
    try {
      await sendNotificationEmail({
        form_type: `Deadline Form - ${deadlineType}`,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        fire_location: formData.fireLocation || 'Not specified',
        message: formData.message || 'No message provided',
        loss_type: formData.lossType || 'Not specified',
        deadline_type: deadlineType,
        form_origin: formOrigin,
        submission_id: docRef.id
      });
      console.log('Email notification sent successfully for deadline form');
    } catch (emailError) {
      console.error('Failed to send email notification for deadline form:', emailError);
      // Continue execution even if email fails
    }
    
    return docRef.id;
  } catch (error) {
    console.error('Error saving deadline form submission:', error);
    throw error;
  }
}; 