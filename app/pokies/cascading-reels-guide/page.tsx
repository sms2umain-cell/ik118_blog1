import BlogPost from './BlogPost';

export const metadata = {
  title: "Cascading Reels Pokies Guide: How They Work | IK118 Expert Analysis",
  description: "Master cascading reels pokies with IK118's complete guide. Learn how avalanche features work and discover the best cascading pokies games.",
  keywords: "cascading reels pokies, avalanche slots, tumbling reels guide, IK118 pokies strategy, cascading wins"
};

export async function generateStaticParams() {
  return [{ slug: 'cascading-reels-guide' }];
}

export default function CascadingReelsPage() {
  return (
    <main>
      <BlogPost />
    </main>
  );
}
