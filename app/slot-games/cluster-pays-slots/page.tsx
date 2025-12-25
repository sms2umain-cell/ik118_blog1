import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogPost from './BlogPost';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cluster Pays Slots: How They Work & Best Games 2025 | IK118',
  description: 'Discover cluster pays mechanics with IK118. Learn how these innovative slots work and which games offer the best cluster wins.',
  keywords: 'cluster pays slots, IK118 cluster games, cluster mechanics, cluster wins, innovative slots, cluster pays guide',
};

export default function ClusterPaysSlotsPage() {
  return (
    <>
      <Header />
      <BlogPost />
      <Footer />
    </>
  );
}