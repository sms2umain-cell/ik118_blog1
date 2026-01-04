import BlogPost from './BlogPost';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Slot Myths Debunked: Separating Fact from Fiction | IK118',
  description: 'IK118 debunks common slot myths with facts. Learn the truth about hot/cold machines, RTP, and winning strategies.',
  keywords: 'slot myths, IK118 facts, gambling myths, slot truth, casino myths debunked, slot misconceptions',
};

export default function SlotMythsDebunkedPage() {
  return <BlogPost />;
}
