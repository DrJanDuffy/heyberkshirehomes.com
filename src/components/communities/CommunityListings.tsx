import { Community } from '@/lib/communities';
import { siteDetails } from '@/data/siteDetails';
import RealScoutWidget from '../RealScoutWidget';
import Container from '../Container';
import Section from '../Section';

interface CommunityListingsProps {
  community: Community;
}

export default function CommunityListings({ community }: CommunityListingsProps) {
  return (
    <Section
      id="listings"
      title={`${community.name} Homes for Sale`}
      description="Browse current listings in this community. Updated daily from the MLS."
      className="bg-cream"
    >
      <div className="mb-8">
        <p className="text-slate text-center max-w-2xl mx-auto">
          Search active listings in {community.name}. Prices typically range from {community.priceRange}.
          {community.builderStatus === 'active' && ' Both new construction and resale homes are available.'}
        </p>
      </div>

      {/* RealScout Widget with Community Filters - Using iframe embed */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <RealScoutWidget
          widgetId={`realscout-${community.slug}`}
          community={community.name}
          priceMin={community.priceMin}
          priceMax={community.priceMax}
          useIframe={true}
          className="min-h-[600px]"
        />
      </div>

      <div className="mt-8 text-center">
        <a
          href={`tel:${siteDetails.contact.primaryPhone}`}
          className="inline-block bg-gold hover:bg-gold-dark text-white font-semibold px-8 py-4 rounded-full transition-colors"
        >
          Call Dr. Jan for Off-Market Listings: {siteDetails.contact.primaryPhone}
        </a>
        <p className="text-sm text-slate mt-4">
          Access to pocket listings, coming soon properties, and exclusive opportunities
        </p>
      </div>
    </Section>
  );
}
