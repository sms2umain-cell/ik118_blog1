import BlogPost from './BlogPost';

export const metadata = {
  title: "Pokies Providers Comparison: Best Game Developers | IK118 Expert Review",
  description: "IK118 compares top pokies providers. Discover which developers create the best games, highest RTPs, and most innovative features.",
  keywords: "pokies providers comparison, best slot developers, game provider review, IK118 pokies guide, top pokies makers"
};

export async function generateStaticParams() {
  return [{ slug: 'providers-comparison-guide' }];
}

export default function ProvidersComparisonPage() {
  return (
    <main>
      <BlogPost />
    </main>
  );
}
