
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import BlogPost from './BlogPost';

export const metadata = {
  title: "Lightning Link Pokies Strategy: Complete Review & Tips | IK118 Expert Guide",
  description: "Master Lightning Link pokies with IK118's complete strategy guide. Learn winning techniques, bonus features, and expert tips for Australia's favorite game.",
  keywords: "Lightning Link strategy Australia, Lightning Link pokies tips, IK118 Lightning Link guide, Aristocrat pokies strategy, progressive jackpot tips"
};

export async function generateStaticParams() {
  return [{ slug: 'lightning-link-strategy' }];
}

export default function LightningLinkPage() {
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
