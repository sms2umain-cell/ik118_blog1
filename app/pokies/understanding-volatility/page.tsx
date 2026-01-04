import BlogPost from './BlogPost';

export const metadata = {
  title: "Understanding Pokies Volatility: Complete Guide | IK118 Expert Analysis",
  description: "Master pokies volatility with IK118's comprehensive guide. Learn how variance affects your gaming and choose games matching your risk tolerance.",
  keywords: "pokies volatility guide, slot variance explained, IK118 pokies strategy, high volatility pokies, low variance games"
};

export async function generateStaticParams() {
  return [{ slug: 'understanding-volatility' }];
}

export default function UnderstandingVolatilityPage() {
  return (
    <main>
      <BlogPost />
    </main>
  );
}
