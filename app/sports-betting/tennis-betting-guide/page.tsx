import BlogPost from './BlogPost';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tennis Betting Guide: Win on the Court | IK118 Strategies',
  description: 'Master tennis betting with IK118 comprehensive guide. Learn strategies for Grand Slams, ATP, and WTA tournaments.',
  keywords: 'tennis betting, IK118 tennis tips, Grand Slam betting, ATP betting, WTA betting, tennis strategies',
};

export default function TennisBettingGuidePage() {
  return <BlogPost />;
}
