import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogPost from './BlogPost';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Advanced Live Poker Tournament Strategies | IK118 Pro Guide",
  description: "Professional tournament tactics for live dealer poker including position play and ICM considerations. IK118's advanced strategy guide for Australian players.",
  keywords: "live poker tournaments, tournament strategy, ICM poker, position play, IK118, Australian casino, professional poker",
};

export default function LivePokerTournamentStrategiesPage() {
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