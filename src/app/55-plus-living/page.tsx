import RealScoutWidget from '@/components/RealScoutWidget';
import CTASection from '@/components/CTASection';
import Container from '@/components/Container';
import Section from '@/components/Section';
import Link from 'next/link';
import { getCommunitiesByCategory } from '@/data/communities';
import { siteDetails } from '@/data/siteDetails';
import SchemaMarkup from '@/components/SchemaMarkup';
import { generateBreadcrumbSchema } from '@/lib/schema';

export const metadata = {
  title: '55+ Communities Las Vegas | Active Adult Living | Dr. Jan Duffy',
  description: 'Discover 55+ active adult communities in Las Vegas. Resort-style amenities, golf courses, and vibrant social scenes. Sun City, Del Webb, and more.',
};

const activeAdultCommunities = getCommunitiesByCategory('55plus');

export default function ActiveAdultPage() {
  const breadcrumbs = [
    { name: 'Home', url: siteDetails.siteUrl },
    { name: '55+ Living', url: `${siteDetails.siteUrl}/55-plus-living` },
  ];

  return (
    <>
      <SchemaMarkup schemas={[generateBreadcrumbSchema(breadcrumbs)]} />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary via-primary-accent to-secondary text-white py-20">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            55+ Active Adult Communities Las Vegas
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Discover resort-style living in Las Vegas's premier 55+ communities.
            Golf courses, fitness centers, social clubs, and an active lifestyle
            await.
          </p>
        </Container>
      </section>

      {/* Overview */}
      <Section
        id="overview"
        title="Active Adult Living in Las Vegas"
        description="Your next chapter starts here"
      >
        <div className="max-w-3xl mx-auto prose prose-lg">
          <p className="text-foreground-accent mb-4">
            Las Vegas offers some of the finest 55+ active adult communities in
            the country. From Sun City Summerlin to Del Webb communities, these
            neighborhoods are designed for active, vibrant living.
          </p>
          <p className="text-foreground-accent mb-4">
            With {siteDetails.agent.experience} of experience helping active
            adults find their perfect Las Vegas home, I understand the unique
            considerations: lifestyle amenities, healthcare access, social
            opportunities, and maintenance-free living.
          </p>
          <p className="text-foreground-accent">
            Whether you're planning your retirement move or looking to downsize
            into an active adult community, I'll help you find the perfect fit
            for your lifestyle.
          </p>
        </div>
      </Section>

      {/* Featured Communities */}
      <Section
        id="communities"
        title="Featured 55+ Communities"
        description="Las Vegas's premier active adult neighborhoods"
        className="bg-warm-gray"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeAdultCommunities.map((community) => (
            <Link
              key={community.slug}
              href={`/communities/${community.slug}`}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all"
            >
              <h3 className="text-xl font-bold mb-2 font-display hover:text-primary">
                {community.name}
              </h3>
              <p className="text-primary font-semibold mb-2">
                {community.priceRange}
              </p>
              <p className="text-sm text-foreground-accent line-clamp-3">
                {community.description}
              </p>
            </Link>
          ))}
        </div>
      </Section>

      {/* Lifestyle Benefits */}
      <Section
        id="benefits"
        title="55+ Community Lifestyle Benefits"
        description="What makes active adult living special"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="text-4xl mb-3">🏌️</div>
            <h3 className="font-bold mb-2 font-display">Golf Courses</h3>
            <p className="text-sm text-foreground-accent">
              Championship courses and practice facilities
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="text-4xl mb-3">🏋️</div>
            <h3 className="font-bold mb-2 font-display">Fitness Centers</h3>
            <p className="text-sm text-foreground-accent">
              State-of-the-art equipment and classes
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="text-4xl mb-3">🎭</div>
            <h3 className="font-bold mb-2 font-display">Social Clubs</h3>
            <p className="text-sm text-foreground-accent">
              Activities, events, and interest groups
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="text-4xl mb-3">🔧</div>
            <h3 className="font-bold mb-2 font-display">Low Maintenance</h3>
            <p className="text-sm text-foreground-accent">
              HOA handles landscaping and exterior maintenance
            </p>
          </div>
        </div>
      </Section>

      {/* RealScout Widget */}
      <Section
        id="search"
        title="Search 55+ Homes"
        description="Browse active listings in 55+ communities"
        className="bg-warm-gray"
      >
        <RealScoutWidget
          filters={{ propertyType: '55+', ageRestricted: true }}
          className="min-h-[600px]"
        />
      </Section>

      <CTASection
        title="Ready to Explore 55+ Living?"
        description="Let's find your perfect active adult community. Warm, helpful guidance every step of the way."
      />
    </>
  );
}
