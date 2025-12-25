import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogPost from './BlogPost';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Live Game Shows Strategy Guide | IK118 Expert Analysis",
  description: "Winning strategies for Monopoly Live, Crazy Time, Dream Catcher, and other live game shows. IK118's comprehensive guide for Australian players.",
  keywords: "live game shows, Monopoly Live, Crazy Time, Dream Catcher, IK118, game show strategy, Australian casino",
};

export default function LiveGameShowsStrategyPage() {
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