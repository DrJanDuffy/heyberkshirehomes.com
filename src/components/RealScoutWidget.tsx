'use client';

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
}

export default function RealScoutWidget({
  widgetId,
  filters,
  className = '',
  agentEncodedId = 'QWdlbnQtMjI1MDUw', // Default agent ID from user
  sortOrder = 'NEWEST',
  listingStatus = 'For Sale',
  propertyTypes = ',SFR,MF,TC',
  priceMin,
  priceMax,
}: RealScoutWidgetProps) {
  // Build widget attributes from props or filters
  const widgetAttributes: Record<string, string> = {
    'agent-encoded-id': agentEncodedId,
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
    if (filters.community) {
      // Community filter would need to be handled via RealScout's search parameters
      // This is a placeholder - adjust based on RealScout's actual API
    }
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
