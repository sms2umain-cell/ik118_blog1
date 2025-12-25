'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function StrategiesContent() {
  const [activeStrategy, setActiveStrategy] = useState(0);

  const strategies = [
    {
      title: "Bankroll Management",
      icon: "ri-wallet-3-fill",
      description: "Master the art of managing your pokies budget effectively",
      tips: [
        "Set a strict budget before playing and stick to it",
        "Never chase losses with bigger bets",
        "Use the 1-2% rule: bet only 1-2% of your total bankroll per spin",
        "Set both win and loss limits for each session"
      ]
    },
    {
      title: "RTP Analysis",
      icon: "ri-line-chart-fill",
      description: "Choose pokies with the best return-to-player rates",
      tips: [
        "Always check RTP before playing - aim for 96% or higher",
        "Understand that RTP is calculated over millions of spins",
        "High RTP doesn't guarantee short-term wins",
        "Compare RTP rates across different pokies providers"
      ]
    },
    {
      title: "Volatility Strategy",
      icon: "ri-speed-up-fill",
      description: "Match pokies volatility to your playing style",
      tips: [
        "Low volatility: Frequent small wins, good for longer sessions",
        "High volatility: Bigger wins but less frequent, requires larger bankroll",
        "Medium volatility: Balanced approach for most players",
        "Choose volatility based on your risk tolerance and bankroll size"
      ]
    },
    {
      title: "Bonus Features",
      icon: "ri-gift-fill",
      description: "Maximize your advantage with pokies bonus features",
      tips: [
        "Learn how each bonus feature works before playing",
        "Free spins often offer the best value",
        "Understand triggering conditions for bonus rounds",
        "Some pokies allow you to buy bonus features directly"
      ]
    }
  ];

  const expertTips = [
    {
      category: "Time Management",
      tip: "Set session time limits and take regular breaks to maintain focus and decision-making ability.",
      author: "Sarah Chen, IK118 Gaming Analyst"
    },
    {
      category: "Game Selection",
      tip: "Rotate between different pokies games to avoid pattern-based thinking and maintain fresh perspective.",
      author: "Michael Torres, IK118 Strategy Expert"
    },
    {
      category: "Emotional Control",
      tip: "Never play pokies when emotional, stressed, or trying to recover from other losses.",
      author: "Emma Wilson, IK118 Responsible Gaming Advisor"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section 
        className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 text-white py-20"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.9), rgba(88, 28, 135, 0.9)), url('https://readdy.ai/api/search-image?query=Professional%20pokies%20strategy%20guide%20with%20charts%20and%20analytics%2C%20modern%20casino%20gaming%20setup%20with%20strategic%20planning%20elements%2C%20sophisticated%20gaming%20environment%20with%20educational%20materials%20and%20data%20visualization&width=1920&height=1080&seq=strategies-hero-001&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 bg-amber-500/20 border border-amber-400/30 rounded-full text-amber-300 text-sm font-medium">
                <i className="ri-lightbulb-fill w-4 h-4 flex items-center justify-center mr-2"></i>
                IK118 Expert Strategies
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Winning Pokies
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300 block">
                Strategies
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Master the art of pokies gaming with proven strategies from <strong className="text-amber-300">IK118</strong> experts. 
              Learn bankroll management, game selection, and responsible gaming techniques.
            </p>
          </div>
        </div>
      </section>

      {/* Strategy Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Pokies Strategies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Developed by IK118's team of professional gaming analysts and tested by thousands of Australian players
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="space-y-4">
              {strategies.map((strategy, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStrategy(index)}
                  className={`w-full text-left p-6 rounded-2xl transition-all duration-300 cursor-pointer ${
                    activeStrategy === index 
                      ? 'bg-blue-900 text-white shadow-xl' 
                      : 'bg-gray-50 hover:bg-gray-100 text-gray-900'
                  }`}
                >
                  <div className="flex items-center">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 ${
                      activeStrategy === index ? 'bg-amber-500' : 'bg-blue-900'
                    }`}>
                      <i className={`${strategy.icon} text-xl ${
                        activeStrategy === index ? 'text-blue-900' : 'text-amber-400'
                      }`}></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{strategy.title}</h3>
                      <p className={`text-sm ${
                        activeStrategy === index ? 'text-blue-200' : 'text-gray-600'
                      }`}>
                        {strategy.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div className="bg-gray-50 rounded-3xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-900 rounded-xl flex items-center justify-center mr-4">
                  <i className={`${strategies[activeStrategy].icon} text-xl text-amber-400`}></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{strategies[activeStrategy].title}</h3>
              </div>

              <div className="space-y-4">
                {strategies[activeStrategy].tips.map((tip, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <i className="ri-check-line text-white text-sm"></i>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{tip}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-xl">
                <div className="flex items-center mb-2">
                  <i className="ri-lightbulb-fill text-amber-600 text-lg mr-2"></i>
                  <span className="font-semibold text-amber-800">IK118 Pro Tip</span>
                </div>
                <p className="text-amber-700 text-sm">
                  {activeStrategy === 0 && "Start with a smaller bankroll and gradually increase as you develop better control and understanding."}
                  {activeStrategy === 1 && "Use demo modes to test RTP theories and understand payout patterns before playing with real money."}
                  {activeStrategy === 2 && "Match your volatility choice to your session length - high volatility needs more time to show results."}
                  {activeStrategy === 3 && "Study the paytable thoroughly to understand which symbols trigger the most valuable bonus features."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Tips */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Expert Insights from IK118 Team</h2>
            <p className="text-xl text-gray-600">Professional advice from our certified gaming analysts</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {expertTips.map((tip, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-lg font-bold">IK</span>
                  </div>
                  <h3 className="text-lg font-bold text-blue-900 mb-2">{tip.category}</h3>
                </div>
                
                <blockquote className="text-gray-700 italic text-center mb-6 leading-relaxed">
                  "{tip.tip}"
                </blockquote>
                
                <div className="text-center">
                  <p className="text-sm font-semibold text-gray-900">{tip.author}</p>
                  <p className="text-xs text-gray-500">IK118 Gaming Expert</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Apply These Strategies?</h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Put your knowledge into practice with our recommended pokies games and start your strategic gaming journey.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/pokies/best-pokies-2024"
              className="bg-amber-500 hover:bg-amber-600 text-blue-900 px-8 py-4 rounded-xl font-bold text-lg transition-colors cursor-pointer whitespace-nowrap"
            >
              <i className="ri-trophy-fill w-5 h-5 flex items-center justify-center mr-2 inline-flex"></i>
              Best Pokies 2024
            </Link>
            <Link 
              href="/pokies"
              className="bg-transparent border-2 border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 cursor-pointer whitespace-nowrap"
            >
              <i className="ri-arrow-left-line w-5 h-5 flex items-center justify-center mr-2 inline-flex"></i>
              Back to Pokies Hub
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}