import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogPost from './BlogPost';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Esports Betting Guide: CS:GO, Dota 2 and League of Legends | IK118",
  description: "IK118's comprehensive esports betting guide covering major titles, tournament strategies, and team analysis.",
  keywords: "esports betting, CS:GO betting, Dota 2 betting, League of Legends, IK118, gaming betting",
};

export default function EsportsBettingGuidePage() {
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
