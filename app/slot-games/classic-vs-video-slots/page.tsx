import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogPost from './BlogPost';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Classic Slots vs Video Slots: Which Should You Play? | IK118',
  description: 'IK118 compares classic 3-reel slots with modern video slots. Understand the differences and choose the best type for your preferences.',
  keywords: 'classic slots, video slots, IK118 slot comparison, 3-reel slots, 5-reel slots, slot types, traditional vs modern slots',
};

export default function ClassicVsVideoSlotsPage() {
  return (
    <>
      <Header />
      <BlogPost />
      <Footer />
    </>
  );
}