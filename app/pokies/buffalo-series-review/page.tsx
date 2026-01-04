import BlogPost from './BlogPost';

export const metadata = {
  title: "Buffalo Pokies Series Complete Review | IK118 Expert Analysis",
  description: "IK118's comprehensive review of the Buffalo pokies series. Discover why these Aristocrat games remain Australia's most popular pokies franchise.",
  keywords: "Buffalo pokies review, Buffalo Gold slots, Aristocrat Buffalo series, IK118 pokies guide, Buffalo pokies strategy"
};

export async function generateStaticParams() {
  return [{ slug: 'buffalo-series-review' }];
}

export default function BuffaloSeriesPage() {
  return (
    <main>
      <BlogPost />
    </main>
  );
}
