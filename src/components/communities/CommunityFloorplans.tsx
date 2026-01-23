import { Community } from '@/lib/communities';
import { siteDetails } from '@/data/siteDetails';
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
      title={`${community.name} Home Types & Floor Plans`}
      description={`Available home styles and floor plan options in ${community.name}`}
      className="bg-cream"
    >
      <div className="max-w-4xl mx-auto mb-8">
        <p className="text-slate text-center mb-6 text-lg">
          {community.name} offers a variety of home types and floor plans to suit different preferences, lifestyles, and budgets. Whether you're looking for a cozy single-story home, a spacious two-story design, or something in between, you'll find options that match your needs. Each floor plan is designed with active adult living in mind, featuring thoughtful layouts, modern features, and maintenance-friendly designs.
        </p>
        <p className="text-slate text-center text-lg">
          The floor plans in {community.name} range from {community.floorplans[0]?.sqftRange || 'various sizes'}, offering flexibility for different space needs and budgets. Many homes feature open-concept layouts, modern kitchens, master suites, and outdoor living spaces that enhance daily living and make entertaining easy.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {community.floorplans.map((floorplan, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold text-primary mb-4 font-display">
              {floorplan.name}
            </h3>
            <div className="space-y-2 text-slate mb-4">
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
            <p className="text-xs text-slate italic">
              Floor plan details may vary. Contact for current availability and specific home features.
            </p>
          </div>
        ))}
      </div>
      {community.builderStatus === 'active' && (
        <div className="max-w-3xl mx-auto bg-white rounded-xl p-6 shadow-md">
          <h3 className="text-xl font-bold text-primary mb-3 font-display">New Construction Floor Plans</h3>
          <p className="text-slate text-sm mb-3">
            {community.name} offers new construction opportunities with current builder incentives and warranties. New construction floor plans may vary from resale homes, and you may have the opportunity to customize finishes and features.
          </p>
          <p className="text-slate text-sm">
            Contact Dr. Jan at {siteDetails.contact.primaryPhone} for current availability, builder incentives, and to discuss new construction options in {community.name}. I can help you understand the new construction process, negotiate builder incentives, and ensure you get the best value.
          </p>
        </div>
      )}
      <div className="max-w-3xl mx-auto mt-8 bg-primary/5 rounded-xl p-6 border-l-4 border-gold">
        <h3 className="text-xl font-bold text-primary mb-3 font-display">Choosing the Right Floor Plan</h3>
        <p className="text-slate text-sm mb-3">
          Selecting the right floor plan is an important decision that affects your daily living, entertaining, and long-term satisfaction. Consider your space needs, lifestyle, entertaining preferences, and whether you'll have frequent guests when evaluating floor plan options.
        </p>
        <ul className="list-disc list-inside text-sm text-slate space-y-1">
          <li>Consider your current and future space needs</li>
          <li>Think about how you'll use different areas of the home</li>
          <li>Evaluate layout flow and functionality</li>
          <li>Consider maintenance and cleaning requirements</li>
          <li>Think about resale value and appeal to future buyers</li>
        </ul>
      </div>
    </Section>
  );
}
