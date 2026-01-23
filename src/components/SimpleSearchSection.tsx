import RealScoutSimpleSearch from './RealScoutSimpleSearch';
import Container from './Container';

/**
 * Simple Search Section Component
 * Displays a simple search widget with heading and description on every page
 */
export default function SimpleSearchSection() {
  return (
    <section className="bg-white py-12 border-t border-gray-200">
      <Container>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-primary mb-4 font-display">
            Find Your Dream Home in Las Vegas
          </h2>
          <p className="text-slate text-lg max-w-2xl mx-auto">
            Start your search with our quick property finder. Enter an address, neighborhood, or zip code to discover available homes that match your criteria.
          </p>
        </div>
        <div className="flex justify-center">
          <RealScoutSimpleSearch className="w-full max-w-2xl" />
        </div>
      </Container>
    </section>
  );
}
