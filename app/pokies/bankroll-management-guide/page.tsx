import BlogPost from './BlogPost';

export const metadata = {
  title: "Pokies Bankroll Management: Complete Strategy Guide | IK118 Expert Tips",
  description: "Master pokies bankroll management with IK118's comprehensive guide. Learn proven strategies to extend your gaming sessions and protect your budget.",
  keywords: "pokies bankroll management, slot machine budget, gambling money management, IK118 pokies strategy, responsible gaming Australia"
};

export async function generateStaticParams() {
  return [{ slug: 'bankroll-management-guide' }];
}

export default function BankrollManagementPage() {
  return (
    <main>
      <BlogPost />
    </main>
  );
}
