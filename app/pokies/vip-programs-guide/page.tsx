import BlogPost from './BlogPost';

export const metadata = {
  title: "VIP Pokies Programs Guide: Maximize Rewards | IK118 Expert Tips",
  description: "Master casino VIP programs with IK118's complete guide. Learn how to maximize rewards, climb tiers, and unlock exclusive pokies benefits.",
  keywords: "VIP pokies programs, casino loyalty rewards, IK118 VIP guide, pokies rewards programs, casino tier benefits"
};

export async function generateStaticParams() {
  return [{ slug: 'vip-programs-guide' }];
}

export default function VIPProgramsPage() {
  return (
    <main>
      <BlogPost />
    </main>
  );
}
