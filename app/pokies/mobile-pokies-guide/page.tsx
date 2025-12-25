
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import BlogPost from './BlogPost';

export const metadata = {
  title: "Mobile Pokies Guide: Best Apps & Mobile Casinos 2024 | IK118 Reviews",
  description: "Discover the best mobile pokies apps and casinos with IK118's comprehensive 2024 guide. Expert reviews of iOS and Android pokies platforms.",
  keywords: "mobile pokies Australia, pokies apps 2024, mobile casino Australia, IK118 mobile guide, iPhone pokies, Android pokies apps"
};

export async function generateStaticParams() {
  return [{ slug: 'mobile-pokies-guide' }];
}

export default function MobilePokiesPage() {
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
