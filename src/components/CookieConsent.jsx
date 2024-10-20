import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  // Check if user has already given consent and set timeout for visibility
  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 5000); // 10 seconds delay

      return () => clearTimeout(timer); // Clean up the timer
    }
  }, []);

  // Prevent scrolling when the consent dialog is visible
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isVisible]);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  const togglePreferences = () => {
    setShowPreferences(!showPreferences);
  };

  return (
    <>
      {isVisible && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40" /> {/* Overlay */}
          <motion.div
            className="fixed bottom-10 left-0 w-full md:w-1/2 bg-white shadow-lg p-4 flex flex-col md:flex-row justify-between items-center z-50"
            initial={{ x: '-100%', opacity: 0 }} // Start off-screen to the left
            animate={{ x: 0, opacity: 1 }} // Slide in from the left
            exit={{ x: '-100%', opacity: 0 }} // Slide out to the left
            transition={{ duration: 0.8, ease: 'easeInOut' }} // Smooth transition
          >
            <div className="flex-1 mb-2 md:mb-0">
              <p className="text-gray-700">
                We use cookies to enhance your experience on our site. Cookies help us understand how you interact with our content and provide you with personalized content and advertisements. By continuing to browse this site, you consent to the use of cookies.
              </p>
              <div className='flex justify-between pt-5'>
                <button
                  onClick={togglePreferences}
                  className="text-teal-500 underline mt-2"
                >
                  Manage Preferences
                </button>
                <div className="flex space-x-4 mt-2 md:mt-0">
                  <button
                    onClick={handleAccept}
                    className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition"
                  >
                    Accept All
                  </button>
                  <button
                    onClick={handleDecline}
                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition"
                  >
                    Decline
                  </button>
                </div>
              </div>
            </div>

            {showPreferences && (
              <div className="mt-2 md:mt-0 p-2 border border-gray-300 rounded bg-gray-50 transition-opacity duration-300 ease-in-out opacity-100">
                <h4 className="font-bold text-gray-800">Cookie Preferences</h4>
                <p className="text-gray-600">Select which cookies you allow:</p>
                <div className="flex flex-col">
                  <label>
                    <input type="checkbox" defaultChecked /> Essential Cookies (required for site functionality)
                  </label>
                  <label>
                    <input type="checkbox" /> Analytics Cookies (help us improve our site)
                  </label>
                  <label>
                    <input type="checkbox" /> Advertising Cookies (used for personalized ads)
                  </label>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </>
  );
};

export default CookieConsent;
