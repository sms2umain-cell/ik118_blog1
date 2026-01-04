import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gaming Strategies & Expert Tips | IK118 Australia',
  description: 'Master casino games with proven strategies. Expert tips for blackjack, roulette, baccarat, pokies, sports betting, and bankroll management.',
  keywords: 'gaming strategies, casino strategies, blackjack strategy, roulette systems, baccarat strategy, bankroll management',
  openGraph: {
    title: 'Gaming Strategies & Expert Tips | IK118 Australia',
    description: 'Master casino games with proven strategies and expert tips.',
    url: 'https://www.ik118.net/strategies',
    type: 'website',
  },
};

export default function StrategiesPage() {
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
        "name": "Strategies",
        "item": `${siteUrl}/strategies`
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="relative bg-gradient-to-r from-purple-900 to-purple-700 text-white py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Gaming Strategies</h1>
            <p className="text-xl text-purple-100 mb-8">
              Master your favorite casino games with proven strategies and expert tips
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl mb-4">
                <i className="ri-vip-crown-line text-3xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-3">Blackjack Strategy</h3>
              <p className="text-gray-600 mb-4">Learn basic strategy, card counting, and advanced techniques</p>
              <a
                href="https://t.ly/ik118Blog"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 font-semibold hover:text-purple-700 transition-colors whitespace-nowrap cursor-pointer"
              >
                Learn More →
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-red-500 to-red-600 rounded-xl mb-4">
                <i className="ri-refresh-line text-3xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-3">Roulette Systems</h3>
              <p className="text-gray-600 mb-4">Explore Martingale, Fibonacci, and other betting systems</p>
              <a
                href="/live-games/live-roulette-betting-systems"
                className="text-purple-600 font-semibold hover:text-purple-700 transition-colors whitespace-nowrap cursor-pointer"
              >
                Learn More →
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-green-500 to-green-600 rounded-xl mb-4">
                <i className="ri-trophy-line text-3xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-3">Baccarat Strategy</h3>
              <p className="text-gray-600 mb-4">Master pattern recognition and betting strategies</p>
              <a
                href="/live-games/live-baccarat-strategy"
                className="text-purple-600 font-semibold hover:text-purple-700 transition-colors whitespace-nowrap cursor-pointer"
              >
                Learn More →
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl mb-4">
                <i className="ri-gamepad-line text-3xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-3">Pokies Strategy</h3>
              <p className="text-gray-600 mb-4">Maximize your pokies play with RTP and volatility knowledge</p>
              <a
                href="/pokies/complete-strategy-guide"
                className="text-purple-600 font-semibold hover:text-purple-700 transition-colors whitespace-nowrap cursor-pointer"
              >
                Learn More →
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl mb-4">
                <i className="ri-football-line text-3xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-3">Sports Betting</h3>
              <p className="text-gray-600 mb-4">Value betting, bankroll management, and statistical analysis</p>
              <a
                href="/sports-betting/value-betting-explained"
                className="text-purple-600 font-semibold hover:text-purple-700 transition-colors whitespace-nowrap cursor-pointer"
              >
                Learn More →
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl mb-4">
                <i className="ri-wallet-line text-3xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-3">Bankroll Management</h3>
              <p className="text-gray-600 mb-4">Essential money management strategies for all games</p>
              <a
                href="/sports-betting/bankroll-management"
                className="text-purple-600 font-semibold hover:text-purple-700 transition-colors whitespace-nowrap cursor-pointer"
              >
                Learn More →
              </a>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Strategy Fundamentals</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">House Edge Understanding</h3>
                <p className="text-gray-600 mb-4">
                  Every casino game has a built-in house edge. Understanding this mathematical advantage helps you choose games with better odds and make informed betting decisions.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-600 mr-2"></i>
                    Blackjack: 0.5% (with basic strategy)
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-600 mr-2"></i>
                    Baccarat: 1.06% (banker bet)
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-600 mr-2"></i>
                    European Roulette: 2.7%
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">Bankroll Management</h3>
                <p className="text-gray-600 mb-4">
                  Proper bankroll management is crucial for long-term success. Set limits, divide your bankroll appropriately, and never chase losses.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-600 mr-2"></i>
                    Set daily/weekly/monthly limits
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-600 mr-2"></i>
                    Use 1-5% of bankroll per bet
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-600 mr-2"></i>
                    Track wins and losses
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl shadow-lg p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Improve Your Game?</h2>
            <p className="text-xl mb-6">Join IK118 and access our complete strategy guides and expert tips</p>
            <a
              href="https://t.ly/ik118Blog"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors whitespace-nowrap cursor-pointer"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}