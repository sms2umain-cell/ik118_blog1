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

      const response = await fetch('https://readdy.ai/api/form/d4tpcvegghdeis7q5neg', {
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
        <Link href="/live-games" className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 mb-8 group cursor-pointer">
          <i className="ri-arrow-left-line group-hover:-translate-x-1 transition-transform w-4 h-4 flex items-center justify-center"></i>
          <span className="font-medium">Back to Live Games</span>
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full text-sm font-semibold">Side Bets Analysis</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-600">12 min read</span>
          </div>

          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Live Blackjack Side Bets: Mathematical Analysis from IK118
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed">
            Comprehensive mathematical analysis of popular blackjack side bets including Perfect Pairs, 21+3, and Insurance with house edge calculations from IK118's expert team.
          </p>

          <div className="flex items-center gap-4 mt-8 pt-8 border-t border-gray-200">
            <img
              src="https://readdy.ai/api/search-image?query=professional%20female%20mathematics%20expert%20in%20business%20attire%20confident%20smile%20headshot%20portrait%20with%20modern%20office%20background%20high%20quality%20photography&width=80&height=80&seq=authorsidebets001&orientation=squarish"
              alt="Author"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <div className="font-semibold text-gray-900">Dr. Emily Carter</div>
              <div className="text-gray-600 text-sm">Gaming Mathematics Analyst at IK118 | PhD in Statistics</div>
            </div>
          </div>
        </header>

        <img
          src="https://readdy.ai/api/search-image?query=elegant%20blackjack%20table%20with%20side%20bet%20circles%20and%20chips%20showing%20perfect%20pairs%20and%20twenty%20one%20plus%20three%20betting%20areas%20professional%20casino%20lighting%20high%20quality%20photography%20detailed%20view&width=1200&height=600&seq=livesidebets001&orientation=landscape"
          alt="Live Blackjack Side Bets"
          className="w-full h-96 object-cover rounded-2xl mb-12 shadow-lg"
        />

        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Understanding Blackjack Side Bets</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Side bets in live blackjack offer additional wagering opportunities beyond the main hand. While they add excitement and variety, IK118's mathematical analysis reveals that most side bets carry significantly higher house edges than the base game.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            The standard blackjack game has a house edge of approximately 0.5% with perfect basic strategy. In contrast, popular side bets typically range from 2% to over 10% house edge, making them substantially less favorable from a mathematical perspective.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Perfect Pairs Side Bet</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Perfect Pairs is one of the most common side bets in live blackjack. You win if your first two cards form a pair. IK118's analysis shows three payout tiers:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>Perfect Pair (same suit):</strong> Typically pays 25:1</li>
            <li><strong>Colored Pair (same color, different suits):</strong> Typically pays 12:1</li>
            <li><strong>Mixed Pair (different colors):</strong> Typically pays 6:1</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            Using a standard 8-deck shoe, IK118 calculates the house edge for Perfect Pairs at approximately 4.1%. While this is higher than the main game, it's among the better side bets available.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">21+3 Side Bet Analysis</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The 21+3 side bet combines your two cards with the dealer's upcard to form a three-card poker hand. IK118 has identified these standard payouts:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>Suited Three of a Kind:</strong> 100:1</li>
            <li><strong>Straight Flush:</strong> 40:1</li>
            <li><strong>Three of a Kind:</strong> 30:1</li>
            <li><strong>Straight:</strong> 10:1</li>
            <li><strong>Flush:</strong> 5:1</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            With 8 decks, the house edge for 21+3 is approximately 3.24%. IK118 notes that this varies significantly based on the number of decks and specific payout structure used by the casino.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Insurance: The Worst Side Bet</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Insurance is offered when the dealer shows an Ace. You can bet up to half your original wager that the dealer has blackjack. IK118's analysis is unequivocal: insurance is a poor bet for non-counters.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Insurance pays 2:1, but the true odds of the dealer having a 10-value card are worse than 2:1. In an 8-deck shoe, IK118 calculates the house edge on insurance at 7.4% - making it one of the worst bets in blackjack.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            The only exception is for card counters who know the remaining deck is rich in 10-value cards. For all other players, IK118 strongly recommends declining insurance every time.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Bet Behind Side Bet</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Bet Behind allows you to wager on another player's hand when all seats are full. While not technically a side bet, it functions similarly. IK118 notes that Bet Behind carries the same house edge as the main game (0.5% with perfect play).
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            However, you have no control over playing decisions. If the seated player makes poor strategy choices, your Bet Behind wager suffers. IK118 recommends only using Bet Behind when watching skilled players who follow basic strategy.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Hot 3 and Other Exotic Side Bets</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Some live blackjack tables offer additional exotic side bets. IK118 has analyzed several popular variants:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>Hot 3:</strong> Based on your first two cards and dealer's upcard totaling 19, 20, or 21. House edge: 4.7%</li>
            <li><strong>Bust It:</strong> Bet that the dealer will bust with a specific number of cards. House edge: 5.9%</li>
            <li><strong>Royal Match:</strong> Your first two cards are suited. House edge: 6.7%</li>
            <li><strong>Lucky Ladies:</strong> Your first two cards total 20. House edge: 24.7% (avoid this bet!)</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Expected Value Calculations</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            IK118 recommends understanding expected value (EV) before placing side bets. EV represents your average loss per dollar wagered over the long term.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Example: A $10 Perfect Pairs bet with 4.1% house edge has an EV of -$0.41. Over 100 such bets, you'll lose approximately $41. Compare this to 100 main game bets at $10 each with 0.5% house edge: expected loss of just $5.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">When Side Bets Make Sense</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Despite the higher house edge, IK118 acknowledges that side bets can enhance entertainment value. Consider these guidelines:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>Entertainment Budget:</strong> Treat side bets as entertainment expenses, not investment opportunities</li>
            <li><strong>Small Percentages:</strong> Limit side bets to 10-20% of your total blackjack wagering</li>
            <li><strong>Choose Wisely:</strong> Stick to lower house edge options like Perfect Pairs and 21+3</li>
            <li><strong>Avoid Insurance:</strong> Never take insurance unless you're a skilled card counter</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Variance and Bankroll Impact</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Side bets significantly increase variance. IK118's simulations show that while you can hit large payouts (25:1 or higher), you'll also experience longer losing streaks than with main game betting alone.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            If you choose to play side bets, increase your bankroll accordingly. IK118 recommends having at least 100 times your combined main bet plus side bet amount to weather the increased volatility.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Progressive Side Bets</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Some live blackjack tables offer progressive jackpot side bets. These accumulate across multiple tables and can reach substantial amounts. However, IK118's analysis shows house edges typically exceeding 20%.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            The allure of a large jackpot must be balanced against the mathematical reality of extremely poor odds. IK118 recommends avoiding progressive side bets unless the jackpot has grown to an unusually high level that justifies the risk.
          </p>

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-l-4 border-amber-500 rounded-lg p-8 my-12">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-amber-500 rounded-xl flex-shrink-0">
                <i className="ri-lightbulb-line text-white text-2xl w-6 h-6 flex items-center justify-center"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">IK118 Expert Insight</h3>
                <p className="text-gray-700 leading-relaxed">
                  "Side bets are designed to increase casino revenue, not player returns. The mathematics are clear: every side bet carries a higher house edge than the main game. If you enjoy the excitement they provide, budget accordingly and treat them as entertainment costs, not profit opportunities." - Dr. Emily Carter, IK118 Gaming Mathematics Analyst
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Conclusion</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Live blackjack side bets add variety and excitement to the game, but they come at a mathematical cost. IK118's analysis shows that all side bets carry higher house edges than the base game, with some exceeding 20%.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            If you choose to play side bets, stick to lower house edge options like Perfect Pairs (4.1%) and 21+3 (3.24%). Always avoid insurance unless you're counting cards, and never let side bets consume more than a small portion of your bankroll. Remember: the best blackjack strategy focuses on the main game with perfect basic strategy.
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Live Casino Guides from IK118</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/live-games/live-blackjack-strategy" className="group p-6 bg-gray-50 hover:bg-amber-50 rounded-xl transition-colors cursor-pointer border border-gray-200 hover:border-amber-500">
              <h4 className="font-bold text-gray-900 mb-2 group-hover:text-amber-600">Live Blackjack Complete Strategy</h4>
              <p className="text-gray-600 text-sm">Master basic strategy and card counting techniques</p>
            </Link>
            <Link href="/live-games/live-casino-bankroll-management" className="group p-6 bg-gray-50 hover:bg-amber-50 rounded-xl transition-colors cursor-pointer border border-gray-200 hover:border-amber-500">
              <h4 className="font-bold text-gray-900 mb-2 group-hover:text-amber-600">Bankroll Management</h4>
              <p className="text-gray-600 text-sm">Professional money management for live casino games</p>
            </Link>
          </div>
        </div>

        <aside className="mt-12 bg-gradient-to-br from-blue-900 to-purple-900 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Weekly Live Casino Insights</h3>
          <p className="text-blue-100 mb-6">
            Subscribe to IK118's newsletter for expert live dealer strategies, game analysis, and exclusive tips delivered weekly.
          </p>
          
          {!isSubscribed ? (
            <form id="live-games-sidebar-newsletter" data-readdy-form onSubmit={handleSubscribe} className="flex gap-3">
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button
                type="submit"
                className="bg-amber-500 hover:bg-amber-600 text-gray-900 px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer"
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