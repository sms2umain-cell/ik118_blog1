import { Metadata } from 'next';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import BlogPost from './BlogPost';

export const metadata: Metadata = {
  title: 'Pokies Tournament Strategy: Winning Competitive Gaming Events | IK118',
  description: 'IK118\'s comprehensive guide to pokies tournament strategy, competitive gaming tactics, and maximizing your chances in tournament play.',
};

export default function TournamentStrategyPage() {
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