import BlogPost from './BlogPost';

export const metadata = {
  title: "History of Australian Pokies: From Mechanical to Digital | IK118 Complete Guide",
  description: "Explore the fascinating evolution of Australian pokies with IK118. Learn how pokies became Australia's favorite gaming entertainment from the 1950s to today.",
  keywords: "Australian pokies history, pokies evolution Australia, gaming machines history, IK118 pokies guide, Australian gambling history"
};

export async function generateStaticParams() {
  return [{ slug: 'australian-pokies-history' }];
}

export default function AustralianPokiesHistoryPage() {
  return (
    <main>
      <BlogPost />
    </main>
  );
}
