import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import BlogPost from './BlogPost';

export const metadata = {
  title: "RTP Explained: Finding the Best Value Pokies Games | IK118 Expert Analysis",
  description: "Master RTP rates with IK118's comprehensive guide. Discover which Australian pokies offer the best value and learn how to identify high-return games.",
  keywords: "RTP pokies Australia, return to player explained, best value pokies, IK118 RTP analysis, high RTP slots Australia, pokies odds explained"
};

export default function RTPExplainedPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <BlogPost />
      </main>
      <Footer />
    </div>
  );
}