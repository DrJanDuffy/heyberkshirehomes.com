import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import CommunitiesSection from '@/components/CommunitiesSection';
import RealScoutWidget from '@/components/RealScoutWidget';
import RealScoutAdvancedSearch from '@/components/RealScoutAdvancedSearch';
import AboutSection from '@/components/AboutSection';
import TestimonialCard from '@/components/TestimonialCard';
import CTASection from '@/components/CTASection';
import Section from '@/components/Section';
import SchemaMarkup from '@/components/SchemaMarkup';
import {
  generateOrganizationSchema,
  generateLocalBusinessSchema,
} from '@/lib/schema';
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
  return (
    <>
      <SchemaMarkup
        schemas={[generateOrganizationSchema(), generateLocalBusinessSchema()]}
      />
      
      {/* 1. Hero - Service-focused CTAs (no stats) */}
      <Hero />

      {/* 2. Services Section - Expanded with benefits */}
      <ServicesSection />

      {/* 3. Communities/Locations - Filterable */}
      <CommunitiesSection />

      {/* 4. Property Search Widget - Advanced Search */}
      <Section
        id="search"
        title="Search Las Vegas Homes"
        description="Use our advanced search to find your perfect home with detailed filters"
        className="bg-cream"
      >
        <div className="flex justify-center">
          <RealScoutAdvancedSearch className="w-full max-w-2xl" />
        </div>
      </Section>

      {/* 5. About Dr. Jan - Brief with credentials as proof */}
      <AboutSection />

      {/* 6. Testimonials - Social proof */}
      <Section
        id="testimonials"
        title="What Our Clients Say"
        description="Real experiences from families we've helped find their perfect homes"
        className="bg-cream"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </Section>

      {/* 7. Contact CTA */}
      <CTASection />
    </>
  );
}
