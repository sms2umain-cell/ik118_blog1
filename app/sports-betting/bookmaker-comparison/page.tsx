import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogPost from './BlogPost';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bookmaker Comparison: Finding the Best Odds in Australia | IK118",
  description: "IK118's comprehensive comparison of Australian bookmakers, analyzing odds quality, bonuses, and betting features.",
  keywords: "bookmaker comparison, best odds, Australian bookmakers, betting sites, IK118, sports betting",
};

export default function BookmakerComparisonPage() {
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
