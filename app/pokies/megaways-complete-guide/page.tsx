import BlogPost from './BlogPost';

export const metadata = {
  title: "Megaways Pokies Complete Guide: How They Work | IK118 Expert Analysis",
  description: "Master Megaways pokies with IK118's complete guide. Learn how this revolutionary mechanic works and discover the best Megaways games.",
  keywords: "Megaways pokies guide, Megaways slots explained, IK118 pokies strategy, BTG Megaways, best Megaways games"
};

export async function generateStaticParams() {
  return [{ slug: 'megaways-complete-guide' }];
}

export default function MegawaysGuidePage() {
  return (
    <main>
      <BlogPost />
    </main>
  );
}
