import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogPost from './BlogPost';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Live Roulette Betting Systems Analysis | IK118 Mathematical Guide",
  description: "Comprehensive analysis of Martingale, Fibonacci, D'Alembert, and other roulette betting systems. IK118's expert mathematical insights for Australian live casino players.",
  keywords: "live roulette, betting systems, Martingale, Fibonacci, D'Alembert, IK118, roulette strategy, Australian casino",
};

export default function LiveRouletteBettingSystemsPage() {
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