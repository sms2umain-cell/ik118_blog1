import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogPost from './BlogPost';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Understanding Slot Volatility: Low, Medium & High Variance | IK118',
  description: 'Master slot volatility with IK118. Learn how variance affects your gameplay and choose the right slots for your bankroll and playing style.',
  keywords: 'slot volatility, slot variance, IK118 slots, low volatility slots, high volatility slots, slot risk levels, variance guide',
};

export default function SlotVolatilityGuidePage() {
  return (
    <>
      <Header />
      <BlogPost />
      <Footer />
    </>
  );
}