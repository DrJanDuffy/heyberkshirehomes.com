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
  title: 'Luxury Homes Las Vegas | $800K-$10M+ Estates | Dr. Jan Duffy',
  description: 'Discover luxury homes in Las Vegas from $800K to $10M+. Exclusive communities including The Ridges, The Summit, and Red Rock Country Club.',
};

const luxuryCommunities = getCommunitiesByCategory('luxury');

export default function LuxuryHomesPage() {
  const breadcrumbs = [
    { name: 'Home', url: siteDetails.siteUrl },
    { name: 'Luxury Homes', url: `${siteDetails.siteUrl}/luxury-homes` },
  ];

  return (
    <>
      <SchemaMarkup schemas={[generateBreadcrumbSchema(breadcrumbs)]} />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary via-primary-accent to-secondary text-white py-20">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            Luxury Homes Las Vegas
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Discover exceptional estates from $800K to $10M+ in Las Vegas's most
            exclusive communities. White-glove service, discretion, and
            unparalleled expertise.
          </p>
        </Container>
      </section>

      {/* Overview */}
      <Section
        id="overview"
        title="Luxury Real Estate in Las Vegas"
        description="Experience the finest in Las Vegas luxury living"
      >
        <div className="max-w-3xl mx-auto prose prose-lg">
          <p className="text-foreground-accent mb-4">
            Las Vegas luxury real estate offers some of the most spectacular
            properties in the Southwest. From guard-gated estates in Summerlin
            to golf course homes and custom builds, the luxury market here is
            vibrant and diverse.
          </p>
          <p className="text-foreground-accent mb-4">
            With {siteDetails.agent.experience} of experience in high-end real
            estate, I understand the unique needs of luxury buyers and sellers.
            Discretion, attention to detail, and deep market knowledge are
            essential when working with luxury properties.
          </p>
          <p className="text-foreground-accent">
            Whether you're seeking a $2M estate in The Ridges or a golf course
            home in Red Rock Country Club, I'll help you navigate the luxury
            market with confidence.
          </p>
        </div>
      </Section>

      {/* Featured Communities */}
      <Section
        id="communities"
        title="Featured Luxury Communities"
        description="Las Vegas's most exclusive neighborhoods"
        className="bg-warm-gray"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {luxuryCommunities.map((community) => (
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

      {/* Why Work With Dr. Jan for Luxury */}
      <Section
        id="expertise"
        title="Why Choose Dr. Jan for Luxury Real Estate"
        description="Expertise, discretion, and results"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="text-3xl mb-3">🔒</div>
            <h3 className="font-bold mb-2 font-display">Discretion</h3>
            <p className="text-sm text-foreground-accent">
              Complete confidentiality and privacy for high-profile transactions.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="text-3xl mb-3">📊</div>
            <h3 className="font-bold mb-2 font-display">Market Knowledge</h3>
            <p className="text-sm text-foreground-accent">
              Deep understanding of luxury market trends, pricing, and
              opportunities.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="text-3xl mb-3">🤝</div>
            <h3 className="font-bold mb-2 font-display">White-Glove Service</h3>
            <p className="text-sm text-foreground-accent">
              Personalized attention and seamless transaction management from
              start to finish.
            </p>
          </div>
        </div>
      </Section>

      {/* RealScout Widget */}
      <Section
        id="search"
        title="Search Luxury Homes"
        description="Browse active luxury listings in Las Vegas"
        className="bg-warm-gray"
      >
        <RealScoutWidget
          filters={{ minPrice: 800000, propertyType: 'Luxury' }}
          className="min-h-[600px]"
        />
      </Section>

      <CTASection
        title="Ready to Explore Luxury Homes?"
        description="Let's discuss your luxury real estate goals. Discretion and expertise guaranteed."
      />
    </>
  );
}
