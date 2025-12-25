import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogPost from './BlogPost';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Live Poker Variants Complete Guide | IK118 Expert Strategies",
  description: "Master Texas Hold'em, Caribbean Stud, and Three Card Poker with IK118's professional strategies for live dealer poker games. Complete guide for Australian players.",
  keywords: "live poker, Texas Hold'em, Caribbean Stud, Three Card Poker, IK118, poker strategy, Australian casino",
};

export default function LivePokerVariantsPage() {
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