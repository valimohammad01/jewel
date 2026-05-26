/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Sparkles, Heart } from 'lucide-react';
import { BRAND_INFO } from '../data';

interface BrandStoryProps {
  onReadMoreClick: () => void;
}

export default function BrandStory({ onReadMoreClick }: BrandStoryProps) {
  return (
    <section id="boutique-brand-story" className="bg-white py-16 sm:py-20 relative overflow-hidden border-t border-[#ffe3e6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Editorial Typography & Copy */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-1.5 text-[#ff85a1] font-sans text-[10px] uppercase tracking-[0.25em] mb-3 font-semibold">
              <Sparkles size={11} className="text-brand-gold" />
              <span>Bespoke Indian Heritage</span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-[#2e2625] leading-snug mb-6">
              The Story of Barakah: Born in Kanpur, Crafted for the Universe.
            </h2>
            
            {/* Owner Story Text */}
            <div className="space-y-4 font-sans text-sm text-[#645653] leading-relaxed">
              <p>
                Founded by <strong className="text-[#2e2625] font-semibold">Waiza Tahir</strong>, Barakah is a premium boutique design house that arose out of pure passion for minimalist jewelry that does not tarnish, turn black, or fade over time. 
              </p>
              <p>
                We specialize exclusively in dual-concept collections: <strong className="text-[#4e3a38]">Anti-Tarnish Stainless Steel</strong> designed for elegant everyday adventures (shower-proof, humidity-proof), and hand-threaded <strong className="text-[#4e3a38]">Austrian Crystal Jewellery</strong> mirroring high-refraction starry sky reflections.
              </p>
              <p className="italic font-serif text-brand-rose text-base mt-2">
                "We believe luxury should be sweet, resilient, feminine, and beautifully integrated into your daily Instagram-chic stories." — Founder & Creative Director, Waiza Tahir.
              </p>
            </div>

            {/* CTA action */}
            <button
              id="story-read-more-btn"
              onClick={onReadMoreClick}
              className="mt-8 text-xs font-sans font-semibold uppercase tracking-[0.2em] text-[#ff85a1] hover:text-[#ff85a1]/90 flex items-center gap-2 transition-all group"
            >
              Read Full Brand Biography
              <span className="group-hover:translate-x-1.5 transition-transform duration-300">→</span>
            </button>
          </div>

          {/* Right Side: Portrait composition with text decorations */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Visual Backplate */}
            <div className="absolute inset-4 bg-brand-pink rounded-[28px] transform rotate-3" />
            
            <div className="relative overflow-hidden rounded-[24px] shadow-lg w-full max-w-sm aspect-[4/5] bg-[#fdf7f8] border border-brand-pink">
              <img
                src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800"
                alt="Waiza Tahir's handcrafted curation desk"
                className="w-full h-full object-cover select-none filter sepia-[0.08]"
                referrerPolicy="no-referrer"
              />
              
              {/* Founder Signature Watermark Overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/80 backdrop-blur-md p-4 rounded-xl border border-white/50 shadow-sm text-center">
                <span className="font-serif text-sm block tracking-wide mt-1 text-[#2b2523] font-semibold">Waiza Tahir</span>
                <span className="text-[8px] font-sans uppercase tracking-widest text-[#9a8684]">Owner & Curator, Kanpur</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
