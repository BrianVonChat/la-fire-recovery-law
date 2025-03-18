import React from 'react';
import { FaClock, FaExclamationTriangle, FaCalendarAlt } from 'react-icons/fa';

const DeadlinesSection = () => {
  return (
    <section className="py-16 bg-gray-900 text-white" id="deadlines">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Important Deadlines for Fire Victims</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            If you've been impacted by fires in Los Angeles, strict legal deadlines apply for filing your claims. 
            Missing these deadlines can result in losing your right to compensation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Public Entity Claims */}
          <div className="bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-700">
            <div className="flex items-center mb-6">
              <div className="bg-fire-800 p-3 rounded-full mr-4">
                <FaCalendarAlt className="h-7 w-7 text-fire-300" />
              </div>
              <h3 className="text-2xl font-bold">Claims Against Public Entities</h3>
            </div>
            <p className="text-gray-300 mb-6">
              City, County, and State government claims have strict filing requirements:
            </p>
            <ul className="space-y-4 text-gray-200">
              <li className="flex items-start">
                <FaClock className="h-5 w-5 text-fire-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-semibold block mb-1">Initial Claim Deadline:</span>
                  Within 6 months from the date of the fire.
                </div>
              </li>
              <li className="flex items-start">
                <FaClock className="h-5 w-5 text-fire-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-semibold block mb-1">Late Claim Extension:</span>
                  Up to 1 year after the fire to apply for a late claim.
                </div>
              </li>
              <li className="flex items-start">
                <FaClock className="h-5 w-5 text-fire-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-semibold block mb-1">After Claim Rejection:</span>
                  Within 6 months from the date your claim is officially rejected.
                </div>
              </li>
              <li className="flex items-start">
                <FaExclamationTriangle className="h-5 w-5 text-fire-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-semibold block mb-1">FINAL DEADLINE:</span>
                  <span className="text-fire-300 font-bold">July 5, 2025</span>
                </div>
              </li>
            </ul>
          </div>

          {/* SCE Claims */}
          <div className="bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-700">
            <div className="flex items-center mb-6">
              <div className="bg-fire-800 p-3 rounded-full mr-4">
                <FaCalendarAlt className="h-7 w-7 text-fire-300" />
              </div>
              <h3 className="text-2xl font-bold">Claims Against Southern California Edison</h3>
            </div>
            <p className="text-gray-300 mb-6">
              For claims against this private entity, different deadlines apply:
            </p>
            <ul className="space-y-4 text-gray-200">
              <li className="flex items-start">
                <FaClock className="h-5 w-5 text-fire-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-semibold block mb-1">Personal Injury Claims:</span>
                  Within 2 years from the date of the fire.
                </div>
              </li>
              <li className="flex items-start">
                <FaClock className="h-5 w-5 text-fire-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-semibold block mb-1">Property Damage Claims:</span>
                  Within 3 years from the date of the fire.
                </div>
              </li>
              <li className="flex items-start">
                <FaExclamationTriangle className="h-5 w-5 text-fire-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-semibold block mb-1">FINAL DEADLINE:</span>
                  <span className="text-fire-300 font-bold">January 5, 2027</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-xl text-fire-300 font-bold mb-6">
            These deadlines are crucial. Contact LA Fire Recovery Law immediately to ensure your claim is protected.
          </p>
          <a 
            href="#contact" 
            className="btn btn-fire inline-block px-8 py-4 text-lg"
          >
            Get Legal Help Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default DeadlinesSection; 