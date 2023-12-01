'use client';
import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';

const CookieBanner = () => {
  const [cookies, setCookie] = useCookies(['cookieConsent']);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    if (!cookies.cookieConsent) {
      setShowBanner(true);
    } else {
      setShowBanner(false);
    }
  }, [cookies.cookieConsent]);

  const handleAccept = () => {
    setCookie('cookieConsent', true, { path: '/', maxAge: 31536000 }); // Set cookie for 1 year (maxAge in seconds)
  };

  const handleDecline = () => {
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white p-4 border-t border-gray-300 shadow-md z-10 bg-mossy-green">
      <div className="max-w-screen-md mx-auto flex justify-between items-center">
        <p className="text-sm font-body">
          This website uses cookies to enhance user experience.
        </p>
        <div>
          <button
            className="mr-2 px-4 py-2 text-bg-beige font-body"
            onClick={() => {
              handleAccept();
              setShowBanner(false); // Hide banner after accepting
            }}
          >
            Accept
          </button>
          <button
            className="mr-2 px-4 py-2 bg-gray-300 text-bg-beige font-body"
            onClick={handleDecline}
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
