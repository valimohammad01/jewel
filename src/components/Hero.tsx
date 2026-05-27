/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Sparkles, ShoppingBag } from 'lucide-react';
import { BRAND_INFO } from '../data';
import wpHero from './assets/clover_mop.jpeg';

interface HeroProps {
  onShopClick: () => void;
  onOurStoryClick: () => void;
}

export default function Hero({ onShopClick, onOurStoryClick }: HeroProps) {
  return (
    <section id="boutique-hero" className="relative bg-[#fdf7f8] overflow-hidden min-h-[500px] md:min-h-[640px] flex items-center pt-8 pb-12">
      {/* Background Soft Glow Accents */}
      <div className="absolute top-1/4 left-1/4 w-[250px] md:w-[450px] h-[250px] md:h-[450px] rounded-full bg-[#bfe5ef]/25 blur-3xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-[#ffbd59]/15 blur-3xl translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/2 right-1/3 w-[200px] md:w-[350px] h-[200px] md:h-[350px] rounded-full bg-brand-pink/50 blur-3xl pointer-events-none" />

      {/* Hero Outer Wrapper */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 flex flex-col justify-center text-center lg:text-left z-10">
            {/* Soft Sparkle Intro */}
            <div className="inline-flex items-center gap-1.5 justify-center lg:justify-start text-[#ff85a1] font-sans text-xs uppercase tracking-[0.25em] mb-4 bg-white/60 backdrop-blur-xs py-1.5 px-3.5 rounded-full border border-brand-pink w-fit mx-auto lg:mx-0 shadow-[0_2px_12px_rgba(255,229,236,0.3)]">
              <Sparkles size={12} className="text-[#ffbd59] animate-pulse" />
              <span>Anti Tarnish & Crystal Specialist</span>
            </div>

            {/* Main Captivating Title */}
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[56px] leading-[1.1] font-medium text-[#2e2625] tracking-tight mb-6">
              Grace is a <span className="italic font-normal font-serif text-[#ff85a1] drop-shadow-xs">feeling</span>, not just an ornament.
            </h2>

            {/* Subtext description */}
            <p className="text-[#6e5f5c] text-[15px] sm:text-base max-w-lg mx-auto lg:mx-0 leading-relaxed font-sans mb-8">
              Hand-curated, moisture-safe Anti Tarnish and high-refraction Crystal jewellery by <strong className="text-[#4e3a38] font-semibold">Waiza Tahir</strong>. Crafted exquisite 18K gold layers made to stay shiny, hypoallergenic, and timelessly charming.
            </p>

            {/* CTA Option Blocks */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                id="hero-shop-cta"
                onClick={onShopClick}
                className="w-full sm:w-auto px-8 py-4 bg-[#ffbd59] hover:bg-[#ffbd59]/90 text-[#2e2625] font-sans font-medium text-xs uppercase tracking-[0.2em] rounded-full shadow-[0_6px_20px_rgba(255,189,89,0.3)] hover:shadow-[0_8px_25px_rgba(255,189,89,0.45)] transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <ShoppingBag size={14} />
                Explore Shop
              </button>
              
              <button
                id="hero-story-cta"
                onClick={onOurStoryClick}
                className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-[#fdf7f8] text-[#4e3a38] border border-brand-pink font-sans font-medium text-xs uppercase tracking-[0.2em] rounded-full shadow-xs hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Our Heritage
              </button>
            </div>

            {/* Quick trust metrics */}
            <div className="grid grid-cols-3 gap-4 border-t border-brand-pink/50 mt-12 pt-6 max-w-md mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <span className="block font-serif text-lg font-bold text-[#4e3a38]">100%</span>
                <span className="text-[10px] font-sans uppercase tracking-widest text-[#9a8684]">Anti-Tarnish</span>
              </div>
              <div className="text-center lg:text-left border-x border-brand-pink/50">
                <span className="block font-serif text-lg font-bold text-[#4e3a38]">Fine</span>
                <span className="text-[10px] font-sans uppercase tracking-widest text-[#9a8684]">Austrian Crystal</span>
              </div>
              <div className="text-center lg:text-left">
                <span className="block font-serif text-lg font-bold text-[#4e3a38]">Kanpur</span>
                <span className="text-[10px] font-sans uppercase tracking-widest text-[#9a8684]">Boutique Studio</span>
              </div>
            </div>

          </div>

          {/* Right Floating Image Frame */}
          <div className="lg:col-span-6 relative flex justify-center z-10 transform hover:scale-[1.01] transition-transform duration-500">
            {/* Visual Decorative Frame Border */}
            <div className="absolute -inset-2 border border-brand-pink rounded-[32px] m-4 pointer-events-none z-0" />
            
            {/* Main Aesthetic Image block */}
            <div className="relative w-full max-w-md aspect-[4/5] overflow-hidden rounded-[24px] shadow-[0_15px_45px_rgba(255,133,161,0.08)] bg-brand-pink/20">
              <img
                src={wpHero}
                alt="Delicate four-leaf clover bracelet in 18K gold and clean linen sleeve"
                className="w-full h-full object-cover select-none"
                referrerPolicy="no-referrer"
              />
              
              {/* Soft overlay tag describing the cover piece */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/80 backdrop-blur-md p-4 rounded-xl border border-brand-pink shadow-xs flex items-center justify-between">
                <div>
                  <span className="text-[9px] font-sans uppercase tracking-widest text-[#8a7a78]">Handcrafted Series</span>
                  <p className="font-serif text-sm font-semibold text-[#2e2625]">Alhambra Clover Set</p>
                </div>
                <div className="text-right">
                  <span className="text-[9px] font-sans uppercase tracking-widest text-[#ff85a1] font-semibold">In High Demand</span>
                  <p className="text-xs font-sans font-medium text-[#715d48]">₹1,899</p>
                </div>
              </div>
            </div>
            
            {/* Little floating detail circle badge representing owner dedication */}
            <div className="absolute -top-3 -right-3 bg-white border border-brand-pink rounded-full p-4 w-24 h-24 flex flex-col justify-center items-center text-center shadow-lg leading-none shrink-0 pointer-events-none">
              <span className="text-[6.5px] font-sans uppercase tracking-wider text-[#9a8684]">Design House</span>
              <span className="font-serif font-bold italic text-base text-[#ffbd59] mt-1">Waiza</span>
              <span className="text-[7px] font-sans uppercase tracking-[0.2em] text-[#8a7a78] mt-0.5">Tahir</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
