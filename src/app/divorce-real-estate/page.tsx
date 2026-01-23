import CTASection from '@/components/CTASection';
import Container from '@/components/Container';
import Section from '@/components/Section';
import { siteDetails } from '@/data/siteDetails';
import SchemaMarkup from '@/components/SchemaMarkup';
import { generateBreadcrumbSchema } from '@/lib/schema';

export const metadata = {
  title: 'Divorce Real Estate Las Vegas | Sensitive & Discreet | Dr. Jan Duffy',
  description: 'Expert guidance for real estate during divorce. Sensitive, discreet service for quick, clean property sales. Las Vegas divorce real estate specialist.',
};

export default function DivorceRealEstatePage() {
  const breadcrumbs = [
    { name: 'Home', url: siteDetails.siteUrl },
    { name: 'Divorce Real Estate', url: `${siteDetails.siteUrl}/divorce-real-estate` },
  ];

  return (
    <>
      <SchemaMarkup schemas={[generateBreadcrumbSchema(breadcrumbs)]} />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary via-primary-accent to-secondary text-white py-20">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            Divorce Real Estate Services
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Sensitive, discreet guidance for real estate during divorce. Quick,
            clean sales with complete confidentiality.
          </p>
        </Container>
      </section>

      {/* Overview */}
      <Section
        id="overview"
        title="Understanding Real Estate During Divorce"
        description="Compassionate, professional guidance during a difficult time"
      >
        <div className="max-w-3xl mx-auto prose prose-lg">
          <p className="text-foreground-accent mb-4">
            Divorce is one of life's most challenging transitions, and real
            estate decisions add significant complexity. Whether you need to sell
            the marital home, buy a new property, or navigate property division,
            you need an agent who understands both the emotional and financial
            aspects of this process.
          </p>
          <p className="text-foreground-accent mb-4">
            With {siteDetails.agent.experience} of experience in Las Vegas real
            estate, I've helped many families navigate property matters during
            divorce with sensitivity, discretion, and efficiency. My approach
            prioritizes quick, clean transactions that minimize stress and
            maximize outcomes for all parties.
          </p>
          <p className="text-foreground-accent">
            You can trust that your situation will be handled with complete
            confidentiality and professionalism. My goal is to make the real
            estate aspect of your divorce as smooth as possible.
          </p>
        </div>
      </Section>

      {/* Services */}
      <Section
        id="services"
        title="How I Can Help"
        description="Comprehensive support for divorce-related real estate needs"
        className="bg-warm-gray"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="text-3xl mb-3">🏠</div>
            <h3 className="font-bold mb-2 font-display">Selling the Marital Home</h3>
            <p className="text-sm text-foreground-accent mb-3">
              Quick, efficient sales to facilitate property division:
            </p>
            <ul className="list-disc list-inside text-sm text-foreground-accent space-y-1">
              <li>Fast market analysis and pricing strategy</li>
              <li>Neutral, professional presentation</li>
              <li>Expedited closing coordination</li>
              <li>Fair market value determination</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="text-3xl mb-3">🔑</div>
            <h3 className="font-bold mb-2 font-display">Buying a New Home</h3>
            <p className="text-sm text-foreground-accent mb-3">
              Help finding your next home post-divorce:
            </p>
            <ul className="list-disc list-inside text-sm text-foreground-accent space-y-1">
              <li>Understanding your new financial situation</li>
              <li>Pre-approval guidance</li>
              <li>Finding the right property for your new life</li>
              <li>Supportive, judgment-free service</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="text-3xl mb-3">📊</div>
            <h3 className="font-bold mb-2 font-display">Property Valuation</h3>
            <p className="text-sm text-foreground-accent mb-3">
              Accurate valuations for property division:
            </p>
            <ul className="list-disc list-inside text-sm text-foreground-accent space-y-1">
              <li>Comprehensive market analysis (CMA)</li>
              <li>Fair market value reports</li>
              <li>Documentation for legal proceedings</li>
              <li>Expert testimony if needed</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="text-3xl mb-3">🤝</div>
            <h3 className="font-bold mb-2 font-display">Cooperative Sales</h3>
            <p className="text-sm text-foreground-accent mb-3">
              Working with both parties when needed:
            </p>
            <ul className="list-disc list-inside text-sm text-foreground-accent space-y-1">
              <li>Neutral representation</li>
              <li>Clear communication with all parties</li>
              <li>Mediation support</li>
              <li>Fair, transparent process</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Why Choose Dr. Jan */}
      <Section
        id="why-choose"
        title="Why Choose Dr. Jan for Divorce Real Estate"
        description="Sensitivity, discretion, and results"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="text-4xl mb-3">🔒</div>
            <h3 className="font-bold mb-2 font-display">Complete Discretion</h3>
            <p className="text-sm text-foreground-accent">
              Your situation is handled with the utmost confidentiality. No
              judgment, just professional service.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="font-bold mb-2 font-display">Quick, Clean Sales</h3>
            <p className="text-sm text-foreground-accent">
              Expedited processes to minimize stress and facilitate your
              transition. Fast closings when needed.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="text-4xl mb-3">💼</div>
            <h3 className="font-bold mb-2 font-display">Legal Coordination</h3>
            <p className="text-sm text-foreground-accent">
              Experience working with divorce attorneys and understanding legal
              requirements for property transactions.
            </p>
          </div>
        </div>
      </Section>

      {/* Process */}
      <Section
        id="process"
        title="The Process"
        description="What to expect when working with me"
        className="bg-warm-gray"
      >
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-start gap-4">
              <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="font-bold mb-2 font-display">Initial Consultation</h3>
                <p className="text-foreground-accent">
                  We'll discuss your situation in complete confidence. I'll
                  understand your timeline, goals, and any legal requirements
                  that need to be considered.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-start gap-4">
              <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="font-bold mb-2 font-display">Property Analysis</h3>
                <p className="text-foreground-accent">
                  If selling, I'll provide a comprehensive market analysis and
                  pricing strategy. If buying, we'll identify properties that
                  fit your new situation.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-start gap-4">
              <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="font-bold mb-2 font-display">Coordination</h3>
                <p className="text-foreground-accent">
                  I'll coordinate with your attorney, mediator, or other
                  professionals as needed. Clear communication keeps everyone
                  informed.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-start gap-4">
              <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="font-bold mb-2 font-display">Transaction Management</h3>
                <p className="text-foreground-accent">
                  I'll handle all aspects of the transaction with sensitivity
                  and efficiency, keeping stress to a minimum during this
                  challenging time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Confidentiality */}
      <Section
        id="confidentiality"
        title="Your Privacy Matters"
        description="Complete confidentiality and professional discretion"
      >
        <div className="max-w-3xl mx-auto bg-white rounded-xl p-8 shadow-md">
          <p className="text-foreground-accent mb-4">
            I understand that divorce is a private matter, and real estate
            decisions during this time require extra sensitivity. You can trust
            that:
          </p>
          <ul className="list-disc list-inside text-foreground-accent space-y-2 mb-4">
            <li>All conversations are completely confidential</li>
            <li>Your situation is handled with discretion and respect</li>
            <li>No judgment—just professional, supportive guidance</li>
            <li>I work efficiently to minimize the time property matters take</li>
            <li>Coordination with legal professionals when needed</li>
          </ul>
          <p className="text-foreground-accent">
            My goal is to make the real estate aspect of your divorce as smooth
            and stress-free as possible, so you can focus on moving forward.
          </p>
        </div>
      </Section>

      <CTASection
        title="Need Help with Divorce Real Estate?"
        description="Let's discuss your situation in complete confidence. Sensitive, discreet, and efficient service."
      />
    </>
  );
}
