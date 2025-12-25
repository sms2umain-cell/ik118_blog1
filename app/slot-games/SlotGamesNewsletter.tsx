'use client';

import { useState } from 'react';

export default function SlotGamesNewsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const response = await fetch('https://readdy.ai/api/form/d4ttcah2tio6iafo083g', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({ email }).toString()
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
        setTimeout(() => setStatus(''), 3000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <i className="ri-mail-send-line text-6xl text-amber-400"></i>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get IK118 Slot Gaming <span className="text-amber-400">Insider Tips</span>
          </h2>
          
          <p className="text-xl text-gray-200 mb-10 leading-relaxed">
            Join thousands of slot enthusiasts receiving exclusive strategies, new game releases, bonus alerts, and expert tips from IK118 directly to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto" data-readdy-form id="ik118-slotgames-newsletter">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-6 py-4 rounded-lg text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-amber-400"
              />
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="bg-amber-500 hover:bg-amber-600 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? 'Subscribing...' : 'Subscribe Now'}
              </button>
            </div>
            
            {status === 'success' && (
              <div className="mt-4 p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-100">
                Successfully subscribed to IK118 Slot Games newsletter!
              </div>
            )}
            
            {status === 'error' && (
              <div className="mt-4 p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-100">
                Something went wrong. Please try again.
              </div>
            )}
          </form>

          <div className="mt-8 flex flex-wrap justify-center gap-8 text-sm text-gray-300">
            <div className="flex items-center">
              <i className="ri-check-line w-5 h-5 flex items-center justify-center text-amber-400 mr-2"></i>
              Weekly Slot Strategies
            </div>
            <div className="flex items-center">
              <i className="ri-check-line w-5 h-5 flex items-center justify-center text-amber-400 mr-2"></i>
              Exclusive Bonus Alerts
            </div>
            <div className="flex items-center">
              <i className="ri-check-line w-5 h-5 flex items-center justify-center text-amber-400 mr-2"></i>
              New Game Reviews
            </div>
            <div className="flex items-center">
              <i className="ri-check-line w-5 h-5 flex items-center justify-center text-amber-400 mr-2"></i>
              No Spam, Unsubscribe Anytime
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}