import { Metadata } from 'next';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import BlogPost from './BlogPost';

export const metadata: Metadata = {
  title: 'Bonus Buy Features: Are They Worth Your Money? | IK118 Analysis',
  description: 'IK118 analyzes bonus buy options in modern pokies, calculating expected value and providing strategic advice for Australian players.',
};

export default function BonusBuyPage() {
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