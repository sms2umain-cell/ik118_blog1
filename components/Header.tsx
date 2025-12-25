'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-900 to-blue-800 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <img 
              src="https://ik118.net/media/a5beea7efb776a8bb36ad.png" 
              alt="IK118" 
              className="h-8 w-auto"
            />
            <span className="text-xl font-['Pacifico'] text-amber-400">IK118</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-amber-400 transition-colors whitespace-nowrap">Home</Link>
            <Link href="/pokies" className="hover:text-amber-400 transition-colors whitespace-nowrap">Pokies</Link>
            <Link href="/live-games" className="hover:text-amber-400 transition-colors whitespace-nowrap">Live Games</Link>
            <Link href="/sports-betting" className="hover:text-amber-400 transition-colors whitespace-nowrap">Sports Betting</Link>
            <Link href="/slot-games" className="hover:text-amber-400 transition-colors whitespace-nowrap">Slot Games</Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="https://t.ly/ik118Blog" target="_blank" rel="noopener noreferrer" className="bg-amber-500 hover:bg-amber-600 text-blue-900 px-4 py-2 rounded-lg font-semibold transition-colors whitespace-nowrap">
              Register
            </a>
          </div>

          <button 
            className="md:hidden w-6 h-6 flex flex-col justify-center items-center cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className={`w-5 h-0.5 bg-white transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`w-5 h-0.5 bg-white transition-all my-1 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-5 h-0.5 bg-white transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-blue-800 border-t border-blue-700">
            <div className="px-4 py-4 space-y-2">
              <Link href="/" className="block py-2 hover:text-amber-400 transition-colors">Home</Link>
              <Link href="/pokies" className="block py-2 hover:text-amber-400 transition-colors">Pokies</Link>
              <Link href="/live-games" className="block py-2 hover:text-amber-400 transition-colors">Live Games</Link>
              <Link href="/sports-betting" className="block py-2 hover:text-amber-400 transition-colors">Sports Betting</Link>
              <Link href="/slot-games" className="block py-2 hover:text-amber-400 transition-colors">Slot Games</Link>
              <a href="https://t.ly/ik118Blog" target="_blank" rel="noopener noreferrer" className="block w-full bg-amber-500 hover:bg-amber-600 text-blue-900 px-4 py-2 rounded-lg font-semibold transition-colors mt-4 whitespace-nowrap text-center">
                Register
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}