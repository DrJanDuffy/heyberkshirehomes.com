'use client';

import { siteDetails } from '@/data/siteDetails';

interface RealScoutWidgetProps {
  widgetId?: string;
  filters?: Record<string, string | number | boolean>;
  className?: string;
  agentEncodedId?: string;
  priceMin?: number;
  priceMax?: number;
  community?: string; // Community name for iframe embed
  useIframe?: boolean; // Use iframe embed (default: true for reliability)
}

/**
 * RealScout Widget Component
 * Uses iframe embed for reliability - avoids 404 errors from web component API calls
 * All RealScout widgets now use iframe to ensure consistent functionality
 */
export default function RealScoutWidget({
  widgetId,
  filters,
  className = '',
  agentEncodedId,
  priceMin,
  priceMax,
  community,
  useIframe = true, // Default to iframe for reliability
}: RealScoutWidgetProps) {
  const agentId = agentEncodedId || siteDetails.agent.realscoutAgentId || 'QWdlbnQtMjI1MDUw';

  // Always use iframe embed - more reliable than web components
  // Web components can cause 404 errors due to API timing issues or invalid parameters
  const iframeParams = new URLSearchParams();

  // Agent ID is required
  iframeParams.append('agent', agentId);

  // Community name (if provided)
  if (community) {
    iframeParams.append('community', community.toLowerCase().replace(/\s+/g, '-'));
  }
  
  // Price filters
  if (priceMin !== undefined) {
    iframeParams.append('min_price', priceMin.toString());
  }
  if (priceMax !== undefined) {
    iframeParams.append('max_price', priceMax.toString());
  }

  // Override with filters if provided (only valid RealScout parameters)
  if (filters) {
    if (filters.priceMin) iframeParams.set('min_price', String(filters.priceMin));
    if (filters.priceMax) iframeParams.set('max_price', String(filters.priceMax));
    if (filters.community) {
      iframeParams.set('community', String(filters.community).toLowerCase().replace(/\s+/g, '-'));
    }
  }

  // Construct iframe URL - RealScout embed endpoint
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
        allow="clipboard-read; clipboard-write"
      />
    </div>
  );
}
