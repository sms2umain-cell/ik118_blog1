import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogPost from './BlogPost';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Slot Bonus Features Explained: Free Spins, Multipliers & More | IK118',
  description: 'Unlock the secrets of slot bonus features at IK118. Comprehensive guide to free spins, multipliers, wilds, scatters, and special bonus rounds.',
  keywords: 'slot bonus features, free spins, multipliers, wild symbols, scatter symbols, IK118 slots, bonus rounds, slot features guide',
};

export default function SlotBonusFeaturesExplainedPage() {
  return (
    <>
      <Header />
      <BlogPost />
      <Footer />
    </>
  );
}