import Link from 'next/link';
import Image from 'next/image';
import { siteDetails } from '@/data/siteDetails';
import Section from './Section';

export default function AboutSection() {
  return (
    <Section
      id="about-preview"
      title="Why Work with Dr. Jan Duffy?"
      description=""
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-lg text-foreground-accent mb-6">
            I've helped over {siteDetails.agent.familiesServed} families navigate Las Vegas real estate — 
            from first-time buyers in Centennial Hills to $5M+ estates in The Ridges. 
            My approach: listen first, then match you with the right opportunity.
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start">
              <span className="text-primary mr-3 text-xl">✓</span>
              <span className="text-foreground-accent">
                <strong className="text-foreground">Ph.D.</strong> — Research-driven market analysis
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 text-xl">✓</span>
              <span className="text-foreground-accent">
                <strong className="text-foreground">{siteDetails.agent.experience}</strong> in Las Vegas real estate
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 text-xl">✓</span>
              <span className="text-foreground-accent">
                <strong className="text-foreground">{siteDetails.agent.salesVolume}</strong> in career sales volume
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 text-xl">✓</span>
              <span className="text-foreground-accent">
                <strong className="text-foreground">{siteDetails.agent.brokerage}</strong>
              </span>
            </li>
          </ul>
          <Link
            href="/about"
            className="inline-block bg-primary text-white hover:bg-primary-accent px-6 py-3 rounded-full font-semibold transition-colors"
          >
            Learn More About My Approach →
          </Link>
        </div>
        <div className="relative aspect-square rounded-xl overflow-hidden shadow-xl">
          <Image
            src="/images/dr-jan-duffy.jpg"
            alt="Dr. Jan Duffy"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </Section>
  );
}
