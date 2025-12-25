import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogPost from './BlogPost';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Mobile Betting Apps: Best Platforms for Australian Punters | IK118",
  description: "Discover the top mobile betting apps in Australia with IK118's detailed reviews of features, usability, and betting options.",
  keywords: "mobile betting apps, betting apps Australia, mobile sports betting, IK118, betting platforms",
};

export default function MobileBettingAppsPage() {
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
