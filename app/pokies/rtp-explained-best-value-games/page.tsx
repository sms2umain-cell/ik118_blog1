import BlogPost from './BlogPost';

export const metadata = {
  title: "RTP Explained: Find Best Value Pokies | IK118 Expert Guide",
  description: "Master RTP with IK118's complete guide. Learn how Return to Player works and discover the highest RTP pokies for best value gaming.",
  keywords: "RTP explained, Return to Player pokies, highest RTP games, IK118 pokies guide, best value pokies"
};

export async function generateStaticParams() {
  return [{ slug: 'rtp-explained-best-value-games' }];
}

export default function RTPExplainedPage() {
  return (
    <main>
      <BlogPost />
    </main>
  );
}
