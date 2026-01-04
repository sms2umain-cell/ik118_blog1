import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Casino Reviews & Ratings | IK118 Australia',
  description: 'Honest, detailed reviews of Australia\'s top online casinos. Expert ratings, bonus comparisons, and comprehensive casino evaluations.',
  keywords: 'casino reviews, online casino ratings, casino comparison, best Australian casinos, casino bonuses',
  openGraph: {
    title: 'Casino Reviews & Ratings | IK118 Australia',
    description: 'Honest, detailed reviews of Australia\'s top online casinos by expert team.',
    url: 'https://www.ik118.net/reviews',
    type: 'website',
  },
};

export default function ReviewsPage() {
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
        "name": "Reviews",
        "item": `${siteUrl}/reviews`
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Casino Reviews</h1>
            <p className="text-xl text-blue-100 mb-8">
              Honest, detailed reviews of Australia's top online casinos by our expert team
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Top Rated Casinos 2025</h2>
            <div className="space-y-6">
              {[
                { name: 'Royal Vegas Casino', rating: 9.5, bonus: '$1,200 Welcome Bonus', games: '700+' },
                { name: 'Jackpot City', rating: 9.3, bonus: '$1,600 Welcome Package', games: '600+' },
                { name: 'Spin Casino', rating: 9.2, bonus: '$1,000 Welcome Bonus', games: '550+' },
                { name: 'Ruby Fortune', rating: 9.0, bonus: '$750 Welcome Bonus', games: '500+' },
                { name: 'PlayAmo Casino', rating: 8.9, bonus: '$1,500 + 150 Free Spins', games: '800+' }
              ].map((casino, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 hover:border-blue-500 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-2xl font-bold text-blue-900 mb-2">{casino.name}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span className="flex items-center">
                          <i className="ri-star-fill text-amber-500 mr-1"></i>
                          {casino.rating}/10
                        </span>
                        <span>{casino.games} Games</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-amber-600 mb-2">{casino.bonus}</div>
                      <a
                        href="https://t.ly/ik118Blog"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer"
                      >
                        Read Review
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl mb-4">
                <i className="ri-shield-check-line text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Licensed & Safe</h3>
              <p className="text-gray-600">All reviewed casinos are fully licensed and regulated for Australian players</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-green-500 to-green-600 rounded-xl mb-4">
                <i className="ri-money-dollar-circle-line text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Best Bonuses</h3>
              <p className="text-gray-600">Exclusive welcome bonuses and ongoing promotions for our readers</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl mb-4">
                <i className="ri-customer-service-line text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock customer support in multiple languages</p>
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Review Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="w-8 h-8 flex items-center justify-center bg-blue-600 rounded-lg mr-4 flex-shrink-0">
                  <i className="ri-checkbox-circle-line text-white"></i>
                </div>
                <div>
                  <h4 className="font-bold text-blue-900 mb-2">Licensing & Security</h4>
                  <p className="text-gray-600">We verify all licenses and security measures</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 flex items-center justify-center bg-blue-600 rounded-lg mr-4 flex-shrink-0">
                  <i className="ri-gamepad-line text-white"></i>
                </div>
                <div>
                  <h4 className="font-bold text-blue-900 mb-2">Game Selection</h4>
                  <p className="text-gray-600">Testing variety, quality, and provider reputation</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 flex items-center justify-center bg-blue-600 rounded-lg mr-4 flex-shrink-0">
                  <i className="ri-bank-card-line text-white"></i>
                </div>
                <div>
                  <h4 className="font-bold text-blue-900 mb-2">Payment Methods</h4>
                  <p className="text-gray-600">Evaluating deposit and withdrawal options</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 flex items-center justify-center bg-blue-600 rounded-lg mr-4 flex-shrink-0">
                  <i className="ri-gift-line text-white"></i>
                </div>
                <div>
                  <h4 className="font-bold text-blue-900 mb-2">Bonuses & Promotions</h4>
                  <p className="text-gray-600">Analyzing terms, conditions, and value</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}