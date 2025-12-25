
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import BlogPost from './BlogPost';

export const metadata = {
  title: "Understanding Pokies Volatility: Risk vs Reward Guide | IK118 Expert Analysis",
  description: "Master pokies volatility with IK118's comprehensive guide. Learn to identify high and low volatility games and match them to your bankroll strategy.",
  keywords: "pokies volatility Australia, high volatility slots, low volatility pokies, IK118 volatility guide, pokies risk management, variance explained"
};

export async function generateStaticParams() {
  return [{ slug: 'understanding-volatility' }];
}

export default function VolatilityGuidePage() {
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
