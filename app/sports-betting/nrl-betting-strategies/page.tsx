import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogPost from './BlogPost';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "NRL Betting Strategies: How to Beat the Bookmakers | IK118",
  description: "Master NRL betting with IK118's proven strategies. Learn line betting, player props, statistical analysis, and live betting techniques for rugby league success.",
  keywords: "NRL betting, rugby league betting, NRL tips, line betting, player props, IK118, sports betting Australia",
};

export default function NRLBettingStrategiesPage() {
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
