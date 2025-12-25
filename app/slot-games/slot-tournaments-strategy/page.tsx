import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogPost from './BlogPost';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Slot Tournaments: Winning Strategies & Competition Tips | IK118',
  description: 'Master slot tournaments with IK118. Learn proven strategies to climb leaderboards and win big prizes in competitive slot gaming.',
  keywords: 'slot tournaments, IK118 tournaments, slot competition, tournament strategy, leaderboard wins, competitive slots, tournament prizes',
};

export default function SlotTournamentsStrategyPage() {
  return (
    <>
      <Header />
      <BlogPost />
      <Footer />
    </>
  );
}