import BlogPost from './BlogPost';

export const metadata = {
  title: "Free Spins Bonus Guide: Maximize Your Pokies Wins | IK118 Expert Tips",
  description: "Master free spins bonuses with IK118's complete guide. Learn how to trigger, maximize, and choose the best free spins pokies games.",
  keywords: "free spins pokies, bonus spins guide, IK118 pokies strategy, free spins features, pokies bonus rounds"
};

export async function generateStaticParams() {
  return [{ slug: 'free-spins-bonus-guide' }];
}

export default function FreeSpinsBonusPage() {
  return (
    <main>
      <BlogPost />
    </main>
  );
}
