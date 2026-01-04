import BlogPost from './BlogPost';

export const metadata = {
  title: "Psychology of Pokies & Responsible Gaming | IK118 Expert Guide",
  description: "Understand pokies psychology with IK118's responsible gaming guide. Learn how games are designed and how to maintain healthy gaming habits.",
  keywords: "pokies psychology, responsible gaming, gambling psychology, IK118 responsible pokies, healthy gaming habits"
};

export async function generateStaticParams() {
  return [{ slug: 'psychology-responsible-gaming' }];
}

export default function PsychologyResponsiblePage() {
  return (
    <main>
      <BlogPost />
    </main>
  );
}
