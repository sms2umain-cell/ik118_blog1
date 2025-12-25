import { Metadata } from 'next';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import BlogPost from './BlogPost';

export const metadata: Metadata = {
  title: 'Themed Pokies Guide: Movies, TV Shows, and Pop Culture | IK118',
  description: 'IK118 explores branded pokies featuring popular themes, licensing deals, and how entertainment franchises translate to gaming success.',
};

export default function ThemedPokiesPage() {
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