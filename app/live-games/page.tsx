
import { Metadata } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import LiveGamesHero from './LiveGamesHero';
import ArticleGrid from './ArticleGrid';
import TrendingArticles from './TrendingArticles';
import LiveGamesNewsletter from './LiveGamesNewsletter';

export const metadata: Metadata = {
  title: 'Live Casino Games Guides & Strategies | IK118 Australia',
  description: 'Expert live casino guides covering blackjack, roulette, baccarat, and poker. Learn winning strategies, dealer etiquette, and bankroll management.',
  keywords: 'live casino, live dealer games, live blackjack, live roulette, live baccarat, live poker, casino strategies',
  openGraph: {
    title: 'Live Casino Games Guides & Strategies | IK118 Australia',
    description: 'Expert live casino guides and strategies for Australian players.',
    url: 'https://www.ik118.net/live-games',
    type: 'website',
  },
};

export default function LiveGamesPage() {
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
        "name": "Live Games",
        "item": `${siteUrl}/live-games`
      }
    ]
  };

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Live Casino Games Guides & Strategies",
    "description": "Expert live casino guides and strategies for Australian players.",
    "url": `${siteUrl}/live-games`
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
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
        <LiveGamesHero />
        <ArticleGrid />
        <TrendingArticles />
        <LiveGamesNewsletter />
      </main>
      <Footer />
    </div>
  );
}