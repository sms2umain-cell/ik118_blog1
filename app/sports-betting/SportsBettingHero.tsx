'use client';

import Link from 'next/link';

export default function SportsBettingHero() {
  return (
    <section 
      className="relative bg-gradient-to-br from-green-900 via-blue-900 to-green-800 text-white py-20 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(6, 78, 59, 0.8), rgba(30, 58, 138, 0.8)), url('https://readdy.ai/api/search-image?query=Professional%20sports%20stadium%20with%20multiple%20sports%20action%20including%20football%20soccer%20rugby%20cricket%2C%20dramatic%20lighting%2C%20modern%20betting%20displays%20and%20digital%20scoreboards%2C%20premium%20sports%20betting%20atmosphere%20with%20depth%20of%20field%20effect&width=1920&height=1080&seq=sports-betting-hero-001&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-block bg-green-400 text-green-950 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Updated for 2025
          </div>
        </div>
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 bg-green-500/20 border border-green-400/30 rounded-full text-green-300 text-sm font-medium">
              <i className="ri-trophy-fill w-4 h-4 flex items-center justify-center mr-2"></i>
              IK118 Sports Betting Experts
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Australia's Premier
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300 block">
              Sports Betting Hub
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Master the art of sports betting with expert analysis, proven strategies, and comprehensive guides. 
            <strong className="text-green-300"> IK118</strong> delivers professional insights for Australian sports betting enthusiasts.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <i className="ri-line-chart-fill text-2xl text-green-400"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">Odds Analysis</h3>
              <p className="text-blue-100 text-sm">Expert comparison of betting odds across major Australian bookmakers</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <i className="ri-football-fill text-2xl text-green-400"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">Multi-Sport Coverage</h3>
              <p className="text-blue-100 text-sm">AFL, NRL, cricket, tennis, racing and international sports betting guides</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <i className="ri-brain-fill text-2xl text-green-400"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">Proven Strategies</h3>
              <p className="text-blue-100 text-sm">Data-driven betting strategies and bankroll management techniques</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/50 to-blue-900/50"></div>
    </section>
  );
}
