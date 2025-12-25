import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogPost from './BlogPost';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Slot Bankroll Management: Protect Your Funds & Play Longer | IK118',
  description: 'Essential bankroll management strategies for slot players. IK118 teaches you how to manage your budget and extend your gaming sessions.',
  keywords: 'slot bankroll management, IK118 money management, slot budget, responsible slot gaming, bankroll strategy, slot betting limits',
};

export default function SlotBankrollManagementPage() {
  return (
    <>
      <Header />
      <BlogPost />
      <Footer />
    </>
  );
}