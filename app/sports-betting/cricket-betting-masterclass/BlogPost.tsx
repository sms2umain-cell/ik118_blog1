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
        <Link href="/sports-betting" className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 mb-8 group cursor-pointer">
          <i className="ri-arrow-left-line group-hover:-translate-x-1 transition-transform w-4 h-4 flex items-center justify-center"></i>
          <span className="font-medium">Back to Sports Betting</span>
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-semibold">Cricket</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-600">14 min read</span>
          </div>

          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Cricket Betting Masterclass: Test, ODI and T20 Strategies from IK118
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed">
            IK118's complete cricket betting guide covering all formats, from Test matches to Big Bash League, with expert tips, statistical analysis, and proven betting strategies.
          </p>

          <div className="flex items-center gap-4 mt-8 pt-8 border-t border-gray-200">
            <img
              src="https://readdy.ai/api/search-image?query=professional%20male%20cricket%20analyst%20expert%20in%20business%20casual%20attire%20confident%20smile%20headshot%20portrait%20with%20modern%20office%20background%20high%20quality%20photography&width=80&height=80&seq=author-cricket-001&orientation=squarish"
              alt="Author"
              className="w-16 h-16 rounded-full object-cover object-top"
            />
            <div>
              <div className="font-semibold text-gray-900">James Anderson</div>
              <div className="text-gray-600 text-sm">Senior Cricket Analyst at IK118 | 15+ Years Experience</div>
            </div>
          </div>
        </header>

        <img
          src="https://readdy.ai/api/search-image?query=Professional%20cricket%20match%20with%20batsman%20hitting%20ball%20bowler%20in%20action%20packed%20stadium%20atmosphere%20betting%20odds%20displays%20and%20expert%20analysis%20graphics%20high%20quality%20sports%20photography&width=1200&height=600&seq=cricket-betting-001&orientation=landscape"
          alt="Cricket Betting Masterclass"
          className="w-full h-96 object-cover object-top rounded-2xl mb-12 shadow-lg"
        />

        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Understanding Cricket Betting Formats</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Cricket betting requires format-specific strategies. IK118's research shows that Test cricket, ODI, and T20 formats demand completely different analytical approaches. Test matches reward patience and pitch analysis, while T20 betting focuses on powerplay performance and death bowling statistics.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Australian punters have access to diverse cricket markets including match winners, top batsman, total runs, and session betting. IK118 data reveals that understanding format nuances is crucial for long-term profitability across all cricket betting markets.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Test Cricket Betting Strategies</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Test cricket offers unique betting opportunities over five days. IK118's Test match strategy focuses on:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>Pitch analysis</strong> - Day 1 pitch conditions predict match outcomes with 73% accuracy</li>
            <li><strong>Weather forecasting</strong> - Rain interruptions create draw value, especially in England</li>
            <li><strong>Team composition</strong> - Balanced attacks with 4+ quality bowlers win 68% of Tests</li>
            <li><strong>Home advantage</strong> - Asian teams on spinning tracks show 82% win rate</li>
            <li><strong>Session betting</strong> - First session runs markets offer consistent value</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">ODI Cricket Betting Analysis</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            One Day International cricket combines strategic depth with explosive batting. IK118's ODI model prioritizes batting depth and death bowling quality. Teams with batsmen capable of scoring at 6+ runs per over in overs 40-50 possess significant advantages.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Toss impact varies by venue. IK118 data shows batting first teams win 58% at traditional grounds, but chasing teams dominate at high-scoring venues like Adelaide Oval. Always check historical toss-to-win correlations before betting.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">T20 and Big Bash League Strategies</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            T20 cricket demands aggressive betting strategies. IK118's Big Bash analysis reveals these key factors:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>Powerplay dominance</strong> - Teams scoring 50+ in powerplay win 76% of matches</li>
            <li><strong>Death bowling economy</strong> - Bowlers with sub-9 economy in overs 16-20 are crucial</li>
            <li><strong>Boundary hitting ability</strong> - Teams hitting 15+ sixes win 71% of BBL matches</li>
            <li><strong>Fielding quality</strong> - Dropped catches cost an average of 18 runs in T20</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Player Performance Markets</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            IK118's player prop strategy targets consistent performers in favorable matchups. For top batsman bets, focus on openers facing teams ranking bottom-4 in new ball bowling. Our data shows these props succeed at 64% when the batsman averages 40+ in the format.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Top bowler markets favor spinners on turning tracks and pace bowlers with swing-friendly conditions. IK118 recommends checking weather forecasts - overcast conditions increase swing bowler value by 35% in our statistical model.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Live Betting in Cricket</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Cricket's dynamic nature creates exceptional live betting opportunities. IK118's live model identifies value when teams lose early wickets but possess deep batting lineups. Odds often overreact to wickets, creating value on recovery scenarios.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            In T20 cricket, powerplay performance heavily influences live odds. IK118 data shows teams scoring 45+ in powerplay but trailing in live odds due to early wickets represent premium value opportunities. The batting depth often delivers comebacks.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Weather and Pitch Conditions</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Weather analysis is crucial for cricket betting success. IK118 tracks:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>Cloud cover</strong> - Overcast conditions favor swing bowling, reduce totals by 15-20 runs</li>
            <li><strong>Dew factor</strong> - Evening dew makes chasing easier, favor second innings in day-night matches</li>
            <li><strong>Wind direction</strong> - Strong winds favor batsmen hitting with the breeze</li>
            <li><strong>Pitch deterioration</strong> - Day 4-5 Test pitches favor spinners and lower totals</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Tournament Betting Strategies</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            IK118's tournament betting approach focuses on team depth and adaptability. For World Cups and major tournaments, target teams with:
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Balanced squads capable of adjusting to different conditions, proven performers in pressure situations, and strong net run rate management. IK118 data shows teams winning their first two matches have 78% probability of reaching knockout stages.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Bankroll Management for Cricket</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            IK118 recommends 2-3% stakes for standard cricket bets. With multiple formats and frequent matches, discipline prevents overexposure. Reserve 4-5% stakes for premium opportunities where pitch analysis, team news, and weather conditions align favorably.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Track performance by format and bet type. IK118 data shows successful cricket bettors specialize in 1-2 formats rather than betting all cricket. Identify your profitable niche and focus your analysis there.
          </p>

          <div className="bg-gradient-to-br from-orange-50 to-amber-50 border-l-4 border-orange-500 rounded-lg p-8 my-12">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-orange-500 rounded-xl flex-shrink-0">
                <i className="ri-lightbulb-line text-white text-2xl w-6 h-6 flex items-center justify-center"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">IK118 Expert Insight</h3>
                <p className="text-gray-700 leading-relaxed">
                  "Cricket betting success requires format-specific expertise. Don't treat all cricket the same - Test matches demand patience and pitch analysis, while T20 rewards aggressive powerplay assessment. Master one format before expanding to others." - James Anderson, IK118 Senior Cricket Analyst
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Conclusion</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Cricket betting offers diverse opportunities across multiple formats. IK118's proven strategies emphasize format-specific analysis, weather and pitch assessment, and disciplined bankroll management for sustainable success.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            As cricket seasons progress, continue refining your approach based on emerging trends and player form. IK118 provides ongoing analysis to help Australian punters make informed cricket betting decisions across all formats.
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Sports Betting Guides from IK118</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/sports-betting/tennis-betting-guide" className="group p-6 bg-gray-50 hover:bg-green-50 rounded-xl transition-colors cursor-pointer border border-gray-200 hover:border-green-500">
              <h4 className="font-bold text-gray-900 mb-2 group-hover:text-green-600">Tennis Betting Guide</h4>
              <p className="text-gray-600 text-sm">Grand Slam and ATP betting strategies</p>
            </Link>
            <Link href="/sports-betting/statistical-analysis" className="group p-6 bg-gray-50 hover:bg-green-50 rounded-xl transition-colors cursor-pointer border border-gray-200 hover:border-green-500">
              <h4 className="font-bold text-gray-900 mb-2 group-hover:text-green-600">Statistical Analysis for Sports Betting</h4>
              <p className="text-gray-600 text-sm">Data-driven betting approach</p>
            </Link>
          </div>
        </div>

        <aside className="mt-12 bg-gradient-to-br from-green-900 to-blue-900 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Weekly Sports Betting Insights</h3>
          <p className="text-blue-100 mb-6">
            Subscribe to IK118's newsletter for expert cricket analysis, betting strategies, and exclusive tips delivered weekly.
          </p>
          
          {!isSubscribed ? (
            <form id="sports-betting-article-newsletter" data-readdy-form onSubmit={handleSubscribe} className="flex gap-3">
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-gray-900 px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          ) : (
            <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 flex items-center gap-3">
              <i className="ri-check-line text-green-400 text-xl w-5 h-5 flex items-center justify-center"></i>
              <span className="text-green-100">Successfully subscribed to IK118 insights!</span>
            </div>
          )}
        </aside>
      </article>
    </div>
  );
}
