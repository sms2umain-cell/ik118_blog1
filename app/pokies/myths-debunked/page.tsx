import { Metadata } from 'next';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import BlogPost from './BlogPost';

export const metadata: Metadata = {
  title: 'Pokies Myths Debunked: Separating Facts from Fiction | IK118',
  description: 'IK118 exposes common pokies myths and misconceptions, providing scientific evidence and mathematical analysis to educate Australian players.',
};

export default function MythsDebunkedPage() {
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