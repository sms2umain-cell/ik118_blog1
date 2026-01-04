import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Table Games Guides & Strategies | IK118 Australia',
  description: 'Master classic casino table games including blackjack, roulette, baccarat, poker, and more. Expert strategies and comprehensive guides.',
  keywords: 'table games, blackjack, roulette, baccarat, poker, craps, casino games, table game strategies',
  openGraph: {
    title: 'Table Games Guides & Strategies | IK118 Australia',
    description: 'Master classic casino table games with expert strategies and guides.',
    url: 'https://www.ik118.net/table-games',
    type: 'website',
  },
};

export default function TableGamesPage() {
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
        "name": "Table Games",
        "item": `${siteUrl}/table-games`
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Table Games at IK118</h1>
            <p className="text-xl text-blue-100 mb-8">
              Experience the thrill of classic casino table games with expert strategies and comprehensive guides
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl mb-4">
                <i className="ri-vip-crown-line text-3xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-3">Blackjack</h3>
              <p className="text-gray-600 mb-4">Master the art of 21 with our comprehensive blackjack strategies and tips</p>
              <div className="text-sm text-blue-600 font-semibold">15+ Variants Available</div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-red-500 to-red-600 rounded-xl mb-4">
                <i className="ri-refresh-line text-3xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-3">Roulette</h3>
              <p className="text-gray-600 mb-4">Spin the wheel with confidence using proven betting systems and strategies</p>
              <div className="text-sm text-blue-600 font-semibold">European & American</div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-green-500 to-green-600 rounded-xl mb-4">
                <i className="ri-trophy-line text-3xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-3">Baccarat</h3>
              <p className="text-gray-600 mb-4">Learn the elegant game of baccarat with our expert guides and pattern analysis</p>
              <div className="text-sm text-blue-600 font-semibold">Classic & Variants</div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Popular Table Games</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-6 hover:border-blue-500 transition-colors">
                <h4 className="text-xl font-bold text-blue-900 mb-2">Poker Variants</h4>
                <p className="text-gray-600 mb-3">Texas Hold'em, Caribbean Stud, Three Card Poker, and more</p>
                <span className="text-sm text-blue-600 font-semibold">20+ Games</span>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 hover:border-blue-500 transition-colors">
                <h4 className="text-xl font-bold text-blue-900 mb-2">Craps</h4>
                <p className="text-gray-600 mb-3">Master the dice with comprehensive betting strategies</p>
                <span className="text-sm text-blue-600 font-semibold">Multiple Variants</span>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 hover:border-blue-500 transition-colors">
                <h4 className="text-xl font-bold text-blue-900 mb-2">Sic Bo</h4>
                <p className="text-gray-600 mb-3">Ancient Chinese dice game with exciting betting options</p>
                <span className="text-sm text-blue-600 font-semibold">Traditional & Modern</span>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 hover:border-blue-500 transition-colors">
                <h4 className="text-xl font-bold text-blue-900 mb-2">Dragon Tiger</h4>
                <p className="text-gray-600 mb-3">Fast-paced Asian card game with simple rules</p>
                <span className="text-sm text-blue-600 font-semibold">Quick Rounds</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl shadow-lg p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Play Table Games?</h2>
            <p className="text-xl mb-6">Join IK118 today and experience the best table games with expert guidance</p>
            <button className="bg-white text-amber-600 px-8 py-3 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors whitespace-nowrap">
              Start Playing Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}