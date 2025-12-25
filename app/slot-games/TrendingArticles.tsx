'use client';

import { useState } from 'react';

export default function TrendingArticles() {
  const [email, setEmail] = useState('');

  const trendingArticles = [
    {
      rank: 1,
      title: 'Progressive Jackpot Slots Guide',
      views: '15.2K',
      trend: 'up',
      link: '/slot-games/progressive-jackpot-slots-guide'
    },
    {
      rank: 2,
      title: 'High RTP Slots 2025',
      views: '12.8K',
      trend: 'up',
      link: '/slot-games/high-rtp-slots-2025'
    },
    {
      rank: 3,
      title: 'Megaways Slots Strategy',
      views: '11.5K',
      trend: 'up',
      link: '/slot-games/megaways-slots-strategy'
    },
    {
      rank: 4,
      title: 'Slot Bonus Features Explained',
      views: '10.3K',
      trend: 'same',
      link: '/slot-games/slot-bonus-features-explained'
    },
    {
      rank: 5,
      title: 'Slot Volatility Guide',
      views: '9.7K',
      trend: 'down',
      link: '/slot-games/slot-volatility-guide'
    }
  ];

  const quickTips = [
    'Always check the RTP before playing',
    'Set a budget and stick to it',
    'Try free demos before real money play',
    'Understand volatility levels',
    'Take advantage of casino bonuses'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setEmail('');
    alert('Thank you for subscribing to IK118 Slot Games updates!');
  };

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-gray-900">
                  <i className="ri-fire-line text-orange-500 mr-3"></i>
                  Trending This Week
                </h2>
                <span className="text-sm text-gray-500">Updated Daily</span>
              </div>

              <div className="space-y-4">
                {trendingArticles.map((article) => (
                  <a
                    key={article.rank}
                    href={article.link}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 group border border-transparent hover:border-purple-200"
                  >
                    <div className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl font-bold text-xl ${
                      article.rank === 1 ? 'bg-gradient-to-br from-yellow-400 to-orange-500 text-white' :
                      article.rank === 2 ? 'bg-gradient-to-br from-gray-300 to-gray-400 text-white' :
                      article.rank === 3 ? 'bg-gradient-to-br from-orange-400 to-orange-600 text-white' :
                      'bg-gray-100 text-gray-600'
                    }`}>
                      {article.rank}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors truncate">
                        {article.title}
                      </h3>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-sm text-gray-500 flex items-center gap-1">
                          <i className="ri-eye-line"></i>
                          {article.views} views
                        </span>
                        {article.trend === 'up' && (
                          <span className="text-xs text-green-600 flex items-center gap-1">
                            <i className="ri-arrow-up-line"></i>
                            Trending
                          </span>
                        )}
                        {article.trend === 'down' && (
                          <span className="text-xs text-red-600 flex items-center gap-1">
                            <i className="ri-arrow-down-line"></i>
                            Falling
                          </span>
                        )}
                      </div>
                    </div>

                    <i className="ri-arrow-right-line text-xl text-gray-400 group-hover:text-purple-600 group-hover:translate-x-2 transition-all duration-300"></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 text-white shadow-lg">
              <div className="w-14 h-14 flex items-center justify-center bg-white/20 rounded-xl mb-6">
                <i className="ri-lightbulb-line text-3xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">IK118 Expert Tips</h3>
              <p className="text-purple-100 mb-6 leading-relaxed">
                Get exclusive slot gaming insights and strategies from our team of professional players and industry experts.
              </p>
              <a
                href="/slot-games"
                className="inline-flex items-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-xl font-semibold hover:bg-purple-50 transition-all duration-300 whitespace-nowrap"
              >
                View All Guides
                <i className="ri-arrow-right-line"></i>
              </a>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <i className="ri-flashlight-line text-yellow-500"></i>
                Quick Tips
              </h3>
              <ul className="space-y-3">
                {quickTips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700">
                    <i className="ri-checkbox-circle-fill text-green-500 text-xl flex-shrink-0 mt-0.5"></i>
                    <span className="leading-relaxed">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white shadow-lg">
              <h3 className="text-xl font-bold mb-3">Stay Updated</h3>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                Subscribe to receive the latest slot game reviews, strategies, and exclusive IK118 bonuses.
              </p>
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 whitespace-nowrap"
                >
                  Subscribe Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}