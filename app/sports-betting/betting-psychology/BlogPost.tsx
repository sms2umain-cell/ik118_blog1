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
          <span>Betting Psychology</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          The Psychology of Sports Betting: 
          <span className="text-green-900"> IK118 Mental Game Guide</span>
        </h1>
        
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-green-900 rounded-full flex items-center justify-center mr-2">
              <span className="text-white text-xs font-semibold">RC</span>
            </div>
            <span>By Rachel Chen</span>
          </div>
          <span>•</span>
          <span>Published April 8, 2025</span>
          <span>•</span>
          <span>11 min read</span>
          <span>•</span>
          <div className="flex items-center">
            <i className="ri-eye-fill w-4 h-4 flex items-center justify-center mr-1"></i>
            <span>14.5K views</span>
          </div>
        </div>
        
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong className="text-green-900">IK118's</strong> comprehensive psychology guide reveals the mental strategies used by professional bettors to maintain discipline, control emotions, and make rational decisions under pressure.
          </p>
        </div>
      </div>

      <img
        src="https://readdy.ai/api/search-image?query=Sports%20betting%20psychology%20concept%20showing%20focused%20bettor%20analyzing%20data%20with%20calm%20mindset%2C%20mental%20discipline%20and%20emotional%20control%20visualization%2C%20professional%20workspace%20with%20charts%20and%20statistics%2C%20modern%20clean%20aesthetic%2C%20motivational%20atmosphere&width=1200&height=600&seq=betting-psych-hero&orientation=landscape"
        alt="Psychology of Sports Betting"
        className="w-full h-[400px] object-cover object-top rounded-2xl mb-12"
      />

      <div className="prose prose-lg max-w-none mb-12">
        <p className="text-xl text-gray-700 leading-relaxed mb-6">
          Sports betting is as much a psychological challenge as it is an analytical one. At <strong className="text-green-900">IK118</strong>, we've discovered that the difference between winning and losing bettors often comes down to psychology, not knowledge.
        </p>
        
        <p className="text-gray-700 mb-6">
          Understanding the psychology behind betting decisions is crucial for long-term success. Even bettors with excellent analytical skills fail when they can't control their emotions and maintain discipline through winning and losing streaks.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Psychological Traps</h2>
        <p className="text-gray-700 mb-6">
          IK118 has identified the most common psychological pitfalls that destroy betting bankrolls:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                <i className="ri-error-warning-line text-xl text-red-600"></i>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Gambler's Fallacy</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Believing past results influence future outcomes in independent events</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                <i className="ri-eye-off-line text-xl text-orange-600"></i>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Confirmation Bias</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Seeking information that confirms existing beliefs while ignoring contradictory evidence</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                <i className="ri-time-line text-xl text-purple-600"></i>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Recency Bias</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Overweighting recent events and undervaluing long-term trends</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                <i className="ri-emotion-line text-xl text-blue-600"></i>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Emotional Betting</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Letting emotions override rational analysis and strategy</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Emotional Control Strategies</h2>
        <p className="text-gray-700 mb-6">
          Managing emotions is essential for successful betting. IK118 recommends these proven techniques:
        </p>
        
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Detachment from Results</h3>
            <p className="text-gray-700 leading-relaxed">
              Professional bettors at IK118 focus on process over outcomes. A well-reasoned bet that loses is still a good bet, while a poorly reasoned bet that wins is still a bad bet. Judge your decisions by the quality of your analysis, not short-term results.
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Mindfulness and Self-Awareness</h3>
            <p className="text-gray-700 leading-relaxed">
              Developing awareness of your emotional state before placing bets is crucial. IK118 members practice mindfulness techniques to recognize when emotions are influencing their judgment. If you're feeling angry, desperate, or overly confident, step away from betting.
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Structured Decision-Making</h3>
            <p className="text-gray-700 leading-relaxed">
              Create a systematic approach to betting that removes emotional decision-making. IK118's structured process includes predefined criteria for bet selection, stake sizing, and timing that must be met before placing any wager.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-12 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-8">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center mr-4">
            <i className="ri-lightbulb-fill text-2xl text-white"></i>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">IK118 Psychological Checklist</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start">
            <i className="ri-checkbox-circle-fill w-5 h-5 flex items-center justify-center text-green-500 mr-3 mt-0.5"></i>
            <span className="text-gray-700 text-sm">Am I betting based on data or emotion?</span>
          </div>
          <div className="flex items-start">
            <i className="ri-checkbox-circle-fill w-5 h-5 flex items-center justify-center text-green-500 mr-3 mt-0.5"></i>
            <span className="text-gray-700 text-sm">Have I considered opposing viewpoints?</span>
          </div>
          <div className="flex items-start">
            <i className="ri-checkbox-circle-fill w-5 h-5 flex items-center justify-center text-green-500 mr-3 mt-0.5"></i>
            <span className="text-gray-700 text-sm">Is this bet part of my strategy or a reaction?</span>
          </div>
          <div className="flex items-start">
            <i className="ri-checkbox-circle-fill w-5 h-5 flex items-center justify-center text-green-500 mr-3 mt-0.5"></i>
            <span className="text-gray-700 text-sm">Can I afford to lose this stake comfortably?</span>
          </div>
          <div className="flex items-start">
            <i className="ri-checkbox-circle-fill w-5 h-5 flex items-center justify-center text-green-500 mr-3 mt-0.5"></i>
            <span className="text-gray-700 text-sm">Am I trying to chase previous losses?</span>
          </div>
          <div className="flex items-start">
            <i className="ri-checkbox-circle-fill w-5 h-5 flex items-center justify-center text-green-500 mr-3 mt-0.5"></i>
            <span className="text-gray-700 text-sm">Is my judgment clear and rational?</span>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Managing Winning and Losing Streaks</h2>
        <p className="text-gray-700 mb-6">
          How you handle both winning and losing streaks determines your long-term success. IK118's psychological approach includes:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <h4 className="font-bold text-gray-900 mb-3 flex items-center">
              <i className="ri-trophy-line text-green-600 mr-2"></i>
              Winning Streak Protocol
            </h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Maintain the same unit sizing</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Increase analytical rigor</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Resist betting on marginal opportunities</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Remember variance works both ways</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h4 className="font-bold text-gray-900 mb-3 flex items-center">
              <i className="ri-shield-line text-blue-600 mr-2"></i>
              Losing Streak Management
            </h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Accept losses as inevitable variance</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Review process, not panic</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Consider temporary stake reduction</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Trust your proven strategy</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts from IK118</h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed mb-4">
            Mastering the psychology of sports betting is essential for long-term success at <strong className="text-green-900">IK118</strong>. By understanding common psychological traps, developing emotional control, and maintaining discipline through both winning and losing periods, you'll position yourself among the elite minority of profitable bettors.
          </p>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Remember that even the most sophisticated analytical systems fail without proper psychological management. The best bettors aren't necessarily those with the most knowledge - they're those who can consistently apply their knowledge without emotional interference.
          </p>
          
          <div className="bg-green-900 text-white rounded-2xl p-6">
            <p className="text-green-100 mb-4">
              <strong className="text-amber-400">IK118 Recommendation:</strong> Treat betting like a business with regular hours, take breaks, exercise regularly, and pursue interests outside of betting. This holistic approach to mental health directly improves betting performance.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-8 mb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/sports-betting/bankroll-management" className="group block bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
            <img 
              src="https://readdy.ai/api/search-image?query=bankroll%20management%20with%20calculator%20and%20spreadsheet%20professional%20betting%20finance&width=400&height=200&seq=bankroll-related&orientation=landscape"
              alt="Bankroll Management"
              className="w-full h-32 object-cover object-top"
            />
            <div className="p-4">
              <h4 className="font-semibold text-gray-900 group-hover:text-green-900 transition-colors">
                Bankroll Management Guide
              </h4>
              <p className="text-sm text-gray-600 mt-2">Professional money management strategies for sports betting</p>
            </div>
          </Link>
          
          <Link href="/sports-betting/value-betting-explained" className="group block bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
            <img 
              src="https://readdy.ai/api/search-image?query=value%20betting%20analysis%20with%20odds%20comparison%20and%20mathematical%20calculations&width=400&height=200&seq=value-related&orientation=landscape"
              alt="Value Betting"
              className="w-full h-32 object-cover object-top"
            />
            <div className="p-4">
              <h4 className="font-semibold text-gray-900 group-hover:text-green-900 transition-colors">
                Value Betting Explained
              </h4>
              <p className="text-sm text-gray-600 mt-2">Learn how to identify and exploit value in betting markets</p>
            </div>
          </Link>
        </div>
      </div>

      <aside className="bg-gradient-to-br from-green-900 to-blue-900 rounded-2xl p-8 text-white">
        <h3 className="text-2xl font-bold mb-4">Master Your Mental Game</h3>
        <p className="text-blue-100 mb-6">
          Subscribe to IK118's newsletter for expert psychology tips, mental strategies, and exclusive betting insights.
        </p>
        
        {!isSubscribed ? (
          <form id="psychology-newsletter" data-readdy-form onSubmit={handleSubscribe} className="flex gap-3">
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