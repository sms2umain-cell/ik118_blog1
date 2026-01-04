import BlogPost from './BlogPost';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bookmaker Comparison: Find the Best Odds | IK118 Guide',
  description: 'Compare top bookmakers with IK118. Discover which sportsbooks offer the best odds, markets, and features.',
  keywords: 'bookmaker comparison, IK118 sportsbooks, best betting sites, odds comparison, bookmaker review',
};

export default function BookmakerComparisonPage() {
  return <BlogPost />;
}
