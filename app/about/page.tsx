export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About IK118</h1>
            <p className="text-xl text-blue-100 mb-8">
              Australia's most trusted source for online casino information and expert gaming insights
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-700 text-lg">
              <p>
                Founded in 2020, IK118 has grown to become one of Australia's leading online casino information platforms. Our mission is to provide Australian players with honest, comprehensive, and up-to-date information about online casino gaming.
              </p>
              <p>
                We understand that the online casino landscape can be overwhelming, especially for new players. That's why we've dedicated ourselves to creating detailed guides, honest reviews, and expert strategies to help you make informed decisions about where and how to play.
              </p>
              <p>
                Our team of experienced gaming professionals and industry experts work tirelessly to test casinos, analyze games, and provide you with the most accurate and helpful information available.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl mb-4 mx-auto">
                <i className="ri-shield-check-line text-3xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-3">Trusted Reviews</h3>
              <p className="text-gray-600">Honest, unbiased casino reviews based on real testing and player feedback</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-green-500 to-green-600 rounded-xl mb-4 mx-auto">
                <i className="ri-team-line text-3xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-3">Expert Team</h3>
              <p className="text-gray-600">Industry professionals with years of experience in online gaming</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl mb-4 mx-auto">
                <i className="ri-heart-line text-3xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-3">Player First</h3>
              <p className="text-gray-600">Your safety and satisfaction are our top priorities</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">What We Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="w-8 h-8 flex items-center justify-center bg-blue-600 rounded-lg mr-4 flex-shrink-0">
                  <i className="ri-checkbox-circle-line text-white"></i>
                </div>
                <div>
                  <h4 className="font-bold text-blue-900 mb-2">Casino Reviews</h4>
                  <p className="text-gray-600">Comprehensive reviews of licensed Australian online casinos</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 flex items-center justify-center bg-blue-600 rounded-lg mr-4 flex-shrink-0">
                  <i className="ri-book-open-line text-white"></i>
                </div>
                <div>
                  <h4 className="font-bold text-blue-900 mb-2">Strategy Guides</h4>
                  <p className="text-gray-600">Expert strategies for pokies, table games, and sports betting</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 flex items-center justify-center bg-blue-600 rounded-lg mr-4 flex-shrink-0">
                  <i className="ri-newspaper-line text-white"></i>
                </div>
                <div>
                  <h4 className="font-bold text-blue-900 mb-2">Industry News</h4>
                  <p className="text-gray-600">Latest updates from the Australian online gaming industry</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 flex items-center justify-center bg-blue-600 rounded-lg mr-4 flex-shrink-0">
                  <i className="ri-gift-line text-white"></i>
                </div>
                <div>
                  <h4 className="font-bold text-blue-900 mb-2">Exclusive Bonuses</h4>
                  <p className="text-gray-600">Special promotions and bonuses for our readers</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl shadow-lg p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
            <p className="text-xl mb-6">Become part of Australia's fastest-growing online casino community</p>
            <a href="https://t.ly/ik118Blog" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors whitespace-nowrap">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}