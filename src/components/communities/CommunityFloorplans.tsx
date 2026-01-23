import { Community } from '@/lib/communities';
import Section from '../Section';

interface CommunityFloorplansProps {
  community: Community;
}

export default function CommunityFloorplans({ community }: CommunityFloorplansProps) {
  if (!community.floorplans || community.floorplans.length === 0) {
    return null;
  }

  return (
    <Section
      id="floorplans"
      title="Home Types & Floor Plans"
      description={`Available home styles in ${community.name}`}
      className="bg-cream"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {community.floorplans.map((floorplan, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold text-primary mb-4 font-display">
              {floorplan.name}
            </h3>
            <div className="space-y-2 text-slate">
              <div className="flex justify-between">
                <span className="font-semibold">Size:</span>
                <span>{floorplan.sqftRange}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Bedrooms:</span>
                <span>{floorplan.bedRange}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Bathrooms:</span>
                <span>{floorplan.bathRange}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Garage:</span>
                <span>{floorplan.garageRange}</span>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-primary">Price Range:</span>
                  <span className="text-gold font-bold">{floorplan.priceRange}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {community.builderStatus === 'active' && (
        <div className="mt-8 text-center">
          <p className="text-slate mb-4">
            New construction floor plans may vary. Contact me for current availability and builder incentives.
          </p>
        </div>
      )}
    </Section>
  );
}
