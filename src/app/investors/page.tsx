import RealScoutWidget from '@/components/RealScoutWidget';
import CTASection from '@/components/CTASection';
import Container from '@/components/Container';
import Section from '@/components/Section';
import { siteDetails } from '@/data/siteDetails';
import SchemaMarkup from '@/components/SchemaMarkup';
import { generateBreadcrumbSchema } from '@/lib/schema';

export const metadata = {
  title: 'Las Vegas Investment Properties | ROI & Cash Flow Analysis | Dr. Jan Duffy',
  description: 'Las Vegas real estate investment opportunities. ROI analysis, cap rates, cash flow projections, and market data for investors.',
};

export default function InvestorsPage() {
  const breadcrumbs = [
    { name: 'Home', url: siteDetails.siteUrl },
    { name: 'Investors', url: `${siteDetails.siteUrl}/investors` },
  ];

  return (
    <>
      <SchemaMarkup schemas={[generateBreadcrumbSchema(breadcrumbs)]} />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary via-primary-accent to-secondary text-white py-20">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            Las Vegas Investment Properties
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Data-driven real estate investment opportunities in Las Vegas. ROI
            analysis, cap rates, cash flow projections, and market insights.
          </p>
        </Container>
      </section>

      {/* Why Las Vegas */}
      <Section
        id="why-las-vegas"
        title="Why Invest in Las Vegas Real Estate"
        description="Strong fundamentals for real estate investors"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="text-3xl mb-3">📈</div>
            <h3 className="font-bold mb-2 font-display">Growing Population</h3>
            <p className="text-sm text-foreground-accent">
              Las Vegas continues to attract new residents, driving demand for
              rental properties and appreciation potential.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="text-3xl mb-3">💼</div>
            <h3 className="font-bold mb-2 font-display">Diversified Economy</h3>
            <p className="text-sm text-foreground-accent">
              Beyond tourism, Las Vegas has strong healthcare, technology, and
              logistics sectors providing stable employment.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="text-3xl mb-3">🏠</div>
            <h3 className="font-bold mb-2 font-display">Affordable Entry</h3>
            <p className="text-sm text-foreground-accent">
              Compared to other major markets, Las Vegas offers attractive
              entry points with strong rental yields.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="text-3xl mb-3">🌴</div>
            <h3 className="font-bold mb-2 font-display">No State Income Tax</h3>
            <p className="text-sm text-foreground-accent">
              Nevada's tax-friendly environment benefits investors and
              residents alike.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="text-3xl mb-3">✈️</div>
            <h3 className="font-bold mb-2 font-display">Tourism Stability</h3>
            <p className="text-sm text-foreground-accent">
              Strong short-term rental market with consistent visitor demand
              year-round.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="text-3xl mb-3">📊</div>
            <h3 className="font-bold mb-2 font-display">Market Data</h3>
            <p className="text-sm text-foreground-accent">
              Transparent market with comprehensive data for informed
              investment decisions.
            </p>
          </div>
        </div>
      </Section>

      {/* Investment Strategies */}
      <Section
        id="strategies"
        title="Investment Strategies"
        description="Different approaches to Las Vegas real estate investing"
        className="bg-warm-gray"
      >
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="font-bold mb-2 font-display">Buy & Hold (Long-Term Rental)</h3>
            <p className="text-foreground-accent mb-2">
              Purchase properties for steady monthly cash flow and long-term
              appreciation. Ideal for:
            </p>
            <ul className="list-disc list-inside text-sm text-foreground-accent space-y-1">
              <li>Single-family homes in established neighborhoods</li>
              <li>Multi-family properties (duplexes, triplexes)</li>
              <li>Properties near employment centers or universities</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="font-bold mb-2 font-display">Short-Term Rentals (Airbnb/VRBO)</h3>
            <p className="text-foreground-accent mb-2">
              Higher income potential with tourism demand. Consider:
            </p>
            <ul className="list-disc list-inside text-sm text-foreground-accent space-y-1">
              <li>Properties near the Strip or Downtown</li>
              <li>Condos in resort areas</li>
              <li>HOA restrictions and local regulations</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="font-bold mb-2 font-display">Fix & Flip</h3>
            <p className="text-foreground-accent mb-2">
              Renovate and resell for profit. Requires:
            </p>
            <ul className="list-disc list-inside text-sm text-foreground-accent space-y-1">
              <li>Market knowledge and renovation expertise</li>
              <li>Access to contractors and financing</li>
              <li>Understanding of ARV (After Repair Value)</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="font-bold mb-2 font-display">New Construction Investment</h3>
            <p className="text-foreground-accent mb-2">
              Purchase new builds for appreciation and modern features:
            </p>
            <ul className="list-disc list-inside text-sm text-foreground-accent space-y-1">
              <li>Builder incentives and warranties</li>
              <li>Lower maintenance initially</li>
              <li>Potential for immediate rental income</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Market Data */}
      <Section
        id="market-data"
        title="Investment Analysis Services"
        description="Data-driven insights for smart investing"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="font-bold mb-3 font-display">ROI & Cash Flow Analysis</h3>
            <p className="text-sm text-foreground-accent mb-4">
              Detailed projections including:
            </p>
            <ul className="list-disc list-inside text-sm text-foreground-accent space-y-1">
              <li>Monthly cash flow calculations</li>
              <li>Cap rate analysis</li>
              <li>Cash-on-cash return</li>
              <li>Total ROI projections</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="font-bold mb-3 font-display">Market Trends & Data</h3>
            <p className="text-sm text-foreground-accent mb-4">
              Access to current market information:
            </p>
            <ul className="list-disc list-inside text-sm text-foreground-accent space-y-1">
              <li>Rental rates by neighborhood</li>
              <li>Appreciation trends</li>
              <li>Vacancy rates</li>
              <li>Neighborhood growth projections</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="font-bold mb-3 font-display">Property Management Resources</h3>
            <p className="text-sm text-foreground-accent mb-4">
              Connections and guidance for:
            </p>
            <ul className="list-disc list-inside text-sm text-foreground-accent space-y-1">
              <li>Property management companies</li>
              <li>Maintenance contractors</li>
              <li>Legal and tax considerations</li>
              <li>1031 exchange opportunities</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="font-bold mb-3 font-display">Portfolio Building</h3>
            <p className="text-sm text-foreground-accent mb-4">
              Strategic guidance for:
            </p>
            <ul className="list-disc list-inside text-sm text-foreground-accent space-y-1">
              <li>Diversification strategies</li>
              <li>Scaling your portfolio</li>
              <li>Financing options</li>
              <li>Exit strategies</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* RealScout Widget */}
      <Section
        id="search"
        title="Search Investment Properties"
        description="Browse investment opportunities in Las Vegas"
        className="bg-warm-gray"
      >
        <RealScoutWidget
          filters={{ investment: true, propertyType: 'Investment' }}
          className="min-h-[600px]"
        />
      </Section>

      <CTASection
        title="Ready to Build Your Investment Portfolio?"
        description="Let's discuss your investment goals and find properties that match your strategy. Data-driven analysis and expert guidance."
      />
    </>
  );
}
