import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogPost from './BlogPost';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mobile Slots Guide: Best Games & Optimization Tips 2025 | IK118',
  description: 'Complete mobile slots guide from IK118. Discover the best mobile-optimized slots and tips for seamless gaming on smartphones and tablets.',
  keywords: 'mobile slots, IK118 mobile gaming, smartphone slots, tablet slots, mobile casino games, mobile slot optimization, best mobile slots',
};

export default function MobileSlotsOptimizationPage() {
  return (
    <>
      <Header />
      <BlogPost />
      <Footer />
    </>
  );
}