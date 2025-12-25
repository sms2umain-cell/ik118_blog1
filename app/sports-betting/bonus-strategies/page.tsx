import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogPost from './BlogPost';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bonus Betting Strategies: Maximizing Promotions | IK118",
  description: "Learn how to extract maximum value from bookmaker bonuses and promotions with IK118's expert bonus hunting strategies.",
  keywords: "bonus betting, promotions, free bets, bookmaker bonuses, IK118, betting offers",
};

export default function BonusStrategiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <BlogPost />
      </main>
      <Footer />
    </div>
  );
}
