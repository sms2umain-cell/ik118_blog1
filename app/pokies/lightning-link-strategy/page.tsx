import BlogPost from './BlogPost';

export const metadata = {
  title: "Lightning Link Pokies Strategy Guide | IK118 Expert Tips",
  description: "Master Lightning Link pokies with IK118's comprehensive strategy guide. Learn how to maximize Hold & Spin features and trigger jackpots.",
  keywords: "Lightning Link strategy, Lightning Link pokies, Aristocrat pokies guide, IK118 pokies tips, Hold and Spin strategy"
};

export async function generateStaticParams() {
  return [{ slug: 'lightning-link-strategy' }];
}

export default function LightningLinkPage() {
  return (
    <main>
      <BlogPost />
    </main>
  );
}
