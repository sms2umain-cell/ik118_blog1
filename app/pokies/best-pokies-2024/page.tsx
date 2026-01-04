import BlogPost from './BlogPost';

export const metadata = {
  title: "Best Pokies 2024: Top Rated Games & Where to Play | IK118 Expert Reviews",
  description: "Discover the best pokies of 2024 with IK118's expert reviews. Find top-rated games, highest RTPs, and biggest jackpots at trusted Australian casinos.",
  keywords: "best pokies 2024, top pokies Australia, highest RTP pokies, IK118 pokies reviews, best online pokies"
};

export async function generateStaticParams() {
  return [{ slug: 'best-pokies-2024' }];
}

export default function BestPokies2024Page() {
  return (
    <main>
      <BlogPost />
    </main>
  );
}
