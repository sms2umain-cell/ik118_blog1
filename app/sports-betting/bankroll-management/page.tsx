import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogPost from './BlogPost';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bankroll Management: Protect Your Betting Funds | IK118",
  description: "IK118's essential guide to bankroll management, staking plans, and risk management strategies for sustainable sports betting success.",
  keywords: "bankroll management, staking plans, betting strategy, risk management, IK118, sports betting",
};

export default function BankrollManagementPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <BlogPost />
      </main>
      <Footer />
    </div>
  );
}
