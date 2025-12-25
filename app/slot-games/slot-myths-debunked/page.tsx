import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogPost from './BlogPost';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Slot Machine Myths Debunked: Facts vs Fiction | IK118',
  description: 'IK118 separates fact from fiction. Debunking common slot myths about hot/cold machines, timing, and winning patterns.',
  keywords: 'slot myths, IK118 facts, slot machine myths, gambling myths, slot misconceptions, slot truth, debunked myths',
};

export default function SlotMythsDebunkedPage() {
  return (
    <>
      <Header />
      <BlogPost />
      <Footer />
    </>
  );
}