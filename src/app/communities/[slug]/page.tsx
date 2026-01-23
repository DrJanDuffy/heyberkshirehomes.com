import { notFound, redirect } from 'next/navigation';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getCommunityData, getAll55PlusCommunities } from '@/lib/communities';
import { getCommunityBySlug, communities } from '@/data/communities';
import CommunityHero from '@/components/communities/CommunityHero';
import CommunityOverview from '@/components/communities/CommunityOverview';
import CommunityListings from '@/components/communities/CommunityListings';
import CommunityAmenities from '@/components/communities/CommunityAmenities';
import CommunityFloorplans from '@/components/communities/CommunityFloorplans';
import CommunityHOA from '@/components/communities/CommunityHOA';
import CommunityMap from '@/components/communities/CommunityMap';
import CommunityFAQ from '@/components/communities/CommunityFAQ';
import CommunityCTA from '@/components/communities/CommunityCTA';
import Container from '@/components/Container';
import RealScoutWidget from '@/components/RealScoutWidget';
import CTASection from '@/components/CTASection';
import SchemaMarkup from '@/components/SchemaMarkup';
import {
  generateBreadcrumbSchema,
  generateRealEstateListingSchema,
  generateOrganizationSchema,
} from '@/lib/schema';
import { siteDetails } from '@/data/siteDetails';

// Combine all community slugs for static generation
export async function generateStaticParams() {
  const detailed55Plus = getAll55PlusCommunities();
  const allCommunities = [
    ...detailed55Plus.map(c => ({ slug: c.slug })),
    ...communities.map(c => ({ slug: c.slug })),
  ];
  return allCommunities;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  
  // Try detailed 55+ community data first
  const detailedCommunity = await getCommunityData(slug);
  if (detailedCommunity) {
    return {
      title: `${detailedCommunity.name} Homes for Sale | 55+ Community Las Vegas | Dr. Jan Duffy`,
      description: `Search ${detailedCommunity.name} homes for sale in ${detailedCommunity.location}. ${detailedCommunity.homeCount} homes, prices from ${detailedCommunity.priceRange}. Expert 55+ community guidance from Dr. Jan Duffy, BHHS Nevada Properties.`,
      keywords: detailedCommunity.seoKeywords.join(', '),
      openGraph: {
        title: `${detailedCommunity.name} Homes for Sale | 55+ Community Las Vegas`,
        description: `${detailedCommunity.tagline}. ${detailedCommunity.homeCount} homes from ${detailedCommunity.priceRange}.`,
        url: `${siteDetails.siteUrl}/communities/${slug}`,
        type: 'website',
      },
    };
  }

  // Fall back to simple community data
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
  
  // Redirect old broken URL to correct page
  if (slug === '55-plus-communities') {
    redirect('/55-plus-living');
  }
  
  // Try detailed 55+ community data first
  const detailedCommunity = await getCommunityData(slug);
  
  if (detailedCommunity) {
    // Use new detailed community components for 55+ communities
    const breadcrumbs = [
      { name: 'Home', url: siteDetails.siteUrl },
      { name: 'Communities', url: `${siteDetails.siteUrl}/communities` },
      { name: detailedCommunity.name, url: `${siteDetails.siteUrl}/communities/${slug}` },
    ];

    return (
      <>
        <SchemaMarkup
          schemas={[
            generateBreadcrumbSchema(breadcrumbs),
            generateRealEstateListingSchema({
              name: `${detailedCommunity.name} Homes for Sale`,
              description: detailedCommunity.overview,
              address: detailedCommunity.locationInfo.address,
              price: detailedCommunity.priceRange,
              url: `${siteDetails.siteUrl}/communities/${slug}`,
            }),
            generateOrganizationSchema(),
          ]}
        />

        <CommunityHero community={detailedCommunity} />
        <CommunityOverview community={detailedCommunity} />
        <CommunityListings community={detailedCommunity} />
        <CommunityAmenities community={detailedCommunity} />
        <CommunityFloorplans community={detailedCommunity} />
        <CommunityHOA community={detailedCommunity} />
        <CommunityMap community={detailedCommunity} />
        <CommunityFAQ community={detailedCommunity} />
        <CommunityCTA community={detailedCommunity} />
      </>
    );
  }

  // Fall back to simple community data for existing communities
  const community = getCommunityBySlug(slug);
  if (!community) {
    notFound();
  }

  // Render simple community page (existing structure)
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
      <section className="relative bg-gradient-to-br from-primary via-primary-light to-primary-dark text-white py-20">
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
              <div className="text-sm text-slate mb-1">Price Range</div>
              <div className="text-xl font-bold text-primary font-display">
                {community.priceRange}
              </div>
            </div>
            <div>
              <div className="text-sm text-slate mb-1">Home Styles</div>
              <div className="text-xl font-bold text-primary font-display">
                {community.homeStyles.length} Types
              </div>
            </div>
            <div>
              <div className="text-sm text-slate mb-1">Year Built</div>
              <div className="text-xl font-bold text-primary font-display">
                {community.yearBuilt}
              </div>
            </div>
            <div>
              <div className="text-sm text-slate mb-1">HOA</div>
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
                <p className="text-slate mb-4">
                  {community.description}
                </p>
                <p className="text-slate mb-4">
                  {community.name} offers a unique lifestyle in the heart of Las
                  Vegas. Whether you're seeking luxury living, family-friendly
                  amenities, or active adult communities, this area has
                  something special to offer.
                </p>
                <p className="text-slate">
                  With {siteDetails.agent.experience} of experience in Las Vegas
                  real estate, I can help you find the perfect home in{' '}
                  {community.name} that matches your lifestyle and budget.
                </p>
              </div>
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden shadow-xl bg-gradient-to-br from-primary/20 to-primary/40">
              {community.image ? (
                <Image
                  src={community.image}
                  alt={`${community.name} community in Las Vegas`}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/30 via-primary/20 to-gold/20">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4">🏘️</div>
                    <div className="text-2xl font-bold font-display">{community.name}</div>
                    <div className="text-sm mt-2 opacity-80">Las Vegas, NV</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* RealScout Widget */}
      <section className="bg-cream py-12">
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
                  <p className="text-sm text-slate mb-2">
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
