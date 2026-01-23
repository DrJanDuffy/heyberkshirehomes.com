# Sitemap Summary - HeyBerkshireHomes.com

## Sitemap Configuration

**Base URL:** `https://www.heyberkshirehomes.com`  
**Sitemap URL:** `https://www.heyberkshirehomes.com/sitemap.xml`  
**Robots.txt:** `https://www.heyberkshirehomes.com/robots.txt`

## Total Pages in Sitemap

**Approximately 25+ URLs** including:

### Static Pages (11 pages)

1. **Homepage** - Priority 1.0
   - URL: `https://www.heyberkshirehomes.com/`
   - Change Frequency: Weekly

2. **High-Priority Market Segments** (Priority 0.9)
   - `/luxury-homes`
   - `/55-plus-living`
   - `/new-construction`
   - `/sell-your-home`
   - `/communities`

3. **Medium-Priority Pages** (Priority 0.8)
   - `/investors`
   - `/about`

4. **Lower-Priority Pages** (Priority 0.7)
   - `/contact`
   - `/divorce-real-estate`
   - `/probate-real-estate`

### Community Pages (14+ pages)

All communities from `src/data/communities.ts`:

**Luxury Communities** (Priority 0.85):
- `/communities/the-ridges`
- `/communities/the-summit`
- `/communities/red-rock-country-club`
- `/communities/summerlin-west`

**55+ Communities** (Priority 0.85):
- `/communities/sun-city-summerlin`
- `/communities/sun-city-aliante`
- `/communities/del-webb`
- `/communities/heritage-stonebridge`

**Family Communities** (Priority 0.8):
- `/communities/skye-canyon`
- `/communities/centennial-hills`
- `/communities/the-vistas`
- `/communities/henderson`

**Other Areas** (Priority 0.8):
- `/communities/north-las-vegas`
- `/communities/las-vegas-strip-condos`

## Sitemap Features

✅ **All URLs use www subdomain**  
✅ **Proper priority hierarchy** (Homepage = 1.0, high-value pages = 0.9, etc.)  
✅ **Appropriate change frequencies** (Weekly for dynamic content, monthly for static)  
✅ **Includes lastModified dates**  
✅ **Dynamic generation** - Automatically includes all communities from data file

## Robots.txt Configuration

- Allows all search engines to crawl the site
- Blocks `/api/`, `/admin/`, and `/_next/` directories
- Specific rules for Googlebot and Bingbot
- Points to sitemap at `/sitemap.xml`

## Next Steps

1. **After Deployment:**
   - Visit: `https://www.heyberkshirehomes.com/sitemap.xml`
   - Verify all URLs are present and use www subdomain
   - Check that priorities and change frequencies are correct

2. **Submit to Search Engines:**
   - **Google Search Console:**
     - Add property: `https://www.heyberkshirehomes.com`
     - Go to Sitemaps section
     - Submit: `https://www.heyberkshirehomes.com/sitemap.xml`
   
   - **Bing Webmaster Tools:**
     - Add site: `https://www.heyberkshirehomes.com`
     - Submit sitemap URL

3. **Verify Indexing:**
   - Use Google Search Console to monitor indexing status
   - Check that all community pages are being indexed
   - Monitor for any crawl errors

4. **Canonical URLs:**
   - Ensure all pages use www as canonical
   - Set up redirect from non-www to www (if needed)
   - Can be done in Vercel or via DNS/hosting settings

## Sitemap Validation

After deployment, validate your sitemap using:
- **Google Search Console:** Sitemaps section
- **XML Sitemap Validator:** https://www.xml-sitemaps.com/validate-xml-sitemap.html
- **Screaming Frog:** SEO spider tool

## Expected Sitemap Structure

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.heyberkshirehomes.com/</loc>
    <lastmod>2025-01-22</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <!-- ... more URLs ... -->
</urlset>
```

---

**Last Updated:** January 22, 2025  
**Status:** ✅ Ready for deployment
