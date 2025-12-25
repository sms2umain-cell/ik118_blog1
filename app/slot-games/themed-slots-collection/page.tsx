import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogPost from './BlogPost';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Themed Slots: Adventure, Fantasy, Egyptian & More | IK118',
  description: 'Explore the best themed slot games at IK118. From ancient Egypt to outer space, discover immersive slots for every interest.',
  keywords: 'themed slots, IK118 slot themes, adventure slots, fantasy slots, Egyptian slots, themed casino games, slot categories',
};

export default function ThemedSlotsCollectionPage() {
  return (
    <>
      <Header />
      <BlogPost />
      <Footer />
    </>
  );
}