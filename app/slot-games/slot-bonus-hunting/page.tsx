import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogPost from './BlogPost';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Slot Bonus Hunting: Maximize Casino Promotions & Offers | IK118',
  description: 'Master bonus hunting with IK118. Learn how to find and maximize casino bonuses, free spins, and promotional offers for slots.',
  keywords: 'bonus hunting, IK118 bonuses, casino promotions, free spins offers, slot bonuses, promotional hunting, casino deals',
};

export default function SlotBonusHuntingPage() {
  return (
    <>
      <Header />
      <BlogPost />
      <Footer />
    </>
  );
}