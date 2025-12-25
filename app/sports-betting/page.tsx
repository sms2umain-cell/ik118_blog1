
import { Metadata } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SportsBettingHero from './SportsBettingHero';
import ArticleGrid from './ArticleGrid';
import SportsBettingNewsletter from './SportsBettingNewsletter';

export const metadata: Metadata = {
  title: 'Sports Betting Guides & Strategies | IK118 Australia',
  description: 'Comprehensive sports betting guides for AFL, NRL, cricket, horse racing, and more. Learn value betting, bankroll management, and winning strategies.',
  keywords: 'sports betting, AFL betting, NRL betting, cricket betting, horse racing, betting strategies, value betting, bankroll management',
  openGraph: {
    title: 'Sports Betting Guides & Strategies | IK118 Australia',
    description: 'Comprehensive sports betting guides and strategies for Australian players.',
    url: 'https://www.ik118.net/sports-betting',
    type: 'website',
  },
};

export default function SportsBettingPage() {
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
        "name": "Sports Betting",
        "item": `${siteUrl}/sports-betting`
      }
    ]
  };

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Sports Betting Guides & Strategies",
    "description": "Comprehensive sports betting guides and strategies for Australian players.",
    "url": `${siteUrl}/sports-betting`
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <Header />
      <main>
        <SportsBettingHero />
        <ArticleGrid />
        <SportsBettingNewsletter />
      </main>
      <Footer />
    </div>
  );
}