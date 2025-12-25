import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogPost from './BlogPost';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Live Blackjack Side Bets Analysis | IK118 Mathematical Guide",
  description: "Mathematical analysis of Perfect Pairs, 21+3, and other popular live blackjack side bets. IK118's expert guide for Australian players.",
  keywords: "blackjack side bets, Perfect Pairs, 21+3, live blackjack, IK118, side bet strategy, Australian casino",
};

export default function LiveBlackjackSideBetsPage() {
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