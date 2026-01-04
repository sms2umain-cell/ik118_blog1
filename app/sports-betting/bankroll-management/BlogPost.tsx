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
    <div className="min-h-screen bg-white">
      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-12">
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <Link href="/sports-betting" className="hover:text-green-600 cursor-pointer">Sports Betting</Link>
            <i className="ri-arrow-right-s-line mx-2"></i>
            <span>Bankroll Management</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Sports Betting Bankroll Management: 
            <span className="text-green-900"> IK118 Expert Guide</span>
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-green-900 rounded-full flex items-center justify-center mr-2">
                <span className="text-white text-xs font-semibold">DW</span>
              </div>
              <span>By David Wilson</span>
            </div>
            <span>•</span>
            <span>Published March 15, 2025</span>
            <span>•</span>
            <span>10 min read</span>
            <span>•</span>
            <div className="flex items-center">
              <i className="ri-eye-fill w-4 h-4 flex items-center justify-center mr-1"></i>
              <span>12.8K views</span>
            </div>
          </div>
          
          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong className="text-green-900">IK118's</strong> comprehensive bankroll management guide teaches you professional money management strategies used by successful sports bettors to protect and grow their betting funds.
            </p>
          </div>
        </div>

        <img
          src="https://readdy.ai/api/search-image?query=Professional%20sports%20betting%20bankroll%20management%20concept%20with%20calculator%2C%20spreadsheet%2C%20and%20betting%20slips%20on%20modern%20desk%2C%20clean%20organized%20workspace%20showing%20financial%20planning%20and%20money%20management%20strategy%2C%20professional%20lighting%2C%20business%20photography%20style&width=1200&height=600&seq=bankroll-mgmt-hero&orientation=landscape"
          alt="Bankroll Management for Sports Betting"
          className="w-full h-[400px] object-cover object-top rounded-2xl mb-12"
        />

        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Bankroll management is the foundation of successful sports betting. At <strong className="text-green-900">IK118</strong>, we've analyzed thousands of successful bettors and found that proper money management is the single most important factor separating winners from losers.
          </p>
          
          <p className="text-gray-700 mb-6">
            Your bankroll is your betting capital, and managing it correctly ensures you can weather losing streaks and capitalize on winning opportunities. This comprehensive guide will teach you the exact strategies used by professional sports bettors.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Setting Your Betting Bankroll</h2>
          <p className="text-gray-700 mb-6">
            The first rule of bankroll management at IK118 is simple: only bet with money you can afford to lose. Your betting bankroll should be completely separate from your living expenses, savings, and emergency funds.
          </p>
          <ul className="space-y-3 text-gray-700 mb-6">
            <li className="flex items-start">
              <i className="ri-checkbox-circle-fill w-5 h-5 flex items-center justify-center text-green-500 mr-3 mt-0.5"></i>
              <span><strong>Determine Disposable Income:</strong> Calculate how much money you have available after all essential expenses</span>
            </li>
            <li className="flex items-start">
              <i className="ri-checkbox-circle-fill w-5 h-5 flex items-center justify-center text-green-500 mr-3 mt-0.5"></i>
              <span><strong>Set a Fixed Amount:</strong> Allocate a specific sum that won't impact your lifestyle if lost</span>
            </li>
            <li className="flex items-start">
              <i className="ri-checkbox-circle-fill w-5 h-5 flex items-center justify-center text-green-500 mr-3 mt-0.5"></i>
              <span><strong>Keep It Separate:</strong> Use a dedicated account or wallet for your betting funds</span>
            </li>
            <li className="flex items-start">
              <i className="ri-checkbox-circle-fill w-5 h-5 flex items-center justify-center text-green-500 mr-3 mt-0.5"></i>
              <span><strong>Never Chase Losses:</strong> Don't add more money to recover from losing streaks</span>
            </li>
          </ul>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Unit System</h2>
          <p className="text-gray-700 mb-6">
            Professional bettors at IK118 use a unit-based system to standardize their betting approach. One unit typically represents 1-2% of your total bankroll. This system allows you to maintain consistent bet sizing and track performance accurately.
          </p>
          
          <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">IK118 Unit Sizing Guide</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <span className="font-semibold text-gray-900">Conservative (1% units)</span>
                <span className="text-green-600">$1,000 bankroll = $10 per unit</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <span className="font-semibold text-gray-900">Moderate (2% units)</span>
                <span className="text-green-600">$1,000 bankroll = $20 per unit</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                <span className="font-semibold text-gray-900">Aggressive (3% units)</span>
                <span className="text-orange-600">Only for experienced bettors</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Managing Losing Streaks</h2>
          <p className="text-gray-700 mb-6">
            Every bettor experiences losing streaks. At IK118, we teach our members how to handle downswings professionally:
          </p>
          <ul className="space-y-3 text-gray-700 mb-6">
            <li className="flex items-start">
              <i className="ri-close-circle-fill w-5 h-5 flex items-center justify-center text-red-500 mr-3 mt-0.5"></i>
              <span><strong>Never Increase Bet Size:</strong> Resist the urge to chase losses with bigger bets</span>
            </li>
            <li className="flex items-start">
              <i className="ri-search-line w-5 h-5 flex items-center justify-center text-blue-500 mr-3 mt-0.5"></i>
              <span><strong>Review Your Strategy:</strong> Analyze whether losses are due to variance or poor decisions</span>
            </li>
            <li className="flex items-start">
              <i className="ri-time-line w-5 h-5 flex items-center justify-center text-purple-500 mr-3 mt-0.5"></i>
              <span><strong>Take Breaks:</strong> Step away from betting if emotions are affecting your judgment</span>
            </li>
            <li className="flex items-start">
              <i className="ri-arrow-down-line w-5 h-5 flex items-center justify-center text-orange-500 mr-3 mt-0.5"></i>
              <span><strong>Reduce Unit Size:</strong> Consider temporarily lowering stakes during extended losing periods</span>
            </li>
          </ul>
        </div>

        <div className="mb-12 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center mr-4">
              <i className="ri-lightbulb-fill text-2xl text-white"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">IK118 Expert Strategies</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Stop-Loss Guidelines</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                Set a daily or weekly stop-loss limit (typically 5-10% of your bankroll). If you hit this limit, stop betting immediately and reassess your strategy.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Profit Taking</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                Take profits when you reach predetermined milestones (e.g., 50% bankroll growth). This locks in wins and prevents giving back profits.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Bankroll Management Mistakes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <div className="flex items-start">
                <i className="ri-error-warning-fill text-2xl text-red-500 mr-3 mt-1"></i>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Betting Too Much</h4>
                  <p className="text-gray-700 text-sm">Risking more than 5% of bankroll on a single bet leads to quick ruin</p>
                </div>
              </div>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <div className="flex items-start">
                <i className="ri-error-warning-fill text-2xl text-red-500 mr-3 mt-1"></i>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Chasing Losses</h4>
                  <p className="text-gray-700 text-sm">Increasing stakes to recover previous losses quickly destroys bankrolls</p>
                </div>
              </div>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <div className="flex items-start">
                <i className="ri-error-warning-fill text-2xl text-red-500 mr-3 mt-1"></i>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Poor Record Keeping</h4>
                  <p className="text-gray-700 text-sm">Failing to track bets accurately leads to poor decision-making</p>
                </div>
              </div>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <div className="flex items-start">
                <i className="ri-error-warning-fill text-2xl text-red-500 mr-3 mt-1"></i>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Emotional Betting</h4>
                  <p className="text-gray-700 text-sm">Letting wins or losses affect bet sizing and selection</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts from IK118</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              Proper bankroll management is the cornerstone of successful sports betting at <strong className="text-green-900">IK118</strong>. By implementing these strategies - using appropriate unit sizing, maintaining detailed records, and managing losing streaks professionally - you'll position yourself for long-term profitability.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Remember that even the best handicappers experience variance. What separates successful bettors from the rest is their ability to manage their bankroll through both winning and losing periods.
            </p>
            
            <div className="bg-green-900 text-white rounded-2xl p-6">
              <p className="text-green-100 mb-4">
                <strong className="text-amber-400">IK118 Recommendation:</strong> Start with conservative 1% unit sizing and track every bet meticulously. As you prove your edge over 500+ bets, you can gradually increase to 2% units for sustainable growth.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/sports-betting/value-betting-explained" className="group block bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
              <img 
                src="https://readdy.ai/api/search-image?query=value%20betting%20analysis%20with%20odds%20comparison%20charts%20and%20mathematical%20calculations%20on%20professional%20desk%20modern%20sports%20betting%20analytics&width=400&height=200&seq=value-bet-related&orientation=landscape"
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
            
            <Link href="/sports-betting/betting-psychology" className="group block bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
              <img 
                src="https://readdy.ai/api/search-image?query=sports%20betting%20psychology%20concept%20with%20mental%20focus%20and%20discipline%20visualization%20professional%20mindset%20training%20imagery&width=400&height=200&seq=psychology-related&orientation=landscape"
                alt="Betting Psychology"
                className="w-full h-32 object-cover object-top"
              />
              <div className="p-4">
                <h4 className="font-semibold text-gray-900 group-hover:text-green-900 transition-colors">
                  Betting Psychology
                </h4>
                <p className="text-sm text-gray-600 mt-2">Master the mental game of sports betting</p>
              </div>
            </Link>
          </div>
        </div>

        <aside className="bg-gradient-to-br from-green-900 to-blue-900 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Get Weekly Betting Insights</h3>
          <p className="text-blue-100 mb-6">
            Subscribe to IK118's newsletter for expert bankroll management tips, betting strategies, and exclusive analysis.
          </p>
          
          {!isSubscribed ? (
            <form id="bankroll-newsletter" data-readdy-form onSubmit={handleSubscribe} className="flex gap-3">
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
      </article>
    </div>
  );
}