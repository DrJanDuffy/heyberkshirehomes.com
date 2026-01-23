import Link from 'next/link';
import Image from 'next/image';
import { siteDetails } from '@/data/siteDetails';
import Container from './Container';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary-accent to-secondary text-white py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight">
              Your Las Vegas Real Estate Expert
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-white/90">
              {siteDetails.agent.experience} of Experience • {siteDetails.agent.familiesServed} Families Served • ${siteDetails.agent.salesVolume} in Sales
            </p>
            <p className="text-lg mb-8 text-white/80">
              Find your perfect home in Las Vegas with expert guidance from Dr. Jan Duffy. 
              Luxury homes, 55+ communities, new construction, and investment properties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={`tel:${siteDetails.contact.primaryPhone}`}
                className="bg-gold text-foreground hover:bg-gold-accent px-8 py-4 rounded-full font-semibold text-lg transition-colors shadow-lg hover:shadow-xl"
              >
                Call/Text {siteDetails.contact.primaryPhone}
              </a>
              <Link
                href="#search"
                className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 px-8 py-4 rounded-full font-semibold text-lg transition-colors"
              >
                Start Your Search
              </Link>
            </div>
            <p className="mt-6 text-white/70 text-sm">
              {siteDetails.agent.tagline}
            </p>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero-las-vegas.jpg"
                alt="Las Vegas Real Estate"
                fill
                className="object-cover"
                priority
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
            </div>
            {/* Trust Badge Overlay */}
            <div className="absolute -bottom-6 -left-6 bg-white text-foreground p-6 rounded-xl shadow-xl max-w-xs">
              <p className="font-bold text-lg mb-2">Berkshire Hathaway</p>
              <p className="text-sm text-foreground-accent">HomeServices Nevada Properties</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
