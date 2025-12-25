import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogPost from './BlogPost';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Cricket Betting Masterclass: Test, ODI and T20 Strategies | IK118",
  description: "Master cricket betting with IK118's comprehensive guide covering Test matches, ODI, T20, and Big Bash League strategies with expert analysis and tips.",
  keywords: "cricket betting, Test cricket betting, T20 betting, Big Bash betting, cricket tips, IK118, sports betting Australia",
};

export default function CricketBettingMasterclassPage() {
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
