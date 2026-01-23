'use client';

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
  const agentId = agentEncodedId || siteDetails.agent.realscoutAgentId || 'QWdlbnQtMjI1MDUw';

  // Use web component - RealScout's official widget approach
  // The script is loaded globally in layout.tsx via RealScoutScript
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
