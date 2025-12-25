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
      title: 'Live Blackjack Complete Strategy Guide',
      slug: 'live-blackjack-strategy',
      excerpt: 'Master basic strategy, card counting techniques, and dealer interaction tactics for live blackjack success with IK118 expert guidance.',
      category: 'Blackjack',
      readTime: '12 min read',
      publishDate: 'June 15, 2025',
      author: 'Michael Chen',
      image: 'https://readdy.ai/api/search-image?query=professional%20live%20blackjack%20table%20with%20dealer%20dealing%20cards%20elegant%20casino%20chips%20and%20cards%20spread%20on%20green%20felt%20table%20in%20luxurious%20studio%20with%20dramatic%20lighting%20high%20quality%20photography&width=800&height=500&seq=livebj001&orientation=landscape',
      featured: true,
      views: '24.5K'
    },
    {
      title: 'Live Roulette Betting Systems Analysis',
      slug: 'live-roulette-betting-systems',
      excerpt: 'Comprehensive analysis of Martingale, Fibonacci, and D\'Alembert systems for live roulette gameplay from IK118 experts.',
      category: 'Roulette',
      readTime: '10 min read',
      publishDate: 'May 28, 2025',
      author: 'Sarah Mitchell',
      image: 'https://readdy.ai/api/search-image?query=elegant%20live%20roulette%20wheel%20spinning%20with%20ivory%20ball%20and%20betting%20layout%20professional%20dealer%20hand%20in%20luxurious%20casino%20studio%20with%20warm%20lighting%20high%20quality%20photography&width=800&height=500&seq=livero001&orientation=landscape',
      featured: true,
      views: '22.1K'
    },
    {
      title: 'Live Baccarat Banker vs Player Strategy',
      slug: 'live-baccarat-strategy',
      excerpt: 'Statistical analysis and optimal betting strategies for live baccarat including pattern recognition by IK118 analysts.',
      category: 'Baccarat',
      readTime: '9 min read',
      publishDate: 'April 12, 2025',
      author: 'James Thompson',
      image: 'https://readdy.ai/api/search-image?query=luxurious%20live%20baccarat%20table%20with%20elegant%20cards%20being%20dealt%20professional%20dealer%20hands%20and%20golden%20chips%20on%20green%20felt%20in%20sophisticated%20casino%20studio%20high%20quality%20photography&width=800&height=500&seq=liveba001&orientation=landscape',
      featured: true,
      views: '18.7K'
    },
    {
      title: 'Live Dealer Etiquette and Best Practices',
      slug: 'live-dealer-etiquette',
      excerpt: 'Essential etiquette rules, chat protocols, and professional conduct for live casino gaming from IK118.',
      category: 'General',
      readTime: '7 min read',
      publishDate: 'March 22, 2025',
      author: 'Emma Wilson',
      image: 'https://readdy.ai/api/search-image?query=professional%20live%20casino%20dealer%20smiling%20at%20camera%20in%20elegant%20uniform%20at%20gaming%20table%20with%20cards%20and%20chips%20in%20modern%20casino%20studio%20with%20professional%20lighting&width=800&height=500&seq=liveet001&orientation=landscape',
      views: '15.3K'
    },
    {
      title: 'Live Casino Technology and Streaming Quality',
      slug: 'live-casino-technology',
      excerpt: 'Understanding HD streaming, multiple camera angles, and OCR technology in live dealer games with IK118 insights.',
      category: 'Technology',
      readTime: '8 min read',
      publishDate: 'February 18, 2025',
      author: 'David Roberts',
      image: 'https://readdy.ai/api/search-image?query=modern%20live%20casino%20studio%20with%20multiple%20cameras%20professional%20lighting%20equipment%20and%20high%20tech%20streaming%20setup%20showing%20gaming%20tables%20and%20technology%20infrastructure&width=800&height=500&seq=livetech001&orientation=landscape',
      views: '13.9K'
    },
    {
      title: 'Live Poker Variants Complete Guide',
      slug: 'live-poker-variants',
      excerpt: 'Master Texas Hold\'em, Caribbean Stud, and Three Card Poker with professional strategies from IK118.',
      category: 'Poker',
      readTime: '11 min read',
      publishDate: 'January 30, 2025',
      author: 'Lisa Anderson',
      image: 'https://readdy.ai/api/search-image?query=professional%20live%20poker%20table%20with%20dealer%20dealing%20cards%20poker%20chips%20stacked%20and%20cards%20spread%20on%20green%20felt%20in%20elegant%20casino%20studio%20with%20dramatic%20lighting&width=800&height=500&seq=livepk001&orientation=landscape',
      views: '19.8K'
    },
    {
      title: 'Bankroll Management for Live Casino Games',
      slug: 'live-casino-bankroll-management',
      excerpt: 'Professional money management strategies specifically designed for live dealer gaming sessions by IK118.',
      category: 'Strategy',
      readTime: '9 min read',
      publishDate: 'June 8, 2025',
      author: 'Thomas Burke',
      image: 'https://readdy.ai/api/search-image?query=organized%20casino%20chips%20stacked%20in%20different%20denominations%20with%20playing%20cards%20and%20betting%20layout%20on%20elegant%20green%20felt%20table%20professional%20casino%20photography&width=800&height=500&seq=livebr001&orientation=landscape',
      views: '16.2K'
    },
    {
      title: 'Live Game Shows Strategy Guide',
      slug: 'live-game-shows-strategy',
      excerpt: 'Winning strategies for Monopoly Live, Crazy Time, Dream Catcher, and other live game shows from IK118.',
      category: 'Game Shows',
      readTime: '10 min read',
      publishDate: 'May 14, 2025',
      author: 'Rachel Foster',
      image: 'https://readdy.ai/api/search-image?query=colorful%20live%20casino%20game%20show%20wheel%20with%20vibrant%20segments%20and%20professional%20host%20in%20modern%20entertainment%20studio%20with%20bright%20lights%20and%20exciting%20atmosphere&width=800&height=500&seq=livegs001&orientation=landscape',
      views: '21.4K'
    },
    {
      title: 'European vs American Roulette Comparison',
      slug: 'european-vs-american-roulette',
      excerpt: 'Detailed comparison of house edges, betting options, and optimal strategies for each variant by IK118.',
      category: 'Roulette',
      readTime: '8 min read',
      publishDate: 'April 25, 2025',
      author: 'Alex Kumar',
      image: 'https://readdy.ai/api/search-image?query=side%20by%20side%20comparison%20of%20european%20and%20american%20roulette%20wheels%20showing%20single%20zero%20and%20double%20zero%20layouts%20with%20elegant%20casino%20chips%20on%20green%20felt&width=800&height=500&seq=livero002&orientation=landscape',
      views: '14.6K'
    },
    {
      title: 'Live Blackjack Side Bets Analysis',
      slug: 'live-blackjack-side-bets',
      excerpt: 'Mathematical analysis of Perfect Pairs, 21+3, and other popular live blackjack side bets from IK118.',
      category: 'Blackjack',
      readTime: '9 min read',
      publishDate: 'March 11, 2025',
      author: 'Jennifer Walsh',
      image: 'https://readdy.ai/api/search-image?query=live%20blackjack%20table%20showing%20side%20bet%20areas%20with%20perfect%20pairs%20and%20twenty%20one%20plus%20three%20betting%20circles%20cards%20and%20chips%20on%20green%20felt%20professional%20photography&width=800&height=500&seq=livebj002&orientation=landscape',
      views: '17.9K'
    },
    {
      title: 'VIP Live Casino Tables and Benefits',
      slug: 'vip-live-casino-tables',
      excerpt: 'Exclusive benefits, higher limits, and premium experiences at VIP live dealer tables with IK118 insights.',
      category: 'VIP',
      readTime: '8 min read',
      publishDate: 'February 5, 2025',
      author: 'Mark Stevens',
      image: 'https://readdy.ai/api/search-image?query=luxurious%20vip%20live%20casino%20table%20with%20gold%20accents%20high%20denomination%20chips%20elegant%20dealer%20in%20premium%20uniform%20in%20exclusive%20private%20gaming%20studio&width=800&height=500&seq=livevip001&orientation=landscape',
      views: '12.8K'
    },
    {
      title: 'Live Baccarat Pattern Recognition',
      slug: 'live-baccarat-patterns',
      excerpt: 'Understanding scorecards, trends, and pattern betting strategies in live baccarat games from IK118.',
      category: 'Baccarat',
      readTime: '10 min read',
      publishDate: 'January 19, 2025',
      author: 'Sophie Chen',
      image: 'https://readdy.ai/api/search-image?query=live%20baccarat%20scorecard%20display%20showing%20pattern%20trends%20with%20red%20and%20blue%20circles%20elegant%20gaming%20table%20with%20cards%20and%20chips%20in%20sophisticated%20casino%20studio&width=800&height=500&seq=liveba002&orientation=landscape',
      views: '15.7K'
    },
    {
      title: 'Mobile Live Casino Gaming Guide',
      slug: 'mobile-live-casino-guide',
      excerpt: 'Optimize your mobile live dealer experience with device recommendations and connectivity tips from IK118.',
      category: 'Mobile',
      readTime: '7 min read',
      publishDate: 'June 3, 2025',
      author: 'Ryan Mitchell',
      image: 'https://readdy.ai/api/search-image?query=smartphone%20displaying%20live%20casino%20game%20with%20dealer%20on%20screen%20modern%20mobile%20device%20showing%20high%20quality%20live%20gaming%20interface%20with%20cards%20and%20roulette%20wheel&width=800&height=500&seq=livemob001&orientation=landscape',
      views: '18.3K'
    },
    {
      title: 'Live Casino Bonuses and Wagering Requirements',
      slug: 'live-casino-bonuses',
      excerpt: 'Navigate live casino bonus terms, contribution rates, and optimal bonus utilization strategies with IK118.',
      category: 'Bonuses',
      readTime: '9 min read',
      publishDate: 'May 7, 2025',
      author: 'Amanda Foster',
      image: 'https://readdy.ai/api/search-image?query=casino%20bonus%20concept%20with%20golden%20gift%20box%20chips%20and%20cards%20on%20elegant%20gaming%20table%20with%20promotional%20ribbons%20and%20rewards%20in%20luxurious%20setting&width=800&height=500&seq=livebo001&orientation=landscape',
      views: '11.5K'
    },
    {
      title: 'Advanced Live Poker Tournament Strategies',
      slug: 'live-poker-tournament-strategies',
      excerpt: 'Professional tournament tactics for live dealer poker including position play and ICM considerations by IK118.',
      category: 'Poker',
      readTime: '12 min read',
      publishDate: 'April 2, 2025',
      author: 'Kevin Park',
      image: 'https://readdy.ai/api/search-image?query=professional%20live%20poker%20tournament%20table%20with%20multiple%20player%20positions%20dealer%20in%20center%20large%20chip%20stacks%20and%20cards%20in%20elegant%20casino%20studio%20setting&width=800&height=500&seq=livepk002&orientation=landscape',
      views: '13.2K'
    }
  ];

  const categories = [
    'All',
    'Blackjack',
    'Roulette',
    'Baccarat',
    'Poker',
    'Game Shows',
    'Strategy',
    'General',
    'Technology',
    'VIP',
    'Mobile',
    'Bonuses'
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
      
      const response = await fetch('https://readdy.ai/api/form/d4tpcvegghdeis7q5neg', {
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
            Latest Live Casino Articles & Guides
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with <strong className="text-blue-900">IK118's</strong> latest insights, strategies, and expert analysis for Australian live casino players.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Category Filter */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-6 h-6 bg-blue-900 rounded-lg flex items-center justify-center mr-3">
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
                        ? 'bg-blue-900 text-white'
                        : 'text-gray-600 hover:bg-blue-50 hover:text-blue-900'
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

            {/* Top Articles */}
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
                    href={`/live-games/${article.slug}`}
                    className="group block cursor-pointer"
                  >
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="text-white font-bold text-xs">#{index + 1}</span>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 group-hover:text-blue-900 transition-colors leading-tight mb-1">
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

            {/* Newsletter CTA */}
            <div className="bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-2xl p-6">
              {!isSubmitted ? (
                <form 
                  id="live-games-sidebar-newsletter"
                  onSubmit={handleNewsletterSubmit}
                  data-readdy-form
                >
                  <div className="text-center">
                    <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <i className="ri-mail-fill text-blue-900 text-lg"></i>
                    </div>
                    <h3 className="text-lg font-bold mb-2">Weekly Live Casino Insights</h3>
                    <p className="text-blue-100 text-sm mb-4">
                      Get IK118's expert analysis delivered to your inbox
                    </p>
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email"
                      className="w-full px-3 py-2 rounded-lg text-gray-900 text-sm mb-3 focus:ring-2 focus:ring-amber-400 focus:outline-none"
                      required
                    />
                    <button
                      type="submit"
                      className="block w-full bg-amber-500 hover:bg-amber-600 text-blue-900 text-center px-4 py-2 rounded-lg font-semibold transition-colors text-sm cursor-pointer whitespace-nowrap"
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

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Results Info */}
            <div className="flex items-center justify-between mb-6">
              <div className="text-gray-600">
                Showing <span className="font-semibold">{startIndex + 1}-{Math.min(endIndex, filteredArticles.length)}</span> of <span className="font-semibold">{filteredArticles.length}</span> articles
                {selectedCategory !== 'All' && (
                  <span className="ml-2">
                    in <span className="font-semibold text-blue-900">{selectedCategory}</span>
                  </span>
                )}
              </div>
              {selectedCategory !== 'All' && (
                <button
                  onClick={() => handleCategoryChange('All')}
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium cursor-pointer whitespace-nowrap"
                >
                  Clear Filter
                </button>
              )}
            </div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {currentArticles.map((article, index) => (
                <Link 
                  key={index}
                  href={`/live-games/${article.slug}`}
                  className="group block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                >
                  <img 
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-5">
                    <div className="flex items-center text-xs text-gray-500 mb-3">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full mr-2">
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
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-900 transition-colors leading-tight">
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

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center space-x-2">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`px-3 py-2 rounded-lg text-sm font-medium cursor-pointer whitespace-nowrap ${
                    currentPage === 1
                      ? 'text-gray-400 cursor-not-allowed'
                      : 'text-gray-600 hover:text-blue-900 hover:bg-blue-50'
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
                        ? 'bg-blue-900 text-white'
                        : 'text-gray-600 hover:text-blue-900 hover:bg-blue-50'
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
                      : 'text-gray-600 hover:text-blue-900 hover:bg-blue-50'
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