import { Community } from '@/lib/communities';
import Section from '../Section';

interface CommunityAmenitiesProps {
  community: Community;
}

export default function CommunityAmenities({ community }: CommunityAmenitiesProps) {
  return (
    <Section
      id="amenities"
      title="Community Amenities"
      description={`Discover what makes ${community.name} special`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {community.amenities.map((amenityGroup, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-md border-l-4 border-gold">
            <h3 className="text-xl font-bold text-primary mb-4 font-display">
              {amenityGroup.category}
            </h3>
            <ul className="space-y-2">
              {amenityGroup.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-start text-slate text-sm">
                  <span className="text-gold mr-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
