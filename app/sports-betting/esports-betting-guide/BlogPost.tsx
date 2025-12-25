'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function BlogPost() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    try {
      const formData = new URLSearchParams();
      formData.append('email', email);

      const response = await fetch('https://readdy.ai/api/form/d4tr23vsdr6u9jrifbj0', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString(),
      });

      if (response.ok) {
        setIsSubscribed(true);
        setEmail('');
        setTimeout(() => setIsSubscribed(false), 5000);
      }
    } catch (error) {
      console.error('Subscription error:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-12">
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <Link href="/sports-betting" className="hover:text-green-600 cursor-pointer">Sports Betting</Link>
          <i className="ri-arrow-right-s-line mx-2"></i>
          <span>Esports Betting Guide</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Esports Betting Guide 2025: 
          <span className="text-green-900"> IK118 Expert Strategies</span>
        </h1>
        
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-green-900 rounded-full flex items-center justify-center mr-2">
              <span className="text-white text-xs font-semibold">JL</span>
            </div>
            <span>By Jake Lee</span>
          </div>
          <span>•</span>
          <span>Published January 28, 2025</span>
          <span>•</span>
          <span>16 min read</span>
          <span>•</span>
          <div className="flex items-center">
            <i className="ri-eye-fill w-4 h-4 flex items-center justify-center mr-1"></i>
            <span>22.4K views</span>
          </div>
        </div>
        
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong className="text-green-900">IK118's</strong> comprehensive esports betting guide covers everything from understanding different titles to developing winning strategies in this rapidly evolving multi-billion dollar industry.
          </p>
        </div>
      </div>

      <img
        src="https://readdy.ai/api/search-image?query=Esports%20betting%20concept%20with%20professional%20gaming%20tournament%20arena%2C%20competitive%20players%20at%20computers%2C%20large%20screens%20showing%20game%20action%2C%20modern%20esports%20stadium%20atmosphere%2C%20dynamic%20gaming%20environment%20with%20LED%20lights%20and%20spectators&width=1200&height=600&seq=esports-guide-hero&orientation=landscape"
        alt="Esports Betting Guide"
        className="w-full h-[400px] object-cover object-top rounded-2xl mb-12"
      />

      <div className="prose prose-lg max-w-none mb-12">
        <p className="text-xl text-gray-700 leading-relaxed mb-6">
          Esports betting has grown from a niche market to a multi-billion dollar industry. At <strong className="text-green-900">IK118</strong>, we recognize that esports offers unique opportunities for bettors who understand the games, players, and competitive landscape.
        </p>
        
        <p className="text-gray-700 mb-6">
          The fast-paced nature and data-rich environment make esports ideal for analytical betting approaches. This guide will help you navigate the exciting world of competitive gaming betting.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Major Esports Titles at IK118</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                <i className="ri-gamepad-line text-xl text-blue-600"></i>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">League of Legends</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-2">World's most popular MOBA with major leagues including LCS, LEC, LCK, and LPL</p>
                <span className="text-xs text-blue-600 font-semibold">35% of betting volume</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                <i className="ri-crosshair-line text-xl text-red-600"></i>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Counter-Strike 2</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-2">Premier tactical FPS with numerous tournaments and leagues worldwide</p>
                <span className="text-xs text-red-600 font-semibold">30% of betting volume</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                <i className="ri-sword-line text-xl text-purple-600"></i>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Dota 2</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-2">Known for The International with esports' largest prize pools</p>
                <span className="text-xs text-purple-600 font-semibold">20% of betting volume</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                <i className="ri-focus-3-line text-xl text-orange-600"></i>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Valorant</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-2">Riot's tactical shooter with VCT and regional leagues</p>
                <span className="text-xs text-orange-600 font-semibold">10% of betting volume</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-12 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-8">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center mr-4">
            <i className="ri-lightbulb-fill text-2xl text-white"></i>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">IK118 Research Checklist</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start">
            <i className="ri-checkbox-circle-fill w-5 h-5 flex items-center justify-center text-green-500 mr-3 mt-0.5"></i>
            <span className="text-gray-700 text-sm">Recent match results (last 10 games)</span>
          </div>
          <div className="flex items-start">
            <i className="ri-checkbox-circle-fill w-5 h-5 flex items-center justify-center text-green-500 mr-3 mt-0.5"></i>
            <span className="text-gray-700 text-sm">Head-to-head history</span>
          </div>
          <div className="flex items-start">
            <i className="ri-checkbox-circle-fill w-5 h-5 flex items-center justify-center text-green-500 mr-3 mt-0.5"></i>
            <span className="text-gray-700 text-sm">Current patch meta</span>
          </div>
          <div className="flex items-start">
            <i className="ri-checkbox-circle-fill w-5 h-5 flex items-center justify-center text-green-500 mr-3 mt-0.5"></i>
            <span className="text-gray-700 text-sm">Roster status and changes</span>
          </div>
          <div className="flex items-start">
            <i className="ri-checkbox-circle-fill w-5 h-5 flex items-center justify-center text-green-500 mr-3 mt-0.5"></i>
            <span className="text-gray-700 text-sm">Tournament importance</span>
          </div>
          <div className="flex items-start">
            <i className="ri-checkbox-circle-fill w-5 h-5 flex items-center justify-center text-green-500 mr-3 mt-0.5"></i>
            <span className="text-gray-700 text-sm">Map pool strengths</span>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Esports Betting Mistakes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-red-50 border border-red-200 rounded-xl p-6">
            <div className="flex items-start">
              <i className="ri-error-warning-fill text-2xl text-red-500 mr-3 mt-1"></i>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Betting Favorites Blindly</h4>
                <p className="text-gray-700 text-sm">Top teams often have inflated odds due to public betting</p>
              </div>
            </div>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-xl p-6">
            <div className="flex items-start">
              <i className="ri-error-warning-fill text-2xl text-red-500 mr-3 mt-1"></i>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Ignoring Patch Changes</h4>
                <p className="text-gray-700 text-sm">Failing to account for how updates affect team strengths</p>
              </div>
            </div>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-xl p-6">
            <div className="flex items-start">
              <i className="ri-error-warning-fill text-2xl text-red-500 mr-3 mt-1"></i>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Small Sample Sizes</h4>
                <p className="text-gray-700 text-sm">Overvaluing recent results can be misleading in esports</p>
              </div>
            </div>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-xl p-6">
            <div className="flex items-start">
              <i className="ri-error-warning-fill text-2xl text-red-500 mr-3 mt-1"></i>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Following Popular Opinion</h4>
                <p className="text-gray-700 text-sm">Betting based on community sentiment rather than analysis</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts from IK118</h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed mb-4">
            Esports betting offers exciting opportunities for analytical bettors at <strong className="text-green-900">IK118</strong>. By understanding the games, following the competitive scene closely, utilizing comprehensive data, and applying disciplined bankroll management, you can find significant value in this growing market.
          </p>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Success in esports betting requires dedication to learning the games, staying current with patches and meta changes, and developing expertise in specific titles or regions. The most successful IK118 members specialize rather than trying to bet on everything.
          </p>
          
          <div className="bg-green-900 text-white rounded-2xl p-6">
            <p className="text-green-100 mb-4">
              <strong className="text-amber-400">IK118 Success Story:</strong> One member specialized in League of Legends betting, focusing exclusively on LCK matches. By developing deep expertise in Korean team dynamics, they achieved a 58% win rate over 500+ bets.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-8 mb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/sports-betting/live-betting-mastery" className="group block bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
            <img 
              src="https://readdy.ai/api/search-image?query=live%20betting%20with%20multiple%20screens%20showing%20real-time%20sports%20action&width=400&height=200&seq=live-esports-related&orientation=landscape"
              alt="Live Betting"
              className="w-full h-32 object-cover object-top"
            />
            <div className="p-4">
              <h4 className="font-semibold text-gray-900 group-hover:text-green-900 transition-colors">
                Live Betting Mastery
              </h4>
              <p className="text-sm text-gray-600 mt-2">Advanced in-play betting strategies</p>
            </div>
          </Link>
          
          <Link href="/sports-betting/statistical-analysis" className="group block bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
            <img 
              src="https://readdy.ai/api/search-image?query=statistical%20analysis%20charts%20and%20data%20for%20sports%20betting&width=400&height=200&seq=stats-esports-related&orientation=landscape"
              alt="Statistical Analysis"
              className="w-full h-32 object-cover object-top"
            />
            <div className="p-4">
              <h4 className="font-semibold text-gray-900 group-hover:text-green-900 transition-colors">
                Statistical Analysis Guide
              </h4>
              <p className="text-sm text-gray-600 mt-2">Data-driven betting approach</p>
            </div>
          </Link>
        </div>
      </div>

      <aside className="bg-gradient-to-br from-green-900 to-blue-900 rounded-2xl p-8 text-white">
        <h3 className="text-2xl font-bold mb-4">Get Esports Insights</h3>
        <p className="text-blue-100 mb-6">
          Subscribe to IK118's newsletter for expert esports analysis, patch updates, and exclusive betting strategies.
        </p>
        
        {!isSubscribed ? (
          <form id="esports-newsletter" data-readdy-form onSubmit={handleSubscribe} className="flex gap-3">
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        ) : (
          <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 flex items-center gap-3">
            <i className="ri-checkbox-circle-fill text-green-400 text-xl w-5 h-5 flex items-center justify-center"></i>
            <span className="text-green-100">Successfully subscribed to IK118 insights!</span>
          </div>
        )}
      </aside>
    </div>
  );
}