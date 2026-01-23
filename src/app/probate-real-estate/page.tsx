import CTASection from '@/components/CTASection';
import Container from '@/components/Container';
import Section from '@/components/Section';
import { siteDetails } from '@/data/siteDetails';
import SchemaMarkup from '@/components/SchemaMarkup';
import { generateBreadcrumbSchema } from '@/lib/schema';

export const metadata = {
  title: 'Probate Real Estate Las Vegas | Estate Sales | Dr. Jan Duffy',
  description: 'Expert guidance for probate real estate in Las Vegas. Helpful, patient service for estate sales and property transfers. Call 702-500-1942.',
};

export default function ProbateRealEstatePage() {
  const breadcrumbs = [
    { name: 'Home', url: siteDetails.siteUrl },
    { name: 'Probate Real Estate', url: `${siteDetails.siteUrl}/probate-real-estate` },
  ];

  return (
    <>
      <SchemaMarkup schemas={[generateBreadcrumbSchema(breadcrumbs)]} />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary via-primary-accent to-secondary text-white py-20">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            Probate Real Estate Services
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Helpful, patient guidance for estate sales and property transfers.
            Understanding the probate process and making it as smooth as
            possible.
          </p>
        </Container>
      </section>

      {/* Overview */}
      <Section
        id="overview"
        title="Understanding Probate Real Estate"
        description="Compassionate guidance during a difficult time"
      >
        <div className="max-w-3xl mx-auto prose prose-lg">
          <p className="text-foreground-accent mb-4">
            When a loved one passes away, dealing with their real estate can be
            overwhelming. Probate is the legal process of distributing a
            deceased person's assets, and real estate is often the most
            significant asset involved. Whether you're an executor, beneficiary,
            or family member, you need an agent who understands both the
            emotional and legal aspects of this process.
          </p>
          <p className="text-foreground-accent mb-4">
            With {siteDetails.agent.experience} of experience in Las Vegas real
            estate, I've helped many families navigate probate property sales
            with patience, understanding, and expertise. I know that this is a
            difficult time, and my approach is designed to make the real estate
            aspect as smooth and stress-free as possible.
          </p>
          <p className="text-foreground-accent">
            You can count on me to handle the property sale with care, respect,
            and efficiency, working within the probate timeline and legal
            requirements.
          </p>
        </div>
      </Section>

      {/* Services */}
      <Section
        id="services"
        title="How I Can Help"
        description="Comprehensive probate real estate services"
        className="bg-warm-gray"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="text-3xl mb-3">🏠</div>
            <h3 className="font-bold mb-2 font-display">Estate Property Sales</h3>
            <p className="text-sm text-foreground-accent mb-3">
              Selling property as part of probate:
            </p>
            <ul className="list-disc list-inside text-sm text-foreground-accent space-y-1">
              <li>Understanding probate court requirements</li>
              <li>Property valuation for probate</li>
              <li>Marketing and selling estate properties</li>
              <li>Coordinating with attorneys and executors</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="text-3xl mb-3">📋</div>
            <h3 className="font-bold mb-2 font-display">Probate Documentation</h3>
            <p className="text-sm text-foreground-accent mb-3">
              Supporting the probate process:
            </p>
            <ul className="list-disc list-inside text-sm text-foreground-accent space-y-1">
              <li>Property appraisals for court filings</li>
              <li>Market analysis reports</li>
              <li>Sale documentation for probate court</li>
              <li>Expert testimony if required</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="text-3xl mb-3">⏰</div>
            <h3 className="font-bold mb-2 font-display">Timeline Management</h3>
            <p className="text-sm text-foreground-accent mb-3">
              Working within probate deadlines:
            </p>
            <ul className="list-disc list-inside text-sm text-foreground-accent space-y-1">
              <li>Understanding probate timelines</li>
              <li>Expedited sales when needed</li>
              <li>Flexible scheduling for court dates</li>
              <li>Coordination with legal process</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="text-3xl mb-3">👥</div>
            <h3 className="font-bold mb-2 font-display">Family Coordination</h3>
            <p className="text-sm text-foreground-accent mb-3">
              Working with multiple beneficiaries:
            </p>
            <ul className="list-disc list-inside text-sm text-foreground-accent space-y-1">
              <li>Clear communication with all parties</li>
              <li>Neutral, professional representation</li>
              <li>Fair market value determination</li>
              <li>Transparent process for everyone</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Process */}
      <Section
        id="process"
        title="The Probate Real Estate Process"
        description="What to expect when selling estate property"
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
                  We'll discuss the estate property, probate status, and
                  timeline. I'll explain the process and what's needed from a
                  real estate perspective.
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
                <h3 className="font-bold mb-2 font-display">Property Assessment</h3>
                <p className="text-foreground-accent">
                  I'll assess the property condition, market value, and any
                  needed repairs or updates. This helps determine the best
                  selling strategy.
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
                <h3 className="font-bold mb-2 font-display">Valuation & Court Approval</h3>
                <p className="text-foreground-accent">
                  I'll provide a comprehensive market analysis that can be used
                  for probate court approval. This ensures the property is sold
                  at fair market value.
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
                <h3 className="font-bold mb-2 font-display">Marketing & Sale</h3>
                <p className="text-foreground-accent">
                  Once court approval is obtained, I'll market the property
                  professionally and manage the sale process, keeping all parties
                  informed.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-start gap-4">
              <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                5
              </div>
              <div>
                <h3 className="font-bold mb-2 font-display">Closing & Distribution</h3>
                <p className="text-foreground-accent">
                  I'll coordinate the closing process and ensure all proceeds
                  are properly distributed according to the probate order. All
                  documentation is handled professionally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Why Choose Dr. Jan */}
      <Section
        id="why-choose"
        title="Why Choose Dr. Jan for Probate Real Estate"
        description="Patience, understanding, and expertise"
        className="bg-warm-gray"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="text-4xl mb-3">💙</div>
            <h3 className="font-bold mb-2 font-display">Compassionate Service</h3>
            <p className="text-sm text-foreground-accent">
              I understand this is a difficult time. My approach is patient,
              understanding, and respectful of your situation.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="text-4xl mb-3">⚖️</div>
            <h3 className="font-bold mb-2 font-display">Legal Understanding</h3>
            <p className="text-sm text-foreground-accent">
              Experience working with probate attorneys and understanding court
              requirements for property sales.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="text-4xl mb-3">📊</div>
            <h3 className="font-bold mb-2 font-display">Accurate Valuations</h3>
            <p className="text-sm text-foreground-accent">
              Comprehensive market analysis that meets probate court standards
              and ensures fair market value.
            </p>
          </div>
        </div>
      </Section>

      {/* Common Questions */}
      <Section
        id="faq"
        title="Common Questions About Probate Real Estate"
        description="Answers to help you understand the process"
      >
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="font-bold mb-2 font-display">
              How long does a probate sale take?
            </h3>
            <p className="text-foreground-accent">
              The timeline depends on the probate court process, which typically
              takes 4-6 months. Once court approval is obtained, the property
              sale can proceed normally. I'll work within the court's timeline
              and keep you informed throughout.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="font-bold mb-2 font-display">
              Do I need court approval to sell?
            </h3>
            <p className="text-foreground-accent">
              Yes, probate property sales require court approval. I'll provide
              the necessary documentation and market analysis for the court
              filing. Once approved, we can proceed with marketing and sale.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="font-bold mb-2 font-display">
              What if multiple beneficiaries are involved?
            </h3>
            <p className="text-foreground-accent">
              I work with executors and all beneficiaries to ensure a fair,
              transparent process. Clear communication and fair market value
              determination help ensure everyone is treated fairly.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="font-bold mb-2 font-display">
              Can the property be sold "as-is"?
            </h3>
            <p className="text-foreground-accent">
              Yes, estate properties are often sold as-is. I'll assess the
              condition and market accordingly. This can actually speed up the
              sale process, which is often beneficial during probate.
            </p>
          </div>
        </div>
      </Section>

      <CTASection
        title="Need Help with Probate Real Estate?"
        description="Let's discuss your situation. Patient, helpful guidance every step of the way."
      />
    </>
  );
}
