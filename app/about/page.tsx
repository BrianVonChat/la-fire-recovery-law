import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin, FaEnvelope, FaPhone, FaArrowRight } from 'react-icons/fa';

export const metadata = {
  title: 'About Our Fire Recovery Attorney | LA Fire Recovery Law',
  description: "Meet our experienced attorney dedicated to helping victims of Los Angeles fires recover what they've lost through insurance claims and legal representation.",
  keywords: 'fire recovery attorney, los angeles fire lawyer, insurance claim lawyer, James Dicks, fire damage legal team',
};

export default function AboutPage() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-gray-900 to-primary-900 text-white py-20">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Our Experienced Legal Team
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 font-light leading-relaxed mb-8">
              Dedicated attorneys with decades of experience helping fire victims recover the compensation they deserve.
            </p>
            <div className="h-1 w-24 bg-fire-500 mb-8"></div>
            <p className="text-gray-200 mb-6">
              At LA Fire Recovery Law, we combine extensive legal expertise with compassion and a deep understanding of the challenges faced by fire victims. Our attorney has successfully recovered millions of dollars for clients, helping them rebuild their lives after devastating losses.
            </p>
          </div>
        </div>
      </div>
      
      {/* Attorney Profile: James N. Dicks */}
      <section className="py-20 bg-white" id="james-dicks">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="relative aspect-[3/4] w-full rounded-lg shadow-xl overflow-hidden mb-6">
                  <Image 
                    src="https://firebasestorage.googleapis.com/v0/b/fire-protection-attorneys.firebasestorage.app/o/fire_recovery_attorney_jdlaw.png?alt=media&token=0bb48ed1-9fa8-422a-99e5-4077465d85e9"
                    alt="James N. Dicks - Founding Attorney"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-100">
                  <h3 className="text-xl font-bold mb-1">James N. Dicks</h3>
                  <p className="text-primary-600 font-medium mb-4">Founding Attorney, jD Law, P.C.</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <div className="w-8 text-gray-400"><FaEnvelope /></div>
                      <a href="mailto:jdicks@jdlaw.com" className="text-gray-700 hover:text-primary-600 transition-colors">
                        jdicks@jdlaw.com
                      </a>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 text-gray-400"><FaPhone /></div>
                      <a href="tel:+1800FIRELAW" className="text-gray-700 hover:text-primary-600 transition-colors">
                        1-800-FIRE-LAW
                      </a>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-primary-100 text-primary-800 text-sm px-3 py-1 rounded-full">
                        Personal Injury
                      </span>
                      <span className="bg-primary-100 text-primary-800 text-sm px-3 py-1 rounded-full">
                        Criminal Law
                      </span>
                      <span className="bg-primary-100 text-primary-800 text-sm px-3 py-1 rounded-full">
                        Insurance Claims
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">James N. Dicks</h2>
              <p className="text-lg text-gray-600 font-medium mb-8">
                Founding Attorney, jD Law, P.C.
              </p>
              
              <div className="prose prose-lg max-w-none">
                <p>
                  James N. Dicks is a veteran attorney with broad expertise in personal injury law, insurance claims, and trial litigation, complemented by a distinguished background in criminal justice. As the founding attorney of jD Law, P.C. in Vista, California, Mr. Dicks has over three decades of experience fighting for individuals' rights. He has become known for his tenacity in securing compensation for those harmed by others' negligence—including victims of accidents, disasters, and catastrophic events. Drawing on his early career as a Los Angeles Police Department (LAPD) officer and investigator, Mr. Dicks brings a unique investigative perspective to his legal practice. This skill set is invaluable in complex cases such as wildfire insurance claims, where gathering evidence of loss and causation is critical. James N. Dicks' commitment to helping clients rebuild their lives has made him a trusted advocate for Los Angeles fire victims navigating insurance claims, injury claims, and income loss due to fire-related disruptions.
                </p>
                
                <h3>Background and Experience</h3>
                <p>
                  Before becoming a lawyer, James Dicks served as an undercover narcotics investigator with the LAPD, a role in which he honed his investigative skills and gained deep insight into complex cases. Transitioning from law enforcement, he opened his own firm in North County San Diego in 1990. Over the past thirty-plus years, Mr. Dicks has handled a broad spectrum of cases, ranging from serious personal injury claims to complex criminal defense matters.
                </p>
                
                <p>
                  In his civil practice, James Dicks focuses on helping injury victims and their families recover full and fair compensation. He has extensive experience dealing with insurance companies on behalf of clients who have suffered physical injuries or financial loss due to accidents or disasters. His firm vigorously pursues compensation for physical harm, medical bills, property damage, and lost income resulting from catastrophic events such as wildfires.
                </p>
                
                <h3>Professional Highlights:</h3>
                <ul>
                  <li><strong>Former LAPD investigator:</strong> Developed investigative skills critical in building strong insurance claims.</li>
                  <li><strong>Veteran attorney:</strong> Over 35 years of legal experience in California, successfully advocating for clients' rights.</li>
                  <li><strong>Certified Specialist:</strong> Board Certified Criminal Law Specialist by the California State Bar.</li>
                  <li><strong>Personal injury and insurance advocate:</strong> Extensive experience in recovering compensation for medical expenses, property losses, and income disruption due to disasters.</li>
                  <li><strong>Peer recognition:</strong> Consistently recognized by peers and featured multiple times on the Super Lawyers list.</li>
                </ul>
                
                <h3>Community Involvement</h3>
                <p>
                  James N. Dicks is committed to his clients and the Southern California community. Fluent in both English and Spanish, he ensures effective representation for diverse communities. His hands-on approach and dedication have earned him a reputation as a tireless advocate who genuinely cares about securing justice and fair compensation for those affected by catastrophic events, including wildfires.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Expert Legal Representation</h2>
            <p className="text-xl text-gray-100 mb-8">
              Our experienced attorney is ready to help you navigate your fire recovery claim and get the compensation you deserve.
            </p>
            <Link 
              href="/contact" 
              className="btn btn-fire-light inline-flex items-center group"
            >
              <span>Schedule a Free Consultation</span>
              <FaArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 