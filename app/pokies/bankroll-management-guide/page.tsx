
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import BlogPost from './BlogPost';

export const metadata = {
  title: "Pokies Bankroll Management: Protect Your Funds Like a Pro | IK118 Strategy",
  description: "Master professional bankroll management with IK118's comprehensive pokies strategy guide. Learn to set limits, manage risks, and play responsibly.",
  keywords: "pokies bankroll management, gambling budget Australia, IK118 money management, pokies strategy guide, responsible gambling tips, betting limits"
};

export async function generateStaticParams() {
  return [{ slug: 'bankroll-management-guide' }];
}

export default function BankrollManagementPage() {
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
