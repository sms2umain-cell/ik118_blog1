import Link from 'next/link';

export default function FeaturedContent() {
  const articles = [
    {
      title: "Top 10 Pokies to Play in 2025",
      excerpt: "Discover the most exciting and rewarding pokies games available to Australian players this year",
      image: "https://readdy.ai/api/search-image?query=collection%20of%20top%20slot%20machine%20games%20displayed%20on%20screens%20with%20golden%20frames%20and%20blue%20background%2C%20premium%20pokies%20showcase%20with%20vibrant%20game%20thumbnails%2C%20modern%20casino%20game%20selection%20interface%20with%20elegant%20design&width=400&height=250&seq=featured1&orientation=landscape",
      category: "Pokies",
      readTime: "5 min read",
      date: "Dec 15, 2025",
      link: "/pokies/best-pokies-2024"
    },
    {
      title: "Live Dealer Games: The Ultimate Guide", 
      excerpt: "Everything you need to know about playing live casino games with real dealers online",
      image: "https://readdy.ai/api/search-image?query=professional%20live%20casino%20dealer%20in%20elegant%20studio%20with%20multiple%20camera%20angles%2C%20sophisticated%20live%20gaming%20setup%20with%20blue%20and%20gold%20branding%2C%20premium%20live%20dealer%20environment%20with%20high-tech%20equipment&width=400&height=250&seq=featured2&orientation=landscape",
      category: "Live Casino",
      readTime: "8 min read", 
      date: "Dec 12, 2025",
      link: "/live-games/live-dealer-etiquette"
    },
    {
      title: "Australian Sports Betting Strategies",
      excerpt: "Expert tips and strategies for successful sports betting on AFL, NRL, and international sports",
      image: "https://readdy.ai/api/search-image?query=Australian%20sports%20betting%20analysis%20with%20AFL%20and%20NRL%20team%20statistics%20displayed%20on%20modern%20screens%2C%20sports%20data%20visualization%20with%20blue%20and%20gold%20color%20scheme%2C%20professional%20sports%20analytics%20workspace&width=400&height=250&seq=featured3&orientation=landscape",
      category: "Sports",
      readTime: "6 min read",
      date: "Dec 10, 2025",
      link: "/sports-betting/afl-betting-guide"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Featured Articles & Guides</h2>
          <p className="text-xl text-blue-700 max-w-2xl mx-auto">
            Stay updated with our latest gaming insights, reviews, and expert analysis
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Link key={index} href={article.link}>
              <article className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer group">
                <div className="relative overflow-hidden rounded-t-xl">
                  <img 
                    src={article.image}
                    alt={article.title}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-amber-500 text-blue-900 px-3 py-1 rounded-full text-sm font-semibold">
                    {article.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-blue-500 mb-3">
                    <span>{article.date}</span>
                    <span className="mx-2">•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3 group-hover:text-blue-700 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-blue-600 mb-4 line-clamp-3">{article.excerpt}</p>
                  <span className="text-amber-600 font-semibold hover:text-amber-700 transition-colors whitespace-nowrap">
                    Read More →
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/guides" className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap inline-block">
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}