import { Metadata } from 'next';
import { Suspense } from 'react';
import StrategiesContent from './StrategiesContent';

export const metadata: Metadata = {
  title: 'Winning Pokies Strategies | Expert Tips from IK118 Gaming',
  description: 'Master pokies with proven strategies from IK118 experts. Learn bankroll management, RTP analysis, and winning techniques for Australian online pokies games.',
  keywords: 'pokies strategies, slot machine tips, bankroll management, RTP analysis, winning pokies, IK118 gaming strategies',
  openGraph: {
    title: 'Winning Pokies Strategies | Expert Tips from IK118 Gaming',
    description: 'Master pokies with proven strategies from IK118 experts. Learn bankroll management, RTP analysis, and winning techniques.',
    type: 'article',
    images: [{
      url: 'https://readdy.ai/api/search-image?query=Professional%20pokies%20strategy%20guide%20with%20charts%20and%20analytics%2C%20modern%20casino%20gaming%20setup%20with%20strategic%20planning%20elements%2C%20sophisticated%20gaming%20environment&width=1200&height=630&seq=strategies-og-001&orientation=landscape',
      width: 1200,
      height: 630,
    }],
  },
};

export default function StrategiesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <StrategiesContent />
    </Suspense>
  );
}