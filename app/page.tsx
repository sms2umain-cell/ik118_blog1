
import HeroSection from '../components/HeroSection';
import GameCategories from '../components/GameCategories';
import FeaturedContent from '../components/FeaturedContent';
import NewsletterSection from '../components/NewsletterSection';

export default function HomePage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.ik118.net';
  
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "IK118",
    "url": siteUrl,
    "description": "Australia's Premier Casino & Gaming Information Hub",
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${siteUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "IK118",
    "url": siteUrl,
    "logo": "https://ik118.net/media/a5beea7efb776a8bb36ad.png",
    "description": "Your trusted source for casino gaming information, pokies strategies, and expert analysis in Australia.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "AU"
    }
  };

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <main>
        <HeroSection />
        <GameCategories />
        <FeaturedContent />
        <NewsletterSection />
      </main>
    </div>
  );
}
