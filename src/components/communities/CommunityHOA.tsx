import { Community } from '@/lib/communities';
import Section from '../Section';

interface CommunityHOAProps {
  community: Community;
}

export default function CommunityHOA({ community }: CommunityHOAProps) {
  return (
    <Section
      id="hoa"
      title="HOA Fees & Membership"
      description="Understanding monthly fees and what's included"
    >
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg p-8 shadow-md border-l-4 border-gold">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-primary mb-2 font-display">
              Monthly HOA Fees: {community.hoaFees.monthlyRange}
            </h3>
            <p className="text-slate">
              HOA fees cover the following amenities and services:
            </p>
          </div>

          <ul className="space-y-2 mb-6">
            {community.hoaFees.includes.map((item, index) => (
              <li key={index} className="flex items-start text-slate">
                <span className="text-gold mr-3 text-xl">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {community.hoaFees.golfMembership !== 'N/A' && (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h4 className="font-semibold text-primary mb-2">Golf Membership:</h4>
              <p className="text-slate">{community.hoaFees.golfMembership}</p>
            </div>
          )}

          {community.hoaFees.notes && (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-slate italic">{community.hoaFees.notes}</p>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
