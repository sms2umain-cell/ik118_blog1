import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import BlogPost from './BlogPost';

export const metadata = {
  title: "Top 10 Progressive Jackpot Pokies Australia 2024 - IK118 Expert Rankings",
  description: "IK118's comprehensive review of Australia's best progressive jackpot pokies in 2024. Expert analysis of RTP rates, volatility, and winning strategies for Australian players.",
  keywords: "progressive jackpot pokies Australia, IK118 pokies review, best pokies 2024, Lightning Link Dragon Link, Buffalo Gold Revolution, Queen of the Nile II",
  authors: [{ name: "Sarah Mitchell - IK118 Gaming Expert" }],
  openGraph: {
    title: "Top 10 Progressive Jackpot Pokies Australia 2024 - IK118",
    description: "Expert rankings and reviews of Australia's most rewarding progressive jackpot pokies by IK118 gaming specialists.",
    url: "https://www.ik118.net/pokies/best-pokies-2024/",
    images: [{
      url: "https://readdy.ai/api/search-image?query=Top%20progressive%20jackpot%20pokies%20collage%20featuring%20Lightning%20Link%20Dragon%20symbols%2C%20Buffalo%20Gold%20coins%2C%20Queen%20of%20Nile%20pyramids%20with%20IK118%20branding%20and%20casino%20environment&width=1200&height=630&seq=best-pokies-og-001&orientation=landscape",
      width: 1200,
      height: 630,
      alt: "Top Progressive Jackpot Pokies Australia 2024"
    }]
  }
};

export async function generateStaticParams() {
  return [
    { slug: 'best-pokies-2024' }
  ];
}

export default function BestPokies2024Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-4">
          <BlogPost />
        </div>
      </main>
      <Footer />
    </div>
  );
}