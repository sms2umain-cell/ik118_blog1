import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogPost from './BlogPost';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Megaways Slots Strategy: Mastering 117,649 Ways to Win | IK118',
  description: 'Complete Megaways slots strategy guide from IK118. Learn how to maximize wins on Bonanza, Extra Chilli, and other popular Megaways games.',
  keywords: 'Megaways slots, Megaways strategy, IK118 Megaways, Bonanza slot, Extra Chilli, 117649 ways to win, cascading reels, Megaways guide',
};

export default function MegawaysSlotsStrategyPage() {
  return (
    <>
      <Header />
      <BlogPost />
      <Footer />
    </>
  );
}