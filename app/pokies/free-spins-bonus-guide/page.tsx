
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import BlogPost from './BlogPost';

export const metadata = {
  title: "Free Spins Bonus Guide: Maximize Your Pokies Rewards | IK118 Expert Tips",
  description: "Unlock the secrets of free spins bonuses with IK118's complete guide. Learn to trigger, maximize and profit from bonus features in Australian pokies.",
  keywords: "free spins pokies Australia, bonus rounds guide, IK118 free spins strategy, pokies bonus features, scatter symbols explained, multiplier bonuses"
};

export async function generateStaticParams() {
  return [{ slug: 'free-spins-bonus-guide' }];
}

export default function FreeSpinsBonusPage() {
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
