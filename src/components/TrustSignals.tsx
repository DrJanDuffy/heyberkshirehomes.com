import { siteDetails } from '@/data/siteDetails';
import Container from './Container';

export default function TrustSignals() {
  const signals = [
    {
      label: 'Years of Experience',
      value: siteDetails.agent.experience,
      icon: '🏆',
    },
    {
      label: 'Families Served',
      value: siteDetails.agent.familiesServed,
      icon: '👨‍👩‍👧‍👦',
    },
    {
      label: 'Total Sales Volume',
      value: siteDetails.agent.salesVolume,
      icon: '💰',
    },
    {
      label: 'License',
      value: siteDetails.agent.license,
      icon: '✅',
    },
  ];

  return (
    <section className="bg-white py-12 border-b">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {signals.map((signal) => (
            <div key={signal.label} className="text-center">
              <div className="text-4xl mb-2">{signal.icon}</div>
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1 font-display">
                {signal.value}
              </div>
              <div className="text-sm text-foreground-accent">{signal.label}</div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <p className="text-foreground-accent text-sm">
            {siteDetails.agent.brokerage}
          </p>
        </div>
      </Container>
    </section>
  );
}
