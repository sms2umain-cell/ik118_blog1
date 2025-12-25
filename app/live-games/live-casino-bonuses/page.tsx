import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogPost from './BlogPost';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Live Casino Bonuses and Wagering Requirements | IK118 Guide",
  description: "Navigate live casino bonus terms, contribution rates, and optimal bonus utilization strategies. IK118's expert bonus guide for Australian players.",
  keywords: "live casino bonuses, wagering requirements, bonus terms, live dealer bonuses, IK118, Australian casino, bonus strategy",
};

export default function LiveCasinoBonusesPage() {
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