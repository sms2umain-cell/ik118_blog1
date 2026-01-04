import BlogPost from './BlogPost';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Horse Racing Form Guide: Read the Form | IK118 Expert Tips',
  description: 'Master horse racing form analysis with IK118. Learn to read form guides and make informed betting decisions.',
  keywords: 'horse racing form, IK118 racing tips, form guide, horse betting, racing analysis',
};

export default function HorseRacingFormGuidePage() {
  return <BlogPost />;
}
