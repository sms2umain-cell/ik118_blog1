import BlogPost from './BlogPost';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cricket Betting Masterclass: Expert Strategies | IK118',
  description: 'Master cricket betting with IK118 comprehensive guide. Learn winning strategies for Test, ODI, and T20 cricket.',
  keywords: 'cricket betting, IK118 cricket tips, Test cricket betting, T20 betting, cricket strategies',
};

export default function CricketBettingMasterclassPage() {
  return <BlogPost />;
}
