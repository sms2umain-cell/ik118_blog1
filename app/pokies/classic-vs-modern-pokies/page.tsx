
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import BlogPost from './BlogPost';

export const metadata = {
  title: "Classic vs Modern Pokies: Complete Comparison Guide | IK118 Expert Analysis",
  description: "Discover the differences between classic and modern pokies with IK118's comprehensive guide. Learn which style suits your playing preferences and budget.",
  keywords: "classic pokies vs modern, traditional pokies Australia, video pokies comparison, IK118 pokies guide, 3-reel vs 5-reel slots"
};

export async function generateStaticParams() {
  return [{ slug: 'classic-vs-modern-pokies' }];
}

export default function ClassicVsModernPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <BlogPost />
      </main>
      <Footer />
    </div>
  );
}
