import { Metadata } from 'next';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import BlogPost from './BlogPost';

export const metadata: Metadata = {
  title: 'VIP Programs Guide: Maximizing Casino Rewards and Benefits | IK118',
  description: 'IK118\'s comprehensive guide to casino VIP programs, loyalty rewards, and maximizing benefits from your pokies gaming activities.',
};

export default function VIPProgramsPage() {
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