import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
              <p className="text-xl text-blue-100 mb-8">
                Have questions? We're here to help. Get in touch with our team
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl mb-4 mx-auto">
                  <i className="ri-mail-line text-3xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Email Us</h3>
                <p className="text-gray-600 mb-3">Send us an email anytime</p>
                <a href="mailto:support@ik118.net" className="text-blue-600 font-semibold hover:text-blue-700">
                  support@ik118.net
                </a>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-green-500 to-green-600 rounded-xl mb-4 mx-auto">
                  <i className="ri-customer-service-line text-3xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Live Chat</h3>
                <p className="text-gray-600 mb-3">Chat with our support team</p>
                <button className="text-blue-600 font-semibold hover:text-blue-700 whitespace-nowrap">
                  Start Chat
                </button>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl mb-4 mx-auto">
                  <i className="ri-time-line text-3xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Response Time</h3>
                <p className="text-gray-600 mb-3">We typically respond within</p>
                <span className="text-blue-600 font-semibold">24 hours</span>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                    placeholder="john.doe@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 resize-none"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors whitespace-nowrap"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="bg-blue-50 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[
                  {
                    question: 'How do I create an account?',
                    answer: 'Visit our Getting Started guide for step-by-step instructions on account creation.'
                  },
                  {
                    question: 'Are the casinos you review licensed?',
                    answer: 'Yes, we only review casinos that are properly licensed and regulated for Australian players.'
                  },
                  {
                    question: 'How do I claim a bonus?',
                    answer: 'Check our Promotions page for current offers and detailed claiming instructions.'
                  },
                  {
                    question: 'Is online casino gaming legal in Australia?',
                    answer: 'Yes, Australian players can legally play at offshore licensed online casinos.'
                  }
                ].map((faq, index) => (
                  <div key={index} className="bg-white rounded-lg p-6">
                    <h4 className="font-bold text-blue-900 mb-2">{faq.question}</h4>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}