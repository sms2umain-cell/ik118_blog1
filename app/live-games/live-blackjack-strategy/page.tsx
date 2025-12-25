import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogPost from './BlogPost';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Live Blackjack Complete Strategy Guide | IK118 Expert Analysis",
  description: "Master live dealer blackjack with IK118's comprehensive strategy guide. Learn basic strategy, card counting, dealer interaction tactics, and bankroll management for Australian players.",
  keywords: "live blackjack strategy, card counting, basic strategy, live dealer blackjack, IK118, blackjack tips, Australian casino",
};

export default function LiveBlackjackStrategyPage() {
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