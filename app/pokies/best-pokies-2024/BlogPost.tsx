'use client';

import Link from 'next/link';

export default function BlogPost() {
  const topPokies = [
    {
      rank: 1,
      name: "Lightning Link - Dragon Link",
      provider: "Aristocrat",
      rtp: "96.52%",
      volatility: "Medium-High",
      minBet: "$0.01",
      maxBet: "$125",
      features: ["Progressive Jackpots", "Free Spins", "Hold & Spin"],
      description: "The flagship of Aristocrat's Lightning Link series offers four progressive jackpots and exciting dragon-themed gameplay with exceptional winning potential.",
      image: "https://readdy.ai/api/search-image?query=Dragon%20Link%20Lightning%20Link%20pokies%20slot%20machine%20with%20golden%20dragon%20symbols%2C%20progressive%20jackpot%20displays%2C%20fire%20effects%20and%20oriental%20themed%20graphics%20in%20luxury%20casino%20setting&width=600&height=400&seq=dragon-link-001&orientation=landscape"
    },
    {
      rank: 2,
      name: "Buffalo Gold Revolution",
      provider: "Aristocrat",
      rtp: "96.05%",
      volatility: "High",
      minBet: "$0.50",
      maxBet: "$500",
      features: ["Free Games", "Wild Multipliers", "Buffalo Gold Feature"],
      description: "Enhanced version of the classic Buffalo series with improved graphics, better RTP, and more frequent bonus triggers for Australian players.",
      image: "https://readdy.ai/api/search-image?query=Buffalo%20Gold%20Revolution%20pokies%20with%20majestic%20buffalo%20symbols%2C%20golden%20coins%2C%20American%20wilderness%20theme%2C%20sunset%20background%20and%20premium%20slot%20machine%20interface&width=600&height=400&seq=buffalo-gold-002&orientation=landscape"
    },
    {
      rank: 3,
      name: "Queen of the Nile II",
      provider: "Aristocrat",
      rtp: "95.94%",
      volatility: "Medium",
      minBet: "$0.01",
      maxBet: "$50",
      features: ["Free Spins", "Multipliers", "Pyramid Bonus"],
      description: "The sequel to Australia's most beloved pokies game, featuring enhanced Egyptian themes and improved bonus rounds with IK118's seal of approval.",
      image: "https://readdy.ai/api/search-image?query=Queen%20of%20the%20Nile%20II%20pokies%20with%20Egyptian%20queen%20Cleopatra%2C%20golden%20pyramids%2C%20hieroglyphics%2C%20ancient%20Egypt%20theme%20in%20ornate%20casino%20machine%20design&width=600&height=400&seq=queen-nile-003&orientation=landscape"
    },
    {
      rank: 4,
      name: "Big Red",
      provider: "Aristocrat",
      rtp: "97.04%",
      volatility: "High",
      minBet: "$0.01",
      maxBet: "$100",
      features: ["Free Games", "Wild Symbol", "Australian Theme"],
      description: "An Australian outback adventure with kangaroos and crocodiles, offering one of the highest RTPs among Aristocrat's pokies lineup.",
      image: "https://readdy.ai/api/search-image?query=Big%20Red%20pokies%20featuring%20red%20kangaroo%2C%20Australian%20outback%20landscape%2C%20crocodiles%2C%20desert%20sunset%20with%20rustic%20slot%20machine%20design%20and%20native%20wildlife%20symbols&width=600&height=400&seq=big-red-004&orientation=landscape"
    },
    {
      rank: 5,
      name: "More Chilli",
      provider: "Aristocrat",
      rtp: "95.48%",
      volatility: "Medium-High",
      minBet: "$0.01",
      maxBet: "$200",
      features: ["Free Spins", "Gamble Feature", "Mexican Theme"],
      description: "Spicy Mexican-themed pokies with vibrant colors, exciting free spin rounds, and the popular gamble feature loved by Australian players.",
      image: "https://readdy.ai/api/search-image?query=More%20Chilli%20pokies%20with%20Mexican%20chili%20peppers%2C%20colorful%20fiesta%20decorations%2C%20sombrero%2C%20maracas%2C%20vibrant%20red%20and%20green%20theme%20in%20festive%20slot%20design&width=600&height=400&seq=more-chilli-005&orientation=landscape"
    }
  ];

  const selectionCriteria = [
    {
      title: "Return to Player (RTP)",
      description: "IK118 prioritizes pokies with RTP rates above 95%, ensuring better long-term value for Australian players.",
      icon: "ri-percent-fill"
    },
    {
      title: "Game Volatility Balance",
      description: "We evaluate volatility levels to match different player preferences and bankroll sizes across Australia.",
      icon: "ri-line-chart-fill"
    },
    {
      title: "Bonus Feature Quality",
      description: "Assessment of free spins, multipliers, and special features that enhance gameplay excitement and winning potential.",
      icon: "ri-gift-fill"
    },
    {
      title: "Provider Reputation",
      description: "Focus on established developers like Aristocrat, Microgaming, and NetEnt with proven track records in Australia.",
      icon: "ri-shield-check-fill"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Article Header */}
        <div className="mb-12">
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <Link href="/pokies" className="hover:text-blue-600">Pokies</Link>
            <i className="ri-arrow-right-s-line mx-2"></i>
            <span>Top 10 Progressive Jackpot Pokies</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Top 10 Progressive Jackpot Pokies in Australia 2024: 
            <span className="text-blue-900"> IK118 Expert Rankings</span>
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center mr-2">
                <span className="text-white text-xs font-semibold">SM</span>
              </div>
              <span>By Sarah Mitchell</span>
            </div>
            <span>•</span>
            <span>Published December 15, 2024</span>
            <span>•</span>
            <span>8 min read</span>
            <span>•</span>
            <div className="flex items-center">
              <i className="ri-eye-fill w-4 h-4 flex items-center justify-center mr-1"></i>
              <span>15.2K views</span>
            </div>
          </div>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong className="text-blue-900">IK118's</strong> comprehensive analysis of Australia's most rewarding progressive jackpot pokies, 
              featuring detailed RTP analysis, volatility assessments, and winning strategies from our expert gaming team.
            </p>
          </div>
        </div>

        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Progressive jackpot pokies represent the pinnacle of online gaming excitement, offering Australian players 
            the chance to win life-changing amounts with every spin. <strong className="text-blue-900">IK118</strong> has analyzed 
            hundreds of progressive pokies to identify the top performers that combine excellent RTPs, engaging gameplay, 
            and substantial jackpot potential.
          </p>
          
          <p className="text-gray-700 mb-6">
            Our expert team evaluates each game based on multiple criteria including historical jackpot payouts, 
            base game RTP, bonus feature frequency, and overall player satisfaction ratings from Australian gaming communities. 
            This comprehensive approach ensures our recommendations provide both entertainment value and winning potential.
          </p>
        </div>

        {/* Selection Criteria */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">IK118's Selection Criteria</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {selectionCriteria.map((criteria, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <i className={`${criteria.icon} text-xl text-blue-600`}></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{criteria.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{criteria.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Pokies List */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Top 5 Progressive Jackpot Pokies - IK118 Rankings</h2>
          <div className="space-y-8">
            {topPokies.map((pokie, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-3xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/3">
                    <img 
                      src={pokie.image}
                      alt={pokie.name}
                      className="w-full h-64 lg:h-full object-cover object-top"
                    />
                  </div>
                  <div className="lg:w-2/3 p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center mb-2">
                          <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center mr-3">
                            <span className="text-white font-bold text-sm">#{pokie.rank}</span>
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900">{pokie.name}</h3>
                        </div>
                        <p className="text-blue-600 font-medium mb-2">By {pokie.provider}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-lg font-bold text-green-600">{pokie.rtp}</div>
                        <div className="text-xs text-gray-600">RTP</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-sm font-semibold text-orange-600">{pokie.volatility}</div>
                        <div className="text-xs text-gray-600">Volatility</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-sm font-semibold text-blue-600">{pokie.minBet}</div>
                        <div className="text-xs text-gray-600">Min Bet</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-sm font-semibold text-purple-600">{pokie.maxBet}</div>
                        <div className="text-xs text-gray-600">Max Bet</div>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4 leading-relaxed">{pokie.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {pokie.features.map((feature, idx) => (
                        <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Expert Tips */}
        <div className="mb-12 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center mr-4">
              <i className="ri-lightbulb-fill text-2xl text-white"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">IK118 Expert Strategies</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Progressive Jackpot Tips</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <i className="ri-checkbox-circle-fill w-5 h-5 flex items-center justify-center text-green-500 mr-2 mt-0.5"></i>
                  <span className="text-sm">Always play maximum bet to qualify for progressive jackpots</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-checkbox-circle-fill w-5 h-5 flex items-center justify-center text-green-500 mr-2 mt-0.5"></i>
                  <span className="text-sm">Monitor jackpot sizes - larger amounts offer better value</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-checkbox-circle-fill w-5 h-5 flex items-center justify-center text-green-500 mr-2 mt-0.5"></i>
                  <span className="text-sm">Set strict loss limits before playing progressive games</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Bankroll Management</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <i className="ri-checkbox-circle-fill w-5 h-5 flex items-center justify-center text-blue-500 mr-2 mt-0.5"></i>
                  <span className="text-sm">Allocate only 10-20% of your bankroll to progressive pokies</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-checkbox-circle-fill w-5 h-5 flex items-center justify-center text-blue-500 mr-2 mt-0.5"></i>
                  <span className="text-sm">Choose games with RTPs above 95% for better base game returns</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-checkbox-circle-fill w-5 h-5 flex items-center justify-center text-blue-500 mr-2 mt-0.5"></i>
                  <span className="text-sm">Consider volatility levels when selecting your betting strategy</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts from IK118</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              Progressive jackpot pokies offer unparalleled excitement and the potential for life-changing wins. 
              <strong className="text-blue-900"> IK118's</strong> recommended games combine strong base game RTPs with 
              substantial jackpot potential, ensuring Australian players get the best possible gaming experience.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Remember that progressive pokies require maximum bets to qualify for jackpots, so always ensure your 
              bankroll can sustain this requirement. Focus on games with higher RTPs and consider the volatility 
              level that matches your playing style and risk tolerance.
            </p>
            
            <div className="bg-blue-900 text-white rounded-2xl p-6">
              <p className="text-blue-100 mb-4">
                <strong className="text-amber-400">IK118 Recommendation:</strong> Start with Queen of the Nile II or 
                Buffalo Gold Revolution if you're new to progressive pokies, as they offer more frequent smaller wins 
                while you chase the big jackpots.
              </p>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="border-t border-gray-200 pt-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/pokies/rtp-explained-best-value-games" className="group block bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
              <img 
                src="https://readdy.ai/api/search-image?query=RTP%20analysis%20charts%20and%20pokies%20statistics%20on%20professional%20desk%20with%20calculator%2C%20modern%20casino%20environment%20showing%20percentage%20data&width=400&height=200&seq=rtp-related-001&orientation=landscape"
                alt="RTP Analysis"
                className="w-full h-32 object-cover object-top"
              />
              <div className="p-4">
                <h4 className="font-semibold text-gray-900 group-hover:text-blue-900 transition-colors">
                  RTP Explained: Finding the Best Value Pokies
                </h4>
                <p className="text-sm text-gray-600 mt-2">Learn how to identify pokies with the best return rates</p>
              </div>
            </Link>
            
            <Link href="/pokies/megaways-complete-guide" className="group block bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
              <img 
                src="https://readdy.ai/api/search-image?query=Megaways%20pokies%20with%20cascading%20reels%20and%20multiple%20ways%20to%20win%2C%20dynamic%20slot%20machine%20interface%20showing%20117649%20ways&width=400&height=200&seq=megaways-related-002&orientation=landscape"
                alt="Megaways Guide"
                className="w-full h-32 object-cover object-top"
              />
              <div className="p-4">
                <h4 className="font-semibold text-gray-900 group-hover:text-blue-900 transition-colors">
                  Megaways Pokies: Complete Strategy Guide
                </h4>
                <p className="text-sm text-gray-600 mt-2">Master the revolutionary Megaways gaming mechanics</p>
              </div>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}