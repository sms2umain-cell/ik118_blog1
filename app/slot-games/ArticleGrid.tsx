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
      title: "Progressive Jackpot Slots Guide: Chasing Life-Changing Wins",
      excerpt: "IK118's comprehensive guide to progressive jackpot slots, featuring strategies, best games, and tips for maximizing your chances at million-dollar prizes.",
      category: "Progressive Jackpots",
      readTime: "12 min read",
      publishDate: "June 15, 2025",
      author: "Sarah Mitchell",
      image: "https://readdy.ai/api/search-image?query=Massive%20progressive%20jackpot%20slot%20machine%20displaying%20million%20dollar%20amounts%20on%20digital%20screens%2C%20golden%20coins%20cascading%2C%20luxury%20casino%20environment%20with%20dramatic%20lighting%20and%20IK118%20branding%20elements&width=800&height=500&seq=slot-games-article-001&orientation=landscape",
      href: "/slot-games/progressive-jackpot-slots-guide",
      featured: true,
      views: "32.5K"
    },
    {
      title: "Slot Bonus Features Explained: Free Spins, Multipliers & More",
      excerpt: "Discover how slot bonus features work with IK118's detailed breakdown of free spins, multipliers, wilds, scatters, and special bonus rounds.",
      category: "Bonus Features",
      readTime: "10 min read",
      publishDate: "May 28, 2025",
      author: "James Thompson",
      image: "https://readdy.ai/api/search-image?query=Exciting%20slot%20bonus%20round%20with%20free%20spins%20counter%2C%20multiplier%20symbols%2C%20wild%20symbols%20expanding%2C%20celebration%20effects%20and%20golden%20bonus%20features%20with%20IK118%20expert%20analysis&width=800&height=500&seq=slot-games-article-002&orientation=landscape",
      href: "/slot-games/slot-bonus-features-explained",
      views: "28.3K"
    },
    {
      title: "High RTP Slots 2025: Best Paying Games for Maximum Returns",
      excerpt: "IK118 reveals the highest RTP slots of 2025, helping players find games with the best return-to-player percentages and winning potential.",
      category: "Game Selection",
      readTime: "9 min read",
      publishDate: "April 12, 2025",
      author: "Emma Wilson",
      image: "https://readdy.ai/api/search-image?query=Professional%20data%20analysis%20chart%20showing%20high%20RTP%20percentages%20for%20various%20slot%20games%2C%20calculator%20and%20statistics%20on%20elegant%20desk%20with%20IK118%20expert%20evaluation%20branding&width=800&height=500&seq=slot-games-article-003&orientation=landscape",
      href: "/slot-games/high-rtp-slots-2025",
      views: "25.7K"
    },
    {
      title: "Megaways Slots Strategy: Mastering 117,649 Ways to Win",
      excerpt: "Learn advanced Megaways slot strategies from IK118 experts, covering mechanics, volatility management, and optimal betting approaches.",
      category: "Game Mechanics",
      readTime: "11 min read",
      publishDate: "March 19, 2025",
      author: "Michael Chen",
      image: "https://readdy.ai/api/search-image?query=Dynamic%20Megaways%20slot%20machine%20with%20cascading%20reels%20showing%20multiple%20ways%20to%20win%2C%20colorful%20symbols%20falling%20like%20dominos%2C%20modern%20casino%20interface%20with%20IK118%20strategy%20overlay&width=800&height=500&seq=slot-games-article-004&orientation=landscape",
      href: "/slot-games/megaways-slots-strategy",
      views: "31.2K"
    },
    {
      title: "Slot Volatility Guide: High vs Low Variance Gaming",
      excerpt: "IK118 explains slot volatility levels and helps you choose games that match your risk tolerance and bankroll management strategy.",
      category: "Strategy",
      readTime: "8 min read",
      publishDate: "February 25, 2025",
      author: "Lisa Anderson",
      image: "https://readdy.ai/api/search-image?query=Risk%20assessment%20concept%20for%20slot%20gaming%20with%20balance%20scales%20showing%20high%20and%20low%20volatility%20symbols%2C%20professional%20gaming%20analysis%20setup%20with%20IK118%20strategic%20guidance&width=800&height=500&seq=slot-games-article-005&orientation=landscape",
      href: "/slot-games/slot-volatility-guide",
      views: "22.9K"
    },
    {
      title: "Branded Slots Review: Movies, TV Shows & Pop Culture Games",
      excerpt: "Explore the world of branded slots with IK118's comprehensive reviews of movie, TV, and pop culture-themed games and their unique features.",
      category: "Game Reviews",
      readTime: "13 min read",
      publishDate: "January 18, 2025",
      author: "David Roberts",
      image: "https://readdy.ai/api/search-image?query=Collection%20of%20branded%20slot%20games%20showing%20movie%20and%20TV%20show%20themed%20slot%20machines%20with%20famous%20characters%2C%20logos%2C%20and%20entertainment%20franchise%20elements%20with%20IK118%20review%20branding&width=800&height=500&seq=slot-games-article-006&orientation=landscape",
      href: "/slot-games/branded-slots-review",
      views: "27.4K"
    },
    {
      title: "Slot Bankroll Management: Protect Your Funds Like a Pro",
      excerpt: "Master bankroll management for slots with IK118's proven strategies for sustainable gaming, loss limits, and session planning.",
      category: "Strategy",
      readTime: "10 min read",
      publishDate: "June 8, 2025",
      author: "Rachel Foster",
      image: "https://readdy.ai/api/search-image?query=Professional%20bankroll%20management%20setup%20with%20calculator%2C%20charts%20showing%20win-loss%20tracking%20for%20slots%2C%20budget%20planning%20documents%20and%20financial%20strategy%20tools%20with%20IK118%20branding&width=800&height=500&seq=slot-games-article-007&orientation=landscape",
      href: "/slot-games/slot-bankroll-management",
      views: "19.6K"
    },
    {
      title: "Mobile Slots Optimization: Best Apps and Touch Gaming",
      excerpt: "IK118's guide to mobile slot gaming, featuring the best apps, touch controls, and optimization tips for smartphone and tablet play.",
      category: "Mobile Gaming",
      readTime: "9 min read",
      publishDate: "May 14, 2025",
      author: "Alex Kumar",
      image: "https://readdy.ai/api/search-image?query=Modern%20smartphone%20displaying%20colorful%20mobile%20slot%20game%20interface%20with%20spinning%20reels%2C%20touch%20controls%2C%20and%20premium%20mobile%20casino%20app%20design%20with%20IK118%20mobile%20gaming%20analysis&width=800&height=500&seq=slot-games-article-008&orientation=landscape",
      href: "/slot-games/mobile-slots-optimization",
      views: "24.1K"
    },
    {
      title: "Classic vs Video Slots: Which Style Suits Your Play?",
      excerpt: "IK118 compares traditional 3-reel classic slots with modern video slots to help you choose the perfect gaming experience.",
      category: "Game Types",
      readTime: "7 min read",
      publishDate: "April 22, 2025",
      author: "Thomas Burke",
      image: "https://readdy.ai/api/search-image?query=Side%20by%20side%20comparison%20of%20classic%20fruit%20machine%20slots%20and%20modern%20video%20slot%20with%20vibrant%20graphics%2C%20showing%20evolution%20of%20gaming%20technology%20with%20IK118%20comparison%20analysis&width=800&height=500&seq=slot-games-article-009&orientation=landscape",
      href: "/slot-games/classic-vs-video-slots",
      views: "18.3K"
    },
    {
      title: "Slot Myths Debunked: Facts vs Fiction in 2025",
      excerpt: "IK118 exposes common slot myths and misconceptions with scientific evidence and mathematical analysis to educate players.",
      category: "Education",
      readTime: "11 min read",
      publishDate: "March 5, 2025",
      author: "Dr. Patricia Moore",
      image: "https://readdy.ai/api/search-image?query=Educational%20infographic%20showing%20slot%20myths%20being%20debunked%20with%20scientific%20data%2C%20fact-checking%20symbols%2C%20mathematical%20formulas%20and%20IK118%20expert%20verification%20badges&width=800&height=500&seq=slot-games-article-010&orientation=landscape",
      href: "/slot-games/slot-myths-debunked",
      views: "21.7K"
    },
    {
      title: "Bonus Buy Slots Guide: Are Feature Purchases Worth It?",
      excerpt: "IK118 analyzes bonus buy features in slots, calculating expected value and providing strategic advice for feature purchase decisions.",
      category: "Bonus Features",
      readTime: "10 min read",
      publishDate: "February 11, 2025",
      author: "Jennifer Walsh",
      image: "https://readdy.ai/api/search-image?query=Modern%20slot%20interface%20showing%20bonus%20buy%20feature%20with%20price%20calculations%2C%20risk-reward%20analysis%20charts%20and%20mathematical%20probability%20displays%20with%20IK118%20expert%20evaluation&width=800&height=500&seq=slot-games-article-011&orientation=landscape",
      href: "/slot-games/bonus-buy-slots-guide",
      views: "26.8K"
    },
    {
      title: "Slot Providers Comparison: NetEnt vs Pragmatic vs Microgaming",
      excerpt: "IK118's comprehensive comparison of top slot providers, analyzing game quality, RTP rates, innovation, and player experience.",
      category: "Game Providers",
      readTime: "14 min read",
      publishDate: "January 27, 2025",
      author: "Mark Stevens",
      image: "https://readdy.ai/api/search-image?query=Professional%20comparison%20chart%20showing%20logos%20and%20game%20screenshots%20from%20major%20slot%20providers%20NetEnt%20Pragmatic%20Microgaming%20with%20quality%20ratings%20and%20IK118%20analysis%20branding&width=800&height=500&seq=slot-games-article-012&orientation=landscape",
      href: "/slot-games/slot-providers-comparison",
      views: "17.9K"
    },
    {
      title: "Themed Slots Collection: Adventure, Fantasy & Ancient Worlds",
      excerpt: "Explore IK118's curated collection of themed slots, from ancient civilizations to fantasy realms and adventure quests.",
      category: "Game Reviews",
      readTime: "12 min read",
      publishDate: "June 3, 2025",
      author: "Sophie Chen",
      image: "https://readdy.ai/api/search-image?query=Collection%20of%20themed%20slot%20games%20showing%20adventure%20fantasy%20and%20ancient%20civilization%20themes%20with%20mystical%20symbols%2C%20treasure%20chests%20and%20epic%20backgrounds%20with%20IK118%20collection%20branding&width=800&height=500&seq=slot-games-article-013&orientation=landscape",
      href: "/slot-games/themed-slots-collection",
      views: "23.5K"
    },
    {
      title: "Slot Bonus Hunting: Maximizing Free Spins and Promotions",
      excerpt: "Learn professional bonus hunting techniques from IK118, including wagering requirements, terms analysis, and value extraction.",
      category: "Bonuses",
      readTime: "9 min read",
      publishDate: "May 20, 2025",
      author: "Ryan Mitchell",
      image: "https://readdy.ai/api/search-image?query=Promotional%20bonus%20offers%20display%20for%20slots%20with%20free%20spin%20vouchers%2C%20cashback%20rewards%2C%20loyalty%20programs%20and%20special%20promotions%20with%20IK118%20bonus%20hunting%20strategy&width=800&height=500&seq=slot-games-article-014&orientation=landscape",
      href: "/slot-games/slot-bonus-hunting",
      views: "20.2K"
    },
    {
      title: "Responsible Slot Gaming: Setting Limits and Staying Safe",
      excerpt: "IK118's essential guide to responsible slot gaming, covering self-exclusion, deposit limits, and recognizing problem gambling signs.",
      category: "Responsible Gaming",
      readTime: "10 min read",
      publishDate: "April 6, 2025",
      author: "Dr. Elena Rodriguez",
      image: "https://readdy.ai/api/search-image?query=Supportive%20counseling%20environment%20with%20responsible%20gaming%20materials%20for%20slots%2C%20self-assessment%20tools%2C%20limit%20setting%20guides%20and%20help%20resources%20with%20IK118%20care%20branding&width=800&height=500&seq=slot-games-article-015&orientation=landscape",
      href: "/slot-games/responsible-slot-gaming",
      views: "16.4K"
    },
    {
      title: "Cluster Pays Slots: Revolutionary Ways to Win",
      excerpt: "Discover cluster pays mechanics with IK118's guide to this innovative slot format, featuring best games and winning strategies.",
      category: "Game Mechanics",
      readTime: "8 min read",
      publishDate: "March 13, 2025",
      author: "Amanda Foster",
      image: "https://readdy.ai/api/search-image?query=Colorful%20cluster%20pays%20slot%20showing%20connected%20symbols%20forming%20winning%20clusters%2C%20cascading%20effects%2C%20multipliers%20and%20innovative%20game%20grid%20with%20IK118%20mechanics%20explanation&width=800&height=500&seq=slot-games-article-016&orientation=landscape",
      href: "/slot-games/cluster-pays-slots",
      views: "19.8K"
    },
    {
      title: "Slot Tournaments Strategy: Competing for Big Prizes",
      excerpt: "Master slot tournaments with IK118's expert strategies for leaderboard climbing, time management, and prize maximization.",
      category: "Tournaments",
      readTime: "11 min read",
      publishDate: "February 18, 2025",
      author: "Kevin Park",
      image: "https://readdy.ai/api/search-image?query=Slot%20tournament%20leaderboard%20display%20showing%20competitive%20rankings%2C%20prize%20pools%2C%20timer%20countdown%20and%20multiple%20players%20competing%20with%20IK118%20tournament%20strategy%20overlay&width=800&height=500&seq=slot-games-article-017&orientation=landscape",
      href: "/slot-games/slot-tournaments-strategy",
      views: "15.6K"
    },
    {
      title: "Slot Free Spins Strategy: Maximizing Bonus Round Wins",
      excerpt: "IK118's advanced guide to free spins features, covering trigger mechanics, multipliers, retriggers, and optimal betting strategies.",
      category: "Bonus Features",
      readTime: "9 min read",
      publishDate: "January 9, 2025",
      author: "Lucas Martinez",
      image: "https://readdy.ai/api/search-image?query=Exciting%20free%20spins%20bonus%20round%20on%20slot%20machine%20with%20spinning%20reels%2C%20multiplier%20symbols%2C%20retrigger%20notifications%20and%20golden%20free%20spin%20counters%20with%20IK118%20strategy%20theme&width=800&height=500&seq=slot-games-article-018&orientation=landscape",
      href: "/slot-games/slot-free-spins-strategy",
      views: "22.1K"
    }
  ];

  const categories = [
    'All',
    'Progressive Jackpots',
    'Bonus Features',
    'Game Selection',
    'Game Mechanics',
    'Strategy',
    'Game Reviews',
    'Mobile Gaming',
    'Game Types',
    'Education',
    'Game Providers',
    'Bonuses',
    'Responsible Gaming',
    'Tournaments'
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
      
      const response = await fetch('https://readdy.ai/api/form/d4tpagq2t66nrlpqf0g0', {
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
            Latest Slot Games Articles & Guides
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with <strong className="text-purple-900">IK118's</strong> latest insights, expert analysis, and proven strategies for slot gaming success.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-6 h-6 bg-purple-900 rounded-lg flex items-center justify-center mr-3">
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
                        ? 'bg-purple-900 text-white'
                        : 'text-gray-600 hover:bg-purple-50 hover:text-purple-900'
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
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="text-white font-bold text-xs">#{index + 1}</span>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 group-hover:text-purple-900 transition-colors leading-tight mb-1">
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

            <div className="bg-gradient-to-br from-purple-900 to-pink-900 text-white rounded-2xl p-6">
              {!isSubmitted ? (
                <form 
                  id="slot-games-sidebar-newsletter"
                  onSubmit={handleNewsletterSubmit}
                  data-readdy-form
                >
                  <div className="text-center">
                    <div className="w-10 h-10 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <i className="ri-mail-fill text-purple-900 text-lg"></i>
                    </div>
                    <h3 className="text-lg font-bold mb-2">Weekly Slot Insights</h3>
                    <p className="text-purple-100 text-sm mb-4">
                      Get IK118's expert tips delivered to your inbox
                    </p>
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email"
                      className="w-full px-3 py-2 rounded-lg text-gray-900 text-sm mb-3 focus:ring-2 focus:ring-purple-400 focus:outline-none"
                      required
                    />
                    <button
                      type="submit"
                      className="block w-full bg-purple-500 hover:bg-purple-600 text-purple-900 text-center px-4 py-2 rounded-lg font-semibold transition-colors text-sm cursor-pointer whitespace-nowrap"
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
                  <p className="text-purple-100 text-sm">
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
                    in <span className="font-semibold text-purple-900">{selectedCategory}</span>
                  </span>
                )}
              </div>
              {selectedCategory !== 'All' && (
                <button
                  onClick={() => handleCategoryChange('All')}
                  className="text-purple-600 hover:text-purple-800 text-sm font-medium cursor-pointer whitespace-nowrap"
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
                      <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full mr-2">
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
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-900 transition-colors leading-tight">
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
                      : 'text-gray-600 hover:text-purple-900 hover:bg-purple-50'
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
                        ? 'bg-purple-900 text-white'
                        : 'text-gray-600 hover:text-purple-900 hover:bg-purple-50'
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
                      : 'text-gray-600 hover:text-purple-900 hover:bg-purple-50'
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
