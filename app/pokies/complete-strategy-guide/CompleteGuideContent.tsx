'use client';

import Link from 'next/link';

export default function CompleteGuideContent() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section 
        className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 text-white py-20"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.9), rgba(88, 28, 135, 0.9)), url('https://readdy.ai/api/search-image?query=Comprehensive%20pokies%20strategy%20guide%20with%20detailed%20charts%20graphs%20and%20gaming%20analysis%2C%20professional%20casino%20research%20environment%20with%20multiple%20screens%20showing%20data%20analytics%20and%20strategic%20planning%20materials&width=1920&height=1080&seq=complete-guide-hero-001&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Complete Pokies
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300 block">
                Strategy Guide
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              The ultimate comprehensive guide to pokies mastery. Advanced strategies, expert techniques, 
              and professional insights from <strong className="text-amber-300">IK118</strong> gaming experts.
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="w-24 h-24 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <i className="ri-book-open-fill text-4xl text-white"></i>
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Complete Guide Coming Soon
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Our team of IK118 experts is currently developing the most comprehensive pokies strategy guide ever created. 
              This advanced guide will cover everything from beginner fundamentals to professional-level techniques.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-blue-50 rounded-2xl p-6">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <i className="ri-brain-fill text-white text-xl"></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Advanced Psychology</h3>
                <p className="text-gray-600 text-sm">Understanding the mental aspects of pokies gaming and emotional control techniques</p>
              </div>

              <div className="bg-purple-50 rounded-2xl p-6">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <i className="ri-calculator-fill text-white text-xl"></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Mathematical Analysis</h3>
                <p className="text-gray-600 text-sm">Deep dive into probabilities, RTP calculations, and statistical advantages</p>
              </div>

              <div className="bg-green-50 rounded-2xl p-6">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <i className="ri-trophy-fill text-white text-xl"></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Pro Techniques</h3>
                <p className="text-gray-600 text-sm">Secret strategies used by professional pokies players and industry insiders</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white rounded-3xl p-8 mb-8">
              <h3 className="text-2xl font-bold mb-4">Get Notified When It's Ready</h3>
              <p className="text-blue-200 mb-6">
                Be the first to access our complete strategy guide with exclusive early-bird pricing for IK118 VIP members. Expected release: Q3 2025.
              </p>
              <Link 
                href="/pokies#newsletter"
                className="inline-flex items-center bg-amber-500 hover:bg-amber-600 text-blue-900 px-8 py-4 rounded-xl font-bold text-lg transition-colors cursor-pointer whitespace-nowrap"
              >
                <i className="ri-mail-fill w-5 h-5 flex items-center justify-center mr-2"></i>
                Join VIP Waitlist
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/pokies/strategies"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors cursor-pointer whitespace-nowrap"
              >
                <i className="ri-lightbulb-fill w-5 h-5 flex items-center justify-center mr-2 inline-flex"></i>
                Current Strategy Guide
              </Link>
              <Link 
                href="/pokies"
                className="bg-transparent border-2 border-gray-300 hover:bg-gray-100 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 cursor-pointer whitespace-nowrap"
              >
                <i className="ri-arrow-left-line w-5 h-5 flex items-center justify-center mr-2 inline-flex"></i>
                Back to Pokies Hub
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}