
'use client';

import Link from 'next/link';

export default function PokiesHero() {
  return (
    <section 
      className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 text-white py-20 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.8), rgba(88, 28, 135, 0.8)), url('https://readdy.ai/api/search-image?query=Luxurious%20casino%20interior%20with%20elegant%20pokies%20slot%20machines%2C%20warm%20golden%20lighting%2C%20sophisticated%20atmosphere%20with%20modern%20digital%20displays%20and%20premium%20gaming%20environment%2C%20blurred%20background%20with%20depth%20of%20field%20effect&width=1920&height=1080&seq=pokies-hero-001&orientation=landscape')`,
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
              <i className="ri-star-fill w-4 h-4 flex items-center justify-center mr-2"></i>
              IK118 Pokies Expert Reviews
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Australia's Ultimate
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300 block">
              Pokies Guide
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover expert reviews, winning strategies, and the latest insights on Australia's best pokies games. 
            <strong className="text-amber-300"> IK118</strong> brings you comprehensive guides to maximize your gaming experience.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <i className="ri-medal-fill text-2xl text-amber-400"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">Expert Reviews</h3>
              <p className="text-blue-100 text-sm">In-depth analysis of Australia's top pokies games by IK118 gaming experts</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <i className="ri-line-chart-fill text-2xl text-amber-400"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">RTP Analysis</h3>
              <p className="text-blue-100 text-sm">Detailed return-to-player rates and volatility insights for informed gaming</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <i className="ri-gift-fill text-2xl text-amber-400"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">Bonus Guides</h3>
              <p className="text-blue-100 text-sm">Comprehensive guides to pokies bonuses, free spins, and special features</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-purple-900/50"></div>
    </section>
  );
}
