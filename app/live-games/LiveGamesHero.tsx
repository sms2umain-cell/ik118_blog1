'use client';

import Link from 'next/link';

export default function LiveGamesHero() {
  return (
    <section 
      className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 text-white py-20 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.8), rgba(88, 28, 135, 0.8)), url('https://readdy.ai/api/search-image?query=Luxurious%20live%20casino%20studio%20interior%20with%20elegant%20gaming%20tables%20professional%20dealers%20warm%20golden%20lighting%20sophisticated%20atmosphere%20with%20modern%20streaming%20equipment%20and%20premium%20gaming%20environment%20blurred%20background%20with%20depth%20of%20field%20effect&width=1920&height=1080&seq=livegames-hero-001&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-block bg-amber-400 text-blue-950 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Updated for 2025
          </div>
        </div>
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 bg-amber-500/20 border border-amber-400/30 rounded-full text-amber-300 text-sm font-medium">
              <i className="ri-live-line w-4 h-4 flex items-center justify-center mr-2"></i>
              IK118 Live Casino Expert Reviews
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Australia's Ultimate
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300 block">
              Live Casino Guide
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover expert strategies, professional dealer insights, and winning tactics for live blackjack, roulette, baccarat, and poker. 
            <strong className="text-amber-300"> IK118</strong> brings you comprehensive guides to master live casino gaming.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <i className="ri-medal-fill text-2xl text-amber-400"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">Expert Strategies</h3>
              <p className="text-blue-100 text-sm">Professional live dealer tactics by IK118 gaming experts</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <i className="ri-line-chart-fill text-2xl text-amber-400"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">Game Analysis</h3>
              <p className="text-blue-100 text-sm">Detailed odds, house edges, and optimal betting strategies</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <i className="ri-live-fill text-2xl text-amber-400"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">Real-Time Tips</h3>
              <p className="text-blue-100 text-sm">Live dealer etiquette and interactive gaming guidance</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-purple-900/50"></div>
    </section>
  );
}