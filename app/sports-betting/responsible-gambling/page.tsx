import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogPost from './BlogPost';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Responsible Gambling: Setting Limits and Staying Safe | IK118",
  description: "IK118's essential guide to responsible gambling practices, self-exclusion options, and recognizing problem gambling signs.",
  keywords: "responsible gambling, gambling limits, self-exclusion, problem gambling, IK118, safe betting",
};

export default function ResponsibleGamblingPage() {
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
