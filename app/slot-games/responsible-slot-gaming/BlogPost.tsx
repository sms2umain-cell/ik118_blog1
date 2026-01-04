export default function BlogPost() {
  return (
    <div className="min-h-screen bg-white">
      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
            <span className="flex items-center gap-1">
              <i className="ri-calendar-line w-4 h-4 flex items-center justify-center"></i>
              January 5, 2025
            </span>
            <span className="flex items-center gap-1">
              <i className="ri-time-line w-4 h-4 flex items-center justify-center"></i>
              13 min read
            </span>
            <span className="flex items-center gap-1">
              <i className="ri-eye-line w-4 h-4 flex items-center justify-center"></i>
              11,234 views
            </span>
          </div>
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Responsible Slot Gaming: Your Complete Guide to Safe Play
          </h1>
          <p className="text-xl text-gray-600">
            Essential strategies and tools to ensure your slot gaming remains fun, safe, and within your control.
          </p>
        </div>

        <div className="relative h-96 mb-12 rounded-2xl overflow-hidden">
          <img
            src="https://readdy.ai/api/search-image?query=peaceful%20person%20playing%20casino%20slots%20responsibly%20on%20laptop%20with%20calm%20expression%2C%20balanced%20lifestyle%20concept%2C%20warm%20lighting%2C%20professional%20photography%20showing%20healthy%20gaming%20habits%2C%20clean%20simple%20background%20emphasizing%20responsible%20gaming&width=800&height=400&seq=responsible1&orientation=landscape"
            alt="Responsible Gaming"
            className="w-full h-full object-cover object-top"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 my-8 border-l-4 border-blue-500">
            <h2 className="text-2xl font-bold mb-4 text-blue-900">Why Responsible Gaming Matters</h2>
            <p className="text-gray-700 leading-relaxed">
              Slot gaming should be an entertaining leisure activity, not a source of stress or financial problems. Responsible gaming means maintaining control over your gambling habits, setting appropriate limits, and recognizing when gaming stops being fun. This guide will help you develop healthy gaming habits that keep the experience enjoyable.
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Understanding the Risks</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            While most people can enjoy slot games responsibly, it's important to understand the potential risks. Slot machines are designed to be entertaining and engaging, which can sometimes lead to extended play sessions or spending more than intended. Being aware of these risks is the first step in maintaining healthy gaming habits.
          </p>

          <div className="grid md:grid-cols-3 gap-6 my-8">
            <div className="bg-red-50 rounded-xl p-6 border border-red-200">
              <div className="w-12 h-12 flex items-center justify-center bg-red-100 rounded-full mb-4">
                <i className="ri-alert-line w-6 h-6 flex items-center justify-center text-red-600"></i>
              </div>
              <h3 className="text-lg font-bold mb-2 text-red-900">Financial Risk</h3>
              <p className="text-gray-700 text-sm">Spending more money than you can afford to lose can lead to financial difficulties and debt.</p>
            </div>

            <div className="bg-red-50 rounded-xl p-6 border border-red-200">
              <div className="w-12 h-12 flex items-center justify-center bg-red-100 rounded-full mb-4">
                <i className="ri-time-line w-6 h-6 flex items-center justify-center text-red-600"></i>
              </div>
              <h3 className="text-lg font-bold mb-2 text-red-900">Time Management</h3>
              <p className="text-gray-700 text-sm">Excessive gaming can interfere with work, relationships, and other important life activities.</p>
            </div>

            <div className="bg-red-50 rounded-xl p-6 border border-red-200">
              <div className="w-12 h-12 flex items-center justify-center bg-red-100 rounded-full mb-4">
                <i className="ri-emotion-unhappy-line w-6 h-6 flex items-center justify-center text-red-600"></i>
              </div>
              <h3 className="text-lg font-bold mb-2 text-red-900">Emotional Impact</h3>
              <p className="text-gray-700 text-sm">Chasing losses or gambling to escape problems can lead to stress, anxiety, and depression.</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Setting Healthy Limits</h2>
          
          <div className="space-y-6 my-8">
            <div className="bg-white rounded-xl p-6 border-l-4 border-purple-500">
              <h3 className="text-xl font-bold mb-3 text-gray-900 flex items-center gap-2">
                <i className="ri-money-dollar-circle-line w-6 h-6 flex items-center justify-center text-purple-600"></i>
                Budget Limits
              </h3>
              <p className="text-gray-700 mb-3">
                Decide in advance how much money you can afford to lose. This should be disposable income only - never use money needed for bills, rent, or other essentials.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Set a daily, weekly, or monthly budget</li>
                <li>• Use deposit limits available at online casinos</li>
                <li>• Never chase losses by exceeding your budget</li>
                <li>• Consider your budget as entertainment expense</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 border-l-4 border-purple-500">
              <h3 className="text-xl font-bold mb-3 text-gray-900 flex items-center gap-2">
                <i className="ri-timer-line w-6 h-6 flex items-center justify-center text-purple-600"></i>
                Time Limits
              </h3>
              <p className="text-gray-700 mb-3">
                Set specific time limits for your gaming sessions to prevent excessive play and maintain balance in your life.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Decide session length before you start</li>
                <li>• Use reality check reminders (available at most casinos)</li>
                <li>• Take regular breaks every 30-60 minutes</li>
                <li>• Don't play when tired or stressed</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 border-l-4 border-purple-500">
              <h3 className="text-xl font-bold mb-3 text-gray-900 flex items-center gap-2">
                <i className="ri-trophy-line w-6 h-6 flex items-center justify-center text-purple-600"></i>
                Win/Loss Limits
              </h3>
              <p className="text-gray-700 mb-3">
                Establish both winning and losing thresholds to help you walk away at the right time.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Set a loss limit and stop when you reach it</li>
                <li>• Decide on a win goal and cash out when achieved</li>
                <li>• Never try to win back losses in the same session</li>
                <li>• Celebrate wins but don't let them fuel more play</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Warning Signs of Problem Gaming</h2>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
            <h3 className="font-bold text-yellow-900 mb-4 flex items-center gap-2">
              <i className="ri-error-warning-line w-6 h-6 flex items-center justify-center"></i>
              Recognize These Red Flags
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-yellow-800">
                <li>• Spending more money than you can afford</li>
                <li>• Lying to family or friends about gambling</li>
                <li>• Neglecting work or personal responsibilities</li>
                <li>• Borrowing money to gamble</li>
                <li>• Feeling anxious or irritable when not gambling</li>
              </ul>
              <ul className="space-y-2 text-yellow-800">
                <li>• Chasing losses repeatedly</li>
                <li>• Gambling to escape problems or feelings</li>
                <li>• Unsuccessful attempts to cut back or stop</li>
                <li>• Relationship problems due to gambling</li>
                <li>• Thinking about gambling constantly</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Responsible Gaming Tools</h2>
          
          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-full mb-4">
                <i className="ri-lock-line w-6 h-6 flex items-center justify-center text-purple-600"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Deposit Limits</h3>
              <p className="text-gray-700">Set maximum amounts you can deposit daily, weekly, or monthly. These limits help prevent overspending and maintain budget control.</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-full mb-4">
                <i className="ri-pause-circle-line w-6 h-6 flex items-center justify-center text-purple-600"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Self-Exclusion</h3>
              <p className="text-gray-700">Temporarily or permanently block access to your casino account if you need a break or want to stop gambling completely.</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-full mb-4">
                <i className="ri-alarm-line w-6 h-6 flex items-center justify-center text-purple-600"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Reality Checks</h3>
              <p className="text-gray-700">Receive periodic reminders showing how long you've been playing and how much you've spent during your session.</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-full mb-4">
                <i className="ri-time-line w-6 h-6 flex items-center justify-center text-purple-600"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Session Limits</h3>
              <p className="text-gray-700">Set maximum time limits for gaming sessions. The system will automatically log you out when the time expires.</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-full mb-4">
                <i className="ri-hand-coin-line w-6 h-6 flex items-center justify-center text-purple-600"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Loss Limits</h3>
              <p className="text-gray-700">Set maximum loss amounts per day, week, or month. Once reached, you won't be able to place more bets until the period resets.</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-full mb-4">
                <i className="ri-history-line w-6 h-6 flex items-center justify-center text-purple-600"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Gaming History</h3>
              <p className="text-gray-700">Review your complete gaming history to track spending patterns and identify any concerning behaviors.</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Healthy Gaming Habits</h2>
          
          <div className="space-y-4 my-8">
            <div className="flex items-start gap-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
              <div className="w-8 h-8 flex items-center justify-center bg-green-200 rounded-full flex-shrink-0">
                <i className="ri-check-line w-5 h-5 flex items-center justify-center text-green-700"></i>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">View Gaming as Entertainment</h4>
                <p className="text-gray-700">Treat slot gaming as a form of entertainment with a cost, not as a way to make money or solve financial problems.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
              <div className="w-8 h-8 flex items-center justify-center bg-green-200 rounded-full flex-shrink-0">
                <i className="ri-check-line w-5 h-5 flex items-center justify-center text-green-700"></i>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Never Chase Losses</h4>
                <p className="text-gray-700">Accept losses as part of the game. Trying to win back lost money often leads to bigger losses and problem gambling.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
              <div className="w-8 h-8 flex items-center justify-center bg-green-200 rounded-full flex-shrink-0">
                <i className="ri-check-line w-5 h-5 flex items-center justify-center text-green-700"></i>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Balance with Other Activities</h4>
                <p className="text-gray-700">Maintain a healthy balance between gaming and other hobbies, social activities, work, and family time.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
              <div className="w-8 h-8 flex items-center justify-center bg-green-200 rounded-full flex-shrink-0">
                <i className="ri-check-line w-5 h-5 flex items-center justify-center text-green-700"></i>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Don't Gamble Under Influence</h4>
                <p className="text-gray-700">Avoid playing slots when under the influence of alcohol or drugs, as this impairs judgment and decision-making.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
              <div className="w-8 h-8 flex items-center justify-center bg-green-200 rounded-full flex-shrink-0">
                <i className="ri-check-line w-5 h-5 flex items-center justify-center text-green-700"></i>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Take Regular Breaks</h4>
                <p className="text-gray-700">Step away from the screen regularly to maintain perspective and prevent fatigue-induced poor decisions.</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Getting Help</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            If you're concerned about your gambling habits or those of someone you know, help is available. Don't hesitate to reach out to professional support services.
          </p>

          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 my-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Support Resources</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <i className="ri-phone-line w-6 h-6 flex items-center justify-center"></i>
                <div>
                  <p className="font-semibold">Gambling Help Online</p>
                  <p className="text-blue-100">1800 858 858 (24/7 Support)</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <i className="ri-global-line w-6 h-6 flex items-center justify-center"></i>
                <div>
                  <p className="font-semibold">Gamblers Anonymous</p>
                  <p className="text-blue-100">www.gamblersanonymous.org.au</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <i className="ri-chat-3-line w-6 h-6 flex items-center justify-center"></i>
                <div>
                  <p className="font-semibold">Online Counseling</p>
                  <p className="text-blue-100">Free confidential chat services available</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Conclusion</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Responsible gaming is about maintaining control and ensuring that slot gaming remains a fun, entertaining activity. By setting limits, recognizing warning signs, using available tools, and seeking help when needed, you can enjoy slots safely and responsibly. Remember, gambling should never negatively impact your finances, relationships, or well-being.
          </p>

          <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 my-12 text-white">
            <h3 className="text-2xl font-bold mb-4">IK118's Commitment to Responsible Gaming</h3>
            <p className="text-purple-100 leading-relaxed mb-4">
              At IK118, we're committed to providing a safe and responsible gaming environment. We offer comprehensive tools to help you stay in control, including deposit limits, self-exclusion options, and reality checks. Your well-being is our priority.
            </p>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-bold hover:bg-purple-50 transition-colors whitespace-nowrap">
              Learn More About Our Tools
            </button>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex items-center gap-4">
            <img
              src="https://readdy.ai/api/search-image?query=professional%20casino%20gaming%20expert%20avatar%2C%20friendly%20appearance%2C%20purple%20and%20pink%20theme%20colors%2C%20simple%20clean%20background&width=80&height=80&seq=author5&orientation=squarish"
              alt="Author"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h4 className="font-bold text-gray-900">Written by IK118 Responsible Gaming Team</h4>
              <p className="text-gray-600">Dedicated to promoting safe and responsible gaming practices</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}