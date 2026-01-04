import BlogPost from './BlogPost';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Live Blackjack Strategy: Beat the Dealer | IK118 Guide',
  description: 'Master live blackjack with IK118 expert strategies. Learn basic strategy, card counting basics, and winning tactics.',
  keywords: 'live blackjack strategy, IK118 blackjack, basic strategy, blackjack tips, live dealer blackjack',
};

export default function LiveBlackjackStrategyPage() {
  return <BlogPost />;
}
