import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogPost from './BlogPost';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Top Slot Providers 2025: NetEnt, Pragmatic Play & More | IK118',
  description: 'IK118 compares leading slot providers. Discover which developers create the best games, features, and winning opportunities.',
  keywords: 'slot providers, IK118 game developers, NetEnt, Pragmatic Play, slot software, best slot developers, game providers 2025',
};

export default function SlotProvidersComparisonPage() {
  return (
    <>
      <Header />
      <BlogPost />
      <Footer />
    </>
  );
}