'use client';

import { useEffect } from 'react';

/**
 * RealScout Web Components Script Loader
 * Loads the RealScout script once globally in the head
 * Required for all RealScout widgets on the site
 */
export default function RealScoutScript() {
  useEffect(() => {
    // Check if script already exists
    const existingScript = document.querySelector(
      'script[src="https://em.realscout.com/widgets/realscout-web-components.umd.js"]'
    );

    if (!existingScript) {
      // Create and inject the script tag into head
      const script = document.createElement('script');
      script.src = 'https://em.realscout.com/widgets/realscout-web-components.umd.js';
      script.type = 'module';
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return null; // This component doesn't render anything
}
