import { communities } from '@/data/communities';
import CommunityCard from '@/components/CommunityCard';
import Container from '@/components/Container';
import Section from '@/components/Section';
import { siteDetails } from '@/data/siteDetails';

export const metadata = {
  title: 'Las Vegas Communities | Explore Neighborhoods | Dr. Jan Duffy',
  description: 'Explore Las Vegas communities from luxury Summerlin estates to family-friendly neighborhoods and 55+ active adult communities.',
};

export default function CommunitiesPage() {
  const luxuryCommunities = communities.filter((c) => c.category === 'luxury');
  const familyCommunities = communities.filter((c) => c.category === 'family');
  const activeAdultCommunities = communities.filter(
    (c) => c.category === '55plus'
  );
  const otherCommunities = communities.filter((c) => c.category === 'other');

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary via-primary-accent to-secondary text-white py-20">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            Explore Las Vegas Communities
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            From luxury estates in Summerlin to family-friendly neighborhoods
            and active adult communities, discover the perfect Las Vegas
            community for your lifestyle.
          </p>
        </Container>
      </section>

      {/* Luxury Communities */}
      <Section
        id="luxury"
        title="Luxury Communities"
        description="Exclusive guard-gated communities with world-class amenities"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {luxuryCommunities.map((community) => (
            <CommunityCard key={community.slug} community={community} />
          ))}
        </div>
      </Section>

      {/* Family Communities */}
      <Section
        id="family"
        title="Family Communities"
        description="Great neighborhoods for families with excellent schools and amenities"
        className="bg-warm-gray"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {familyCommunities.map((community) => (
            <CommunityCard key={community.slug} community={community} />
          ))}
        </div>
      </Section>

      {/* 55+ Communities */}
      <Section
        id="55plus"
        title="55+ Active Adult Communities"
        description="Resort-style living for active adults"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeAdultCommunities.map((community) => (
            <CommunityCard key={community.slug} community={community} />
          ))}
        </div>
      </Section>

      {/* Other Areas */}
      {otherCommunities.length > 0 && (
        <Section
          id="other"
          title="Other Areas"
          description="Additional Las Vegas neighborhoods and communities"
          className="bg-warm-gray"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherCommunities.map((community) => (
              <CommunityCard key={community.slug} community={community} />
            ))}
          </div>
        </Section>
      )}

      {/* CTA */}
      <Section id="cta" title="Can't Find What You're Looking For?" description="">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-lg text-foreground-accent mb-6">
            Every buyer has unique needs. Let's discuss your preferences and I'll
            help you find the perfect community.
          </p>
          <a
            href={`tel:${siteDetails.contact.primaryPhone}`}
            className="inline-block bg-primary text-white hover:bg-primary-accent px-8 py-4 rounded-full font-semibold text-lg transition-colors"
          >
            Call/Text {siteDetails.contact.primaryPhone}
          </a>
        </div>
      </Section>
    </>
  );
}
