import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogPost from './BlogPost';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Multi Bets and Parlays: Maximizing Your Returns | IK118",
  description: "Learn how to construct profitable multi bets with IK118's expert analysis of correlation, odds calculation, and risk assessment.",
  keywords: "multi bets, parlays, accumulator betting, betting strategy, IK118, sports betting",
};

export default function MultiBetsParlaysPage() {
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
