import BlogPost from './BlogPost';

export const metadata = {
  title: "Pokies Tournament Strategy: Win Competitions | IK118 Expert Guide",
  description: "Master pokies tournaments with IK118's complete strategy guide. Learn proven tactics to climb leaderboards and win tournament prizes.",
  keywords: "pokies tournament strategy, slot tournaments guide, IK118 tournament tips, pokies competitions, tournament winning tactics"
};

export async function generateStaticParams() {
  return [{ slug: 'tournament-strategy' }];
}

export default function TournamentStrategyPage() {
  return (
    <main>
      <BlogPost />
    </main>
  );
}
