import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogPost from './BlogPost';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Spins Strategy: Maximizing Your Bonus Rounds | IK118',
  description: 'Optimize your free spins with IK118 strategies. Learn how to trigger more bonus rounds and maximize wins during free spins features.',
  keywords: 'free spins strategy, IK118 bonus rounds, free spins tips, bonus optimization, slot free spins, maximize free spins',
};

export default function SlotFreeSpinsStrategyPage() {
  return (
    <>
      <Header />
      <BlogPost />
      <Footer />
    </>
  );
}