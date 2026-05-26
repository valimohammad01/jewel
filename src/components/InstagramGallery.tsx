/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Instagram, Heart, MessageCircle } from 'lucide-react';
import { INSTAGRAM_POSTS, BRAND_INFO } from '../data';

export default function InstagramGallery() {
  return (
    <section id="instagram-feed-section" className="bg-[#fdf7f8] py-16 border-t border-[#ffe3e6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <Instagram size={24} className="mx-auto text-[#ff85a1] mb-3 animate-bounce" />
          <span className="text-[10px] font-sans uppercase tracking-[0.3em] text-[#ff85a1] font-semibold block mb-1">
            Browse The Aesthetic
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#2e2625] tracking-tight">
            Follow our Instagram journey
          </h2>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-sans uppercase tracking-[0.15em] text-[#ff85a1] hover:text-brand-rose mt-2 inline-block font-semibold"
          >
            @barakah_jewells
          </a>
          <div className="h-[1px] w-8 bg-brand-gold mx-auto mt-4" />
        </div>

        {/* Beautiful Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {INSTAGRAM_POSTS.map((post) => (
            <div
              key={post.id}
              className="group relative aspect-square overflow-hidden rounded-[16px] border border-[#ffe3e6] shadow-xs hover:shadow-lg transition-all duration-500 bg-brand-pink/20 cursor-pointer"
            >
              {/* Image */}
              <img
                src={post.imageUrl}
                alt="Instagram jewelry post"
                className="w-full h-full object-cover select-none transition-transform duration-500 ease-out group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* Hover Darkened/Blured Overlay with Stats */}
              <div className="absolute inset-0 bg-[#2b2523]/60 opacity-0 group-hover:opacity-100 backdrop-blur-xs transition-opacity duration-300 flex items-center justify-center gap-4 z-10 text-white font-sans text-xs">
                <span className="flex items-center gap-1 font-semibold select-none">
                  <Heart size={14} className="fill-white" /> {post.likes}
                </span>
                <span className="flex items-center gap-1 font-semibold select-none">
                  <MessageCircle size={14} className="fill-white" /> {post.comments}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Quick bottom callout */}
        <div className="text-center mt-10">
          <p className="font-serif italic text-[#645653] text-sm">
            “Specialising in Anti Tarnish and Crystal Jewellery, handcrafted in Kanpur of pure grace.”
          </p>
          <span className="text-[9px] font-sans uppercase tracking-[0.2em] text-[#9a8684] block mt-1.5 font-semibold">
            Owner Waiza Tahir
          </span>
        </div>

      </div>
    </section>
  );
}
