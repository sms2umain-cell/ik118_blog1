import { Metadata } from 'next';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import BlogPost from './BlogPost';

export const metadata: Metadata = {
  title: 'Australian Pokies History: From Mechanical to Digital Evolution | IK118',
  description: 'Explore the complete history of Australian pokies from 1950s mechanical machines to modern digital gaming with IK118\'s comprehensive timeline.',
};

export default function AustralianPokiesHistoryPage() {
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