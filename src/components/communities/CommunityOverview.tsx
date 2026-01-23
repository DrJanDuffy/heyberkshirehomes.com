import { Community } from '@/lib/communities';
import Container from '../Container';
import Section from '../Section';

interface CommunityOverviewProps {
  community: Community;
}

export default function CommunityOverview({ community }: CommunityOverviewProps) {
  return (
    <Section
      id="overview"
      title={`About ${community.name}`}
      description=""
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-slate leading-relaxed mb-6">
          {community.overview}
        </p>

        <h3 className="text-2xl font-bold text-primary mb-4 font-display">
          Community Highlights
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
          {community.highlights.map((highlight, index) => (
            <li key={index} className="flex items-start text-slate">
              <span className="text-gold mr-3 text-xl flex-shrink-0">✓</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 p-6 bg-cream rounded-lg">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">{community.homeCount}</div>
            <div className="text-sm text-slate">Homes</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">{community.yearEstablished}</div>
            <div className="text-sm text-slate">Established</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">{community.builder}</div>
            <div className="text-sm text-slate">Builder</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">{community.locationInfo.nearbyAttractions.length}+</div>
            <div className="text-sm text-slate">Nearby Attractions</div>
          </div>
        </div>
      </div>
    </Section>
  );
}
