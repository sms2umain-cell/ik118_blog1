import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogPost from './BlogPost';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bankroll Management for Live Casino Games | IK118 Professional Guide",
  description: "Professional money management strategies specifically designed for live dealer gaming sessions. IK118's expert bankroll management guide for Australian players.",
  keywords: "bankroll management, live casino, money management, betting strategy, IK118, Australian casino, live dealer",
};

export default function LiveCasinoBankrollManagementPage() {
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