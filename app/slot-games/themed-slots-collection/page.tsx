import BlogPost from './BlogPost';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Themed Slots Collection: Best Games by Category | IK118',
  description: 'Explore themed slots with IK118. Discover the best games across adventure, mythology, movies, and more categories.',
  keywords: 'themed slots, IK118 slot themes, adventure slots, mythology slots, movie slots, themed games',
};

export default function ThemedSlotsCollectionPage() {
  return <BlogPost />;
}
