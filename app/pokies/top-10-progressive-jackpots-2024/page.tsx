import BlogPost from './BlogPost';

export const metadata = {
  title: "Top 10 Progressive Jackpot Pokies 2024 | IK118 Expert Rankings",
  description: "Discover the top 10 progressive jackpot pokies of 2024 with IK118. Find the biggest jackpots, best odds, and most exciting progressive games.",
  keywords: "progressive jackpot pokies 2024, biggest jackpots Australia, IK118 pokies rankings, top progressive slots, mega jackpots"
};

export async function generateStaticParams() {
  return [{ slug: 'top-10-progressive-jackpots-2024' }];
}

export default function TopProgressiveJackpotsPage() {
  return (
    <main>
      <BlogPost />
    </main>
  );
}
