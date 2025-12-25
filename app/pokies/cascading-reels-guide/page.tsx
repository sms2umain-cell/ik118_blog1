import { Metadata } from 'next';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import BlogPost from './BlogPost';

export const metadata: Metadata = {
  title: 'Cascading Reels and Avalanche Features: Multiplying Wins | IK118 Pokies Guide',
  description: 'Learn how cascading reel mechanics work and discover the best avalanche feature pokies with IK118\'s technical analysis and strategies.',
};

export default function CascadingReelsPage() {
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