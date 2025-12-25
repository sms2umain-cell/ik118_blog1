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
      title: "Top 10 Progressive Jackpot Pokies in Australia 2025",
      excerpt: "IK118's comprehensive review of the biggest progressive jackpot pokies available to Australian players, featuring current jackpot amounts and winning strategies.",
      category: "Progressive Jackpots",
      readTime: "8 min read",
      publishDate: "June 22, 2025",
      author: "Sarah Mitchell",
      image: "https://readdy.ai/api/search-image?query=Massive%20progressive%20jackpot%20pokies%20machine%20displaying%20million%20dollar%20amounts%20on%20digital%20screens%2C%20golden%20coins%20cascading%2C%20luxury%20casino%20environment%20with%20dramatic%20lighting%20and%20IK118%20branding&width=800&height=500&seq=pokies-article-001&orientation=landscape",
      href: "/pokies/top-10-progressive-jackpots-2024",
      featured: true,
      views: "24.5K"
    },
    {
      title: "Megaways Pokies: Complete Guide to 117,649 Ways to Win",
      excerpt: "Discover how Megaways pokies revolutionized online gaming with IK118's detailed analysis of mechanics, best games, and winning potential.",
      category: "Game Mechanics",
      readTime: "12 min read",
      publishDate: "May 18, 2025",
      author: "James Thompson",
      image: "https://readdy.ai/api/search-image?query=Dynamic%20Megaways%20slot%20machine%20with%20cascading%20reels%20showing%20multiple%20ways%20to%20win%2C%20colorful%20symbols%20falling%20like%20dominos%2C%20modern%20casino%20interface%20with%20IK118%20elements&width=800&height=500&seq=pokies-article-002&orientation=landscape",
      href: "/pokies/megaways-complete-guide",
      views: "18.2K"
    },
    {
      title: "RTP Explained: Finding the Best Value Pokies Games",
      excerpt: "IK118 breaks down Return to Player percentages, helping Australian players identify the most rewarding pokies games for their bankroll.",
      category: "Strategy",
      readTime: "6 min read",
      publishDate: "April 9, 2025",
      author: "Emma Wilson",
      image: "https://readdy.ai/api/search-image?query=Professional%20data%20analysis%20chart%20showing%20RTP%20percentages%20for%20various%20pokies%20games%2C%20calculator%20and%20statistics%20on%20elegant%20desk%20with%20IK118%20branding%20elements&width=800&height=500&seq=pokies-article-003&orientation=landscape",
      href: "/pokies/rtp-explained-best-value-games",
      views: "15.7K"
    },
    {
      title: "Free Spins Bonus Rounds: Maximizing Your Winnings",
      excerpt: "Learn how to trigger and optimize free spin features in pokies with expert tips from IK118's gaming specialists.",
      category: "Bonus Features",
      readTime: "10 min read",
      publishDate: "March 27, 2025",
      author: "Michael Chen",
      image: "https://readdy.ai/api/search-image?query=Exciting%20free%20spins%20bonus%20round%20on%20pokies%20machine%20with%20spinning%20reels%2C%20multiplier%20symbols%2C%20celebration%20effects%20and%20golden%20free%20spin%20counters%20with%20IK118%20theme&width=800&height=500&seq=pokies-article-004&orientation=landscape",
      href: "/pokies/free-spins-bonus-guide",
      views: "22.1K"
    },
    {
      title: "Classic vs Modern Pokies: Which Style Suits You?",
      excerpt: "IK118 compares traditional 3-reel pokies with modern video slots to help players choose their preferred gaming experience.",
      category: "Game Types",
      readTime: "7 min read",
      publishDate: "February 14, 2025",
      author: "Lisa Anderson",
      image: "https://readdy.ai/api/search-image?query=Side%20by%20side%20comparison%20of%20classic%20fruit%20machine%20pokies%20and%20modern%20video%20slot%20with%20vibrant%20graphics%2C%20showing%20evolution%20of%20gaming%20technology%20with%20IK118%20branding&width=800&height=500&seq=pokies-article-005&orientation=landscape",
      href: "/pokies/classic-vs-modern-pokies",
      views: "13.9K"
    },
    {
      title: "Volatility in Pokies: High Risk vs Low Risk Gaming",
      excerpt: "Understand pokies volatility levels and how to choose games that match your risk tolerance with IK118's expert guidance.",
      category: "Strategy",
      readTime: "9 min read",
      publishDate: "January 25, 2025",
      author: "David Roberts",
      image: "https://readdy.ai/api/search-image?query=Risk%20assessment%20concept%20for%20pokies%20gaming%20with%20balance%20scales%20showing%20high%20and%20low%20volatility%20symbols%2C%20professional%20gaming%20analysis%20setup%20with%20IK118%20elements&width=800&height=500&seq=pokies-article-006&orientation=landscape",
      href: "/pokies/understanding-volatility",
      views: "16.8K"
    },
    {
      title: "Australian Pokies Providers: Aristocrat vs Microgaming vs NetEnt",
      excerpt: "IK118's comprehensive comparison of top pokies providers, analyzing game quality, RTP rates, and innovation in the Australian market.",
      category: "Game Providers",
      readTime: "11 min read",
      publishDate: "June 11, 2025",
      author: "Rachel Foster",
      image: "https://readdy.ai/api/search-image?query=Professional%20comparison%20chart%20showing%20logos%20and%20game%20screenshots%20from%20major%20pokies%20providers%20Aristocrat%20Microgaming%20NetEnt%20with%20quality%20ratings%20and%20IK118%20analysis%20branding&width=800&height=500&seq=pokies-article-007&orientation=landscape",
      href: "/pokies/providers-comparison-guide",
      views: "11.4K"
    },
    {
      title: "Mobile Pokies Guide: Best Apps and Mobile Casinos 2025",
      excerpt: "Discover the top mobile pokies apps and responsive casino platforms with IK118's expert reviews of features, game selection, and user experience.",
      category: "Mobile Gaming",
      readTime: "8 min read",
      publishDate: "May 3, 2025",
      author: "Alex Kumar",
      image: "https://readdy.ai/api/search-image?query=Modern%20smartphone%20displaying%20colorful%20mobile%20pokies%20game%20interface%20with%20spinning%20reels%2C%20touch%20controls%2C%20and%20premium%20mobile%20casino%20app%20design%20with%20IK118%20elements&width=800&height=500&seq=pokies-article-008&orientation=landscape",
      href: "/pokies/mobile-pokies-guide",
      views: "19.3K"
    },
    {
      title: "Pokies Bankroll Management: Protect Your Funds Like a Pro",
      excerpt: "Master advanced bankroll management techniques with IK118's proven strategies for sustainable pokies gaming and loss prevention.",
      category: "Strategy",
      readTime: "13 min read",
      publishDate: "April 19, 2025",
      author: "Thomas Burke",
      image: "https://readdy.ai/api/search-image?query=Professional%20bankroll%20management%20setup%20with%20calculator%2C%20charts%20showing%20win-loss%20tracking%2C%20budget%20planning%20documents%2C%20and%20financial%20strategy%20tools%20with%20IK118%20branding%20elements&width=800&height=500&seq=pokies-article-009&orientation=landscape",
      href: "/pokies/bankroll-management-guide",
      views: "14.2K"
    },
    {
      title: "Lightning Link Pokies: Complete Strategy and Review Guide",
      excerpt: "IK118's in-depth analysis of the Lightning Link series, including Hold & Spin mechanics, jackpot strategies, and best gameplay tips.",
      category: "Popular Games",
      readTime: "9 min read",
      publishDate: "March 8, 2025",
      author: "Jennifer Walsh",
      image: "https://readdy.ai/api/search-image?query=Lightning%20Link%20pokies%20machine%20showing%20electric%20lightning%20effects%2C%20Hold%20and%20Spin%20feature%20active%20with%20golden%20coins%2C%20dramatic%20casino%20lighting%20and%20IK118%20expert%20analysis%20overlay&width=800&height=500&seq=pokies-article-010&orientation=landscape",
      href: "/pokies/lightning-link-strategy",
      views: "26.7K"
    },
    {
      title: "Pokies Myths Debunked: Separating Facts from Fiction",
      excerpt: "IK118 exposes common pokies myths and misconceptions, providing scientific evidence and mathematical analysis to educate Australian players.",
      category: "Education",
      readTime: "10 min read",
      publishDate: "February 21, 2025",
      author: "Dr. Patricia Moore",
      image: "https://readdy.ai/api/search-image?query=Educational%20infographic%20showing%20pokies%20myths%20being%20debunked%20with%20scientific%20data%2C%20fact-checking%20symbols%2C%20mathematical%20formulas%2C%20and%20IK118%20expert%20verification%20badges&width=800&height=500&seq=pokies-article-011&orientation=landscape",
      href: "/pokies/myths-debunked",
      views: "17.9K"
    },
    {
      title: "Buffalo Gold and Buffalo Series: Complete Game Analysis",
      excerpt: "Explore the popular Buffalo pokies series with IK118's detailed review of features, volatility, RTP rates, and winning strategies.",
      category: "Game Reviews",
      readTime: "7 min read",
      publishDate: "January 12, 2025",
      author: "Mark Stevens",
      image: "https://readdy.ai/api/search-image?query=Buffalo%20Gold%20pokies%20game%20showing%20majestic%20buffalo%20symbols%2C%20American%20plains%20backdrop%2C%20golden%20sunset%2C%20free%20spins%20bonus%20feature%20with%20IK118%20analysis%20elements&width=800&height=500&seq=pokies-article-012&orientation=landscape",
      href: "/pokies/buffalo-series-review",
      views: "20.5K"
    },
    {
      title: "Bonus Buy Features: Are They Worth Your Money?",
      excerpt: "IK118 analyzes bonus buy options in modern pokies, calculating expected value and providing strategic advice for Australian players.",
      category: "Bonus Features",
      readTime: "8 min read",
      publishDate: "June 5, 2025",
      author: "Sophie Chen",
      image: "https://readdy.ai/api/search-image?query=Modern%20pokies%20interface%20showing%20bonus%20buy%20feature%20with%20price%20calculations%2C%20risk-reward%20analysis%20charts%2C%20and%20mathematical%20probability%20displays%20with%20IK118%20expert%20evaluation&width=800&height=500&seq=pokies-article-013&orientation=landscape",
      href: "/pokies/bonus-buy-analysis",
      views: "12.6K"
    },
    {
      title: "Cluster Pays Pokies: New Ways to Win Big",
      excerpt: "Discover the innovative cluster pays mechanism with IK118's comprehensive guide to games, strategies, and maximum winning potential.",
      category: "Game Mechanics",
      readTime: "9 min read",
      publishDate: "May 24, 2025",
      author: "Ryan Mitchell",
      image: "https://readdy.ai/api/search-image?query=Colorful%20cluster%20pays%20pokies%20showing%20connected%20symbols%20forming%20winning%20clusters%2C%20cascading%20effects%2C%20multipliers%2C%20and%20innovative%20game%20grid%20with%20IK118%20technical%20analysis&width=800&height=500&seq=pokies-article-014&orientation=landscape",
      href: "/pokies/cluster-pays-guide",
      views: "15.3K"
    },
    {
      title: "Themed Pokies Guide: Movies, TV Shows, and Pop Culture",
      excerpt: "IK118 explores branded pokies featuring popular themes, licensing deals, and how entertainment franchises translate to gaming success.",
      category: "Game Types",
      readTime: "11 min read",
      publishDate: "April 30, 2025",
      author: "Amanda Foster",
      image: "https://readdy.ai/api/search-image?query=Collection%20of%20themed%20pokies%20showing%20movie%20and%20TV%20show%20branded%20slot%20machines%20with%20famous%20characters%2C%20logos%2C%20and%20entertainment%20franchise%20elements%20with%20IK118%20branding&width=800&height=500&seq=pokies-article-015&orientation=landscape",
      href: "/pokies/themed-pokies-guide",
      views: "18.7K"
    },
    {
      title: "Pokies Tournament Strategy: Competing for Big Prizes",
      excerpt: "Master pokies tournaments with IK118's expert strategies for leaderboard climbing, time management, and maximizing prize potential.",
      category: "Tournaments",
      readTime: "12 min read",
      publishDate: "March 16, 2025",
      author: "Kevin Park",
      image: "https://readdy.ai/api/search-image?query=Pokies%20tournament%20leaderboard%20display%20showing%20competitive%20rankings%2C%20prize%20pools%2C%20timer%20countdown%2C%20and%20multiple%20players%20competing%20with%20IK118%20tournament%20strategy%20overlay&width=800&height=500&seq=pokies-article-016&orientation=landscape",
      href: "/pokies/tournament-strategy",
      views: "9.8K"
    },
    {
      title: "Pokies Psychology: Understanding Player Behavior and Addiction",
      excerpt: "IK118 examines the psychological aspects of pokies gaming, responsible gambling practices, and recognizing problematic behavior patterns.",
      category: "Responsible Gaming",
      readTime: "14 min read",
      publishDate: "February 7, 2025",
      author: "Dr. Elena Rodriguez",
      image: "https://readdy.ai/api/search-image?query=Professional%20psychology%20consultation%20setup%20with%20brain%20diagrams%2C%20responsible%20gaming%20materials%2C%20self-assessment%20tools%2C%20and%20supportive%20counseling%20environment%20with%20IK118%20care%20branding&width=800&height=500&seq=pokies-article-017&orientation=landscape",
      href: "/pokies/psychology-responsible-gaming",
      views: "21.4K"
    },
    {
      title: "Cascading Reels and Avalanche Features: Multiplying Wins",
      excerpt: "Learn how cascading reel mechanics work and discover the best avalanche feature pokies with IK118's technical analysis and strategies.",
      category: "Game Mechanics",
      readTime: "8 min read",
      publishDate: "January 29, 2025",
      author: "Lucas Chen",
      image: "https://readdy.ai/api/search-image?query=Cascading%20reels%20pokies%20showing%20symbols%20falling%20and%20disappearing%2C%20new%20symbols%20dropping%20down%2C%20chain%20reactions%2C%20and%20multiplier%20increases%20with%20IK118%20mechanics%20explanation&width=800&height=500&seq=pokies-article-018&orientation=landscape",
      href: "/pokies/cascading-reels-guide",
      views: "13.1K"
    },
    {
      title: "Australian Pokies History: From Mechanical to Digital Evolution",
      excerpt: "IK118 traces the fascinating history of pokies in Australia, from early mechanical machines to today's sophisticated digital experiences.",
      category: "Education",
      readTime: "15 min read",
      publishDate: "June 18, 2025",
      author: "Professor James Clarke",
      image: "https://readdy.ai/api/search-image?query=Historical%20timeline%20showing%20evolution%20of%20Australian%20pokies%20from%20vintage%20mechanical%20slot%20machines%20to%20modern%20digital%20displays%2C%20museum-quality%20presentation%20with%20IK118%20historical%20research%20branding&width=800&height=500&seq=pokies-article-019&orientation=landscape",
      href: "/pokies/australian-pokies-history",
      views: "16.9K"
    },
    {
      title: "VIP Pokies Programs: Maximizing Rewards and Benefits",
      excerpt: "Unlock exclusive pokies benefits with IK118's guide to VIP programs, loyalty rewards, cashback offers, and high-roller perks.",
      category: "VIP Programs",
      readTime: "10 min read",
      publishDate: "May 12, 2025",
      author: "Victoria Sterling",
      image: "https://readdy.ai/api/search-image?query=Luxury%20VIP%20casino%20environment%20with%20exclusive%20pokies%20machines%2C%20premium%20rewards%20display%2C%20golden%20membership%20cards%2C%20and%20high-end%20gaming%20amenities%20with%20IK118%20VIP%20analysis&width=800&height=500&seq=pokies-article-020&orientation=landscape",
      href: "/pokies/vip-programs-guide",
      views: "11.7K"
    }
  ];

  const categories = [
    'All',
    'Strategy', 
    'Game Mechanics', 
    'Popular Games', 
    'Bonus Features',
    'Game Types',
    'Education',
    'Progressive Jackpots',
    'Game Providers',
    'Mobile Gaming',
    'Game Reviews',
    'Tournaments',
    'Responsible Gaming',
    'VIP Programs'
  ];

  // Filter articles by category
  const filteredArticles = selectedCategory === 'All' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  // Pagination logic
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const currentArticles = filteredArticles.slice(startIndex, endIndex);

  // Top articles by views
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
            Latest Pokies Articles & Guides
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with <strong className="text-blue-900">IK118's</strong> latest insights, reviews, and strategies for Australian pokies players.
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
                    href={article.href}
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
                  id="pokies-sidebar-newsletter"
                  onSubmit={handleNewsletterSubmit}
                  data-readdy-form
                >
                  <div className="text-center">
                    <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <i className="ri-mail-fill text-blue-900 text-lg"></i>
                    </div>
                    <h3 className="text-lg font-bold mb-2">Weekly Pokies Insights</h3>
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