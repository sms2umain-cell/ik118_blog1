import { Metadata } from 'next';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import BlogPost from './BlogPost';

export const metadata: Metadata = {
  title: 'Pokies Psychology: Understanding Player Behavior and Addiction | IK118',
  description: 'IK118\'s comprehensive analysis of pokies psychology, addiction warning signs, and responsible gaming practices for Australian players.',
};

export default function PsychologyResponsibleGamingPage() {
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