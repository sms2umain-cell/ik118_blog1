
import { Metadata } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: 'Casino Promotions & Bonuses | IK118 Australia',
  description: 'Exclusive casino promotions and bonuses for Australian players. Welcome bonuses, free spins, cashback offers, and VIP rewards.',
  keywords: 'casino promotions, casino bonuses, welcome bonus, free spins, cashback, VIP rewards, exclusive offers',
  openGraph: {
    title: 'Casino Promotions & Bonuses | IK118 Australia',
    description: 'Exclusive casino promotions and bonuses for Australian players.',
    url: 'https://www.ik118.net/promotions',
    type: 'website',
  },
};

export default function PromotionsPage() {
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
        "name": "Promotions",
        "item": `${siteUrl}/promotions`
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />
      <div className="relative bg-gradient-to-r from-amber-600 to-amber-500 text-white py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Exclusive Promotions</h1>
            <p className="text-xl text-amber-100 mb-8">
              Claim the best bonuses and promotions available for Australian players
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl shadow-lg p-8 text-white mb-16">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 flex items-center justify-center bg-white/20 rounded-xl mr-4">
                <i className="ri-gift-line text-4xl"></i>
              </div>
              <div>
                <span className="text-sm font-semibold">EXCLUSIVE OFFER</span>
                <h2 className="text-3xl font-bold">Welcome Bonus: $1,500 + 150 Free Spins</h2>
              </div>
            </div>
            <p className="text-amber-100 mb-6">
              New players get an incredible welcome package spread across your first three deposits. Plus, enjoy 150 free spins on selected pokies!
            </p>
            <a href="https://t.ly/ik118Blog" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-amber-600 px-8 py-3 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors whitespace-nowrap">
              Claim Now
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {[
              {
                title: 'Weekly Reload Bonus',
                bonus: '50% up to $500',
                description: 'Get a 50% bonus on your deposits every Monday',
                icon: 'ri-refresh-line',
                color: 'from-blue-500 to-blue-600'
              },
              {
                title: 'Free Spins Friday',
                bonus: '100 Free Spins',
                description: 'Claim 100 free spins every Friday on featured games',
                icon: 'ri-gamepad-line',
                color: 'from-purple-500 to-purple-600'
              },
              {
                title: 'Cashback Weekend',
                bonus: '20% Cashback',
                description: 'Get 20% cashback on all losses during weekends',
                icon: 'ri-money-dollar-circle-line',
                color: 'from-green-500 to-green-600'
              },
              {
                title: 'VIP Loyalty Program',
                bonus: 'Exclusive Rewards',
                description: 'Earn points and unlock exclusive VIP benefits',
                icon: 'ri-vip-crown-line',
                color: 'from-amber-500 to-amber-600'
              }
            ].map((promo, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className={`w-16 h-16 flex items-center justify-center bg-gradient-to-br ${promo.color} rounded-xl mb-4`}>
                  <i className={`${promo.icon} text-3xl text-white`}></i>
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-2">{promo.title}</h3>
                <div className="text-3xl font-bold text-amber-600 mb-3">{promo.bonus}</div>
                <p className="text-gray-600 mb-4">{promo.description}</p>
                <a href="https://t.ly/ik118Blog" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors whitespace-nowrap">
                  Learn More
                </a>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Current Promotions</h2>
            <div className="space-y-6">
              {[
                {
                  title: 'New Year Mega Tournament',
                  prize: '$50,000 Prize Pool',
                  ends: 'Ends in 5 days',
                  description: 'Compete against other players for a share of $50,000'
                },
                {
                  title: 'Live Casino Bonus',
                  prize: '25% Bonus',
                  ends: 'Ends in 12 days',
                  description: 'Get 25% extra on all live casino deposits'
                },
                {
                  title: 'Pokies Race',
                  prize: '$10,000 Weekly',
                  ends: 'Resets Weekly',
                  description: 'Climb the leaderboard and win weekly prizes'
                }
              ].map((tournament, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 hover:border-amber-500 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-xl font-bold text-blue-900 mb-2">{tournament.title}</h3>
                      <p className="text-gray-600 mb-2">{tournament.description}</p>
                      <span className="text-sm text-gray-500">{tournament.ends}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-amber-600 mb-2">{tournament.prize}</div>
                      <a href="https://t.ly/ik118Blog" target="_blank" rel="noopener noreferrer" className="inline-block bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors whitespace-nowrap">
                        Join Now
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Bonus Terms & Conditions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
              <div>
                <h4 className="font-bold text-blue-900 mb-2">Wagering Requirements</h4>
                <p className="text-sm">Most bonuses require 35x wagering on bonus amount before withdrawal</p>
              </div>
              <div>
                <h4 className="font-bold text-blue-900 mb-2">Minimum Deposit</h4>
                <p className="text-sm">Minimum deposit of $20 required to claim most promotions</p>
              </div>
              <div>
                <h4 className="font-bold text-blue-900 mb-2">Game Contributions</h4>
                <p className="text-sm">Pokies contribute 100%, table games may contribute less</p>
              </div>
              <div>
                <h4 className="font-bold text-blue-900 mb-2">Expiry Period</h4>
                <p className="text-sm">Bonuses must be used within 30 days of claiming</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}