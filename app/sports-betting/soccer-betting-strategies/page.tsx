import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogPost from './BlogPost';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Soccer Betting Strategies: Premier League and A-League Tips | IK118",
  description: "Learn advanced soccer betting techniques from IK118 experts, covering both international leagues and Australian A-League matches.",
  keywords: "soccer betting, football betting, Premier League betting, A-League tips, IK118, sports betting Australia",
};

export default function SoccerBettingStrategiesPage() {
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
