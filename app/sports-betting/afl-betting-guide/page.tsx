import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogPost from './BlogPost';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AFL Betting Guide 2025: Expert Tips and Strategies | IK118",
  description: "Master AFL betting with IK118's comprehensive 2025 guide. Learn premiership odds analysis, match betting strategies, player props, and statistical insights for Australian football.",
  keywords: "AFL betting, AFL tips, premiership odds, Australian football betting, IK118, AFL statistics, sports betting Australia",
};

export default function AFLBettingGuidePage() {
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
