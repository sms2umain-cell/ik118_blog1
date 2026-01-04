import BlogPost from './BlogPost';

export const metadata = {
  title: "Themed Pokies Guide: Best Games by Category | IK118 Expert Reviews",
  description: "Explore themed pokies with IK118's comprehensive guide. Discover the best games across adventure, mythology, movies, and more categories.",
  keywords: "themed pokies guide, pokies by theme, branded slots, IK118 pokies reviews, best themed games"
};

export async function generateStaticParams() {
  return [{ slug: 'themed-pokies-guide' }];
}

export default function ThemedPokiesPage() {
  return (
    <main>
      <BlogPost />
    </main>
  );
}
