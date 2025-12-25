import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogPost from './BlogPost';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "VIP Live Casino Tables and Benefits | IK118 Exclusive Guide",
  description: "Exclusive benefits, higher limits, and premium experiences at VIP live dealer tables. IK118's comprehensive VIP guide for Australian high rollers.",
  keywords: "VIP live casino, high roller tables, VIP benefits, premium gaming, IK118, Australian casino, exclusive tables",
};

export default function VIPLiveCasinoTablesPage() {
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