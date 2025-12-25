'use client';

import Link from 'next/link';

export default function TrendingArticles() {
  const trendingArticles = [
    {
      title: "Live Blackjack Strategy: Complete Guide to Winning",
      views: "18.5K",
      category: "Strategy Guides",
      href: "/live-games/live-blackjack-strategy"
    },
    {
      title: "European vs American Roulette: Which Offers Better Odds?",
      views: "14.2K",
      category: "Game Comparison",
      href: "/live-games/european-vs-american-roulette"
    },
    {
      title: "Live Baccarat Patterns: Reading the Shoe Like a Pro",
      views: "11.8K",
      category: "Advanced Tactics",
      href: "/live-games/live-baccarat-patterns"
    },
    {
      title: "Live Casino Bankroll Management: Essential Tips",
      views: "9.3K",
      category: "Money Management",
      href: "/live-games/live-casino-bankroll-management"
    },
    {
      title: "VIP Live Casino Tables: Exclusive High-Stakes Gaming",
      views: "8.7K",
      category: "VIP Gaming",
      href: "/live-games/vip-live-casino-tables"
    }
  ];

  const quickTips = [
    {
      tip: "Always choose European roulette over American for better odds",
      icon: "ri-record-circle-fill"
    },
    {
      tip: "Learn basic blackjack strategy before playing live tables",
      icon: "ri-playing-card-fill"
    },
    {
      tip: "Set session limits and stick to your bankroll plan",
      icon: "ri-shield-check-fill"
    },
    {
      tip: "Practice dealer etiquette for a better gaming experience",
      icon: "ri-user-smile-fill"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-8">
              <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center mr-3">
                <i className="ri-fire-fill text-white text-lg"></i>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Trending This Week</h2>
            </div>

            <div className="space-y-6">
              {trendingArticles.map((article, index) => (
                <Link 
                  key={index}
                  href={article.href}
                  className="group flex items-center p-6 bg-gray-50 hover:bg-blue-50 rounded-2xl transition-all duration-300 cursor-pointer"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform">
                    <span className="text-white font-bold text-lg">#{index + 1}</span>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-full mr-3">
                        {article.category}
                      </span>
                      <span className="text-xs text-gray-500 flex items-center">
                        <i className="ri-eye-fill w-3 h-3 flex items-center justify-center mr-1"></i>
                        {article.views} views
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-900 transition-colors">
                      {article.title}
                    </h3>
                  </div>
                  
                  <div className="flex items-center text-gray-400 group-hover:text-blue-600 transition-colors">
                    <i className="ri-arrow-right-line w-5 h-5 flex items-center justify-center"></i>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center mr-3">
                  <i className="ri-lightbulb-fill text-white text-lg"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Expert Tip from IK118</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                "Success in live casino gaming comes from understanding the odds, managing your bankroll effectively, 
                and maintaining discipline. Always choose games with the lowest house edge and practice proper etiquette with dealers."
              </p>
              <div className="flex items-center mt-4">
                <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-semibold">IK</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">IK118 Gaming Team</div>
                  <div className="text-xs text-gray-600">Professional Live Casino Analysts</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-blue-900 text-white rounded-3xl p-8 mb-8">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center mr-3">
                  <i className="ri-bookmark-fill text-blue-900 text-lg"></i>
                </div>
                <h3 className="text-xl font-bold">Quick Live Casino Tips</h3>
              </div>

              <div className="space-y-4">
                {quickTips.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-amber-500/20 rounded-lg flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <i className={`${item.icon} text-amber-400 text-sm`}></i>
                    </div>
                    <p className="text-blue-100 text-sm leading-relaxed">{item.tip}</p>
                  </div>
                ))}
              </div>

              <Link 
                href="/live-games/live-blackjack-strategy"
                className="block w-full bg-amber-500 hover:bg-amber-600 text-blue-900 text-center px-6 py-3 rounded-xl font-semibold mt-6 transition-colors cursor-pointer whitespace-nowrap"
              >
                Complete Strategy Guide
              </Link>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-200 rounded-2xl p-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <i className="ri-mail-fill text-white text-xl"></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Weekly Live Casino Insights</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Get <strong>IK118's</strong> latest live casino strategies, dealer tips, and exclusive insights delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                  />
                  <button className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors text-sm whitespace-nowrap">
                    Subscribe Now
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  No spam, unsubscribe anytime. Trusted by 50,000+ players.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
