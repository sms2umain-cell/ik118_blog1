import BlogPost from './BlogPost';

export const metadata = {
  title: "Pokies Myths Debunked: Separating Fact from Fiction | IK118 Truth",
  description: "IK118 debunks common pokies myths with facts and evidence. Learn the truth about hot/cold machines, RTP, and winning strategies.",
  keywords: "pokies myths debunked, slot machine facts, gambling misconceptions, IK118 pokies truth, pokies reality"
};

export async function generateStaticParams() {
  return [{ slug: 'myths-debunked' }];
}

export default function MythsDebunkedPage() {
  return (
    <main>
      <BlogPost />
    </main>
  );
}
