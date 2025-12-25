import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogPost from './BlogPost';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Live Baccarat Banker vs Player Strategy | IK118 Expert Guide",
  description: "Statistical analysis and optimal betting strategies for live baccarat. IK118's comprehensive guide to banker vs player decisions and pattern recognition for Australian players.",
  keywords: "live baccarat, banker vs player, baccarat strategy, pattern recognition, IK118, Australian casino, live dealer baccarat",
};

export default function LiveBaccaratStrategyPage() {
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