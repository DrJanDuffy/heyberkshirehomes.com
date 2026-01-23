import { Community } from '@/lib/communities';
import Section from '../Section';

interface CommunityHOAProps {
  community: Community;
}

export default function CommunityHOA({ community }: CommunityHOAProps) {
  return (
    <Section
      id="hoa"
      title={`${community.name} HOA Fees & Membership Information`}
      description="Understanding monthly fees, what's included, and the value of HOA services"
    >
      <div className="max-w-4xl mx-auto mb-8">
        <p className="text-slate text-center mb-6 text-lg">
          Homeowners Association (HOA) fees in {community.name} cover a comprehensive range of amenities, services, and maintenance that enhance your lifestyle and protect property values. Understanding what's included in your HOA fees helps you evaluate the value and make informed decisions about homeownership in this community.
        </p>
      </div>
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg p-8 shadow-md border-l-4 border-gold mb-8">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-primary mb-2 font-display">
              Monthly HOA Fees: {community.hoaFees.monthlyRange}
            </h3>
            <p className="text-slate mb-4">
              HOA fees in {community.name} cover the following amenities and services, providing excellent value for the comprehensive services and maintenance included:
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
              <h4 className="font-semibold text-primary mb-2 text-lg">Golf Membership:</h4>
              <p className="text-slate">{community.hoaFees.golfMembership}</p>
            </div>
          )}

          {community.hoaFees.notes && (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h4 className="font-semibold text-primary mb-2 text-lg">Additional Information:</h4>
              <p className="text-sm text-slate italic">{community.hoaFees.notes}</p>
            </div>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-cream rounded-xl p-6">
            <h3 className="text-xl font-bold text-primary mb-3 font-display">Value of HOA Services</h3>
            <p className="text-slate text-sm mb-3">
              HOA fees in {community.name} provide significant value by covering services and maintenance that would otherwise be your responsibility. This maintenance-free approach gives you more time to enjoy life and pursue your interests.
            </p>
            <ul className="list-disc list-inside text-sm text-slate space-y-1">
              <li>Landscaping and exterior maintenance handled</li>
              <li>Common area upkeep and amenities maintenance</li>
              <li>Property value protection through standards</li>
              <li>Convenience and time savings</li>
            </ul>
          </div>
          <div className="bg-cream rounded-xl p-6">
            <h3 className="text-xl font-bold text-primary mb-3 font-display">Understanding HOA Fees</h3>
            <p className="text-slate text-sm mb-3">
              HOA fees are a standard part of homeownership in planned communities like {community.name}. These fees ensure that amenities remain in excellent condition, common areas are well-maintained, and property values are protected through community standards.
            </p>
            <ul className="list-disc list-inside text-sm text-slate space-y-1">
              <li>Fees are typically paid monthly</li>
              <li>Fees may increase over time with inflation</li>
              <li>Fees are included in your total housing cost</li>
              <li>Fees provide access to comprehensive amenities</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
