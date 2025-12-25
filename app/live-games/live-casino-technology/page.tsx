import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogPost from './BlogPost';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Live Casino Technology and Streaming Quality | IK118 Technical Guide",
  description: "Understanding HD streaming, multiple camera angles, OCR technology, and gaming infrastructure in live dealer games. IK118's comprehensive technical guide for Australian players.",
  keywords: "live casino technology, HD streaming, OCR technology, live dealer tech, IK118, gaming infrastructure, Australian casino",
};

export default function LiveCasinoTechnologyPage() {
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