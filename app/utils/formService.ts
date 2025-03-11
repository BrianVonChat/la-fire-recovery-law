import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase';
import { sendNotificationEmail } from './emailjs';

// ContactForm data type
export type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  fireLocation: string;
  message: string;
  lossType?: string[];
};

// QuickIntakeForm data type
export type QuickIntakeFormData = {
  name: string;
  email: string;
  affectedByFire: boolean;
};

// Save contact form submission to Firebase
export const saveContactForm = async (data: ContactFormData) => {
  try {
    console.log('Attempting to save contact form data:', data);
    
    // Add timestamp
    const submissionData = {
      ...data,
      createdAt: serverTimestamp(),
      formType: 'contact'
    };
    
    // Save to Firestore
    console.log('Saving to Firestore collection "formSubmissions"...');
    const docRef = await addDoc(collection(db, 'formSubmissions'), submissionData);
    console.log('Successfully saved to Firestore with ID:', docRef.id);
    
    // Send email notification
    console.log('Attempting to send email notification...');
    try {
      const emailParams = {
        form_type: 'Contact Form',
        name: data.name,
        email: data.email,
        phone: data.phone,
        fire_location: data.fireLocation || 'Not specified',
        message: data.message,
        submission_id: docRef.id
      };
      console.log('Email parameters:', emailParams);
      
      const emailResult = await sendNotificationEmail(emailParams);
      console.log('Email notification sent successfully:', emailResult);
    } catch (emailError) {
      console.error('Failed to send email notification:', emailError);
      // Continue execution even if email fails
    }
    
    return docRef.id;
  } catch (error) {
    console.error('Error saving contact form:', error);
    throw error;
  }
};

// Save quick intake form submission to Firebase
export const saveQuickIntakeForm = async (data: QuickIntakeFormData) => {
  try {
    console.log('Attempting to save quick intake form data:', data);
    
    // Add timestamp
    const submissionData = {
      ...data,
      createdAt: serverTimestamp(),
      formType: 'quickIntake'
    };
    
    // Save to Firestore
    console.log('Saving to Firestore collection "formSubmissions"...');
    const docRef = await addDoc(collection(db, 'formSubmissions'), submissionData);
    console.log('Successfully saved to Firestore with ID:', docRef.id);
    
    // Send email notification
    console.log('Attempting to send email notification...');
    try {
      const emailParams = {
        form_type: 'Quick Intake Form',
        name: data.name,
        email: data.email,
        affected_by_fire: data.affectedByFire ? 'Yes' : 'No',
        submission_id: docRef.id
      };
      console.log('Email parameters:', emailParams);
      
      const emailResult = await sendNotificationEmail(emailParams);
      console.log('Email notification sent successfully:', emailResult);
    } catch (emailError) {
      console.error('Failed to send email notification:', emailError);
      // Continue execution even if email fails
    }
    
    return docRef.id;
  } catch (error) {
    console.error('Error saving quick intake form:', error);
    throw error;
  }
}; 