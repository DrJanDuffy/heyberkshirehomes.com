import { MetadataRoute } from 'next';
import { siteDetails } from '@/data/siteDetails';
import { communities } from '@/data/communities';
import { getAll55PlusCommunities } from '@/lib/communities';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteDetails.siteUrl;
  const now = new Date();

  // Static pages - ordered by priority
  const staticPages: MetadataRoute.Sitemap = [
    // Homepage - highest priority
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    // High-priority market segment pages
    {
      url: `${baseUrl}/luxury-homes`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/55-plus-living`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/new-construction`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/sell-your-home`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/communities`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Medium-priority pages
    {
      url: `${baseUrl}/investors`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Lower-priority but important pages
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/divorce-real-estate`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/probate-real-estate`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  // Community pages - all communities with appropriate priorities
  const communityPages: MetadataRoute.Sitemap = communities.map((community) => {
    // Higher priority for luxury and popular communities
    let priority = 0.8;
    if (community.category === 'luxury') {
      priority = 0.85;
    } else if (community.category === '55plus') {
      priority = 0.85;
    }

    return {
      url: `${baseUrl}/communities/${community.slug}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority,
    };
  });

  // Detailed 55+ community pages - high priority for SEO
  const detailed55PlusPages: MetadataRoute.Sitemap = getAll55PlusCommunities().map((community) => {
    return {
      url: `${baseUrl}/communities/${community.slug}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.9, // High priority for detailed 55+ community pages
    };
  });

  return [...staticPages, ...communityPages, ...detailed55PlusPages];
}
