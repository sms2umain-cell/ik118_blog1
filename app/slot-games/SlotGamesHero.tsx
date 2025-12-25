import Link from 'next/link';

export default function SlotGamesHero() {
  return (
    <section className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img 
          src="https://readdy.ai/api/search-image?query=Luxurious%20online%20casino%20slot%20games%20with%20spinning%20reels%2C%20golden%20jackpot%20symbols%2C%20colorful%20bonus%20features%2C%20vibrant%20neon%20lights%20and%20digital%20displays%20in%20a%20premium%20gaming%20environment%20with%20purple%20and%20blue%20gradient%20background&width=1920&height=800&seq=slotgames-hero-bg-001&orientation=landscape"
          alt="Slot Games Background"
          className="w-full h-full object-cover object-top"
        />
      </div>
      
      <div className="relative container mx-auto px-6 py-24">
        <div className="max-w-4xl">
          <div className="inline-block bg-amber-500 text-blue-900 px-4 py-2 rounded-full text-sm font-bold mb-6">
            IK118 SLOT GAMES GUIDE
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Master the Art of <span className="text-amber-400">Slot Games</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
            Unlock winning strategies, discover the best slot games, and maximize your jackpot potential with IK118's expert guides and comprehensive reviews.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/20">
              <div className="text-amber-400 font-bold text-2xl">500+</div>
              <div className="text-sm text-gray-300">Slot Games Reviewed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/20">
              <div className="text-amber-400 font-bold text-2xl">98%</div>
              <div className="text-sm text-gray-300">Top RTP Games</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/20">
              <div className="text-amber-400 font-bold text-2xl">24/7</div>
              <div className="text-sm text-gray-300">Expert Support</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </section>
  );
}