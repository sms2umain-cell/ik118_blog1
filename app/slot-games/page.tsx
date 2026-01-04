import { Metadata } from 'next';
import SlotGamesHero from './SlotGamesHero';
import ArticleGrid from './ArticleGrid';
import SlotGamesNewsletter from './SlotGamesNewsletter';

export const metadata: Metadata = {
  title: 'Slot Games Guides & Strategies | IK118 Australia',
  description: 'Expert slot games guides, strategies, and reviews. Learn about Megaways, progressive jackpots, RTP, volatility, and winning strategies.',
  keywords: 'slot games, online slots, Megaways slots, progressive jackpots, slot strategies, RTP, volatility, bonus features',
  openGraph: {
    title: 'Slot Games Guides & Strategies | IK118 Australia',
    description: 'Expert slot games guides, strategies, and reviews for Australian players.',
    url: 'https://www.ik118.net/slot-games',
    type: 'website',
  },
};

export default function SlotGamesPage() {
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
        "name": "Slot Games",
        "item": `${siteUrl}/slot-games`
      }
    ]
  };

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Slot Games Guides & Strategies",
    "description": "Expert slot games guides, strategies, and reviews for Australian players.",
    "url": `${siteUrl}/slot-games`
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
        <SlotGamesHero />
        <ArticleGrid />
        <SlotGamesNewsletter />
      </main>
    </div>
  );
}