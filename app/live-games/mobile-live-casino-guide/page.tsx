import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogPost from './BlogPost';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Mobile Live Casino Gaming Guide | IK118 Optimization Tips",
  description: "Optimize your mobile live dealer experience with device recommendations and connectivity tips. IK118's complete mobile gaming guide for Australian players.",
  keywords: "mobile live casino, mobile gaming, live dealer mobile, smartphone casino, IK118, Australian casino, mobile optimization",
};

export default function MobileLiveCasinoGuidePage() {
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