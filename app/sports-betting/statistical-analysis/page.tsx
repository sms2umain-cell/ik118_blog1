import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogPost from './BlogPost';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Statistical Analysis for Sports Betting Success | IK118",
  description: "IK118's data-driven approach to sports betting, covering advanced statistics, predictive modeling, and analytical tools.",
  keywords: "statistical analysis, sports analytics, predictive modeling, data-driven betting, IK118, betting statistics",
};

export default function StatisticalAnalysisPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <BlogPost />
      </main>
      <Footer />
    </div>
  );
}
