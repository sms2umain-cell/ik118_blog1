import BlogPost from './BlogPost';

export const metadata = {
  title: "Bonus Buy Feature Analysis: Is It Worth It? | IK118 Expert Guide",
  description: "IK118 analyzes pokies bonus buy features. Learn the mathematics, strategies, and whether purchasing bonus rounds offers value for Australian players.",
  keywords: "bonus buy pokies, feature buy slots, bonus purchase analysis, IK118 pokies strategy, buy bonus rounds"
};

export async function generateStaticParams() {
  return [{ slug: 'bonus-buy-analysis' }];
}

export default function BonusBuyAnalysisPage() {
  return (
    <main>
      <BlogPost />
    </main>
  );
}
