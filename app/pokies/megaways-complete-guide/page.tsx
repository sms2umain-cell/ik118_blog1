import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import MegawaysBlogPost from './BlogPost';

export const metadata = {
  title: "Megaways Pokies Complete Guide: 117,649 Ways to Win - IK118 Expert Analysis",
  description: "Master Megaways pokies technology with IK118's comprehensive guide. Learn mechanics, strategies, and top games for Australian players seeking maximum winning potential.",
  keywords: "Megaways pokies guide, IK118 Megaways analysis, 117649 ways to win, Big Time Gaming slots, Bonanza slot strategy, Extra Chilli pokies, cascading reels",
  authors: [{ name: "James Thompson - IK118 Gaming Specialist" }],
  openGraph: {
    title: "Megaways Pokies: Complete Guide to 117,649 Ways to Win - IK118",
    description: "Comprehensive analysis of Megaways technology, mechanics, and winning strategies by IK118 gaming experts.",
    url: "https://www.ik118.net/pokies/megaways-complete-guide/",
    images: [{
      url: "https://readdy.ai/api/search-image?query=Megaways%20pokies%20showcase%20with%20variable%20reel%20heights%2C%20cascading%20symbols%2C%20117649%20ways%20counter%2C%20modern%20slot%20interface%20with%20IK118%20branding%20and%20gaming%20technology&width=1200&height=630&seq=megaways-og-001&orientation=landscape",
      width: 1200,
      height: 630,
      alt: "Megaways Pokies Complete Guide"
    }]
  }
};

export async function generateStaticParams() {
  return [
    { slug: 'megaways-complete-guide' }
  ];
}

export default function MegawaysGuidePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-4">
          <MegawaysBlogPost />
        </div>
      </main>
      <Footer />
    </div>
  );
}