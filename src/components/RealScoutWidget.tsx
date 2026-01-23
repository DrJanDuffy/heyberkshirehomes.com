'use client';

import { useEffect } from 'react';
import Script from 'next/script';

interface RealScoutWidgetProps {
  widgetId?: string;
  filters?: Record<string, any>;
  className?: string;
}

export default function RealScoutWidget({
  widgetId,
  filters,
  className = '',
}: RealScoutWidgetProps) {
  useEffect(() => {
    // RealScout widget initialization will happen after script loads
    // The widget script should handle initialization
  }, []);

  return (
    <>
      {/* RealScout Script - Load once globally */}
      <Script
        src="https://em.realscout.com/js/embed.js"
        strategy="lazyOnload"
        onLoad={() => {
          // Widget initialization handled by RealScout script
          if (typeof window !== 'undefined' && (window as any).RealScout) {
            // Widget will auto-initialize
          }
        }}
      />
      
      {/* Widget Container */}
      <div
        id={widgetId || 'realscout-widget'}
        className={`realscout-widget ${className}`}
        data-filters={filters ? JSON.stringify(filters) : undefined}
        dangerouslySetInnerHTML={{
          __html: `
            <!-- RealScout Widget will be injected here -->
            <div style="min-height: 400px; display: flex; align-items: center; justify-content: center; background: #f8f7f5; border-radius: 8px;">
              <p style="color: #666;">Loading property search...</p>
            </div>
          `,
        }}
      />
    </>
  );
}
