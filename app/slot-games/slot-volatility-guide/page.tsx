import BlogPost from './BlogPost';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Slot Volatility Guide: Choose Your Risk Level | IK118',
  description: 'Understand slot volatility with IK118 complete guide. Learn how variance affects gameplay and choose slots matching your style.',
  keywords: 'slot volatility, IK118 variance guide, high volatility slots, low variance slots, slot risk',
};

export default function SlotVolatilityGuidePage() {
  return <BlogPost />;
}
