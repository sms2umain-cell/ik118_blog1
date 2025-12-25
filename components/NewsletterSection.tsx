'use client';

import { useState } from 'react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const formData = new FormData();
      formData.append('email', email);
      
      const response = await fetch('https://readdy.ai/api/form/7b2f9e8c-1a3d-4f6e-8b9c-2e5a7d8f1b4c', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(Object.fromEntries(formData))
      });

      if (response.ok) {
        setIsSubmitted(true);
        setEmail('');
      }
    } catch (error) {
      console.error('Subscription error:', error);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Stay Ahead of the Game</h2>
          <p className="text-xl text-blue-100 mb-8">
            Get exclusive gaming insights, latest reviews, and expert tips delivered to your inbox weekly
          </p>
          
          {isSubmitted ? (
            <div className="bg-green-500 text-white p-4 rounded-lg inline-block">
              <i className="ri-check-line text-xl mr-2"></i>
              Thank you for subscribing! Check your email for confirmation.
            </div>
          ) : (
            <form 
              id="newsletter-form"
              data-readdy-form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
            >
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-4 py-3 rounded-lg text-blue-900 placeholder-blue-400 border-0 focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm"
              />
              <button
                type="submit"
                className="bg-amber-500 hover:bg-amber-600 text-blue-900 px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap"
              >
                Subscribe Now
              </button>
            </form>
          )}
          
          <p className="text-sm text-blue-200 mt-4">
            Join 10,000+ gaming enthusiasts. No spam, unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}