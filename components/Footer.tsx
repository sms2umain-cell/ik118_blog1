import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="https://ik118.net/media/a5beea7efb776a8bb36ad.png" 
                alt="IK118" 
                className="h-8 w-auto"
              />
              <span className="text-xl font-['Pacifico'] text-amber-400">IK118</span>
            </div>
            <p className="text-blue-200 mb-4">
              Australia's trusted source for casino gaming information, reviews, and expert insights.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Gaming Categories</h3>
            <ul className="space-y-2">
              <li><Link href="/pokies" className="text-blue-200 hover:text-amber-400 transition-colors">Pokies</Link></li>
              <li><Link href="/slot-games" className="text-blue-200 hover:text-amber-400 transition-colors">Slots</Link></li>
              <li><Link href="/live-games" className="text-blue-200 hover:text-amber-400 transition-colors">Live Casino</Link></li>
              <li><Link href="/sports-betting" className="text-blue-200 hover:text-amber-400 transition-colors">Sports Betting</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/reviews" className="text-blue-200 hover:text-amber-400 transition-colors">Casino Reviews</Link></li>
              <li><Link href="/strategies" className="text-blue-200 hover:text-amber-400 transition-colors">Gaming Strategies</Link></li>
              <li><Link href="/news" className="text-blue-200 hover:text-amber-400 transition-colors">Industry News</Link></li>
              <li><Link href="/guides" className="text-blue-200 hover:text-amber-400 transition-colors">How-to Guides</Link></li>
              <li><Link href="/promotions" className="text-blue-200 hover:text-amber-400 transition-colors">Promotions</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-blue-200 hover:text-amber-400 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-blue-200 hover:text-amber-400 transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="text-blue-200 hover:text-amber-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-blue-200 hover:text-amber-400 transition-colors">Terms of Service</Link></li>
              <li><Link href="/responsible-gaming" className="text-blue-200 hover:text-amber-400 transition-colors">Responsible Gaming</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-blue-200 text-sm">
            © 2025 IK118. All rights reserved. | 18+ Only | Gamble Responsibly
          </p>
        </div>
      </div>
    </footer>
  );
}