import BlogPost from './BlogPost';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AFL Betting Guide: Expert Tips & Strategies | IK118',
  description: 'Master AFL betting with IK118 comprehensive guide. Learn winning strategies, market analysis, and expert tips for Australian Football.',
  keywords: 'AFL betting, IK118 AFL tips, Australian Football betting, AFL strategies, footy betting guide',
};

export default function AFLBettingGuidePage() {
  return <BlogPost />;
}
