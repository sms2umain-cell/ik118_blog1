import Link from 'next/link';

export default function GameCategories() {
  const categories = [
    {
      title: "Pokies & Slots",
      description: "Discover the latest and greatest slot machines with exciting themes and massive jackpots",
      icon: "ri-game-line",
      image: "https://readdy.ai/api/search-image?query=colorful%20slot%20machine%20reels%20with%20golden%20coins%20and%20blue%20background%2C%20vibrant%20pokies%20game%20interface%20with%20spinning%20symbols%20and%20jackpot%20displays%2C%20modern%20slot%20game%20design%20with%20rich%20colors%20and%20premium%20gaming%20elements&width=300&height=200&seq=pokies1&orientation=landscape",
      count: "500+ Games",
      link: "/pokies"
    },
    {
      title: "Live Casino",
      description: "Experience authentic casino action with professional dealers in real-time",
      icon: "ri-live-line",
      image: "https://readdy.ai/api/search-image?query=professional%20live%20casino%20dealer%20at%20elegant%20gaming%20table%20with%20blue%20and%20gold%20casino%20interior%2C%20live%20blackjack%20game%20in%20progress%20with%20sophisticated%20lighting%2C%20premium%20live%20gaming%20environment%20with%20luxury%20casino%20atmosphere&width=300&height=200&seq=live1&orientation=landscape",
      count: "24/7 Live",
      link: "/live-games"
    },
    {
      title: "Sports Betting",
      description: "Get the best odds and insights for Australian and international sports",
      icon: "ri-football-line",
      image: "https://readdy.ai/api/search-image?query=sports%20betting%20interface%20showing%20Australian%20football%20matches%20with%20blue%20and%20gold%20theme%2C%20modern%20sportsbook%20display%20with%20live%20odds%20and%20statistics%2C%20professional%20sports%20betting%20platform%20with%20clean%20design%20and%20data%20visualization&width=300&height=200&seq=sports1&orientation=landscape",
      count: "All Sports",
      link: "/sports-betting"
    },
    {
      title: "Table Games",
      description: "Master classic casino games like blackjack, roulette, and baccarat",
      icon: "ri-funds-line",
      image: "https://readdy.ai/api/search-image?query=elegant%20casino%20table%20games%20including%20roulette%20wheel%20and%20blackjack%20table%20with%20blue%20felt%20and%20golden%20accents%2C%20premium%20casino%20gaming%20tables%20with%20sophisticated%20lighting%20and%20professional%20setup&width=300&height=200&seq=table1&orientation=landscape",
      count: "Classic Games",
      link: "/table-games"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Explore Gaming Categories</h2>
          <p className="text-xl text-blue-700 max-w-2xl mx-auto">
            Dive into comprehensive reviews, strategies, and insights across all your favorite gaming categories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <Link key={index} href={category.link} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer group">
              <div className="relative overflow-hidden rounded-t-xl">
                <img 
                  src={category.image}
                  alt={category.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-amber-500 text-blue-900 px-3 py-1 rounded-full text-sm font-semibold">
                  {category.count}
                </div>
              </div>
              <div className="p-6">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-lg mb-4">
                  <i className={`${category.icon} text-2xl text-blue-600`}></i>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">{category.title}</h3>
                <p className="text-blue-600 mb-4">{category.description}</p>
                <span className="text-amber-600 font-semibold hover:text-amber-700 transition-colors whitespace-nowrap">
                  Learn More →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}