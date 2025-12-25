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
                  Live Poker Variants Complete Guide: Texas Hold'em, Caribbean Stud & Three Card Poker
                </h1>
                <div className="flex items-center text-gray-600 text-sm mb-6">
                  <span className="font-medium">By Daniel Rodriguez</span>
                  <span className="mx-2">•</span>
                  <span>Poker Strategy Expert</span>
                  <span className="mx-2">•</span>
                  <span>14 min read</span>
                </div>
                <img 
                  src="https://readdy.ai/api/search-image?query=professional%20live%20poker%20table%20with%20multiple%20poker%20variants%20being%20played%20elegant%20casino%20setting%20poker%20chips%20cards%20being%20dealt%20dealer%20in%20formal%20attire%20modern%20gaming%20atmosphere%20various%20poker%20games%20displayed&width=1200&height=600&seq=pokervariants001&orientation=landscape"
                  alt="Live Poker Variants"
                  className="w-full h-96 object-cover rounded-lg mb-8"
                />
              </div>

              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Live dealer poker has evolved far beyond traditional Texas Hold'em, offering Australian players a diverse range of variants each with unique strategies and house edges. At IK118, we've analyzed thousands of hands across all major poker variants to provide comprehensive strategy guides for maximizing your edge in each game format.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Live Texas Hold'em: The Classic Game</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Texas Hold'em remains the most popular poker variant worldwide. In live dealer format, you're playing against other players (not the house), making it a pure skill game. IK118's research shows that understanding position, hand selection, and bet sizing is crucial for long-term success.
                </p>

                <div className="bg-teal-50 border-l-4 border-teal-600 p-6 my-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">IK118 Expert Insight</h3>
                  <p className="text-gray-700">
                    Live Texas Hold'em offers the best long-term value for skilled players since you're competing against other players rather than a house edge. However, this also means you need genuine poker skills to be profitable. Study position-based strategy and hand reading to gain an edge.
                  </p>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Starting Hand Selection by Position</h3>
                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full bg-white border border-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Position</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Hand Range</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">% of Hands</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Strategy</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 text-sm text-gray-900">Early Position</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Premium pairs, AK, AQ</td>
                        <td className="px-6 py-4 text-sm text-gray-700">12-15%</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Play tight, strong hands only</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm text-gray-900">Middle Position</td>
                        <td className="px-6 py-4 text-sm text-gray-700">All pairs, suited connectors, broadway</td>
                        <td className="px-6 py-4 text-sm text-gray-700">18-22%</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Balanced approach</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm text-gray-900">Cutoff</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Wide range, suited aces, connectors</td>
                        <td className="px-6 py-4 text-sm text-gray-700">25-30%</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Aggressive, steal blinds</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm text-gray-900">Button</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Very wide, any suited, connectors</td>
                        <td className="px-6 py-4 text-sm text-gray-700">35-45%</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Maximum aggression</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm text-gray-900">Small Blind</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Defend vs steals, fold vs raises</td>
                        <td className="px-6 py-4 text-sm text-gray-700">30-40%</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Defensive, protect investment</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm text-gray-900">Big Blind</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Wide defense vs button/cutoff</td>
                        <td className="px-6 py-4 text-sm text-gray-700">40-50%</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Defend aggressively</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">IK118 Post-Flop Strategy Framework</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                  <li><strong>Continuation Betting:</strong> C-bet 60-70% on favorable boards, check back on coordinated boards</li>
                  <li><strong>Board Texture Reading:</strong> Dry boards favor aggressor, wet boards favor caller's range</li>
                  <li><strong>Pot Control:</strong> Check back medium strength hands to control pot size and see showdown</li>
                  <li><strong>Value Betting:</strong> Bet 60-75% pot with strong hands, thin value on river</li>
                  <li><strong>Bluff Frequency:</strong> Bluff 30-40% of the time on river to remain balanced</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Caribbean Stud Poker Strategy</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Caribbean Stud is a casino poker variant where you play against the dealer rather than other players. IK118's mathematical analysis reveals optimal strategy for this popular game with a house edge of approximately 5.22%.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Game Rules and Payouts</h3>
                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full bg-white border border-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Hand</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Payout</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Probability</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Expected Value</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 text-sm text-gray-900">Royal Flush</td>
                        <td className="px-6 py-4 text-sm text-gray-700">100:1</td>
                        <td className="px-6 py-4 text-sm text-gray-700">0.00015%</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Jackpot eligible</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm text-gray-900">Straight Flush</td>
                        <td className="px-6 py-4 text-sm text-gray-700">50:1</td>
                        <td className="px-6 py-4 text-sm text-gray-700">0.0014%</td>
                        <td className="px-6 py-4 text-sm text-gray-700">High variance</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm text-gray-900">Four of a Kind</td>
                        <td className="px-6 py-4 text-sm text-gray-700">20:1</td>
                        <td className="px-6 py-4 text-sm text-gray-700">0.024%</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Rare but valuable</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm text-gray-900">Full House</td>
                        <td className="px-6 py-4 text-sm text-gray-700">7:1</td>
                        <td className="px-6 py-4 text-sm text-gray-700">0.14%</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Good value hand</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm text-gray-900">Flush</td>
                        <td className="px-6 py-4 text-sm text-gray-700">5:1</td>
                        <td className="px-6 py-4 text-sm text-gray-700">0.20%</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Solid payout</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm text-gray-900">Straight</td>
                        <td className="px-6 py-4 text-sm text-gray-700">4:1</td>
                        <td className="px-6 py-4 text-sm text-gray-700">0.39%</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Common strong hand</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm text-gray-900">Three of a Kind</td>
                        <td className="px-6 py-4 text-sm text-gray-700">3:1</td>
                        <td className="px-6 py-4 text-sm text-gray-700">2.11%</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Frequent winner</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm text-gray-900">Two Pair</td>
                        <td className="px-6 py-4 text-sm text-gray-700">2:1</td>
                        <td className="px-6 py-4 text-sm text-gray-700">4.75%</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Common hand</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm text-gray-900">Pair or Less</td>
                        <td className="px-6 py-4 text-sm text-gray-700">1:1</td>
                        <td className="px-6 py-4 text-sm text-gray-700">92.36%</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Most common outcome</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Optimal Raise/Fold Strategy</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  IK118's computer simulations have determined the mathematically optimal strategy for Caribbean Stud:
                </p>
                <div className="space-y-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Always Raise With:</h4>
                    <ul className="list-disc pl-6 space-y-1 text-sm text-gray-700">
                      <li>Any pair or better</li>
                      <li>AKJ, AKQ (regardless of dealer's upcard)</li>
                      <li>AK with dealer showing 2-Q and matching your 4th or 5th card</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Always Fold With:</h4>
                    <ul className="list-disc pl-6 space-y-1 text-sm text-gray-700">
                      <li>Hands worse than AK</li>
                      <li>AK with dealer showing A or K</li>
                      <li>AK with no card matching dealer's upcard</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Progressive Jackpot Side Bet:</h4>
                    <p className="text-sm text-gray-700">
                      IK118 Analysis: Only play when jackpot exceeds $250,000 for $1 bet. House edge is typically 26% but can become player-favorable with large jackpots.
                    </p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Three Card Poker Complete Strategy</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Three Card Poker offers two betting options: Ante/Play and Pair Plus. IK118's analysis shows this game has one of the lowest house edges in casino poker when played optimally.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Ante/Play Optimal Strategy</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The optimal strategy for Ante/Play is remarkably simple, making Three Card Poker ideal for beginners:
                </p>
                <div className="bg-teal-50 border-l-4 border-teal-600 p-6 my-6">
                  <h4 className="font-bold text-gray-900 mb-2">IK118 Perfect Strategy</h4>
                  <p className="text-gray-700 mb-2">
                    <strong>Play (make the Play bet) with:</strong> Q-6-4 or better
                  </p>
                  <p className="text-gray-700">
                    <strong>Fold with:</strong> Anything worse than Q-6-4
                  </p>
                  <p className="text-gray-700 mt-2 text-sm">
                    This simple strategy reduces the house edge to just 3.37% on the Ante bet, one of the best in casino poker.
                  </p>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Pair Plus Payouts and Strategy</h3>
                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full bg-white border border-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Hand</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Payout</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Probability</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">House Edge</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 text-sm text-gray-900">Straight Flush</td>
                        <td className="px-6 py-4 text-sm text-gray-700">40:1</td>
                        <td className="px-6 py-4 text-sm text-gray-700">0.22%</td>
                        <td className="px-6 py-4 text-sm text-gray-700">2.32%</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm text-gray-900">Three of a Kind</td>
                        <td className="px-6 py-4 text-sm text-gray-700">30:1</td>
                        <td className="px-6 py-4 text-sm text-gray-700">0.24%</td>
                        <td className="px-6 py-4 text-sm text-gray-700">(Included above)</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm text-gray-900">Straight</td>
                        <td className="px-6 py-4 text-sm text-gray-700">6:1</td>
                        <td className="px-6 py-4 text-sm text-gray-700">3.26%</td>
                        <td className="px-6 py-4 text-sm text-gray-700">(Included above)</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm text-gray-900">Flush</td>
                        <td className="px-6 py-4 text-sm text-gray-700">4:1</td>
                        <td className="px-6 py-4 text-sm text-gray-700">4.96%</td>
                        <td className="px-6 py-4 text-sm text-gray-700">(Included above)</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm text-gray-900">Pair</td>
                        <td className="px-6 py-4 text-sm text-gray-700">1:1</td>
                        <td className="px-6 py-4 text-sm text-gray-700">16.94%</td>
                        <td className="px-6 py-4 text-sm text-gray-700">(Included above)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">IK118 Three Card Poker Betting Strategy</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                  <li><strong>Ante/Play Focus:</strong> Make this your primary bet. Lower house edge and more consistent returns.</li>
                  <li><strong>Pair Plus Consideration:</strong> Only bet if you enjoy the variance. House edge is higher at 2.32%.</li>
                  <li><strong>Ante Bonus:</strong> Automatically paid on straight or better regardless of dealer qualifying. No strategy needed.</li>
                  <li><strong>Bankroll Management:</strong> Bring 50x your Ante bet for a comfortable session.</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Other Popular Live Poker Variants</h2>

                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Ultimate Texas Hold'em</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  A casino variant where you play against the dealer with community cards. IK118's optimal strategy:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                  <li><strong>4x Raise Pre-flop:</strong> With any pair, any suited K, Q-6s or better, K-5o or better, Q-8o or better, J-10o</li>
                  <li><strong>2x Raise on Flop:</strong> With any pair, any hidden pair, 4 to a flush, open-ended straight draw</li>
                  <li><strong>1x Raise on River:</strong> With any pair or better, dealer showing weak board</li>
                  <li><strong>House Edge:</strong> 2.18% with perfect play</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Casino Hold'em</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Similar to Ultimate Texas Hold'em but with different betting structure. IK118 strategy:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                  <li><strong>Call Pre-flop:</strong> With any pair, any A, any K, Q-8 or better, J-10, suited connectors</li>
                  <li><strong>Fold Pre-flop:</strong> With weak unsuited hands below Q-8</li>
                  <li><strong>AA Bonus Side Bet:</strong> Avoid unless jackpot is exceptionally high (house edge 6.26%)</li>
                  <li><strong>House Edge:</strong> 2.16% on Ante with optimal play</li>
                </ul>

                <div className="bg-teal-50 border-l-4 border-teal-600 p-6 my-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">IK118 Pro Tip</h3>
                  <p className="text-gray-700">
                    When choosing between poker variants, consider your skill level and bankroll. Texas Hold'em offers the best long-term value for skilled players but requires significant study. Caribbean Stud and Three Card Poker are more suitable for recreational players who want simpler strategy with reasonable house edges.
                  </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Bankroll Management Across Variants</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Different poker variants require different bankroll approaches due to varying volatility and house edges. IK118's recommendations:
                </p>
                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full bg-white border border-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Variant</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Session Bankroll</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Volatility</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Skill Factor</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 text-sm text-gray-900">Texas Hold'em</td>
                        <td className="px-6 py-4 text-sm text-gray-700">100+ big blinds</td>
                        <td className="px-6 py-4 text-sm text-gray-700">High</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Very High</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm text-gray-900">Caribbean Stud</td>
                        <td className="px-6 py-4 text-sm text-gray-700">50x ante</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Medium</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Low</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm text-gray-900">Three Card Poker</td>
                        <td className="px-6 py-4 text-sm text-gray-700">40x ante</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Low-Medium</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Very Low</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm text-gray-900">Ultimate Texas Hold'em</td>
                        <td className="px-6 py-4 text-sm text-gray-700">60x ante</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Medium-High</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Medium</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm text-gray-900">Casino Hold'em</td>
                        <td className="px-6 py-4 text-sm text-gray-700">50x ante</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Medium</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Low-Medium</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Conclusion: Choosing Your Poker Variant</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Each live poker variant offers unique advantages and challenges. Texas Hold'em provides the best long-term value for skilled players willing to invest time in study. Caribbean Stud and Three Card Poker offer simpler strategies with reasonable house edges for recreational players. Ultimate Texas Hold'em and Casino Hold'em bridge the gap, offering strategic depth without the complexity of player-vs-player dynamics.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  IK118's comprehensive analysis shows that success in any variant requires understanding the mathematical foundations, applying optimal strategy consistently, and managing your bankroll appropriately for the game's volatility. Choose the variant that matches your skill level, study time availability, and entertainment preferences.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  For Australian players at IK118, we recommend starting with Three Card Poker to learn the basics, progressing to Caribbean Stud or Ultimate Texas Hold'em for more strategic depth, and eventually mastering live Texas Hold'em for maximum long-term profitability. Explore our complete live games guide library for detailed strategies on each variant.
                </p>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Related Articles</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/live-games/live-poker-tournament-strategies" className="text-teal-600 hover:text-teal-700 font-medium">
                      → Live Poker Tournament Strategies
                    </Link>
                    <Link href="/live-games/live-casino-bankroll-management" className="text-teal-600 hover:text-teal-700 font-medium">
                      → Bankroll Management Guide
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
                Get weekly poker strategies and variant analysis delivered to your inbox.
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
                  Daniel Rodriguez is a poker strategy expert with 15 years of experience across all major variants. He has written extensively on optimal poker mathematics and has coached hundreds of players to profitability in both live and online formats.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}