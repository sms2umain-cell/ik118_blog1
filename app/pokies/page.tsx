import { Metadata } from 'next';
import PokiesHero from './PokiesHero';
import ArticleGrid from './ArticleGrid';
import PokiesNewsletter from './PokiesNewsletter';

export const metadata: Metadata = {
  title: 'Pokies Guides & Strategies | IK118 Australia',
  description: 'Comprehensive pokies guides, strategies, and tips for Australian players. Learn about RTP, volatility, bonus features, and winning strategies.',
  keywords: 'pokies, Australian pokies, pokies strategies, pokies guides, RTP, volatility, bonus features, progressive jackpots',
  openGraph: {
    title: 'Pokies Guides & Strategies | IK118 Australia',
    description: 'Comprehensive pokies guides, strategies, and tips for Australian players.',
    url: 'https://www.ik118.net/pokies',
    type: 'website',
  },
};

export default function PokiesPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.ik118.net';
  
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Pokies",
        "item": `${siteUrl}/pokies`
      }
    ]
  };

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Pokies Guides & Strategies",
    "description": "Comprehensive pokies guides, strategies, and tips for Australian players.",
    "url": `${siteUrl}/pokies`
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <main>
        <PokiesHero />
        <ArticleGrid />
        <PokiesNewsletter />
      </main>
    </div>
  );
}