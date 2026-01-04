import BlogPost from './BlogPost';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Betting Psychology: Master Your Mindset | IK118 Guide',
  description: 'Understand betting psychology with IK118. Learn to control emotions, avoid tilt, and make rational betting decisions.',
  keywords: 'betting psychology, IK118 mindset, emotional control, betting discipline, gambling psychology',
};

export default function BettingPsychologyPage() {
  return <BlogPost />;
}
