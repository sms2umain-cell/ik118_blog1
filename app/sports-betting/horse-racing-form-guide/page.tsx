import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogPost from './BlogPost';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Horse Racing Betting: Form Guide and Track Analysis | IK118",
  description: "Master horse racing betting with IK118's expert form analysis, track conditions guide, and proven staking strategies for Australian racing.",
  keywords: "horse racing betting, form guide, track analysis, racing tips, Melbourne Cup, IK118, Australian racing",
};

export default function HorseRacingFormGuidePage() {
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
