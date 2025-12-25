
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import BlogPost from './BlogPost';

export const metadata = {
  title: "Australian Pokies Providers Comparison: Aristocrat vs Microgaming vs NetEnt | IK118",
  description: "Compare Australia's top pokies providers with IK118's comprehensive analysis. Discover which developers create the best games for Australian players.",
  keywords: "Aristocrat vs Microgaming, NetEnt pokies Australia, pokies providers comparison, IK118 provider guide, Australian slot developers, best pokies makers"
};

export async function generateStaticParams() {
  return [{ slug: 'providers-comparison-guide' }];
}

export default function ProvidersComparisonPage() {
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
