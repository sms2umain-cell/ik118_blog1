import { Metadata } from 'next';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import BlogPost from './BlogPost';

export const metadata: Metadata = {
  title: 'Cluster Pays Pokies: New Ways to Win Big | IK118 Gaming Guide',
  description: 'Discover the innovative cluster pays mechanism with IK118\'s comprehensive guide to games, strategies, and maximum winning potential.',
};

export default function ClusterPaysPage() {
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