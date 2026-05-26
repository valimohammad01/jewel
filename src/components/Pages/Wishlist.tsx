/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ShoppingCart, Trash2, Heart, Sparkles, AlertCircle } from 'lucide-react';
import { Product } from '../../types';
import { PRODUCTS } from '../../data';

interface WishlistProps {
  wishlistIds: string[];
  onRemoveFromWishlist: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onContinueShopping: () => void;
  onProductClick: (product: Product) => void;
}

export default function Wishlist({
  wishlistIds,
  onRemoveFromWishlist,
  onAddToCart,
  onContinueShopping,
  onProductClick
}: WishlistProps) {
  // Resolve product listings
  const wishlistedProducts = PRODUCTS.filter((p) => wishlistIds.includes(p.id));

  return (
    <div id="boutique-wishlist-page" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      
      {/* Page Title */}
      <div className="text-center mb-10 sm:mb-12">
        <span className="text-[10px] font-sans uppercase tracking-[0.3em] text-[#9a8684] block mb-1">My Curation shortlist</span>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#2b2523] tracking-tight font-semibold flex items-center justify-center gap-2">
          Your Heart's Desires <Heart size={20} className="fill-[#ffbd59] text-[#ffbd59]" />
        </h2>
        <p className="text-[#8a7a78] text-xs font-sans mt-2 max-w-sm mx-auto">
          Shortlist moisture-safe, 316L gold plated styles and high-refraction crystal necklaces before purchase.
        </p>
        <div className="h-[1px] w-12 bg-[#ffbd59] mx-auto mt-4" />
      </div>

      {wishlistedProducts.length === 0 ? (
        <div className="text-center py-20 bg-white border border-[#f5ece2]/60 rounded-[32px] p-8 max-w-md mx-auto shadow-xs">
          <span className="text-4xl">💭</span>
          <h3 className="font-serif text-lg font-semibold text-[#2b2523] mt-4 mb-2">Your Wishlist is Empty</h3>
          <p className="text-xs text-[#8a7a78] font-sans leading-relaxed">
            There are no jewellery pieces currently saved to your shortlist. Explore Waiza's custom compilations to find your matching pieces.
          </p>
          <button
            onClick={onContinueShopping}
            className="mt-8 px-8 py-3.5 bg-[#4a3e3d] hover:bg-[#ffbd59] text-white hover:text-[#2b2523] font-sans text-xs uppercase tracking-[0.2em] rounded-full shadow-md hover:shadow-lg transition-all focus:outline-none"
          >
            Browse Collections
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlistedProducts.map((p) => (
            <div
              key={p.id}
              className="group bg-white rounded-2xl overflow-hidden border border-[#faf5f0] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col h-full position-relative"
            >
              {/* Product Frame Image */}
              <div 
                className="relative aspect-square overflow-hidden bg-[#faf7f2] cursor-pointer"
                onClick={() => onProductClick(p)}
              >
                <img src={p.imageUrl} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" referrerPolicy="no-referrer" />
                <button
                  id={`remove-wish-${p.id}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    onRemoveFromWishlist(p);
                  }}
                  className="absolute top-4 right-4 z-15 p-2 bg-white/80 hover:bg-[#9b111e] hover:text-white rounded-full text-[#8a7a78] transition-all shadow-xs"
                  title="Remove Desire"
                >
                  <Trash2 size={13} />
                </button>
              </div>

              {/* Product details */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-1 mb-1">
                  <span className="text-[9px] font-sans uppercase tracking-widest text-[#9a8684]">{p.subCategory}</span>
                  <span className="text-[#ebdcca] font-bold text-xs">•</span>
                  <span className="text-[9.5px] font-sans text-[#bbcd73] font-semibold flex items-center gap-0.5" style={{ color: '#bbcd73' }}>
                    <Sparkles size={10} /> {p.category === 'anti-tarnish' ? 'Anti-Tarnish' : 'Austrian Crystal'}
                  </span>
                </div>

                <h3 
                  onClick={() => onProductClick(p)}
                  className="font-serif text-sm sm:text-base font-semibold text-[#2b2523] hover:text-[#ffbd59] transition-colors cursor-pointer block truncate"
                >
                  {p.title}
                </h3>
                
                <p className="text-[10px] text-[#8a7a78] leading-relaxed line-clamp-1 italic font-sans my-2">
                  "{p.description}"
                </p>

                <div className="flex items-baseline gap-2 mt-2 mb-4">
                  <span className="font-serif font-bold text-sm sm:text-base text-[#2b2523]">₹{p.price}</span>
                  {p.originalPrice && (
                    <span className="text-[11px] line-through text-[#bcaaa8] font-sans">₹{p.originalPrice}</span>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-2 mt-auto pt-3 border-t border-[#fcfbf9]">
                  <button
                    id={`wish-bag-btn-${p.id}`}
                    onClick={() => onAddToCart(p)}
                    className="w-full py-2.5 bg-[#4a3e3d] hover:bg-[#ffbd59] hover:text-[#2b2523] text-white rounded-lg text-[9px] uppercase tracking-widest font-sans font-bold flex items-center justify-center gap-1.5 focus:outline-none transition-all h-9"
                  >
                    <ShoppingCart size={11} /> Bag
                  </button>

                  <button
                    onClick={() => onProductClick(p)}
                    className="w-full py-2.5 bg-white hover:bg-[#faf7f2] border border-[#ebdcca] text-[#4a3e3d] rounded-lg text-[9px] uppercase tracking-widest font-sans font-semibold text-center h-9 focus:outline-none"
                  >
                    Read info
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      )}

    </div>
  );
}
