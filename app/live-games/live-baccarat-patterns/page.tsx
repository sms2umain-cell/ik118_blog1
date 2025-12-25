import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogPost from './BlogPost';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Live Baccarat Pattern Recognition | IK118 Strategy Guide",
  description: "Understanding scorecards, trends, and pattern betting strategies in live baccarat games. IK118's expert pattern recognition guide for Australian players.",
  keywords: "baccarat patterns, scorecard reading, pattern betting, live baccarat, IK118, trend analysis, Australian casino",
};

export default function LiveBaccaratPatternsPage() {
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