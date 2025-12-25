'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function ArticleGrid() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const articlesPerPage = 9;

  const articles = [
    {
      title: "AFL Betting Guide 2025: Expert Tips and Strategies",
      excerpt: "IK118's comprehensive AFL betting guide covering premiership odds, match betting strategies, and expert analysis for the 2025 season.",
      category: "AFL",
      readTime: "12 min read",
      publishDate: "March 15, 2025",
      author: "Michael Thompson",
      image: "https://readdy.ai/api/search-image?query=Australian%20Football%20League%20AFL%20action%20with%20players%20competing%20for%20the%20ball%2C%20dramatic%20stadium%20atmosphere%2C%20professional%20sports%20betting%20overlay%20with%20odds%20displays%20and%20IK118%20branding%20elements&width=800&height=500&seq=sports-betting-article-001&orientation=landscape",
      href: "/sports-betting/afl-betting-guide",
      featured: true,
      views: "28.5K"
    },
    {
      title: "NRL Betting Strategies: How to Beat the Bookmakers",
      excerpt: "Discover proven NRL betting strategies from IK118 experts, including line betting, player props, and advanced statistical analysis.",
      category: "NRL",
      readTime: "10 min read",
      publishDate: "April 8, 2025",
      author: "Sarah Mitchell",
      image: "https://readdy.ai/api/search-image?query=National%20Rugby%20League%20NRL%20intense%20match%20action%20with%20players%20tackling%2C%20professional%20stadium%20lighting%2C%20betting%20statistics%20overlay%20and%20IK118%20expert%20analysis%20branding&width=800&height=500&seq=sports-betting-article-002&orientation=landscape",
      href: "/sports-betting/nrl-betting-strategies",
      views: "24.2K"
    },
    {
      title: "Cricket Betting Masterclass: Test, ODI and T20 Strategies",
      excerpt: "IK118's complete cricket betting guide covering all formats, from Test matches to Big Bash League, with expert tips and odds analysis.",
      category: "Cricket",
      readTime: "14 min read",
      publishDate: "January 22, 2025",
      author: "James Anderson",
      image: "https://readdy.ai/api/search-image?query=Professional%20cricket%20match%20with%20batsman%20hitting%20ball%2C%20bowler%20in%20action%2C%20packed%20stadium%20atmosphere%2C%20betting%20odds%20displays%20and%20IK118%20cricket%20analysis%20branding&width=800&height=500&seq=sports-betting-article-003&orientation=landscape",
      href: "/sports-betting/cricket-betting-masterclass",
      views: "31.7K"
    },
    {
      title: "Horse Racing Betting: Form Guide and Track Analysis",
      excerpt: "Master horse racing betting with IK118's expert form analysis, track conditions guide, and proven staking strategies for Australian racing.",
      category: "Horse Racing",
      readTime: "11 min read",
      publishDate: "February 18, 2025",
      author: "Emma Wilson",
      image: "https://readdy.ai/api/search-image?query=Thoroughbred%20horse%20racing%20with%20jockeys%20competing%20on%20track%2C%20Melbourne%20Cup%20style%20atmosphere%2C%20professional%20racing%20form%20guide%20displays%20and%20IK118%20racing%20analysis%20branding&width=800&height=500&seq=sports-betting-article-004&orientation=landscape",
      href: "/sports-betting/horse-racing-form-guide",
      views: "26.9K"
    },
    {
      title: "Tennis Betting Guide: Grand Slam and ATP Strategies",
      excerpt: "IK118's comprehensive tennis betting strategies covering Grand Slams, ATP Tour, and live betting techniques for maximum profit.",
      category: "Tennis",
      readTime: "9 min read",
      publishDate: "May 12, 2025",
      author: "David Chen",
      image: "https://readdy.ai/api/search-image?query=Professional%20tennis%20player%20serving%20at%20Grand%20Slam%20tournament%2C%20packed%20stadium%20crowd%2C%20Australian%20Open%20atmosphere%20with%20betting%20odds%20overlay%20and%20IK118%20tennis%20analysis%20branding&width=800&height=500&seq=sports-betting-article-005&orientation=landscape",
      href: "/sports-betting/tennis-betting-guide",
      views: "19.4K"
    },
    {
      title: "Soccer Betting Strategies: Premier League and A-League Tips",
      excerpt: "Learn advanced soccer betting techniques from IK118 experts, covering both international leagues and Australian A-League matches.",
      category: "Soccer",
      readTime: "10 min read",
      publishDate: "March 29, 2025",
      author: "Lucas Martinez",
      image: "https://readdy.ai/api/search-image?query=Professional%20soccer%20football%20match%20action%20with%20players%20competing%2C%20goal%20scoring%20moment%2C%20stadium%20atmosphere%20with%20betting%20statistics%20overlay%20and%20IK118%20soccer%20analysis%20branding&width=800&height=500&seq=sports-betting-article-006&orientation=landscape",
      href: "/sports-betting/soccer-betting-strategies",
      views: "22.8K"
    },
    {
      title: "Bankroll Management: Protect Your Betting Funds",
      excerpt: "IK118's essential guide to bankroll management, staking plans, and risk management strategies for sustainable sports betting success.",
      category: "Strategy",
      readTime: "13 min read",
      publishDate: "January 15, 2025",
      author: "Rachel Foster",
      image: "https://readdy.ai/api/search-image?query=Professional%20financial%20planning%20setup%20with%20calculator%2C%20charts%20showing%20betting%20bankroll%20tracking%2C%20budget%20management%20documents%20and%20strategic%20planning%20tools%20with%20IK118%20branding%20elements&width=800&height=500&seq=sports-betting-article-007&orientation=landscape",
      href: "/sports-betting/bankroll-management",
      views: "18.6K"
    },
    {
      title: "Value Betting Explained: Finding Profitable Opportunities",
      excerpt: "Discover how to identify value bets with IK118's mathematical approach to odds analysis and expected value calculations.",
      category: "Strategy",
      readTime: "11 min read",
      publishDate: "April 25, 2025",
      author: "Dr. Thomas Burke",
      image: "https://readdy.ai/api/search-image?query=Mathematical%20analysis%20of%20betting%20odds%20with%20charts%20graphs%20calculators%20showing%20value%20betting%20opportunities%2C%20professional%20data%20analysis%20setup%20with%20IK118%20expert%20strategy%20branding&width=800&height=500&seq=sports-betting-article-008&orientation=landscape",
      href: "/sports-betting/value-betting-explained",
      views: "21.3K"
    },
    {
      title: "Live Betting Mastery: In-Play Strategies That Work",
      excerpt: "IK118's advanced guide to live betting, covering momentum shifts, hedging strategies, and real-time decision making.",
      category: "Live Betting",
      readTime: "12 min read",
      publishDate: "February 9, 2025",
      author: "Alex Kumar",
      image: "https://readdy.ai/api/search-image?query=Live%20sports%20betting%20interface%20showing%20real-time%20odds%20changes%2C%20multiple%20sports%20matches%20in%20progress%2C%20dynamic%20betting%20displays%20and%20IK118%20live%20betting%20analysis%20branding&width=800&height=500&seq=sports-betting-article-009&orientation=landscape",
      href: "/sports-betting/live-betting-mastery",
      views: "25.7K"
    },
    {
      title: "Multi Bets and Parlays: Maximizing Your Returns",
      excerpt: "Learn how to construct profitable multi bets with IK118's expert analysis of correlation, odds calculation, and risk assessment.",
      category: "Bet Types",
      readTime: "10 min read",
      publishDate: "May 6, 2025",
      author: "Jennifer Walsh",
      image: "https://readdy.ai/api/search-image?query=Multiple%20sports%20betting%20slip%20showing%20parlay%20combinations%2C%20odds%20multipliers%2C%20potential%20returns%20calculation%20with%20professional%20betting%20interface%20and%20IK118%20multi%20bet%20strategy%20branding&width=800&height=500&seq=sports-betting-article-010&orientation=landscape",
      href: "/sports-betting/multi-bets-parlays",
      views: "17.9K"
    },
    {
      title: "Bookmaker Comparison: Finding the Best Odds in Australia",
      excerpt: "IK118's comprehensive comparison of Australian bookmakers, analyzing odds quality, bonuses, and betting features.",
      category: "Bookmakers",
      readTime: "15 min read",
      publishDate: "March 3, 2025",
      author: "Sophie Anderson",
      image: "https://readdy.ai/api/search-image?query=Professional%20comparison%20chart%20showing%20multiple%20Australian%20bookmaker%20logos%2C%20odds%20comparison%20tables%2C%20ratings%20and%20reviews%20with%20IK118%20bookmaker%20analysis%20branding%20elements&width=800&height=500&seq=sports-betting-article-011&orientation=landscape",
      href: "/sports-betting/bookmaker-comparison",
      views: "29.2K"
    },
    {
      title: "Betting Psychology: Controlling Emotions and Avoiding Tilt",
      excerpt: "Master the mental game of sports betting with IK118's psychological strategies for discipline, patience, and emotional control.",
      category: "Psychology",
      readTime: "9 min read",
      publishDate: "January 28, 2025",
      author: "Dr. Patricia Moore",
      image: "https://readdy.ai/api/search-image?query=Professional%20psychology%20consultation%20with%20mental%20discipline%20concepts%2C%20emotional%20control%20diagrams%2C%20mindfulness%20and%20focus%20training%20materials%20with%20IK118%20betting%20psychology%20branding&width=800&height=500&seq=sports-betting-article-012&orientation=landscape",
      href: "/sports-betting/betting-psychology",
      views: "16.4K"
    },
    {
      title: "Statistical Analysis for Sports Betting Success",
      excerpt: "IK118's data-driven approach to sports betting, covering advanced statistics, predictive modeling, and analytical tools.",
      category: "Analytics",
      readTime: "14 min read",
      publishDate: "April 17, 2025",
      author: "Mark Stevens",
      image: "https://readdy.ai/api/search-image?query=Advanced%20sports%20statistics%20dashboard%20with%20data%20charts%2C%20predictive%20models%2C%20performance%20metrics%20and%20analytical%20tools%20for%20betting%20analysis%20with%20IK118%20data%20science%20branding&width=800&height=500&seq=sports-betting-article-013&orientation=landscape",
      href: "/sports-betting/statistical-analysis",
      views: "20.5K"
    },
    {
      title: "Bonus Betting Strategies: Maximizing Promotions",
      excerpt: "Learn how to extract maximum value from bookmaker bonuses and promotions with IK118's expert bonus hunting strategies.",
      category: "Bonuses",
      readTime: "8 min read",
      publishDate: "February 24, 2025",
      author: "Ryan Mitchell",
      image: "https://readdy.ai/api/search-image?query=Promotional%20bonus%20offers%20display%20with%20free%20bet%20vouchers%2C%20cashback%20rewards%2C%20loyalty%20programs%20and%20special%20promotions%20with%20IK118%20bonus%20strategy%20analysis%20branding&width=800&height=500&seq=sports-betting-article-014&orientation=landscape",
      href: "/sports-betting/bonus-strategies",
      views: "23.1K"
    },
    {
      title: "Esports Betting Guide: CS:GO, Dota 2 and League of Legends",
      excerpt: "IK118's comprehensive esports betting guide covering major titles, tournament strategies, and team analysis.",
      category: "Esports",
      readTime: "11 min read",
      publishDate: "May 20, 2025",
      author: "Kevin Park",
      image: "https://readdy.ai/api/search-image?query=Professional%20esports%20tournament%20with%20gaming%20arena%2C%20players%20competing%20at%20computers%2C%20large%20screens%20showing%20game%20action%20and%20IK118%20esports%20betting%20analysis%20branding&width=800&height=500&seq=sports-betting-article-015&orientation=landscape",
      href: "/sports-betting/esports-betting-guide",
      views: "27.6K"
    },
    {
      title: "Responsible Gambling: Setting Limits and Staying Safe",
      excerpt: "IK118's essential guide to responsible gambling practices, self-exclusion options, and recognizing problem gambling signs.",
      category: "Responsible Gaming",
      readTime: "10 min read",
      publishDate: "March 21, 2025",
      author: "Dr. Elena Rodriguez",
      image: "https://readdy.ai/api/search-image?query=Supportive%20counseling%20environment%20with%20responsible%20gambling%20materials%2C%20self-assessment%20tools%2C%20limit%20setting%20guides%20and%20help%20resources%20with%20IK118%20responsible%20gaming%20branding&width=800&height=500&seq=sports-betting-article-016&orientation=landscape",
      href: "/sports-betting/responsible-gambling",
      views: "15.8K"
    },
    {
      title: "Mobile Betting Apps: Best Platforms for Australian Punters",
      excerpt: "Discover the top mobile betting apps in Australia with IK118's detailed reviews of features, usability, and betting options.",
      category: "Mobile Betting",
      readTime: "9 min read",
      publishDate: "June 2, 2025",
      author: "Amanda Foster",
      image: "https://readdy.ai/api/search-image?query=Modern%20smartphone%20displaying%20professional%20sports%20betting%20app%20interface%20with%20live%20odds%2C%20quick%20bet%20features%20and%20sleek%20mobile%20design%20with%20IK118%20mobile%20betting%20review%20branding&width=800&height=500&seq=sports-betting-article-017&orientation=landscape",
      href: "/sports-betting/mobile-betting-apps",
      views: "19.7K"
    }
  ];

  const categories = [
    'All',
    'AFL',
    'NRL',
    'Cricket',
    'Horse Racing',
    'Tennis',
    'Soccer',
    'Strategy',
    'Live Betting',
    'Bet Types',
    'Bookmakers',
    'Psychology',
    'Analytics',
    'Bonuses',
    'Esports',
    'Responsible Gaming',
    'Mobile Betting'
  ];

  const filteredArticles = selectedCategory === 'All' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const currentArticles = filteredArticles.slice(startIndex, endIndex);

  const topArticles = [...articles]
    .sort((a, b) => parseFloat(b.views?.replace('K', '') || '0') - parseFloat(a.views?.replace('K', '') || '0'))
    .slice(0, 5);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    try {
      const formData = new URLSearchParams();
      formData.append('email', email);
      
      const response = await fetch('https://readdy.ai/api/form/d4tr1bfsdr6u9jrifbhg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData
      });

      if (response.ok) {
        setIsSubmitted(true);
        setEmail('');
      }
    } catch (error) {
      console.error('Newsletter submission error:', error);
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Latest Sports Betting Articles & Guides
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with <strong className="text-green-900">IK118's</strong> latest insights, expert analysis, and proven strategies for Australian sports betting.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-6 h-6 bg-green-900 rounded-lg flex items-center justify-center mr-3">
                  <i className="ri-filter-3-fill text-white text-sm"></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900">Filter by Category</h3>
              </div>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
                      selectedCategory === category
                        ? 'bg-green-900 text-white'
                        : 'text-gray-600 hover:bg-green-50 hover:text-green-900'
                    }`}
                  >
                    {category}
                    <span className="float-right text-xs opacity-70">
                      {category === 'All' 
                        ? articles.length 
                        : articles.filter(a => a.category === category).length}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-6 h-6 bg-amber-500 rounded-lg flex items-center justify-center mr-3">
                  <i className="ri-star-fill text-white text-sm"></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900">Most Popular</h3>
              </div>
              <div className="space-y-4">
                {topArticles.map((article, index) => (
                  <Link
                    key={index}
                    href={article.href}
                    className="group block cursor-pointer"
                  >
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="text-white font-bold text-xs">#{index + 1}</span>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 group-hover:text-green-900 transition-colors leading-tight mb-1">
                          {article.title}
                        </h4>
                        <div className="flex items-center text-xs text-gray-500">
                          <i className="ri-eye-fill w-3 h-3 flex items-center justify-center mr-1"></i>
                          <span>{article.views}</span>
                          <span className="mx-2">•</span>
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-900 to-blue-900 text-white rounded-2xl p-6">
              {!isSubmitted ? (
                <form 
                  id="sports-betting-sidebar-newsletter"
                  onSubmit={handleNewsletterSubmit}
                  data-readdy-form
                >
                  <div className="text-center">
                    <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <i className="ri-mail-fill text-green-900 text-lg"></i>
                    </div>
                    <h3 className="text-lg font-bold mb-2">Weekly Betting Insights</h3>
                    <p className="text-blue-100 text-sm mb-4">
                      Get IK118's expert tips delivered to your inbox
                    </p>
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email"
                      className="w-full px-3 py-2 rounded-lg text-gray-900 text-sm mb-3 focus:ring-2 focus:ring-green-400 focus:outline-none"
                      required
                    />
                    <button
                      type="submit"
                      className="block w-full bg-green-500 hover:bg-green-600 text-green-900 text-center px-4 py-2 rounded-lg font-semibold transition-colors text-sm cursor-pointer whitespace-nowrap"
                    >
                      Subscribe Now
                    </button>
                  </div>
                </form>
              ) : (
                <div className="text-center">
                  <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <i className="ri-check-line text-white text-lg"></i>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-green-300">Subscribed!</h3>
                  <p className="text-blue-100 text-sm">
                    Check your email for IK118's weekly insights
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <div className="text-gray-600">
                Showing <span className="font-semibold">{startIndex + 1}-{Math.min(endIndex, filteredArticles.length)}</span> of <span className="font-semibold">{filteredArticles.length}</span> articles
                {selectedCategory !== 'All' && (
                  <span className="ml-2">
                    in <span className="font-semibold text-green-900">{selectedCategory}</span>
                  </span>
                )}
              </div>
              {selectedCategory !== 'All' && (
                <button
                  onClick={() => handleCategoryChange('All')}
                  className="text-green-600 hover:text-green-800 text-sm font-medium cursor-pointer whitespace-nowrap"
                >
                  Clear Filter
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {currentArticles.map((article, index) => (
                <Link 
                  key={index}
                  href={article.href}
                  className="group block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                >
                  <img 
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-5">
                    <div className="flex items-center text-xs text-gray-500 mb-3">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full mr-2">
                        {article.category}
                      </span>
                      <span>{article.readTime}</span>
                      {article.views && (
                        <>
                          <span className="mx-2">•</span>
                          <span className="flex items-center">
                            <i className="ri-eye-fill w-3 h-3 flex items-center justify-center mr-1"></i>
                            {article.views}
                          </span>
                        </>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-900 transition-colors leading-tight">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>By {article.author}</span>
                      <span>{article.publishDate}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="flex items-center justify-center space-x-2">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`px-3 py-2 rounded-lg text-sm font-medium cursor-pointer whitespace-nowrap ${
                    currentPage === 1
                      ? 'text-gray-400 cursor-not-allowed'
                      : 'text-gray-600 hover:text-green-900 hover:bg-green-50'
                  }`}
                >
                  <i className="ri-arrow-left-line w-4 h-4 flex items-center justify-center"></i>
                </button>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium cursor-pointer whitespace-nowrap ${
                      currentPage === page
                        ? 'bg-green-900 text-white'
                        : 'text-gray-600 hover:text-green-900 hover:bg-green-50'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`px-3 py-2 rounded-lg text-sm font-medium cursor-pointer whitespace-nowrap ${
                    currentPage === totalPages
                      ? 'text-gray-400 cursor-not-allowed'
                      : 'text-gray-600 hover:text-green-900 hover:bg-green-50'
                  }`}
                >
                  <i className="ri-arrow-right-line w-4 h-4 flex items-center justify-center"></i>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
