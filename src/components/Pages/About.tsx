/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Sparkles, MapPin, Heart, BookOpen, Star } from 'lucide-react';
import { BRAND_INFO } from '../../data';

interface AboutProps {
  onShopClick: () => void;
}

export default function About({ onShopClick }: AboutProps) {
  return (
    <div id="boutique-about-page" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      
      {/* Editorial Title Banner */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16 sm:mb-24">
        
        {/* Left Editorial column */}
        <div className="lg:col-span-6 order-2 lg:order-1">
          <span className="text-[10px] font-sans uppercase tracking-[0.3em] text-[#9b111e] block mb-2" style={{ color: BRAND_INFO.colors.softOlive }}>
            - Behind The Brand name -
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#2b2523] leading-tight mb-6">
            Meet Waiza Tahir, the spirit behind <span className="italic">Barakah</span>.
          </h2>
          
          <div className="space-y-4 font-sans text-sm text-[#645653] leading-relaxed">
            <p>
              Hi, I’m <strong className="text-[#2b2523] font-semibold">Waiza Tahir</strong>, the founder and lead curator of Barakah. Based in Kanpur, I have always adored minimal, delicate, feminine jewellery. However, like many of you, I was constantly disappointed by pieces that would lose their shine, oxidize, or leave dark green marks on my skin after just a few wears. 
            </p>
            <p>
              I launched Barakah with a single promise: <strong className="text-[#4a3e3d]">uncompromised endurance wrapped in ultimate grace</strong>. We specialize in 316L stainless steel heavily double-plated with genuine 18K gold and protected with precision vacuum sealing. It is water-safe, sweatproof, and perfume-proof.
            </p>
            <p>
              Simultaneously, we craft shimmering collections with the finest handselected glass crystals that bring standard daylight reflections into your everyday coordinates.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button
              onClick={onShopClick}
              className="px-8 py-3.5 bg-[#4a3e3d] hover:bg-[#2b2523] text-white font-sans text-xs uppercase tracking-[0.2em] rounded-full shadow-md transition-all text-center"
            >
              Shop The Selection
            </button>
            <a 
              href={`tel:${BRAND_INFO.contact}`}
              className="px-8 py-3.5 bg-white hover:bg-[#faf7f2] border border-[#ebdcca] text-[#4a3e3d] font-sans text-xs uppercase tracking-[0.2em] rounded-full transition-all text-center block"
            >
              Direct Conversation
            </a>
          </div>
        </div>

        {/* Right Editorial Image column */}
        <div className="lg:col-span-6 order-1 lg:order-2 relative flex justify-center">
          <div className="absolute top-2 left-2 inset-2 border-2 border-[#ffbd59]/20 rounded-[32px] pointer-events-none" />
          <div className="relative overflow-hidden rounded-[24px] shadow-xl aspect-[4/5] w-full max-w-sm bg-[#faf7f2]">
            <img
              src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800"
              alt="Waiza Tahir curation table in Kanpur"
              className="w-full h-full object-cover filter contrast-[1.01]"
              referrerPolicy="no-referrer"
            />
            {/* Soft Overlay stamp */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/75 backdrop-blur-md p-4 rounded-xl border border-white/40 shadow-sm text-center">
              <span className="text-[9px] font-sans uppercase tracking-widest text-[#9a8684] block font-medium">Boutique Headquarter</span>
              <span className="font-serif text-sm font-semibold text-[#2b2523] block mt-1">Kanpur Studio, Uttar Pradesh</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bento Curation Ethos column */}
      <div className="bg-white border border-[#f5ece2]/80 rounded-[32px] p-8 sm:p-12 shadow-[0_4px_30px_rgba(235,221,202,0.12)] mb-16 sm:mb-24">
        
        <div className="text-center mb-12">
          <span className="text-[10px] font-sans uppercase tracking-[0.3em] text-[#9a8684] block mb-1">Our Pillars</span>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#2b2523] font-semibold">How We Maintain Elite Curation</h3>
          <div className="h-[1px] w-8 bg-[#ffbd59] mx-auto mt-3" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center items-stretch">
          
          <div className="flex flex-col items-center bg-[#faf7f2]/60 p-6 rounded-2xl border border-[#ebdcca]/20 h-full">
            <div className="w-12 h-12 bg-[#bfe5ef]/30 rounded-full flex items-center justify-center text-[#2b4c55] text-xl mb-4 shrink-0">🍀</div>
            <h4 className="font-serif font-bold text-sm text-[#2b2523] mb-2 uppercase tracking-wide">Anti-Tarnish Assurance</h4>
            <p className="text-xs text-[#8a7a78] leading-relaxed font-sans mt-1">
              All metals used in our Anti Tarnish Collection are premium 316L Surgical Stainless Steel clad with vacuum-infused 18K yellow gold layers, remaining 100% immune to chlorine, sweat, and shower rust.
            </p>
          </div>

          <div className="flex flex-col items-center bg-[#faf7f2]/60 p-6 rounded-2xl border border-[#ebdcca]/20 h-full">
            <div className="w-12 h-12 bg-[#ffbd59]/25 rounded-full flex items-center justify-center text-[#715d48] text-xl mb-4 shrink-0">🔮</div>
            <h4 className="font-serif font-bold text-sm text-[#2b2523] mb-2 uppercase tracking-wide">Faceted Crystal Radiance</h4>
            <p className="text-xs text-[#8a7a78] leading-relaxed font-sans mt-1">
              Our crystals are imported Austrian glass components. We painstakingly hand-weave them into multi-tier, flexible single-strand kadas and bracelets that refract soft light colors like miniature prisms.
            </p>
          </div>

          <div className="flex flex-col items-center bg-[#faf7f2]/60 p-6 rounded-2xl border border-[#ebdcca]/20 h-full">
            <div className="w-12 h-12 bg-[#bbcd73]/25 rounded-full flex items-center justify-center text-[#4c552b] text-xl mb-4 shrink-0">🌸</div>
            <h4 className="font-serif font-bold text-sm text-[#2b2523] mb-2 uppercase tracking-wide">Girlish Luxury Aesthetic</h4>
            <p className="text-xs text-[#8a7a78] leading-relaxed font-sans mt-1">
              No harsh colors, no loud clunky metals. We keep borders soft, profiles thin, and spacing spacious, mimicking beautiful Instagram layouts that make your wrist unboxings feel incredibly romantic.
            </p>
          </div>

        </div>
      </div>

      {/* Kanpur heritage statement */}
      <div className="bg-[#faf1e6] rounded-[28px] p-8 sm:p-12 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-1/3 h-full bg-[#ffbd59]/5 blur-3xl pointer-events-none -translate-y-1/2" />
        
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center text-center md:text-left">
          <div className="md:col-span-8">
            <div className="flex items-center gap-1.5 justify-center md:justify-start text-[#bbcd73] font-sans text-[10px] uppercase tracking-wider mb-2">
              <MapPin size={11} className="text-[#ffbd59]" />
              <span>Swaroop Nagar, Kanpur</span>
            </div>
            <h4 className="font-serif text-xl sm:text-2xl text-[#2b2523] font-semibold tracking-tight">
              Curating from the Heart of Kanpur.
            </h4>
            <p className="text-[#715d48] text-xs sm:text-sm mt-3 leading-relaxed font-sans max-w-xl">
              While we deliver our premium gift boxes all across India (including Noida, Delhi, Lucknow, and Bangalore), our design heart remains rooted in historical Kanpur. This is where Waiza Tahir manages quality verification, client previews, and bespoke final alignments.
            </p>
          </div>
          <div className="md:col-span-4 flex justify-center md:justify-end shrink-0">
            <div className="bg-white px-6 py-4 rounded-2xl border border-[#ebdcca] shadow-xs text-center">
              <span className="block text-2xl mb-1">📦</span>
              <span className="text-[9px] uppercase font-sans tracking-widest text-[#9a8684] block font-semibold">Fast Shipping</span>
              <span className="text-xs font-serif font-bold text-[#2b2523] block mt-0.5">Pan-India Courier</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
