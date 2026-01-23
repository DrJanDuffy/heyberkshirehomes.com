import RealScoutHomeValue from './RealScoutHomeValue';
import Container from './Container';
import Section from './Section';

/**
 * Footer Home Value Widget Section
 * Displays home valuation widget before footer
 */
export default function FooterHomeValue() {
  return (
    <Section
      id="home-value"
      title="Get Your Home's Value"
      description="Find out what your home is worth in today's market"
      className="bg-cream"
    >
      <div className="max-w-4xl mx-auto">
        <RealScoutHomeValue className="w-full" />
      </div>
    </Section>
  );
}
