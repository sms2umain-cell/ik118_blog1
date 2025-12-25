import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogPost from './BlogPost';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Betting Psychology: Controlling Emotions and Avoiding Tilt | IK118",
  description: "Master the mental game of sports betting with IK118's psychological strategies for discipline, patience, and emotional control.",
  keywords: "betting psychology, emotional control, discipline, tilt management, IK118, sports betting mindset",
};

export default function BettingPsychologyPage() {
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
