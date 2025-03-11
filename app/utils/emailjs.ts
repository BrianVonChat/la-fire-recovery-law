import emailjs from '@emailjs/browser';

// Initialize EmailJS with your User ID
const initEmailJs = () => {
  console.log('Initializing EmailJS with User ID:', process.env.NEXT_PUBLIC_EMAILJS_USER_ID);
  emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_USER_ID || '');
};

// Send notification email
const sendNotificationEmail = async (templateParams: Record<string, unknown>) => {
  initEmailJs();
  
  try {
    console.log('Sending email using EmailJS with:');
    console.log('- Service ID:', process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID);
    console.log('- Template ID:', process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID);
    
    const response = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
      templateParams
    );
    console.log('EmailJS response:', response);
    return response;
  } catch (error) {
    console.error('EmailJS error details:', error);
    throw error;
  }
};

export { sendNotificationEmail }; 