import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getCommunityBySlug, communities } from '@/data/communities';
import Container from '@/components/Container';
import RealScoutWidget from '@/components/RealScoutWidget';
import CTASection from '@/components/CTASection';
import SchemaMarkup from '@/components/SchemaMarkup';
import {
  generateBreadcrumbSchema,
  generateRealEstateListingSchema,
} from '@/lib/schema';
import { siteDetails } from '@/data/siteDetails';

export async function generateStaticParams() {
  return communities.map((community) => ({
    slug: community.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const community = getCommunityBySlug(slug);

  if (!community) {
    return {
      title: 'Community Not Found',
    };
  }

  return {
    title: `${community.name} Homes for Sale | Las Vegas Real Estate | Dr. Jan Duffy`,
    description: `${community.description} Find homes for sale in ${community.name}, Las Vegas. ${siteDetails.agent.experience} of expertise.`,
    openGraph: {
      title: `${community.name} Homes for Sale | Las Vegas Real Estate`,
      description: community.description,
      url: `${siteDetails.siteUrl}/communities/${slug}`,
    },
  };
}

export default async function CommunityPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const community = getCommunityBySlug(slug);

  if (!community) {
    notFound();
  }

  const relatedCommunities = (community.relatedCommunities
    ?.map((relatedSlug) => getCommunityBySlug(relatedSlug))
    .filter((c): c is NonNullable<typeof c> => Boolean(c))) || [];

  const breadcrumbs = [
    { name: 'Home', url: siteDetails.siteUrl },
    { name: 'Communities', url: `${siteDetails.siteUrl}/communities` },
    { name: community.name, url: `${siteDetails.siteUrl}/communities/${slug}` },
  ];

  return (
    <>
      <SchemaMarkup
        schemas={[
          generateBreadcrumbSchema(breadcrumbs),
          generateRealEstateListingSchema({
            name: `${community.name} Homes for Sale`,
            description: community.description,
            address: `${community.name}, Las Vegas, NV`,
            price: community.priceRange,
            url: `${siteDetails.siteUrl}/communities/${slug}`,
          }),
        ]}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary via-primary-accent to-secondary text-white py-20">
        <Container>
          <nav className="mb-6 text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            {' / '}
            <Link href="/communities" className="hover:text-white">
              Communities
            </Link>
            {' / '}
            <span className="text-white">{community.name}</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            {community.name} - Las Vegas Real Estate
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            {community.description}
          </p>
        </Container>
      </section>

      {/* Quick Stats */}
      <section className="bg-white border-b py-8">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-sm text-foreground-accent mb-1">
                Price Range
              </div>
              <div className="text-xl font-bold text-primary font-display">
                {community.priceRange}
              </div>
            </div>
            <div>
              <div className="text-sm text-foreground-accent mb-1">
                Home Styles
              </div>
              <div className="text-xl font-bold text-primary font-display">
                {community.homeStyles.length} Types
              </div>
            </div>
            <div>
              <div className="text-sm text-foreground-accent mb-1">
                Year Built
              </div>
              <div className="text-xl font-bold text-primary font-display">
                {community.yearBuilt}
              </div>
            </div>
            <div>
              <div className="text-sm text-foreground-accent mb-1">HOA</div>
              <div className="text-xl font-bold text-primary font-display">
                {community.hoaRange}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Community Overview */}
      <section className="py-12">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 font-display">
                About {community.name}
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-foreground-accent mb-4">
                  {community.description}
                </p>
                <p className="text-foreground-accent mb-4">
                  {community.name} offers a unique lifestyle in the heart of Las
                  Vegas. Whether you're seeking luxury living, family-friendly
                  amenities, or active adult communities, this area has
                  something special to offer.
                </p>
                <p className="text-foreground-accent">
                  With {siteDetails.agent.experience} of experience in Las Vegas
                  real estate, I can help you find the perfect home in{' '}
                  {community.name} that matches your lifestyle and budget.
                </p>
              </div>
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden shadow-xl">
              <Image
                src={community.image || '/images/community-placeholder.jpg'}
                alt={community.name}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* RealScout Widget */}
      <section className="bg-warm-gray py-12">
        <Container>
          <h2 className="text-3xl font-bold mb-6 text-center font-display">
            Homes for Sale in {community.name}
          </h2>
          <RealScoutWidget
            filters={{ community: community.name }}
            className="min-h-[600px]"
          />
        </Container>
      </section>

      {/* Neighborhood Guide */}
      <section className="py-12">
        <Container>
          <h2 className="text-3xl font-bold mb-8 text-center font-display">
            Neighborhood Guide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-3xl mb-3">🏫</div>
              <h3 className="font-bold mb-2 font-display">Schools</h3>
              <p className="text-sm text-foreground-accent">
                Top-rated schools in the area with excellent academic programs
                and extracurricular activities.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-3xl mb-3">🛍️</div>
              <h3 className="font-bold mb-2 font-display">Shopping & Dining</h3>
              <p className="text-sm text-foreground-accent">
                Convenient access to shopping centers, restaurants, and
                entertainment venues.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-3xl mb-3">🌳</div>
              <h3 className="font-bold mb-2 font-display">Parks & Recreation</h3>
              <p className="text-sm text-foreground-accent">
                Beautiful parks, walking trails, and recreational facilities for
                the whole family.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-3xl mb-3">🚗</div>
              <h3 className="font-bold mb-2 font-display">Commute</h3>
              <p className="text-sm text-foreground-accent">
                Easy access to the Las Vegas Strip, Downtown, and major
                employment centers.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Dr. Jan's Insider Tips */}
      <section className="bg-warm-gray py-12">
        <Container>
          <h2 className="text-3xl font-bold mb-8 text-center font-display">
            Dr. Jan's Insider Tips for {community.name}
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold mb-2 font-display">
                Best Time to Buy
              </h3>
              <p className="text-foreground-accent">
                The market in {community.name} tends to be most active in spring
                and fall. However, winter can offer great opportunities for
                motivated buyers.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold mb-2 font-display">
                What to Look For
              </h3>
              <p className="text-foreground-accent">
                When viewing homes in {community.name}, pay attention to HOA
                amenities, proximity to your daily needs, and the overall
                condition of the community.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold mb-2 font-display">
                Selling in {community.name}
              </h3>
              <p className="text-foreground-accent">
                Homes in {community.name} typically sell well when properly
                staged and priced competitively. I can provide a free CMA to
                help you understand your home's value.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Related Communities */}
      {relatedCommunities.length > 0 && (
        <section className="py-12">
          <Container>
            <h2 className="text-3xl font-bold mb-8 text-center font-display">
              Related Communities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedCommunities.map((related) => (
                <Link
                  key={related.slug}
                  href={`/communities/${related.slug}`}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow"
                >
                  <h3 className="font-bold mb-2 font-display hover:text-primary">
                    {related.name}
                  </h3>
                  <p className="text-sm text-foreground-accent mb-2">
                    {related.priceRange}
                  </p>
                  <span className="text-primary text-sm font-semibold">
                    Explore →
                  </span>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      <CTASection
        title={`Thinking About ${community.name}?`}
        description={`Let's find your perfect home in ${community.name}. ${siteDetails.agent.tagline}`}
      />
    </>
  );
}
