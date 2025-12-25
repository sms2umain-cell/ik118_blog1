'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function LiveGamesCategories() {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);

  const categories = [
    {
      title: "Live Blackjack",
      description: "Master the art of 21 with professional dealers",
      icon: "ri-playing-card-fill",
      color: "from-amber-500 to-orange-500",
      games: "50+ Tables",
      href: "/live-games/live-blackjack-strategy",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200"
    },
    {
      title: "Live Roulette",
      description: "European and American roulette with real wheels",
      icon: "ri-record-circle-fill",
      color: "from-blue-500 to-cyan-500",
      games: "40+ Tables",
      href: "/live-games/european-vs-american-roulette",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      title: "Live Baccarat",
      description: "Classic punto banco with professional croupiers",
      icon: "ri-vip-diamond-fill",
      color: "from-purple-500 to-pink-500",
      games: "35+ Tables",
      href: "/live-games/live-baccarat-strategy",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      title: "Live Poker",
      description: "Texas Hold'em and Caribbean Stud variants",
      icon: "ri-heart-fill",
      color: "from-green-500 to-teal-500",
      games: "25+ Tables",
      href: "/live-games/live-poker-variants",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      title: "Game Shows",
      description: "Interactive entertainment with massive multipliers",
      icon: "ri-tv-fill",
      color: "from-red-500 to-pink-500",
      games: "15+ Shows",
      href: "/live-games/live-game-shows-strategy",
      bgColor: "bg-red-50",
      borderColor: "border-red-200"
    },
    {
      title: "VIP Tables",
      description: "Exclusive high-stakes tables for premium players",
      icon: "ri-vip-crown-fill",
      color: "from-indigo-500 to-purple-500",
      games: "20+ Tables",
      href: "/live-games/vip-live-casino-tables",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={category.href}
              className={`group relative ${category.bgColor} ${category.borderColor} border-2 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer overflow-hidden`}
              onMouseEnter={() => setHoveredCategory(index)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-4 right-4 text-6xl">
                  <i className={category.icon}></i>
                </div>
              </div>

              <div className="relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`${category.icon} text-2xl text-white`}></i>
                </div>

                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-900 transition-colors">
                      {category.title}
                    </h3>
                    <div className="flex items-center text-gray-400 group-hover:text-blue-600 transition-colors">
                      <i className="ri-arrow-right-line w-5 h-5 flex items-center justify-center"></i>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {category.description}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <span className={`bg-gradient-to-r ${category.color} text-transparent bg-clip-text font-semibold text-sm`}>
                    {category.games}
                  </span>
                  <div className={`px-3 py-1 bg-gradient-to-r ${category.color} rounded-full`}>
                    <span className="text-white text-xs font-medium">Explore</span>
                  </div>
                </div>

                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-3xl`}></div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-3xl p-8 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-900 mb-2">185+</div>
              <div className="text-gray-600 text-sm">Live Tables</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-600 text-sm">Professional Dealers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">HD</div>
              <div className="text-gray-600 text-sm">Streaming Quality</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-600 mb-2">Real-Time</div>
              <div className="text-gray-600 text-sm">Interactive Gaming</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
