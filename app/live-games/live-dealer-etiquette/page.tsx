import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogPost from './BlogPost';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Live Dealer Etiquette and Best Practices | IK118 Professional Guide",
  description: "Essential etiquette rules, chat protocols, and professional conduct for live casino gaming. IK118's comprehensive guide for Australian players.",
  keywords: "live dealer etiquette, casino etiquette, live gaming conduct, chat etiquette, IK118, Australian casino, professional gaming",
};

export default function LiveDealerEtiquettePage() {
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