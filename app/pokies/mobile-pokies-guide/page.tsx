import BlogPost from './BlogPost';

export const metadata = {
  title: "Mobile Pokies Guide: Play Anywhere | IK118 Expert Tips",
  description: "Master mobile pokies gaming with IK118's comprehensive guide. Learn about apps, browsers, and the best mobile-optimized pokies games.",
  keywords: "mobile pokies guide, pokies apps Australia, mobile casino gaming, IK118 mobile pokies, smartphone pokies"
};

export async function generateStaticParams() {
  return [{ slug: 'mobile-pokies-guide' }];
}

export default function MobilePokiesPage() {
  return (
    <main>
      <BlogPost />
    </main>
  );
}
