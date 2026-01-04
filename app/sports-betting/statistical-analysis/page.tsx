import BlogPost from './BlogPost';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Statistical Analysis for Betting: Data-Driven Wins | IK118',
  description: 'Master statistical analysis with IK118. Learn to use data and analytics for smarter betting decisions.',
  keywords: 'betting statistics, IK118 data analysis, sports analytics, betting data, statistical betting',
};

export default function StatisticalAnalysisPage() {
  return <BlogPost />;
}
