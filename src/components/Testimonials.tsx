/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Star, Quote, Sparkles } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  return (
    <section id="boutique-testimonials" className="bg-[#fcf8f8] border-b border-brand-pink/30 py-16 sm:py-24 relative overflow-hidden">
      {/* Background Soft Gradients */}
      <div className="absolute top-0 left-1/2 w-[400px] h-[400px] rounded-full bg-brand-pink/30 blur-3xl -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 justify-center text-[#ff85a1] font-sans text-[10px] uppercase tracking-[0.25em] mb-2 font-bold">
            <Sparkles size={11} className="text-brand-gold" />
            <span>Trusted Hearts</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2b2523] font-medium tracking-tight">
            Loved by Modern Feminines
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#8a7a78] mt-2 tracking-wide max-w-md mx-auto">
            Read stories of how our active, moisture-safe Anti Tarnish and shiny Crystal jewellery pieces are loved daily.
          </p>
          <div className="h-[1px] w-12 bg-[#ffbd59] mx-auto mt-4" />
        </div>

        {/* Testimonials Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white p-8 rounded-[24px] border border-[#f5ece2]/60 shadow-[0_4px_25px_rgba(235,221,202,0.1)] flex flex-col justify-between transition-all duration-300 hover:shadow-[0_10px_35px_rgba(235,221,202,0.25)] relative group hover:-translate-y-1 h-full"
            >
              {/* Double quotes decoration */}
              <div className="absolute top-6 right-8 text-[#f7efea] group-hover:text-[#ffbd59]/10 transition-colors pointer-events-none">
                <Quote size={55} className="fill-none duration-500" />
              </div>

              <div className="relative z-10 flex-1">
                {/* 5-Stars rating blocks */}
                <div className="flex items-center text-[#ffbd59] mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={13} className="fill-[#ffbd59] shrink-0" />
                  ))}
                </div>

                {/* Testimonial statement */}
                <p className="text-[#594c4a] text-sm leading-relaxed font-sans font-light italic mb-6">
                  "{t.text}"
                </p>
              </div>

              {/* Author profile metrics */}
              <div className="border-t border-[#fcfbf9] pt-4 flex items-center justify-between mt-auto">
                <div>
                  <h4 className="font-serif text-sm font-semibold text-[#2b2523]">
                    {t.name}
                  </h4>
                  <span className="text-[10px] uppercase tracking-wider text-[#9a8684] block font-sans">
                    {t.location}
                  </span>
                </div>
                <div className="bg-[#bfe5ef]/20 rounded-full px-2.5 py-1 flex items-center gap-1 border border-[#bfe5ef]/30 h-fit">
                  <span className="w-1.5 h-1.5 bg-[#5da6b8] rounded-full animate-pulse" />
                  <span className="text-[8px] font-sans font-semibold uppercase tracking-wider text-[#356e7d]">Verified Buyer</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
