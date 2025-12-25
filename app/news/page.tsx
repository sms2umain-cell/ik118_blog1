import { Metadata } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: 'Casino Industry News & Updates | IK118 Australia',
  description: 'Latest news from the Australian online casino industry. Stay updated with regulations, new games, technology, and industry trends.',
  keywords: 'casino news, industry news, gambling news, casino regulations, new casino games, Australian casino updates',
  openGraph: {
    title: 'Casino Industry News & Updates | IK118 Australia',
    description: 'Latest news from the Australian online casino industry.',
    url: 'https://www.ik118.net/news',
    type: 'website',
  },
};

export default function NewsPage() {
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
        "name": "News",
        "item": `${siteUrl}/news`
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Industry News</h1>
            <p className="text-xl text-blue-100 mb-8">
              Stay updated with the latest news from the Australian online casino industry
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl shadow-lg p-8 text-white mb-16">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-lg mr-4">
                <i className="ri-fire-line text-3xl"></i>
              </div>
              <div>
                <span className="text-sm font-semibold">BREAKING NEWS</span>
                <h2 className="text-2xl font-bold">New Regulations for Australian Online Casinos Announced</h2>
              </div>
            </div>
            <p className="text-amber-100 mb-4">
              The Australian government has announced new regulations aimed at enhancing player protection and responsible gambling measures across all licensed online casinos.
            </p>
            <a
              href="https://t.ly/ik118Blog"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-amber-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors whitespace-nowrap cursor-pointer"
            >
              Read Full Story
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {[
              {
                category: 'Regulation',
                title: 'New Licensing Requirements for 2025',
                excerpt: 'Updated licensing requirements aim to strengthen player protection and fair gaming standards',
                date: 'January 15, 2025',
                icon: 'ri-shield-check-line',
                link: 'https://t.ly/ik118Blog'
              },
              {
                category: 'Technology',
                title: 'AI-Powered Responsible Gaming Tools',
                excerpt: 'Leading casinos implement advanced AI systems to detect problem gambling patterns',
                date: 'January 12, 2025',
                icon: 'ri-robot-line',
                link: 'https://t.ly/ik118Blog'
              },
              {
                category: 'Games',
                title: 'Top Game Releases This Month',
                excerpt: 'Exciting new pokies and live casino games from leading providers',
                date: 'January 10, 2025',
                icon: 'ri-gamepad-line',
                link: '/pokies'
              },
              {
                category: 'Industry',
                title: 'Australian Online Casino Market Growth',
                excerpt: 'Market analysis shows continued growth in the Australian online gaming sector',
                date: 'January 8, 2025',
                icon: 'ri-line-chart-line',
                link: 'https://t.ly/ik118Blog'
              },
              {
                category: 'Payments',
                title: 'New Payment Methods Available',
                excerpt: 'Cryptocurrency and instant banking options expand for Australian players',
                date: 'January 5, 2025',
                icon: 'ri-bank-card-line',
                link: 'https://t.ly/ik118Blog'
              },
              {
                category: 'Jackpots',
                title: 'Record-Breaking Jackpot Win',
                excerpt: 'Australian player wins $8.5 million on progressive jackpot slot',
                date: 'January 3, 2025',
                icon: 'ri-trophy-line',
                link: 'https://t.ly/ik118Blog'
              }
            ].map((news, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg mr-4">
                    <i className={`${news.icon} text-2xl text-white`}></i>
                  </div>
                  <span className="text-sm font-semibold text-blue-600">{news.category}</span>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">{news.title}</h3>
                <p className="text-gray-600 mb-4">{news.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{news.date}</span>
                  <a
                    href={news.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 font-semibold hover:text-blue-700 transition-colors whitespace-nowrap cursor-pointer"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">Subscribe to Our Newsletter</h2>
            <p className="text-center text-gray-600 mb-6">
              Get the latest casino news, exclusive bonuses, and expert tips delivered to your inbox
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}