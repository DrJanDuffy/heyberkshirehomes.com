'use client';

import { siteDetails } from '@/data/siteDetails';

interface RealScoutWidgetProps {
  widgetId?: string;
  filters?: Record<string, string | number | boolean>;
  className?: string;
  agentEncodedId?: string;
  sortOrder?: 'NEWEST' | 'PRICE_LOW_TO_HIGH' | 'PRICE_HIGH_TO_LOW' | 'SQUARE_FEET';
  listingStatus?: 'For Sale' | 'Sold' | 'Pending';
  propertyTypes?: string; // Comma-separated: SFR,MF,TC,LD,etc.
  priceMin?: number;
  priceMax?: number;
  community?: string; // Community name for iframe embed
  useIframe?: boolean; // Use iframe embed instead of web component
}

export default function RealScoutWidget({
  widgetId,
  filters,
  className = '',
  agentEncodedId,
  sortOrder = 'NEWEST',
  listingStatus = 'For Sale',
  propertyTypes = ',SFR,MF,TC',
  priceMin,
  priceMax,
  community,
  useIframe = false,
}: RealScoutWidgetProps) {
  const agentId = agentEncodedId || siteDetails.agent.realscoutAgentId || 'QWdlbnQtMjI1MDUw';

  // Use iframe embed for community pages or when explicitly requested
  if (useIframe || community) {
    const iframeParams = new URLSearchParams({
      agent: agentId,
    });

    if (community) {
      iframeParams.append('community', community.toLowerCase().replace(/\s+/g, '-'));
    }
    if (priceMin !== undefined) {
      iframeParams.append('min_price', priceMin.toString());
    }
    if (priceMax !== undefined) {
      iframeParams.append('max_price', priceMax.toString());
    }

    // Override with filters if provided
    if (filters) {
      if (filters.priceMin) iframeParams.set('min_price', String(filters.priceMin));
      if (filters.priceMax) iframeParams.set('max_price', String(filters.priceMax));
      if (filters.community) {
        iframeParams.set('community', String(filters.community).toLowerCase().replace(/\s+/g, '-'));
      }
    }

    const iframeUrl = `https://www.realscout.com/embed/search?${iframeParams.toString()}`;

    return (
      <div
        id={widgetId || 'realscout-widget'}
        className={`realscout-widget ${className}`}
      >
        <iframe
          src={iframeUrl}
          width="100%"
          height="600"
          frameBorder="0"
          title={`RealScout Search${community ? ` - ${community}` : ''}`}
          className="w-full rounded-lg"
        />
      </div>
    );
  }

  // Use web component for general listings
  const widgetAttributes: Record<string, string> = {
    'agent-encoded-id': agentId,
    'sort-order': sortOrder,
    'listing-status': listingStatus,
    'property-types': propertyTypes,
  };

  // Add price filters if provided
  if (priceMin !== undefined) {
    widgetAttributes['price-min'] = priceMin.toString();
  }
  if (priceMax !== undefined) {
    widgetAttributes['price-max'] = priceMax.toString();
  }

  // Override with filters if provided
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
      dangerouslySetInnerHTML={{
        __html: `<realscout-office-listings ${attributesString}></realscout-office-listings>`,
      }}
    />
  );
}
