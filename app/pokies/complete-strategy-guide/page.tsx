import { Metadata } from 'next';
import { Suspense } from 'react';
import CompleteGuideContent from './CompleteGuideContent';

export const metadata: Metadata = {
  title: 'Complete Pokies Strategy Guide 2024 | IK118 Gaming Experts',
  description: 'Comprehensive pokies strategy guide covering advanced techniques, bankroll management, and winning strategies. Expert insights from IK118 gaming professionals.',
  keywords: 'complete pokies guide, advanced pokies strategies, professional gaming tips, IK118 pokies guide, Australian pokies strategies',
  openGraph: {
    title: 'Complete Pokies Strategy Guide 2024 | IK118 Gaming Experts',
    description: 'Master advanced pokies strategies with our comprehensive guide. Expert techniques from IK118 professionals.',
    type: 'article',
  },
};

export default function CompleteStrategyGuidePage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <CompleteGuideContent />
    </Suspense>
  );
}