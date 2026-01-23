import RealScoutWidget from '@/components/RealScoutWidget';
import CTASection from '@/components/CTASection';
import Container from '@/components/Container';
import Section from '@/components/Section';
import { siteDetails } from '@/data/siteDetails';
import SchemaMarkup from '@/components/SchemaMarkup';
import { generateBreadcrumbSchema } from '@/lib/schema';

export const metadata = {
  title: 'New Construction Homes Las Vegas | Builder Communities | Dr. Jan Duffy',
  description: 'Find new construction homes in Las Vegas from top builders. Century Communities, KB Home, Lennar, Pulte, Toll Brothers. Current incentives and warranties.',
};

const builders = [
  { name: 'Century Communities', description: 'Modern designs and energy-efficient homes' },
  { name: 'KB Home', description: 'Personalized homes with innovative floor plans' },
  { name: 'Lennar', description: "Everything's Included® homes with premium features" },
  { name: 'Pulte Homes', description: 'Quality craftsmanship and design flexibility' },
  { name: 'Toll Brothers', description: 'Luxury new construction and custom options' },
];

export default function NewConstructionPage() {
  const breadcrumbs = [
    { name: 'Home', url: siteDetails.siteUrl },
    { name: 'New Construction', url: `${siteDetails.siteUrl}/new-construction` },
  ];

  return (
    <>
      <SchemaMarkup schemas={[generateBreadcrumbSchema(breadcrumbs)]} />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary via-primary-accent to-secondary text-white py-20">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            New Construction Homes Las Vegas
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Discover brand new homes from Las Vegas's top builders. Current
            incentives, warranties, and the latest designs await.
          </p>
        </Container>
      </section>

      {/* Overview */}
      <Section
        id="overview"
        title="Why Choose New Construction"
        description="The benefits of buying a brand new home"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="text-3xl mb-3">🆕</div>
            <h3 className="font-bold mb-2 font-display">Brand New Everything</h3>
            <p className="text-sm text-foreground-accent">
              No wear and tear, everything is fresh and modern with the latest
              features and finishes.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="text-3xl mb-3">🛡️</div>
            <h3 className="font-bold mb-2 font-display">Builder Warranties</h3>
            <p className="text-sm text-foreground-accent">
              Comprehensive warranties covering structure, systems, and
              workmanship for peace of mind.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="text-3xl mb-3">💰</div>
            <h3 className="font-bold mb-2 font-display">Current Incentives</h3>
            <p className="text-sm text-foreground-accent">
              Builders often offer closing cost assistance, rate buydowns, and
              upgrade credits.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="text-3xl mb-3">🎨</div>
            <h3 className="font-bold mb-2 font-display">Customization</h3>
            <p className="text-sm text-foreground-accent">
              Choose finishes, colors, and sometimes even floor plans to match
              your style.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="font-bold mb-2 font-display">Energy Efficiency</h3>
            <p className="text-sm text-foreground-accent">
              Modern building standards mean lower utility bills and
              environmental impact.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="text-3xl mb-3">🏘️</div>
            <h3 className="font-bold mb-2 font-display">Master-Planned Communities</h3>
            <p className="text-sm text-foreground-accent">
              New construction often comes with parks, trails, and community
              amenities.
            </p>
          </div>
        </div>
      </Section>

      {/* Builder Partners */}
      <Section
        id="builders"
        title="Builder Partners"
        description="Working with Las Vegas's top builders"
        className="bg-warm-gray"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {builders.map((builder) => (
            <div
              key={builder.name}
              className="bg-white rounded-xl p-6 shadow-md"
            >
              <h3 className="text-xl font-bold mb-2 font-display">
                {builder.name}
              </h3>
              <p className="text-sm text-foreground-accent">
                {builder.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section
        id="process"
        title="The New Construction Process"
        description="What to expect when buying new"
      >
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="font-bold mb-2 font-display">1. Choose Your Community</h3>
            <p className="text-foreground-accent">
              We'll tour new construction communities and help you find the
              perfect location and builder for your needs.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="font-bold mb-2 font-display">2. Select Your Home</h3>
            <p className="text-foreground-accent">
              Choose from available inventory or select a lot and customize your
              home with builder options.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="font-bold mb-2 font-display">3. Negotiate & Contract</h3>
            <p className="text-foreground-accent">
              I'll help you understand incentives, negotiate terms, and ensure
              your contract protects your interests.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="font-bold mb-2 font-display">4. Construction & Inspections</h3>
            <p className="text-foreground-accent">
              Monitor construction progress, attend inspections, and ensure
              quality throughout the build process.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="font-bold mb-2 font-display">5. Closing & Move-In</h3>
            <p className="text-foreground-accent">
              Final walkthrough, closing coordination, and help with any
              post-move-in warranty items.
            </p>
          </div>
        </div>
      </Section>

      {/* RealScout Widget */}
      <Section
        id="search"
        title="Search New Construction"
        description="Browse new construction listings and communities"
        className="bg-warm-gray"
      >
        <RealScoutWidget
          filters={{ propertyType: 'New Construction', newConstruction: true }}
          className="min-h-[600px]"
        />
      </Section>

      <CTASection
        title="Ready to Explore New Construction?"
        description="Let's find your perfect new home. I'll help you navigate builder incentives and find the best value."
      />
    </>
  );
}
