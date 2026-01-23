'use client';

import { useEffect, useState } from 'react';
import { siteDetails } from '@/data/siteDetails';

interface RealScoutWidgetProps {
  widgetId?: string;
  filters?: Record<string, string | number | boolean>;
  className?: string;
  agentEncodedId?: string;
  priceMin?: number;
  priceMax?: number;
  community?: string; // Community name (for display purposes only)
  useIframe?: boolean; // Deprecated - always use web component
}

/**
 * RealScout Widget Component
 * Uses web component (realscout-office-listings) - RealScout's official widget
 * Script is loaded globally via RealScoutScript component in layout.tsx
 * Waits for script to load before rendering widget to avoid 404 errors
 */
export default function RealScoutWidget({
  widgetId,
  filters,
  className = '',
  agentEncodedId,
  priceMin,
  priceMax,
  community,
}: RealScoutWidgetProps) {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const agentId = agentEncodedId || siteDetails.agent.realscoutAgentId || 'QWdlbnQtMjI1MDUw';

  // Wait for RealScout script to load before rendering widget
  useEffect(() => {
    const checkScript = () => {
      if (typeof window === 'undefined') return;

      // Check if script tag exists
      const script = document.querySelector(
        'script[src="https://em.realscout.com/widgets/realscout-web-components.umd.js"]'
      );

      if (!script) {
        // Script not loaded yet, check again
        setTimeout(checkScript, 100);
        return;
      }

      // Script exists, check if web component is registered
      if (window.customElements) {
        // Check if the custom element is defined (doesn't throw if not found)
        const isDefined = window.customElements.get('realscout-office-listings') !== undefined;
        if (isDefined) {
          setScriptLoaded(true);
        } else {
          // Element not registered yet, wait a bit and check again
          setTimeout(checkScript, 200);
        }
      } else {
        // customElements not available, wait a bit for script to load
        setTimeout(() => setScriptLoaded(true), 1000);
      }
    };

    // Start checking after component mounts
    const timeout = setTimeout(checkScript, 100);
    
    // Also set a maximum timeout to show widget even if detection fails
    const maxTimeout = setTimeout(() => {
      setScriptLoaded(true);
    }, 3000);

    return () => {
      clearTimeout(timeout);
      clearTimeout(maxTimeout);
    };
  }, []);

  // Use web component - RealScout's official widget approach
  const widgetAttributes: Record<string, string> = {
    'agent-encoded-id': agentId,
  };

  // Add price filters if provided (only valid RealScout web component attributes)
  if (priceMin !== undefined) {
    widgetAttributes['price-min'] = priceMin.toString();
  }
  if (priceMax !== undefined) {
    widgetAttributes['price-max'] = priceMax.toString();
  }

  // Override with filters if provided (only valid RealScout parameters)
  if (filters) {
    if (filters.priceMin) widgetAttributes['price-min'] = String(filters.priceMin);
    if (filters.priceMax) widgetAttributes['price-max'] = String(filters.priceMax);
  }

  // Build attribute string for dangerouslySetInnerHTML
  const attributesString = Object.entries(widgetAttributes)
    .map(([key, value]) => `${key}="${value}"`)
    .join(' ');

  // Show loading state while script loads
  if (!scriptLoaded) {
    return (
      <div
        id={widgetId || 'realscout-widget'}
        className={`realscout-widget ${className} flex items-center justify-center min-h-[600px] bg-gray-50 rounded-lg`}
      >
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-slate">Loading property search...</p>
        </div>
      </div>
    );
  }

  return (
    <div
      id={widgetId || 'realscout-widget'}
      className={`realscout-widget ${className}`}
    >
      <div
        dangerouslySetInnerHTML={{
          __html: `<realscout-office-listings ${attributesString}></realscout-office-listings>`,
        }}
      />
    </div>
  );
}
