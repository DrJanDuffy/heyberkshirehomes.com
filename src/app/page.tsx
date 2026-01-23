import Hero from '@/components/Hero';
import TrustSignals from '@/components/TrustSignals';
import CommunityCard from '@/components/CommunityCard';
import MarketSegmentCard from '@/components/MarketSegmentCard';
import TestimonialCard from '@/components/TestimonialCard';
import RealScoutWidget from '@/components/RealScoutWidget';
import CTASection from '@/components/CTASection';
import Container from '@/components/Container';
import Section from '@/components/Section';
import SchemaMarkup from '@/components/SchemaMarkup';
import {
  generateOrganizationSchema,
  generateLocalBusinessSchema,
} from '@/lib/schema';
import { getCommunitiesByCategory } from '@/data/communities';
import { siteDetails } from '@/data/siteDetails';

export const metadata = {
  title: siteDetails.metadata.title,
  description: siteDetails.metadata.description,
  openGraph: {
    title: siteDetails.metadata.title,
    description: siteDetails.metadata.description,
    url: siteDetails.siteUrl,
    type: 'website',
  },
};

const marketSegments = [
  {
    title: 'Luxury Homes',
    description: 'Discover $800K-$10M+ estates in Summerlin\'s most exclusive communities.',
    href: '/luxury-homes',
    icon: '🏰',
  },
  {
    title: '55+ Living',
    description: 'Active adult communities with resort-style amenities and vibrant social scenes.',
    href: '/55-plus-living',
    icon: '🌴',
  },
  {
    title: 'New Construction',
    description: 'Brand new homes from top builders with current incentives and warranties.',
    href: '/new-construction',
    icon: '🏗️',
  },
  {
    title: 'Investors',
    description: 'ROI-focused properties with market data and cash flow analysis.',
    href: '/investors',
    icon: '📊',
  },
  {
    title: 'Selling Your Home',
    description: 'Get a free CMA and expert marketing to sell for top dollar.',
    href: '/sell-your-home',
    icon: '🏡',
  },
];

const testimonials = [
  {
    quote: 'Dr. Jan made our home buying experience seamless. Her knowledge of Summerlin communities is unmatched, and she found us the perfect home in The Ridges.',
    author: 'Sarah & Michael Johnson',
    location: 'The Ridges, Summerlin',
    result: 'Closed in 30 days, $50K under budget',
  },
  {
    quote: 'We were relocating from California and needed someone who understood the Las Vegas market. Dr. Jan exceeded our expectations and helped us find our dream home in Skye Canyon.',
    author: 'Robert Chen',
    location: 'Skye Canyon',
    result: 'Sold our CA home and bought in NV within 60 days',
  },
  {
    quote: 'As a first-time homebuyer, I was nervous about the process. Dr. Jan walked me through everything and made sure I understood each step. Couldn\'t have asked for a better agent!',
    author: 'Jessica Martinez',
    location: 'Centennial Hills',
    result: 'First home purchase, closed smoothly',
  },
];

export default function HomePage() {
  const featuredCommunities = [
    ...getCommunitiesByCategory('luxury').slice(0, 2),
    ...getCommunitiesByCategory('family').slice(0, 2),
    ...getCommunitiesByCategory('55plus').slice(0, 2),
  ];

  return (
    <>
      <SchemaMarkup
        schemas={[generateOrganizationSchema(), generateLocalBusinessSchema()]}
      />
      <Hero />
      <TrustSignals />

      {/* Featured Communities */}
      <Section
        id="communities"
        title="Explore Las Vegas Communities"
        description="From luxury estates to family-friendly neighborhoods, find your perfect community"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCommunities.map((community) => (
            <CommunityCard key={community.slug} community={community} />
          ))}
        </div>
        <div className="text-center mt-8">
          <a
            href="/communities"
            className="text-primary font-semibold hover:underline text-lg"
          >
            View All Communities →
          </a>
        </div>
      </Section>

      {/* Market Segments */}
      <Section
        id="market-segments"
        title="Your Real Estate Needs"
        description="Expert guidance for every stage of your real estate journey"
        className="bg-warm-gray"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {marketSegments.map((segment) => (
            <MarketSegmentCard key={segment.href} {...segment} />
          ))}
        </div>
      </Section>

      {/* RealScout Widget */}
      <Section
        id="search"
        title="Search Las Vegas Homes"
        description="Browse active listings and find your perfect match"
      >
        <RealScoutWidget className="min-h-[600px]" />
      </Section>

      {/* Testimonials */}
      <Section
        id="testimonials"
        title="What Our Clients Say"
        description="Real experiences from families we've helped find their perfect homes"
        className="bg-warm-gray"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </Section>

      {/* About Preview */}
      <Section
        id="about-preview"
        title="Meet Dr. Jan Duffy"
        description="Your trusted Las Vegas real estate expert"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4 font-display">
              {siteDetails.agent.fullName}
            </h3>
            <p className="text-foreground-accent mb-4">
              With over {siteDetails.agent.experience} of experience in Las Vegas real estate, 
              Dr. Jan Duffy has helped {siteDetails.agent.familiesServed} families find their 
              perfect homes and achieve their real estate goals.
            </p>
            <p className="text-foreground-accent mb-6">
              Specializing in luxury homes, 55+ communities, new construction, and investment 
              properties, Dr. Jan brings deep market knowledge, professional expertise, and a 
              personal touch to every transaction.
            </p>
            <a
              href="/about"
              className="inline-block bg-primary text-white hover:bg-primary-accent px-6 py-3 rounded-full font-semibold transition-colors"
            >
              Learn More About Dr. Jan →
            </a>
          </div>
          <div className="relative aspect-square rounded-xl overflow-hidden shadow-xl">
            <img
              src="/images/dr-jan-duffy.jpg"
              alt="Dr. Jan Duffy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
