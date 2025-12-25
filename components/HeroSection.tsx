'use client';

import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Australia's Premier Casino Gaming Hub",
      subtitle: "Discover the best pokies, live games, and sports betting insights",
      image: "https://readdy.ai/api/search-image?query=modern%20casino%20interior%20with%20golden%20slot%20machines%20and%20blue%20lighting%2C%20luxurious%20gaming%20floor%20with%20poker%20tables%20and%20roulette%20wheels%2C%20professional%20gaming%20atmosphere%20with%20warm%20golden%20accents%20and%20cool%20blue%20tones%2C%20elegant%20casino%20design%20with%20sophisticated%20lighting%20and%20premium%20finishes&width=1200&height=600&seq=hero1&orientation=landscape"
    },
    {
      title: "Expert Reviews & Strategies",
      subtitle: "Get insider tips and comprehensive game analysis from our experts",
      image: "https://readdy.ai/api/search-image?query=professional%20casino%20gaming%20analysis%20setup%20with%20multiple%20screens%20showing%20game%20statistics%20and%20charts%2C%20expert%20reviewing%20casino%20games%20with%20blue%20and%20gold%20themed%20workspace%2C%20modern%20gaming%20analysis%20environment%20with%20sophisticated%20technology%20and%20data%20visualization&width=1200&height=600&seq=hero2&orientation=landscape"
    },
    {
      title: "Live Gaming Experience", 
      subtitle: "Experience the thrill of live dealers and real-time action",
      image: "https://readdy.ai/api/search-image?query=live%20casino%20dealer%20in%20elegant%20blue%20and%20gold%20casino%20setting%2C%20professional%20dealer%20at%20blackjack%20table%20with%20sophisticated%20lighting%2C%20luxurious%20live%20gaming%20environment%20with%20premium%20casino%20atmosphere%20and%20golden%20accents&width=1200&height=600&seq=hero3&orientation=landscape"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent"></div>
          </div>
        </div>
      ))}
      
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="w-full max-w-2xl text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            {slides[currentSlide].subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://t.ly/ik118Blog" target="_blank" rel="noopener noreferrer" className="bg-amber-500 hover:bg-amber-600 text-blue-900 px-8 py-4 rounded-lg text-lg font-bold transition-colors whitespace-nowrap text-center">
              Explore Games
            </a>
            <a href="https://t.ly/ik118Blog" target="_blank" rel="noopener noreferrer" className="border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors whitespace-nowrap text-center">
              Read Reviews
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
              index === currentSlide ? 'bg-amber-400' : 'bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
}