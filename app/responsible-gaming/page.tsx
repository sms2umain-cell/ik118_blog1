export default function ResponsibleGamingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="relative bg-gradient-to-r from-green-900 to-green-700 text-white py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Responsible Gaming</h1>
            <p className="text-xl text-green-100 mb-8">
              Your wellbeing is our priority. Learn about safe and responsible gambling practices
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-6 mb-8">
            <div className="flex items-start">
              <div className="w-12 h-12 flex items-center justify-center bg-amber-500 rounded-lg mr-4 flex-shrink-0">
                <i className="ri-alert-line text-2xl text-white"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-amber-900 mb-2">Important Notice</h3>
                <p className="text-amber-800">
                  Gambling should be entertaining and fun. If you feel that gambling is becoming a problem, please seek help immediately. You are not alone.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">What is Responsible Gaming?</h2>
            <p className="text-gray-700 text-lg mb-4">
              Responsible gaming means gambling in a way that is safe, controlled, and within your means. It's about making informed decisions and recognizing when gambling stops being fun.
            </p>
            <p className="text-gray-700 text-lg">
              At IK118, we are committed to promoting responsible gaming practices and providing resources to help you stay in control.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Signs of Problem Gambling</h2>
            <p className="text-gray-700 mb-4">Be aware of these warning signs:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Spending more money than you can afford',
                'Chasing losses by gambling more',
                'Lying about gambling activities',
                'Neglecting work or family responsibilities',
                'Borrowing money to gamble',
                'Feeling anxious or depressed about gambling',
                'Unable to stop or control gambling',
                'Gambling to escape problems'
              ].map((sign, index) => (
                <div key={index} className="flex items-start bg-red-50 rounded-lg p-4">
                  <i className="ri-close-circle-line text-red-600 text-xl mr-3 flex-shrink-0 mt-1"></i>
                  <span className="text-gray-700">{sign}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Responsible Gaming Tips</h2>
            <div className="space-y-4">
              {[
                {
                  icon: 'ri-money-dollar-circle-line',
                  title: 'Set a Budget',
                  description: 'Only gamble with money you can afford to lose. Never use money meant for bills or essentials.'
                },
                {
                  icon: 'ri-time-line',
                  title: 'Set Time Limits',
                  description: 'Decide how long you will play before you start and stick to it.'
                },
                {
                  icon: 'ri-close-circle-line',
                  title: 'Never Chase Losses',
                  description: 'Accept losses as part of the game. Trying to win back losses often leads to bigger problems.'
                },
                {
                  icon: 'ri-emotion-line',
                  title: 'Keep It Fun',
                  description: 'Gambling should be entertainment, not a way to make money or solve financial problems.'
                },
                {
                  icon: 'ri-forbid-line',
                  title: 'Take Regular Breaks',
                  description: 'Step away from gambling regularly to maintain perspective and control.'
                },
                {
                  icon: 'ri-shield-check-line',
                  title: 'Use Self-Exclusion Tools',
                  description: 'Most casinos offer self-exclusion options if you need a break from gambling.'
                }
              ].map((tip, index) => (
                <div key={index} className="flex items-start border border-gray-200 rounded-lg p-6 hover:border-green-500 transition-colors">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-green-500 to-green-600 rounded-lg mr-4 flex-shrink-0">
                    <i className={`${tip.icon} text-2xl text-white`}></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-2">{tip.title}</h3>
                    <p className="text-gray-700">{tip.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Self-Assessment</h2>
            <p className="text-gray-700 mb-4">Answer these questions honestly:</p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Do you gamble to escape problems or relieve feelings of anxiety or depression?</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Have you ever lied to family or friends about your gambling?</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Do you feel the need to gamble with increasing amounts of money?</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Have you tried to cut back on gambling but been unable to?</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Has gambling caused problems in your relationships or at work?</span>
              </li>
            </ul>
            <div className="bg-blue-50 rounded-lg p-6 mt-6">
              <p className="text-gray-700 font-semibold">
                If you answered "yes" to any of these questions, it may be time to seek help.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl shadow-lg p-8 text-white mb-8">
            <h2 className="text-3xl font-bold mb-6">Get Help Now</h2>
            <p className="text-xl mb-6">
              If you or someone you know has a gambling problem, help is available 24/7
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Gambling Help Online</h3>
                <p className="mb-2">Phone: 1800 858 858</p>
                <p className="mb-2">Available 24/7</p>
                <a 
                  href="https://www.gamblinghelponline.org.au" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-green-100 hover:text-white underline"
                >
                  www.gamblinghelponline.org.au
                </a>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Lifeline Australia</h3>
                <p className="mb-2">Phone: 13 11 14</p>
                <p className="mb-2">Crisis support 24/7</p>
                <a 
                  href="https://www.lifeline.org.au" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-green-100 hover:text-white underline"
                >
                  www.lifeline.org.au
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Additional Resources</h2>
            <div className="space-y-4">
              <a 
                href="https://www.gamblersanonymous.org.au" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block border border-gray-200 rounded-lg p-4 hover:border-green-500 transition-colors"
              >
                <h4 className="font-bold text-blue-900 mb-1">Gamblers Anonymous Australia</h4>
                <p className="text-gray-600 text-sm">Support groups and meetings across Australia</p>
              </a>
              <a 
                href="https://www.gambleaware.com.au" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block border border-gray-200 rounded-lg p-4 hover:border-green-500 transition-colors"
              >
                <h4 className="font-bold text-blue-900 mb-1">Gamble Aware</h4>
                <p className="text-gray-600 text-sm">Information and support for problem gambling</p>
              </a>
              <a 
                href="https://www.beyondblue.org.au" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block border border-gray-200 rounded-lg p-4 hover:border-green-500 transition-colors"
              >
                <h4 className="font-bold text-blue-900 mb-1">Beyond Blue</h4>
                <p className="text-gray-600 text-sm">Mental health support and resources</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}