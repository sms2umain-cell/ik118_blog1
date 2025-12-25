import { Metadata } from 'next';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import BlogPost from './BlogPost';

export const metadata: Metadata = {
  title: 'Buffalo Gold and Buffalo Series: Complete Game Analysis | IK118 Review',
  description: 'IK118\'s detailed analysis of Aristocrat\'s Buffalo series including Buffalo Gold, Diamond, and Link games with strategies and RTP data.',
};

export default function BuffaloSeriesPage() {
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