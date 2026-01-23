import Link from 'next/link';
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
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight">
            Buying, Selling, or Investing in Las Vegas?
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-white/90">
            Expert guidance for every real estate goal — from first homes to luxury estates
          </p>

          {/* Service CTA Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <Link
              href="/communities"
              className="group bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 hover:border-white/50 rounded-xl p-6 transition-all hover:-translate-y-1"
            >
              <div className="text-4xl mb-3">🏠</div>
              <div className="font-semibold text-lg">Buy a Home</div>
            </Link>
            <Link
              href="/sell-your-home"
              className="group bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 hover:border-white/50 rounded-xl p-6 transition-all hover:-translate-y-1"
            >
              <div className="text-4xl mb-3">💰</div>
              <div className="font-semibold text-lg">Sell Your Home</div>
            </Link>
            <Link
              href="/investors"
              className="group bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 hover:border-white/50 rounded-xl p-6 transition-all hover:-translate-y-1"
            >
              <div className="text-4xl mb-3">📈</div>
              <div className="font-semibold text-lg">Invest in Real Estate</div>
            </Link>
            <Link
              href="/communities"
              className="group bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 hover:border-white/50 rounded-xl p-6 transition-all hover:-translate-y-1"
            >
              <div className="text-4xl mb-3">📍</div>
              <div className="font-semibold text-lg">Explore Communities</div>
            </Link>
          </div>

          <p className="text-lg text-white/80">
            Questions? <a href={`tel:${siteDetails.contact.primaryPhone}`} className="text-gold hover:text-gold-accent font-semibold underline">Call/Text {siteDetails.contact.primaryPhone}</a>
          </p>
        </div>
      </Container>
    </section>
  );
}
