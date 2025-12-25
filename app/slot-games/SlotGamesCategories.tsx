export default function SlotGamesCategories() {
  const categories = [
    {
      title: 'Progressive Jackpots',
      description: 'Chase life-changing wins with massive progressive jackpot slots',
      icon: 'ri-money-dollar-circle-line',
      count: '150+',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Megaways Slots',
      description: 'Experience dynamic gameplay with up to 117,649 ways to win',
      icon: 'ri-stack-line',
      count: '200+',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'High RTP Slots',
      description: 'Play slots with the best return-to-player percentages',
      icon: 'ri-percent-line',
      count: '180+',
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Branded Slots',
      description: 'Enjoy slots featuring your favorite movies, TV shows & brands',
      icon: 'ri-film-line',
      count: '120+',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Classic Slots',
      description: 'Traditional 3-reel slots with simple gameplay and nostalgia',
      icon: 'ri-trophy-line',
      count: '90+',
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Video Slots',
      description: 'Modern 5-reel slots with advanced features and animations',
      icon: 'ri-gamepad-line',
      count: '300+',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Explore Slot Game Categories at IK118
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover your perfect slot game from our extensive collection. IK118 offers the most comprehensive selection of online slots in Australia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <div className={`w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br ${category.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <i className={`${category.icon} text-3xl text-white`}></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
                {category.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {category.description}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="text-sm font-semibold text-gray-500">
                  {category.count} Games
                </span>
                <i className="ri-arrow-right-line text-xl text-gray-400 group-hover:text-purple-600 group-hover:translate-x-2 transition-all duration-300"></i>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-center text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-4xl font-bold mb-2">1,000+</div>
              <div className="text-purple-100">Total Slot Games</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-purple-100">Game Providers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">97.5%</div>
              <div className="text-purple-100">Average RTP</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-purple-100">Available Gaming</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}