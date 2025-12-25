import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogPost from './BlogPost';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Responsible Slot Gaming: Setting Limits & Staying Safe | IK118',
  description: 'IK118 promotes responsible gaming. Essential tips for setting limits, recognizing problem gambling, and enjoying slots safely.',
  keywords: 'responsible gaming, IK118 safe gaming, gambling limits, problem gambling, safe slots, responsible gambling, player protection',
};

export default function ResponsibleSlotGamingPage() {
  return (
    <>
      <Header />
      <BlogPost />
      <Footer />
    </>
  );
}