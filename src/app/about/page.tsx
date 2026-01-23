import Image from 'next/image';
import Container from '@/components/Container';
import Section from '@/components/Section';
import CTASection from '@/components/CTASection';
import { siteDetails } from '@/data/siteDetails';
import SchemaMarkup from '@/components/SchemaMarkup';
import { generateBreadcrumbSchema, generateOrganizationSchema } from '@/lib/schema';

export const metadata = {
  title: 'About Dr. Jan Duffy | Las Vegas Real Estate Expert | Berkshire Hathaway',
  description: `Meet Dr. Jan Duffy, your Las Vegas real estate expert with ${siteDetails.agent.experience} of experience. ${siteDetails.agent.familiesServed} families served, ${siteDetails.agent.salesVolume} in sales.`,
};

export default function AboutPage() {
  const breadcrumbs = [
    { name: 'Home', url: siteDetails.siteUrl },
    { name: 'About', url: `${siteDetails.siteUrl}/about` },
  ];

  return (
    <>
      <SchemaMarkup
        schemas={[
          generateBreadcrumbSchema(breadcrumbs),
          generateOrganizationSchema(),
        ]}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary via-primary-accent to-secondary text-white py-20">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            About Dr. Jan Duffy
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Your trusted Las Vegas real estate expert with{' '}
            {siteDetails.agent.experience} of experience helping families find
            their perfect homes.
          </p>
        </Container>
      </section>

      {/* Bio Section */}
      <Section id="bio" title="Your Las Vegas Real Estate Expert">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative aspect-square rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/dr-jan-duffy.jpg"
                alt="Dr. Jan Duffy"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 font-display">
              {siteDetails.agent.fullName}
            </h2>
            <div className="prose prose-lg max-w-none space-y-4">
              <p className="text-foreground-accent">
                With over {siteDetails.agent.experience} of experience in Las
                Vegas real estate, I've had the privilege of helping{' '}
                {siteDetails.agent.familiesServed} families find their perfect
                homes and achieve their real estate goals. My approach combines
                deep market knowledge, professional expertise, and a genuine
                commitment to your success.
              </p>
              <p className="text-foreground-accent">
                I specialize in luxury homes, 55+ active adult communities, new
                construction, and investment properties. Whether you're buying
                your first home, upgrading to a luxury estate, or building a
                real estate portfolio, I bring the expertise and personalized
                service you deserve.
              </p>
              <p className="text-foreground-accent">
                My philosophy is simple: {siteDetails.agent.tagline} I'm here
                to guide you through every step of your real estate journey,
                making the process smooth, transparent, and successful.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Credentials */}
      <Section
        id="credentials"
        title="Credentials & Experience"
        description="Professional qualifications and achievements"
        className="bg-warm-gray"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="text-4xl mb-3">🎓</div>
            <h3 className="font-bold mb-2 font-display">Ph.D.</h3>
            <p className="text-sm text-foreground-accent">
              Advanced education and analytical expertise
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="text-4xl mb-3">📜</div>
            <h3 className="font-bold mb-2 font-display">License</h3>
            <p className="text-sm text-foreground-accent">
              {siteDetails.agent.license}
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="text-4xl mb-3">🏆</div>
            <h3 className="font-bold mb-2 font-display">Experience</h3>
            <p className="text-sm text-foreground-accent">
              {siteDetails.agent.experience} in Las Vegas real estate
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="text-4xl mb-3">💼</div>
            <h3 className="font-bold mb-2 font-display">Brokerage</h3>
            <p className="text-sm text-foreground-accent">
              {siteDetails.agent.brokerage}
            </p>
          </div>
        </div>
      </Section>

      {/* Why Work With Dr. Jan */}
      <Section
        id="why"
        title="Why Work With Dr. Jan"
        description="What sets me apart as your real estate expert"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="font-bold mb-3 font-display">Deep Market Knowledge</h3>
            <p className="text-sm text-foreground-accent">
              {siteDetails.agent.experience} of experience means I know every
              neighborhood, market trend, and opportunity in Las Vegas. I can
              help you make informed decisions.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="font-bold mb-3 font-display">Personalized Service</h3>
            <p className="text-sm text-foreground-accent">
              Every client is unique. I take time to understand your goals,
              preferences, and timeline to create a customized strategy that
              works for you.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="font-bold mb-3 font-display">Proven Results</h3>
            <p className="text-sm text-foreground-accent">
              {siteDetails.agent.familiesServed} families served and{' '}
              {siteDetails.agent.salesVolume} in sales demonstrate my track
              record of success.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="font-bold mb-3 font-display">Transparent Communication</h3>
            <p className="text-sm text-foreground-accent">
              You'll always know where things stand. I keep you informed
              throughout the entire process with clear, honest communication.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="font-bold mb-3 font-display">Negotiation Expertise</h3>
            <p className="text-sm text-foreground-accent">
              Whether buying or selling, I negotiate to get you the best terms
              and outcomes. My experience gives you an advantage.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="font-bold mb-3 font-display">Ongoing Support</h3>
            <p className="text-sm text-foreground-accent">
              My relationship with clients doesn't end at closing. I'm here for
              referrals, questions, and support long after your transaction.
            </p>
          </div>
        </div>
      </Section>

      {/* Specializations */}
      <Section
        id="specializations"
        title="Areas of Expertise"
        description="Specialized knowledge across all market segments"
        className="bg-warm-gray"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="font-bold mb-3 font-display">Luxury Homes</h3>
            <p className="text-sm text-foreground-accent mb-3">
              Expertise in high-end properties from $800K to $10M+ in
              Summerlin's most exclusive communities.
            </p>
            <ul className="list-disc list-inside text-sm text-foreground-accent space-y-1">
              <li>The Ridges, The Summit, Red Rock Country Club</li>
              <li>Discretion and white-glove service</li>
              <li>Deep understanding of luxury market dynamics</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="font-bold mb-3 font-display">55+ Active Adult Communities</h3>
            <p className="text-sm text-foreground-accent mb-3">
              Specialized knowledge of active adult living and retirement
              communities.
            </p>
            <ul className="list-disc list-inside text-sm text-foreground-accent space-y-1">
              <li>Sun City, Del Webb, Heritage at Stonebridge</li>
              <li>Lifestyle considerations and amenities</li>
              <li>Warm, supportive guidance</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="font-bold mb-3 font-display">New Construction</h3>
            <p className="text-sm text-foreground-accent mb-3">
              Relationships with top builders and understanding of new
              construction process.
            </p>
            <ul className="list-disc list-inside text-sm text-foreground-accent space-y-1">
              <li>Century Communities, KB Home, Lennar, Pulte, Toll Brothers</li>
              <li>Builder incentives and negotiations</li>
              <li>Construction oversight and quality assurance</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="font-bold mb-3 font-display">Investment Properties</h3>
            <p className="text-sm text-foreground-accent mb-3">
              Data-driven analysis for real estate investors.
            </p>
            <ul className="list-disc list-inside text-sm text-foreground-accent space-y-1">
              <li>ROI and cash flow analysis</li>
              <li>Market trends and opportunities</li>
              <li>Portfolio building strategies</li>
            </ul>
          </div>
        </div>
      </Section>

      <CTASection
        title="Ready to Work Together?"
        description={`Let's discuss your real estate goals. ${siteDetails.agent.tagline}`}
      />
    </>
  );
}
