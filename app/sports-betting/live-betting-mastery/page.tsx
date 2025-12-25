import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogPost from './BlogPost';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Live Betting Mastery: In-Play Strategies That Work | IK118",
  description: "IK118's advanced guide to live betting, covering momentum shifts, hedging strategies, and real-time decision making.",
  keywords: "live betting, in-play betting, live sports betting, betting strategies, IK118, real-time betting",
};

export default function LiveBettingMasteryPage() {
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
