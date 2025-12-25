
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function BlogPost() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    try {
      const response = await fetch('https://readdy.ai/api/public/form/submit/live-games-newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({ email }).toString(),
      });

      if (response.ok) {
        setSubscribed(true);
        setEmail('');
      }
    } catch (error) {
      console.error('Subscription failed:', error);
    }
  };

  return (
    <article className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="mb-8">
                <Link href="/live-games" className="text-teal-600 hover:text-teal-700 font-medium inline-flex items-center mb-4">
                  <i className="ri-arrow-left-line mr-2"></i>
                  Back to Live Games
                </Link>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  Advanced Live Poker Tournament Strategies: ICM, Position Play & Final Table Tactics
                </h1>
                <div className="flex items-center text-gray-600 text-sm mb-6">
                  <span className="font-medium">By Marcus Chen</span>
                  <span className="mx-2">•</span>
                  <span>Professional Poker Coach</span>
                  <span className="mx-2">•</span>
                  <span>15 min read</span>
                </div>
                <img 
                  src="https://readdy.ai/api/search-image?query=professional%20live%20poker%20tournament%20final%20table%20with%20players%20in%20intense%20competition%20poker%20chips%20stacked%20high%20cards%20being%20dealt%20elegant%20casino%20setting%20dramatic%20lighting%20tournament%20atmosphere%20multiple%20players%20focused%20on%20game&width=1200&height=600&seq=livetournament001&orientation=landscape"
                  alt="Live Poker Tournament Strategies"
                  className="w-full h-96 object-cover rounded-lg mb-8"
                />
              </div>

              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Live poker tournaments require a fundamentally different strategic approach than cash games. At IK118, we've analyzed thousands of tournament hands to develop comprehensive strategies covering Independent Chip Model (ICM) considerations, position-based play, and final table dynamics that separate winning players from the rest of the field.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Understanding ICM in Live Tournaments</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The Independent Chip Model (ICM) is the mathematical framework that converts tournament chips into real money equity. IK118's research shows that understanding ICM is crucial for making optimal decisions, especially near the money bubble and at final tables.
                </p>

                <div className="bg-teal-50 border-l-4 border-teal-600 p-6 my-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">IK118 Expert Insight</h3>
                  <p className="text-gray-700">
                    ICM pressure increases dramatically as you approach the money and final table. A chip you lose is worth more than a chip you gain, creating situations where folding premium hands becomes correct. Understanding these dynamics is what separates amateur from professional tournament play.
                  </p>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">ICM Pressure Points</h3>
                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full bg-white border border-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Situation</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ICM Pressure</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Strategy Adjustment</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 text-sm text-gray-900">Early Stage (100+ BB)</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Minimal</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Play close to cash game strategy</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm text-gray-900">Middle Stage (30-50 BB)</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Moderate</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Tighten ranges, increase aggression</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm text-gray-900">Bubble (1-2 from money)</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Extreme</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Exploit tight players, protect medium stacks</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm text-gray-900">Final Table (9 players)</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Very High</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Ladder considerations, avoid big confrontations</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm text-gray-900">Final 3 Players</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Maximum</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Extreme caution with medium stack</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm text-gray-900">Heads-Up</td>
                        <td className="px-6 py-4 text-sm text-gray-700">None</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Aggressive, chip EV maximization</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">IK118 ICM Decision Framework</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  When facing all-in decisions under ICM pressure, IK118 recommends this systematic approach:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                  <li><strong>Calculate Risk of Ruin:</strong> What percentage of your stack are you risking?</li>
                  <li><strong>Assess Payout Jumps:</strong> How much money is at stake in the next pay jump?</li>
                  <li><strong>Evaluate Opponent Ranges:</strong> Are they exploiting ICM or playing chip EV?</li>
                  <li><strong>Consider Stack Dynamics:</strong> Will other short stacks bust before you?</li>
                  <li><strong>Factor in Skill Edge:</strong> Can you outplay opponents with a smaller stack?</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Position-Based Tournament Strategy</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Position becomes even more critical in tournaments than cash games due to the increasing blinds and antes. IK118's analysis of winning tournament players shows they exploit position relentlessly throughout all stages.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Opening Ranges by Position and Stack Depth</h3>
                <div className="space-y-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Deep Stack (50+ BB) - Early Position</h4>
                    <p className="text-gray-700 text-sm mb-2">
                      Open: 15-18% of hands (22+, ATs+, KQs, AJo+, KQo)
                    </p>
                    <p className="text-gray-700 text-sm">IK118 Tip: Play tight and strong. You'll face multiple opponents and need robust hands to continue post-flop.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Deep Stack (50+ BB) - Button</h4>
                    <p className="text-gray-700 text-sm mb-2">
                      Open: 40-50% of hands (Any pair, suited connectors, broadway cards, suited aces)
                    </p>
                    <p className="text-gray-700 text-sm">IK118 Tip: Maximize positional advantage. Attack blinds aggressively and play wide range profitably.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Medium Stack (20-30 BB) - Middle Position</h4>
                    <p className="text-gray-700 text-sm mb-2">
                      Open: 20-25% of hands, increase raise size to 2.5-3x
                    </p>
                    <p className="text-gray-700 text-sm">IK118 Tip: Balance between accumulation and preservation. Avoid marginal spots against aggressive players.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Short Stack (10-15 BB) - Any Position</h4>
                    <p className="text-gray-700 text-sm mb-2">
                      Push/fold strategy: 30-40% from button, 15-20% from early position
                    </p>
                    <p className="text-gray-700 text-sm">IK118 Tip: Abandon post-flop play. Focus on push/fold charts and ICM considerations.</p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Blind Defense Strategy</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  IK118's tournament database shows that defending blinds correctly is one of the highest EV skills in tournament poker. Here's our framework:
                </p>
                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full bg-white border border-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Raise Size</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Position</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">BB Defense %</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">3-Bet %</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 text-sm text-gray-900">2x</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Button</td>
                        <td className="px-6 py-4 text-sm text-gray-700">60-70%</td>
                        <td className="px-6 py-4 text-sm text-gray-700">12-15%</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm text-gray-900">2x</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Cutoff</td>
                        <td className="px-6 py-4 text-sm text-gray-700">50-60%</td>
                        <td className="px-6 py-4 text-sm text-gray-700">10-12%</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm text-gray-900">2.5x</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Button</td>
                        <td className="px-6 py-4 text-sm text-gray-700">50-60%</td>
                        <td className="px-6 py-4 text-sm text-gray-700">10-12%</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm text-gray-900">2.5x</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Early Position</td>
                        <td className="px-6 py-4 text-sm text-gray-700">35-45%</td>
                        <td className="px-6 py-4 text-sm text-gray-700">8-10%</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm text-gray-900">3x+</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Any</td>
                        <td className="px-6 py-4 text-sm text-gray-700">30-40%</td>
                        <td className="px-6 py-4 text-sm text-gray-700">6-8%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Final Table Dynamics</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The final table is where tournaments are won and lost. IK118's analysis of final table play reveals that understanding stack dynamics and payout structures is crucial for maximizing your finish.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Stack Size Categories and Strategy</h3>
                <div className="space-y-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Big Stack (30%+ of chips in play)</h4>
                    <p className="text-gray-700 text-sm mb-2">
                      <strong>Strategy:</strong> Apply maximum pressure on medium stacks. Avoid chip leader confrontations.
                    </p>
                    <p className="text-gray-700 text-sm">
                      <strong>IK118 Approach:</strong> Target players with 15-25 BB who can't call light. Use your stack to accumulate blinds and antes without showdown.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Medium Stack (15-25 BB)</h4>
                    <p className="text-gray-700 text-sm mb-2">
                      <strong>Strategy:</strong> Most difficult position. Avoid confrontations with big stacks, attack short stacks.
                    </p>
                    <p className="text-gray-700 text-sm">
                      <strong>IK118 Approach:</strong> Play tight against big stacks, aggressive against shorter stacks. Look for spots to ladder up without risking tournament life.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Short Stack (8-15 BB)</h4>
                    <p className="text-gray-700 text-sm mb-2">
                      <strong>Strategy:</strong> Push/fold mode. Look for fold equity spots and premium hands.
                    </p>
                    <p className="text-gray-700 text-sm">
                      <strong>IK118 Approach:</strong> Be first in aggressive. Shove wider from late position. Avoid calling unless premium hand.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Critical Stack (Under 8 BB)</h4>
                    <p className="text-gray-700 text-sm mb-2">
                      <strong>Strategy:</strong> Pure push/fold. Any two cards can be correct from button.
                    </p>
                    <p className="text-gray-700 text-sm">
                      <strong>IK118 Approach:</strong> Use push/fold charts religiously. Hope for other eliminations to ladder up.
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Bubble and Pay Jump Strategy</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  IK118's research shows that the biggest mistakes at final tables occur around significant pay jumps. Here's how to navigate these crucial moments:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                  <li><strong>One from the bubble:</strong> Big stacks should attack relentlessly. Medium stacks should tighten significantly. Short stacks should look for double-up spots.</li>
                  <li><strong>Major pay jumps (e.g., 4th to 3rd):</strong> If you're the medium stack, extreme caution is warranted. Let short stacks battle.</li>
                  <li><strong>Three-handed play:</strong> Most dynamic situation. Aggression increases dramatically. Wide ranges become standard.</li>
                  <li><strong>Heads-up:</strong> ICM no longer applies. Play for chip EV. Aggression is key.</li>
                </ul>

                <div className="bg-teal-50 border-l-4 border-teal-600 p-6 my-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">IK118 Pro Tip</h3>
                  <p className="text-gray-700">
                    At final tables, pay attention to other players' stack sizes relative to yours. If you're 4th in chips with 15 BB and 5th place has 8 BB, you can often fold your way to a better finish. Conversely, if you're 5th with 8 BB and 6th has 7 BB, you need to gamble before they bust.
                  </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Advanced Tournament Concepts</h2>
                
                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Chip Accumulation vs Survival</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  IK118's analysis of tournament winners reveals they take calculated risks early to build stacks, then shift to survival mode at key pay jumps. The balance between these approaches is crucial:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                  <li><strong>Early stages (Levels 1-5):</strong> Focus on chip accumulation. Take thin value spots. Build a stack for later pressure.</li>
                  <li><strong>Middle stages (Approaching bubble):</strong> Balance accumulation with survival. Avoid marginal all-ins.</li>
                  <li><strong>Bubble:</strong> Extreme survival mode if medium stack. Extreme aggression if big stack.</li>
                  <li><strong>Post-bubble:</strong> Return to accumulation mode. Pressure increases with rising blinds.</li>
                  <li><strong>Final table:</strong> Situation-dependent. Adjust based on stack size and pay jumps.</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Reading Live Tells in Tournaments</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Live tournaments offer the advantage of physical tells. IK118's professional coaches have identified these reliable indicators:
                </p>
                <div className="space-y-3 mb-6">
                  <div className="bg-gray-50 p-3 rounded">
                    <p className="text-sm text-gray-700"><strong>Chip handling:</strong> Nervous chip shuffling often indicates a bluff. Confident stacking suggests strength.</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded">
                    <p className="text-sm text-gray-700"><strong>Betting motion:</strong> Forceful bets often indicate weakness (trying to appear strong). Gentle bets suggest confidence.</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded">
                    <p className="text-sm text-gray-700"><strong>Timing tells:</strong> Instant calls usually indicate medium strength. Long tanks followed by calls suggest strong hands.</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded">
                    <p className="text-sm text-gray-700"><strong>Posture changes:</strong> Sitting up straight after seeing flop indicates interest. Slouching suggests weakness.</p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Conclusion: Mastering Tournament Play</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Success in live poker tournaments requires mastering multiple strategic layers: ICM calculations, position-based play, stack dynamics, and psychological warfare. IK118's comprehensive analysis shows that the best tournament players excel in all these areas while maintaining emotional control through variance.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Remember that tournaments are high-variance formats where even the best players experience long stretches without wins. Focus on making optimal decisions rather than results, study ICM scenarios regularly, and continuously refine your understanding of position-based strategy.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The strategies outlined in this guide represent years of IK118 research and analysis. Apply these concepts systematically, adjust based on your opponents and table dynamics, and you'll significantly improve your tournament results. For more advanced poker strategies and IK118 expert analysis, explore our complete live games guide library.
                </p>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Related Articles</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/live-games/live-poker-variants" className="text-teal-600 hover:text-teal-700 font-medium">
                      → Live Poker Variants Guide
                    </Link>
                    <Link href="/live-games/live-casino-bankroll-management" className="text-teal-600 hover:text-teal-700 font-medium">
                      → Bankroll Management
                    </Link>
                    <Link href="/live-games/live-dealer-etiquette" className="text-teal-600 hover:text-teal-700 font-medium">
                      → Live Dealer Etiquette
                    </Link>
                    <Link href="/live-games/vip-live-casino-tables" className="text-teal-600 hover:text-teal-700 font-medium">
                      → VIP Live Casino Tables
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <aside className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Subscribe to IK118 Insights</h3>
              <p className="text-sm text-gray-600 mb-4">
                Get weekly poker tournament strategies and ICM analysis delivered to your inbox.
              </p>
              {!subscribed ? (
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition-colors font-medium text-sm whitespace-nowrap"
                  >
                    Subscribe Now
                  </button>
                </form>
              ) : (
                <div className="text-center py-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <i className="ri-check-line text-2xl text-green-600"></i>
                  </div>
                  <p className="text-green-600 font-medium">Successfully subscribed!</p>
                </div>
              )}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3 text-sm">About the Author</h4>
                <p className="text-xs text-gray-600">
                  Marcus Chen is a professional poker coach with 12 years of tournament experience. He has over $2M in live tournament earnings and specializes in ICM strategy and final table play. Marcus has coached dozens of players to major tournament victories.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
