import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { 
  FaFileAlt, 
  FaExternalLinkAlt, 
  FaArrowRight, 
  FaPhone, 
  FaFilePdf, 
  FaDownload, 
  FaBook, 
  FaCalendarAlt, 
  FaClipboardList,
  FaExclamationTriangle,
  FaQuestionCircle,
  FaChartLine,
  FaGavel
} from 'react-icons/fa';
import { storage } from '../utils/firebase';
import { ref, getDownloadURL } from 'firebase/storage';
import dynamic from 'next/dynamic';
import DownloadButton from '../components/DownloadButton';

// Dynamically import the client component
const DownloadButtonComponent = dynamic(() => import('../components/DownloadButton'), {
  ssr: false,
  loading: () => (
    <span className="inline-flex items-center text-fire-700 font-medium">
      <FaDownload className="mr-2 h-4 w-4" />
      <span>Loading...</span>
    </span>
  )
});

export const metadata = {
  title: 'Wildfire Recovery Resources | LA Fire Recovery Law',
  description: 'Free resources and guides for Los Angeles wildfire victims, including insurance claim worksheets, damage documentation guides, and helpful links.',
  keywords: 'wildfire resources, fire recovery guides, insurance claim worksheets, damage documentation, fire victim assistance, Los Angeles fire resources',
};

export default function ResourcesPage() {
  // Downloadable resources
  const resources = [
    {
      id: 1,
      title: 'Insurance Claim Documentation Checklist',
      description: 'A comprehensive checklist to help you properly document all losses for your insurance claim.',
      icon: <FaClipboardList className="h-8 w-8 text-fire-600" />,
      fileType: 'PDF',
      fileSize: '43.37 KB',
      storagePath: 'Insurance-Claim-Documentation-Checklist.pdf',
      fileName: 'Insurance-Claim-Documentation-Checklist.pdf'
    },
    {
      id: 2,
      title: 'Fire Damage Property Inventory Worksheet',
      description: 'Detailed worksheet to catalog and value personal property lost in a fire.',
      icon: <FaFileAlt className="h-8 w-8 text-fire-600" />,
      fileType: 'PDF',
      fileSize: '52.13 KB',
      storagePath: 'Fire-Damage-Property-Inventory-Worksheet.pdf',
      fileName: 'Fire-Damage-Property-Inventory-Worksheet.pdf'
    },
    {
      id: 3,
      title: 'Business Interruption Loss Calculator',
      description: 'Spreadsheet to help business owners calculate financial losses due to fire-related interruption.',
      icon: <FaChartLine className="h-8 w-8 text-fire-600" />,
      fileType: 'Excel',
      fileSize: '5.09 KB',
      storagePath: 'Business-Interruption-Loss-Calculator.xlsx',
      fileName: 'Business-Interruption-Loss-Calculator.xlsx'
    },
    {
      id: 4,
      title: 'Post-Fire Legal Rights Guide',
      description: 'Understanding your legal rights and options after experiencing property loss from a wildfire.',
      icon: <FaGavel className="h-8 w-8 text-fire-600" />,
      fileType: 'PDF',
      fileSize: '41.15 KB',
      storagePath: 'Post-Fire-Legal-Rights-Guide.pdf',
      fileName: 'Post-Fire-Legal-Rights-Guide.pdf'
    },
    {
      id: 5,
      title: 'Navigating FEMA Assistance Programs',
      description: 'Step-by-step guide to applying for and receiving FEMA disaster assistance.',
      icon: <FaBook className="h-8 w-8 text-fire-600" />,
      fileType: 'PDF',
      fileSize: '45.44 KB',
      storagePath: 'Navigating-FEMA-Assistance-Programs.pdf',
      fileName: 'Navigating-FEMA-Assistance-Programs.pdf'
    },
    {
      id: 6,
      title: 'Insurance Claim Appeal Letter Templates',
      description: 'Pre-formatted templates for appealing denied or underpaid insurance claims.',
      icon: <FaFilePdf className="h-8 w-8 text-fire-600" />,
      fileType: 'Word',
      fileSize: '7.04 KB',
      storagePath: 'Insurance-Claim-Appeal-Letter-Templates.docx',
      fileName: 'Insurance-Claim-Appeal-Letter-Templates.docx'
    },
  ];

  // External resources
  const externalResources = [
    {
      id: 1,
      title: 'California Department of Insurance',
      description: 'Official resources for insurance-related information, complaints, and assistance for wildfire victims.',
      website: 'https://www.insurance.ca.gov/01-consumers/140-catastrophes/WildfireResources.cfm',
      icon: <FaExternalLinkAlt className="h-5 w-5" />,
    },
    {
      id: 2,
      title: 'FEMA Disaster Assistance',
      description: 'Apply for federal disaster assistance and find recovery centers near you.',
      website: 'https://www.disasterassistance.gov/',
      icon: <FaExternalLinkAlt className="h-5 w-5" />,
    },
    {
      id: 3,
      title: 'California Governor\'s Office of Emergency Services',
      description: 'Current information on wildfire status, evacuation centers, and state-level assistance.',
      website: 'https://www.caloes.ca.gov/',
      icon: <FaExternalLinkAlt className="h-5 w-5" />,
    },
    {
      id: 4,
      title: 'United Policyholders',
      description: 'Non-profit organization providing guidance and advocacy for insurance policyholders.',
      website: 'https://uphelp.org/disaster-recovery-help/',
      icon: <FaExternalLinkAlt className="h-5 w-5" />,
    },
    {
      id: 5,
      title: 'Small Business Administration (SBA) Disaster Loans',
      description: 'Low-interest disaster loans for businesses, homeowners, and renters affected by wildfires.',
      website: 'https://www.sba.gov/funding-programs/disaster-assistance',
      icon: <FaExternalLinkAlt className="h-5 w-5" />,
    },
    {
      id: 6,
      title: 'California Contractors State License Board',
      description: 'Verify contractor licenses and find information on avoiding post-disaster fraud.',
      website: 'https://www.cslb.ca.gov/consumers/disaster_help_center/',
      icon: <FaExternalLinkAlt className="h-5 w-5" />,
    },
  ];

  // FAQ items
  const faqs = [
    {
      id: 1,
      question: 'What is the first thing I should do after my property is damaged in a wildfire?',
      answer: 'First, ensure your safety and the safety of your family. Once safe, contact your insurance company to report the loss as soon as possible. Take photos and videos of all damage before removing any debris or making temporary repairs. Keep receipts for all expenses related to temporary housing, food, and other necessities as these may be reimbursable under your policy.',
    },
    {
      id: 2,
      question: 'How long do I have to file an insurance claim after a wildfire?',
      answer: 'In California, you generally have at least 12 months to file a claim after a wildfire, but this timeframe has been extended to 24 months for recent major wildfires. However, it\'s best to file your claim as soon as possible. Check your specific insurance policy for claim filing deadlines, and be aware that certain documentation may need to be submitted within specific timeframes.',
    },
    {
      id: 3,
      question: 'What if my insurance policy doesn\'t cover all my losses?',
      answer: 'If your insurance coverage is insufficient, you may be eligible for additional assistance through FEMA, SBA disaster loans, or state programs. Additionally, if the fire was caused by negligence (such as utility company equipment), you might have legal recourse to recover damages through a lawsuit. Our attorneys can help evaluate your situation and identify all potential sources of recovery.',
    },
    {
      id: 4,
      question: 'How do I document items that were completely destroyed?',
      answer: 'Create a detailed inventory of lost items, including descriptions, approximate age, purchase price, and estimated replacement cost. Use photos from before the fire if available, credit card statements, bank records, and receipts. Ask friends and family for photos that might show your home\'s interior. Our downloadable inventory worksheet can help you organize this information systematically.',
    },
    {
      id: 5,
      question: 'Should I accept the first settlement offer from my insurance company?',
      answer: 'It\'s generally advisable to carefully review any settlement offer before accepting it. First offers are often lower than what you may be entitled to receive. Consider consulting with an attorney who specializes in fire insurance claims to ensure the offer adequately covers your losses according to your policy terms. Once you accept a settlement, it may be difficult to reopen the claim for additional compensation.',
    },
    {
      id: 6,
      question: 'What if my insurance company is delaying or denying my claim?',
      answer: 'If your insurer is unreasonably delaying, denying, or underpaying your claim, you may have a bad faith insurance claim. Document all communications with your insurance company. You can file a complaint with the California Department of Insurance and consult with an attorney who specializes in insurance bad faith. Our legal team can help you understand your rights and options for addressing claim delays or denials.',
    },
  ];

  // Upcoming events
  const events = [
    {
      id: 1,
      title: 'Wildfire Insurance Claim Workshop',
      date: 'March 18, 2023',
      time: '6:00 PM - 8:00 PM',
      location: 'Virtual Webinar',
      description: 'Learn how to properly document your losses and maximize your insurance claim recovery.',
      registrationLink: 'https://us02web.zoom.us/webinar/register/WN_fireinsuranceclaimworkshop',
    },
    {
      id: 2,
      title: 'Free Legal Consultation Day',
      date: 'March 25, 2023',
      time: '9:00 AM - 5:00 PM',
      location: 'LA Fire Recovery Law Office',
      description: 'One-on-one consultations with our attorneys for wildfire victims. Appointment required.',
      registrationLink: 'https://calendly.com/lafirerecoverylaw/free-consultation',
    },
    {
      id: 3,
      title: 'FEMA Assistance Application Help Session',
      date: 'April 8, 2023',
      time: '10:00 AM - 2:00 PM',
      location: 'Woodland Hills Community Center',
      description: 'Get help completing your FEMA application from experienced disaster recovery specialists.',
      registrationLink: 'https://forms.gle/femaAssistanceRegistration',
    },
  ];

  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-gray-900 to-primary-900 text-white py-20">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Free Wildfire Recovery Resources
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 font-light leading-relaxed mb-8">
              Guides, tools, and information to help you navigate the recovery process after a wildfire.
            </p>
            <div className="h-1 w-24 bg-fire-500 mb-8"></div>
            <p className="text-gray-200 mb-6">
              We've compiled these resources to support Los Angeles wildfire victims through the recovery process. From documentation worksheets to informational guides and helpful external links, these tools will help you navigate insurance claims, government assistance, and rebuilding efforts.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a 
                href="#downloadable-resources" 
                className="btn btn-fire group py-3 px-6"
              >
                <FaDownload className="mr-2" />
                Access Free Resources
              </a>
              <Link 
                href="/contact" 
                className="btn btn-outline-light group py-3 px-6"
              >
                Get Personalized Help
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
        
        {/* Background pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:16px_16px]"></div>
      </div>
      
      {/* Emergency Resources Alert */}
      <div className="bg-amber-50 border-l-4 border-amber-500 p-5">
        <div className="container-custom">
          <div className="flex items-start">
            <div className="mr-4 mt-1">
              <FaExclamationTriangle className="h-6 w-6 text-amber-500" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-amber-800 mb-2">Emergency Resources</h2>
              <p className="text-amber-700 mb-3">
                If you're currently experiencing an emergency due to an active wildfire, please contact emergency services immediately:
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="font-bold text-amber-800 mr-2">Emergency:</span>
                  <a href="tel:911" className="text-amber-700 underline">911</a>
                </div>
                <div className="flex items-center">
                  <span className="font-bold text-amber-800 mr-2">California Fire Information:</span>
                  <a href="tel:+18009523434" className="text-amber-700 underline">1-800-952-3434</a>
                </div>
                <div className="flex items-center">
                  <span className="font-bold text-amber-800 mr-2">Current Fire Information:</span>
                  <a href="https://www.fire.ca.gov/incidents/" className="text-amber-700 underline flex items-center" target="_blank" rel="noopener noreferrer">
                    CAL FIRE Website
                    <FaExternalLinkAlt className="h-3 w-3 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Downloadable Resources Section */}
      <section id="downloadable-resources" className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-fire-700 font-medium mb-3 tracking-wide uppercase">Helpful Tools</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Free Guides & Worksheets</h2>
            <div className="w-24 h-1 bg-fire-700 mx-auto mb-6 opacity-70"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Download these resources to help you document your losses, understand your rights, and navigate the recovery process.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource) => (
              <div 
                key={resource.id} 
                className="bg-gray-50 rounded-lg border border-gray-100 p-6 hover:shadow-md transition-shadow"
              >
                <div className="mb-5">
                  {resource.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{resource.title}</h3>
                <p className="text-gray-600 mb-5">
                  {resource.description}
                </p>
                <div className="mt-auto pt-4 border-t border-gray-200 flex flex-wrap justify-between items-center">
                  <div className="text-sm text-gray-500">
                    {resource.fileType}{' • '}{resource.fileSize}
                  </div>
                  {resource.storagePath && (
                    <DownloadButton
                      storagePath={resource.storagePath}
                      displayName="Download"
                      fileName={resource.fileName}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* External Resources Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-fire-700 font-medium mb-3 tracking-wide uppercase">Additional Help</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Helpful External Resources</h2>
            <div className="w-24 h-1 bg-fire-700 mx-auto mb-6 opacity-70"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These organizations provide valuable assistance and information for wildfire victims.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {externalResources.map((resource) => (
              <div 
                key={resource.id} 
                className="bg-white rounded-lg border border-gray-100 p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{resource.title}</h3>
                <p className="text-gray-600 mb-5">
                  {resource.description}
                </p>
                <div className="mt-auto pt-4 border-t border-gray-200">
                  <a 
                    href={resource.website} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-fire-700 font-medium hover:text-fire-800 transition-colors"
                  >
                    <span>Visit Website</span>
                    {resource.icon}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-fire-700 font-medium mb-3 tracking-wide uppercase">Common Questions</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="w-24 h-1 bg-fire-700 mx-auto mb-6 opacity-70"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Answers to common questions about wildfire recovery, insurance claims, and legal rights.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq) => (
              <div 
                key={faq.id} 
                className="bg-gray-50 rounded-lg border border-gray-100 p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start mb-4">
                  <div className="mr-4 mt-1">
                    <FaQuestionCircle className="h-5 w-5 text-fire-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{faq.question}</h3>
                </div>
                <p className="text-gray-600 pl-9">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              Have more questions? We're here to help you navigate the wildfire recovery process.
            </p>
            <div className="flex justify-center">
              <Link 
                href="/contact" 
                className="btn btn-fire group py-3 px-6"
              >
                <span>Ask Your Question</span>
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Upcoming Events Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-fire-700 font-medium mb-3 tracking-wide uppercase">Get Involved</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Upcoming Events & Workshops</h2>
            <div className="w-24 h-1 bg-fire-700 mx-auto mb-6 opacity-70"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join us for these free events designed to help wildfire victims navigate the recovery process.
            </p>
          </div>
          
          <div className="space-y-6">
            {events.map((event) => (
              <div 
                key={event.id} 
                className="bg-white rounded-lg border border-gray-100 p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="mb-4 md:mb-0">
                    <div className="flex items-start md:items-center flex-col md:flex-row md:gap-4">
                      <div className="flex items-center mb-2 md:mb-0">
                        <FaCalendarAlt className="h-5 w-5 text-fire-600 mr-2" />
                        <span className="font-medium text-gray-900">{event.date}</span>
                      </div>
                      <div className="font-medium text-gray-700">
                        {event.time} • {event.location}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">{event.title}</h3>
                    <p className="text-gray-600">
                      {event.description}
                    </p>
                  </div>
                  
                  <div className="md:ml-6">
                    <a 
                      href={event.registrationLink} 
                      className="btn btn-fire w-full md:w-auto whitespace-nowrap"
                    >
                      Register Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 bg-primary-50 rounded-lg border border-primary-100 p-8 text-center">
            <h3 className="text-2xl font-bold text-primary-900 mb-4">Stay Updated on Future Events</h3>
            <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
              Subscribe to our email list to receive notifications about upcoming workshops, seminars, and resources for wildfire victims.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <button className="btn btn-primary whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Personalized Legal Help?</h2>
            <p className="text-xl text-gray-100 mb-8">
              Our experienced fire recovery attorneys are ready to help you navigate your specific situation and get the compensation you deserve.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="tel:+1800FIRELAW" 
                className="btn btn-fire-light group py-3 px-6"
              >
                <FaPhone className="mr-2" />
                Call For Free Consultation
              </a>
              <Link 
                href="/contact" 
                className="btn btn-outline-light group py-3 px-6"
              >
                Contact Online
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 