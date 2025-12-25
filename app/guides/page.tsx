
import { Metadata } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: 'Casino How-to Guides & Tutorials | IK118 Australia',
  description: 'Comprehensive how-to guides for online casino gaming. Learn account setup, deposits, withdrawals, game rules, and responsible gaming.',
  keywords: 'casino guides, how-to guides, casino tutorials, getting started, account setup, payment methods, game rules',
  openGraph: {
    title: 'Casino How-to Guides & Tutorials | IK118 Australia',
    description: 'Comprehensive how-to guides for online casino gaming in Australia.',
    url: 'https://www.ik118.net/guides',
    type: 'website',
  },
};

export default function GuidesPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.ik118.net';
  
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Guides",
        "item": `${siteUrl}/guides`
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />
      <div className="relative bg-gradient-to-r from-green-900 to-green-700 text-white py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">How-to Guides</h1>
            <p className="text-xl text-green-100 mb-8">
              Comprehensive guides to help you get started and master online casino gaming
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: 'Getting Started Guide',
                description: 'Complete beginner\'s guide to online casino gaming in Australia',
                icon: 'ri-book-open-line',
                color: 'from-blue-500 to-blue-600',
                link: 'https://t.ly/ik118Blog'
              },
              {
                title: 'Account Setup',
                description: 'Step-by-step guide to creating and verifying your casino account',
                icon: 'ri-user-add-line',
                color: 'from-green-500 to-green-600',
                link: 'https://t.ly/ik118Blog'
              },
              {
                title: 'Making Deposits',
                description: 'How to fund your account using various payment methods',
                icon: 'ri-bank-card-line',
                color: 'from-purple-500 to-purple-600',
                link: 'https://t.ly/ik118Blog'
              },
              {
                title: 'Claiming Bonuses',
                description: 'Maximize your bonuses with our comprehensive claiming guide',
                icon: 'ri-gift-line',
                color: 'from-amber-500 to-amber-600',
                link: 'https://t.ly/ik118Blog'
              },
              {
                title: 'Withdrawal Process',
                description: 'Fast and secure methods to cash out your winnings',
                icon: 'ri-money-dollar-circle-line',
                color: 'from-red-500 to-red-600',
                link: 'https://t.ly/ik118Blog'
              },
              {
                title: 'Game Rules',
                description: 'Learn the rules of popular casino games',
                icon: 'ri-gamepad-line',
                color: 'from-pink-500 to-pink-600',
                link: 'https://t.ly/ik118Blog'
              },
              {
                title: 'Mobile Gaming',
                description: 'Play on the go with our mobile casino guide',
                icon: 'ri-smartphone-line',
                color: 'from-indigo-500 to-indigo-600',
                link: 'https://t.ly/ik118Blog'
              },
              {
                title: 'Security & Safety',
                description: 'Protect your account and personal information',
                icon: 'ri-shield-check-line',
                color: 'from-teal-500 to-teal-600',
                link: 'https://t.ly/ik118Blog'
              },
              {
                title: 'Responsible Gaming',
                description: 'Tools and tips for safe and responsible gambling',
                icon: 'ri-heart-line',
                color: 'from-rose-500 to-rose-600',
                link: '/responsible-gaming'
              }
            ].map((guide, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className={`w-16 h-16 flex items-center justify-center bg-gradient-to-br ${guide.color} rounded-xl mb-4`}>
                  <i className={`${guide.icon} text-3xl text-white`}></i>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">{guide.title}</h3>
                <p className="text-gray-600 mb-4">{guide.description}</p>
                <a 
                  href={guide.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 font-semibold hover:text-green-700 transition-colors whitespace-nowrap cursor-pointer"
                >
                  Read Guide →
                </a>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Popular Guides</h2>
            <div className="space-y-6">
              {[
                {
                  title: 'How to Choose the Right Online Casino',
                  description: 'Essential factors to consider when selecting an online casino',
                  readTime: '8 min read',
                  link: 'https://t.ly/ik118Blog'
                },
                {
                  title: 'Understanding Wagering Requirements',
                  description: 'Complete guide to bonus terms and wagering conditions',
                  readTime: '6 min read',
                  link: 'https://t.ly/ik118Blog'
                },
                {
                  title: 'Payment Methods Comparison',
                  description: 'Compare deposit and withdrawal options for Australian players',
                  readTime: '10 min read',
                  link: 'https://t.ly/ik118Blog'
                },
                {
                  title: 'Live Casino Gaming Guide',
                  description: 'Everything you need to know about live dealer games',
                  readTime: '7 min read',
                  link: '/live-games'
                }
              ].map((article, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 hover:border-green-500 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-blue-900 mb-2">{article.title}</h3>
                      <p className="text-gray-600 mb-2">{article.description}</p>
                      <span className="text-sm text-gray-500">{article.readTime}</span>
                    </div>
                    <a
                      href={article.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-4 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer"
                    >
                      Read Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl shadow-lg p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Need Help?</h2>
            <p className="text-xl mb-6">Can't find what you're looking for? Contact our support team</p>
            <a
              href="/contact"
              className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors whitespace-nowrap cursor-pointer"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}