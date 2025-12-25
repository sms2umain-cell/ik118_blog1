import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogPost from './BlogPost';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Tennis Betting Guide: Grand Slam and ATP Strategies | IK118",
  description: "IK118's comprehensive tennis betting strategies covering Grand Slams, ATP Tour, and live betting techniques for maximum profit.",
  keywords: "tennis betting, Grand Slam betting, ATP betting, tennis tips, Australian Open, IK118, sports betting",
};

export default function TennisBettingGuidePage() {
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
