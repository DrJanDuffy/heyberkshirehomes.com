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
      // Check if customElements is defined and realscout-office-listings is registered
      if (typeof window !== 'undefined' && window.customElements) {
        try {
          // Try to get the custom element definition
          customElements.get('realscout-office-listings');
          setScriptLoaded(true);
        } catch (e) {
          // Element not registered yet, wait a bit and check again
          setTimeout(checkScript, 100);
        }
      } else {
        // Fallback: check if script tag exists
        const script = document.querySelector(
          'script[src="https://em.realscout.com/widgets/realscout-web-components.umd.js"]'
        );
        if (script) {
          // Script exists, wait a bit for it to load
          setTimeout(() => setScriptLoaded(true), 500);
        } else {
          // Script not found, check again
          setTimeout(checkScript, 100);
        }
      }
    };

    // Start checking after component mounts
    checkScript();
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
