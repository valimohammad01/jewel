/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Sparkles } from 'lucide-react';

interface EditorialBannerProps {
  onExploreClick: () => void;
}

export default function EditorialBanner({ onExploreClick }: EditorialBannerProps) {
  return (
    <section id="editorial-luxury-banner" className="bg-brand-blue/15 border-y border-[#bfe5ef]/40 py-16 sm:py-24 relative overflow-hidden">
      {/* Visual background lines mimicking an editorial sketch */}
      <div className="absolute top-0 right-0 w-1/3 h-full border-l border-[#bfe5ef]/30 pointer-events-none hidden lg:block" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Block - Sourced strictly from brand requirements */}
          <div className="lg:col-span-6 flex flex-col justify-center text-center lg:text-left">
            <span className="text-[10px] font-sans uppercase tracking-[0.3em] text-[#ff85a1] font-semibold block mb-3 animate-pulse">
              - The Artisan Manifesto -
            </span>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-medium tracking-tight text-[#2e2625] leading-[1.2] mb-6">
              Luster that never gives up on you. Anti-Tarnish by definition.
            </h2>
            
            {/* Rich editorial text detailing anti-tarnish & crystal specialities */}
            <p className="text-[#645653] text-sm sm:text-base leading-relaxed font-sans mb-8 max-w-xl mx-auto lg:mx-0">
              Unlike ordinary jewellery that tarnishes, oxidizes, or turns green at the slightest touch of moisture, our collection is forged with vacuum-fortified protective micro-layers. Perfect for your active moments, gym sessions, perfumes, or tropical weather. Handcrafted with the finest crystals selected in our Kanpur workshop, we make elegance a durable luxury.
            </p>

            {/* Highlights layout grids */}
            <div className="grid grid-cols-2 gap-6 mb-8 max-w-md mx-auto lg:mx-0">
              <div className="border-[#ffd1dc] border-l-2 pl-4">
                <span className="block text-xs font-serif font-bold text-[#4e3a38]">Waterproof Finish</span>
                <span className="text-[10px] text-[#9a8684] font-sans">Wear it in shower without an ounce of worry.</span>
              </div>
              <div className="border-[#ffd1dc] border-l-2 pl-4">
                <span className="block text-xs font-serif font-bold text-[#4e3a38]">Zero Green Marks</span>
                <span className="text-[10px] text-[#9a8684] font-sans">Surgical grade base ensures your skin stays pure.</span>
              </div>
            </div>

            <button
              id="editorial-discover-cta"
              onClick={onExploreClick}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#2e2625] hover:bg-[#ffbd59] text-white hover:text-[#2e2625] font-sans font-medium text-xs uppercase tracking-[0.2em] rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Discover Anti-Tarnish Series
            </button>
          </div>

          {/* Right side lifestyle image */}
          <div className="lg:col-span-6 flex justify-center relative">
            {/* Elegant corner offsets */}
            <div className="absolute top-4 -left-4 w-12 h-12 border-t border-l border-brand-rose hidden sm:block" />
            <div className="absolute bottom-4 -right-4 w-12 h-12 border-b border-r border-brand-rose hidden sm:block" />
            
            <div className="relative overflow-hidden rounded-[20px] shadow-[0_20px_50px_rgba(255,133,161,0.06)] w-full max-w-md aspect-[4/3] sm:aspect-square bg-brand-pink/20">
              <img
                src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&q=80&w=800"
                alt="A hand delicately showing anti-tarnish clover pieces"
                className="w-full h-full object-cover select-none filter contrast-[1.02] saturate-[0.98] hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              
              {/* Little quote corner badge */}
              <div className="absolute bottom-4 right-4 bg-white/45 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/30 flex items-center gap-1">
                <Sparkles size={10} className="text-[#ffbd59]" />
                <span className="text-[8px] font-sans uppercase tracking-widest text-[#4a3e3d] font-semibold">Waiza Tahir Design</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
