'use client';

import { useState } from 'react';

export default function LiveGamesNewsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
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
        body: formData
      });

      if (response.ok) {
        setIsSubmitted(true);
        setEmail('');
      }
    } catch (error) {
      console.error('Newsletter submission error:', error);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 via-purple-900 to-blue-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-amber-400 rounded-full"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-purple-400 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-blue-400 rounded-full"></div>
        <div className="absolute bottom-40 right-1/3 w-24 h-24 bg-amber-400 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-20 h-20 bg-amber-500/20 backdrop-blur-sm border border-amber-400/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-vip-crown-fill text-4xl text-amber-400"></i>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Join the <span className="text-amber-400 font-['Pacifico']">IK118</span> VIP Club
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Get exclusive live casino insights, expert dealer strategies, and weekly gaming tips 
              delivered straight to your inbox from Australia's trusted live gaming experts.
            </p>
          </div>

          {!isSubmitted ? (
            <form 
              id="live-games-newsletter-form"
              onSubmit={handleSubmit}
              className="max-w-2xl mx-auto"
              data-readdy-form
            >
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
                <div className="flex flex-col md:flex-row gap-4">
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 px-6 py-4 bg-white/90 border-0 rounded-xl text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-amber-400 focus:outline-none text-lg"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-blue-900 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl whitespace-nowrap cursor-pointer"
                  >
                    <i className="ri-vip-crown-fill w-5 h-5 flex items-center justify-center mr-2 inline-flex"></i>
                    Join VIP Club
                  </button>
                </div>
                
                <div className="mt-6 text-center">
                  <p className="text-blue-200 text-sm">
                    Join 25,000+ Australian players who trust <strong className="text-amber-300">IK118</strong> for their live casino gaming insights
                  </p>
                </div>
              </div>
            </form>
          ) : (
            <div className="max-w-2xl mx-auto bg-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-2xl p-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-check-line text-2xl text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-green-300 mb-2">Welcome to IK118 VIP Club!</h3>
                <p className="text-green-200">
                  Thank you for joining! Check your email for our welcome package with exclusive live casino strategies.
                </p>
              </div>
            </div>
          )}

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-award-fill text-2xl text-amber-400"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">Expert Strategies</h3>
              <p className="text-blue-200 text-sm">Weekly strategies for live blackjack, roulette, and baccarat</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-rocket-fill text-2xl text-amber-400"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">Dealer Insights</h3>
              <p className="text-blue-200 text-sm">Professional tips from experienced live casino dealers</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-gift-fill text-2xl text-amber-400"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">Exclusive Access</h3>
              <p className="text-blue-200 text-sm">Early access to new live casino games and bonus opportunities</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-blue-300 text-sm">
              <i className="ri-shield-check-fill w-4 h-4 flex items-center justify-center mr-2 inline-flex"></i>
              Your privacy is protected. No spam, unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}