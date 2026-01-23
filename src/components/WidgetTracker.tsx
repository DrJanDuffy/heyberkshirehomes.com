'use client';

import { useEffect } from 'react';

// Extend Window interface for Widget Tracker
declare global {
  interface Window {
    WidgetTrackerObject?: string;
    widgetTracker?: (...args: unknown[]) => void;
    [key: string]: unknown;
  }
}

/**
 * Widget Tracker Script Loader
 * Loads Widget Tracker analytics script once globally
 */
export default function WidgetTracker() {
  useEffect(() => {
    // Check if script already exists
    const existingScript = document.querySelector(
      'script[src="https://widgetbe.com/agent"]'
    );

    if (!existingScript) {
      // Widget Tracker initialization (IIFE pattern from provided code)
      (function(w, i, d, g, e, t) {
        w['WidgetTrackerObject'] = g;
        (w[g] = w[g] || function(...args: unknown[]) {
          const q = (w[g] as { q?: unknown[] }).q || [];
          q.push(args);
        });
        (w[g] as { ds?: number }).ds = 1 * new Date().getTime();
        e = 'script';
        t = d.createElement(e) as HTMLScriptElement;
        const scriptElements = d.getElementsByTagName(e);
        const firstScript = scriptElements[0] as HTMLScriptElement;
        t.async = true;
        t.src = i;
        if (firstScript && firstScript.parentNode) {
          firstScript.parentNode.insertBefore(t, firstScript);
        }
      })(window, 'https://widgetbe.com/agent', document, 'widgetTracker', 'script', null);

      // Initialize Widget Tracker after script loads
      const initTracker = () => {
        if (typeof window.widgetTracker === 'function') {
          window.widgetTracker('create', 'WT-XQHVYQWW');
          window.widgetTracker('send', 'pageview');
        }
      };

      // Try immediately, then wait for script to load
      initTracker();
      setTimeout(initTracker, 100);
    } else {
      // Script already exists, just initialize
      if (typeof window.widgetTracker === 'function') {
        window.widgetTracker('send', 'pageview');
      }
    }
  }, []);

  return null; // This component doesn't render anything
}
