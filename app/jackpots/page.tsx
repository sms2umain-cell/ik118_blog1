import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Progressive Jackpots & Mega Wins | IK118 Australia',
  description: 'Chase life-changing progressive jackpots. Track current jackpot amounts, winning strategies, and the biggest jackpot games in Australia.',
  keywords: 'progressive jackpots, mega jackpots, jackpot slots, Mega Moolah, Divine Fortune, jackpot wins',
  openGraph: {
    title: 'Progressive Jackpots & Mega Wins | IK118 Australia',
    description: 'Chase life-changing progressive jackpots with expert tips and strategies.',
    url: 'https://ik118.online/jackpots',
    type: 'website',
  },
};

export default function JackpotsPage() {
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
        "name": "Jackpots",
        "item": `${siteUrl}/jackpots`
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="relative bg-gradient-to-r from-amber-600 to-amber-500 text-white py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Progressive Jackpots</h1>
            <p className="text-xl text-amber-100 mb-8">
              Chase life-changing wins with Australia's biggest progressive jackpot games
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl shadow-lg p-8 text-white mb-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Current Mega Jackpots</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-2">Mega Moolah</h3>
                  <div className="text-4xl font-bold mb-2">$12,458,392</div>
                  <p className="text-amber-100">Last won 3 days ago</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-2">Divine Fortune</h3>
                  <div className="text-4xl font-bold mb-2">$8,234,567</div>
                  <p className="text-amber-100">Last won 1 week ago</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-2">Hall of Gods</h3>
                  <div className="text-4xl font-bold mb-2">$6,789,123</div>
                  <p className="text-amber-100">Last won 5 days ago</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl mb-4">
                <i className="ri-trophy-line text-3xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-3">Mega Jackpots</h3>
              <p className="text-gray-600 mb-4">Multi-million dollar progressive jackpots that can change your life forever</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-2"></i>
                  Mega Moolah Series
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-2"></i>
                  Divine Fortune Network
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-2"></i>
                  Hall of Gods
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl mb-4">
                <i className="ri-money-dollar-circle-line text-3xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-3">Daily Jackpots</h3>
              <p className="text-gray-600 mb-4">Guaranteed to drop every day with better odds of winning</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-2"></i>
                  Must Drop Daily
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-2"></i>
                  Hourly Jackpots
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-2"></i>
                  Red Tiger Daily Drops
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Top Progressive Jackpot Games</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: 'Mega Moolah', amount: '$12.4M', provider: 'Microgaming' },
                { name: 'Divine Fortune', amount: '$8.2M', provider: 'NetEnt' },
                { name: 'Hall of Gods', amount: '$6.7M', provider: 'NetEnt' },
                { name: 'Arabian Nights', amount: '$4.5M', provider: 'NetEnt' },
                { name: 'Major Millions', amount: '$3.8M', provider: 'Microgaming' },
                { name: 'King Cashalot', amount: '$2.9M', provider: 'Microgaming' }
              ].map((game, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 hover:border-amber-500 transition-colors">
                  <h4 className="text-xl font-bold text-blue-900 mb-2">{game.name}</h4>
                  <div className="text-2xl font-bold text-amber-600 mb-2">{game.amount}</div>
                  <p className="text-gray-600 text-sm">{game.provider}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Jackpot Winning Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="w-8 h-8 flex items-center justify-center bg-amber-500 rounded-lg mr-4 flex-shrink-0">
                  <i className="ri-lightbulb-line text-white"></i>
                </div>
                <div>
                  <h4 className="font-bold text-blue-900 mb-2">Bet Maximum</h4>
                  <p className="text-gray-600">Most progressive jackpots require maximum bet to qualify for the grand prize</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 flex items-center justify-center bg-amber-500 rounded-lg mr-4 flex-shrink-0">
                  <i className="ri-time-line text-white"></i>
                </div>
                <div>
                  <h4 className="font-bold text-blue-900 mb-2">Timing Matters</h4>
                  <p className="text-gray-600">Play when jackpots are at their highest for maximum value</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 flex items-center justify-center bg-amber-500 rounded-lg mr-4 flex-shrink-0">
                  <i className="ri-wallet-line text-white"></i>
                </div>
                <div>
                  <h4 className="font-bold text-blue-900 mb-2">Bankroll Management</h4>
                  <p className="text-gray-600">Set a budget and stick to it when chasing progressive jackpots</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 flex items-center justify-center bg-amber-500 rounded-lg mr-4 flex-shrink-0">
                  <i className="ri-star-line text-white"></i>
                </div>
                <div>
                  <h4 className="font-bold text-blue-900 mb-2">Choose Wisely</h4>
                  <p className="text-gray-600">Select games with better odds and more frequent smaller jackpots</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}