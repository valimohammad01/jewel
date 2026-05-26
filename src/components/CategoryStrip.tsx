/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Sparkles, Gem, ArrowRight } from 'lucide-react';

interface CategoryStripProps {
  onCategorySelect: (category: 'anti-tarnish' | 'crystal' | 'all', subCategory?: string) => void;
}

export default function CategoryStrip({ onCategorySelect }: CategoryStripProps) {
  const categories = [
    {
      id: 'Necklace',
      label: 'Necklaces',
      subtitle: 'Dainty Collarbones',
      icon: '✨',
      categoryType: 'anti-tarnish' as const
    },
    {
      id: 'Bracelet',
      label: 'Clover Bracelets',
      subtitle: 'Premium 18K Stack',
      icon: '🍀',
      categoryType: 'anti-tarnish' as const
    },
    {
      id: 'Kada',
      label: 'Crystal Kadas',
      subtitle: 'Silk-Resting Bangles',
      icon: '🔮',
      categoryType: 'crystal' as const
    },
    {
      id: 'Earrings',
      label: 'Feminine Earrings',
      subtitle: 'Delicate Drops',
      icon: '💎',
      categoryType: 'anti-tarnish' as const
    },
    {
      id: 'Rings',
      label: 'Floral Rings',
      subtitle: 'Crown Bands',
      icon: '💍',
      categoryType: 'crystal' as const
    },
    {
      id: 'Accessories',
      label: 'Bespoke Charms',
      subtitle: 'Luxury Giftings',
      icon: '💫',
      categoryType: 'anti-tarnish' as const
    }
  ];

  return (
    <section id="luxury-category-strip" className="bg-white border-y border-[#ffe3e6] py-8 sm:py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subtle Section Title */}
        <div className="text-center mb-8">
          <span className="text-[10px] font-sans uppercase tracking-[0.3em] text-[#ff85a1] font-semibold block mb-1">
            Shop By Silhouette
          </span>
          <div className="h-[1px] w-8 bg-brand-gold mx-auto" />
        </div>

        {/* Horizontal Scrolling Icons Layout */}
        <div className="flex items-center gap-6 overflow-x-auto pb-4 pt-2 px-2 scrollbar-none justify-start md:justify-center">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onCategorySelect(cat.categoryType, cat.id)}
              className="flex flex-col items-center text-center group min-w-[120px] focus:outline-none shrink-0"
            >
              {/* Beautiful luxury icon circle */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white border border-[#ffd1dc] shadow-[0_4px_15px_rgba(255,133,161,0.04)] group-hover:shadow-[0_8px_25px_rgba(255,189,89,0.2)] group-hover:border-brand-gold group-hover:bg-brand-pink/40 flex items-center justify-center transition-all duration-300 transform group-hover:-translate-y-1 relative overflow-hidden">
                
                {/* Micro background wave element */}
                <div className="absolute inset-0 bg-radial from-brand-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <span className="text-2xl sm:text-3xl relative z-10 select-none group-hover:scale-110 transition-transform duration-300">{cat.icon}</span>
              </div>

              {/* Category labels and subtitles */}
              <span className="text-[11px] sm:text-xs font-serif font-semibold text-[#2e2625] mt-3 tracking-wide">
                {cat.label}
              </span>
              <span className="text-[9px] font-sans text-[#9a8684] mt-0.5 tracking-wider hidden sm:block">
                {cat.subtitle}
              </span>
            </button>
          ))}
        </div>

        {/* Quick Collections Guide Link */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <button 
            id="strip-anti-tarnish-cta"
            onClick={() => onCategorySelect('anti-tarnish')}
            className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#7c4d52] hover:text-brand-rose flex items-center gap-1.5 transition-colors"
          >
            Anti Tarnish Collection <ArrowRight size={10} />
          </button>
          <span className="text-[#ffd1dc] block">|</span>
          <button 
            id="strip-crystal-cta"
            onClick={() => onCategorySelect('crystal')}
            className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#7c4d52] hover:text-brand-rose flex items-center gap-1.5 transition-colors"
          >
            Crystal Collection <ArrowRight size={10} />
          </button>
        </div>

      </div>
    </section>
  );
}
