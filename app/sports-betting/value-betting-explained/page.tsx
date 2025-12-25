import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogPost from './BlogPost';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Value Betting Explained: Finding Profitable Opportunities | IK118",
  description: "Discover how to identify value bets with IK118's mathematical approach to odds analysis and expected value calculations.",
  keywords: "value betting, expected value, odds analysis, betting strategy, IK118, profitable betting",
};

export default function ValueBettingExplainedPage() {
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
