import emailjs from '@emailjs/browser';

// Initialize EmailJS with your User ID
const initEmailJs = () => {
  console.log('Initializing EmailJS with User ID:', process.env.NEXT_PUBLIC_EMAILJS_USER_ID);
  emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_USER_ID || '');
};

// Template IDs for different form types
const TEMPLATE_IDS = {
  CONTACT: 'template_0v1e70a',
  QUICK_INTAKE: 'template_29zne2h',
  SERVICE: 'template_3m13s73',
  DEADLINE: 'template_njoneu9'
};

// Get notification recipients from environment variable or use default
const getNotificationRecipients = (): string[] => {
  const defaultRecipient = 'info@lafirerecoverylaw.com';
  const additionalRecipients = process.env.NEXT_PUBLIC_NOTIFICATION_EMAILS || '';
  
  // If no additional recipients are defined, return the default
  if (!additionalRecipients) {
    return [defaultRecipient];
  }
  
  // Parse the comma-separated list of emails
  const allRecipients = [
    defaultRecipient,
    ...additionalRecipients.split(',').map(email => email.trim())
  ];
  
  // Remove duplicates and return
  return [...new Set(allRecipients)];
};

// Send notification email with appropriate template
const sendNotificationEmail = async (templateParams: Record<string, unknown>) => {
  initEmailJs();
  
  try {
    // Determine which template to use based on form type
    let templateId = TEMPLATE_IDS.CONTACT; // Default template
    
    if (templateParams.form_type) {
      const formType = templateParams.form_type as string;
      
      if (formType.includes('Quick Intake')) {
        templateId = TEMPLATE_IDS.QUICK_INTAKE;
      } else if (formType.includes('Deadline')) {
        templateId = TEMPLATE_IDS.DEADLINE;
      } else if (formType.includes('Service') || formType.includes('Insurance') || formType.includes('Property') || formType.includes('Business') || formType.includes('Personal Injury')) {
        templateId = TEMPLATE_IDS.SERVICE;
      }
    }
    
    // Get the list of notification recipients
    const recipients = getNotificationRecipients();
    
    // Prepare common parameters for all templates
    const commonParams = {
      submission_date: new Date().toLocaleDateString(),
      submission_time: new Date().toLocaleTimeString(),
      current_year: new Date().getFullYear(),
      company_name: 'LA Fire Recovery Law',
      company_address: 'Los Angeles, CA',
      reply_email: 'info@lafirerecoverylaw.com',
      to_emails: recipients.join(',') // Add all recipients
    };
    
    console.log('Sending email using EmailJS with:');
    console.log('- Service ID:', process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID);
    console.log('- Template ID:', templateId);
    console.log('- Form Type:', templateParams.form_type);
    console.log('- Recipients:', recipients);
    
    const response = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
      templateId,
      {
        ...templateParams,
        ...commonParams
      }
    );
    console.log('EmailJS response:', response);
    return response;
  } catch (error) {
    console.error('EmailJS error details:', error);
    throw error;
  }
};

export { sendNotificationEmail, TEMPLATE_IDS }; 