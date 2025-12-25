import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogPost from './BlogPost';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "European vs American Roulette Comparison | IK118 Expert Analysis",
  description: "Detailed comparison of house edges, betting options, and optimal strategies for European and American roulette variants. IK118's guide for Australian players.",
  keywords: "European roulette, American roulette, roulette comparison, house edge, IK118, Australian casino, live roulette",
};

export default function EuropeanVsAmericanRoulettePage() {
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