import BlogPost from './BlogPost';

export const metadata = {
  title: "Cluster Pays Pokies Guide: Complete Strategy | IK118 Expert Tips",
  description: "Learn cluster pays mechanics with IK118's comprehensive guide. Discover how these innovative pokies work and find the best cluster pays games.",
  keywords: "cluster pays pokies, cluster wins slots, IK118 pokies guide, cluster pays strategy, no paylines pokies"
};

export async function generateStaticParams() {
  return [{ slug: 'cluster-pays-guide' }];
}

export default function ClusterPaysPage() {
  return (
    <main>
      <BlogPost />
    </main>
  );
}
