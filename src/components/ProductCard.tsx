/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Heart, ShoppingCart, Sparkles, Star } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  key?: React.Key;
  product: Product;
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
  onProductClick: (product: Product) => void;
  isWishlisted: boolean;
}

export default function ProductCard({
  product,
  onAddToCart,
  onToggleWishlist,
  onProductClick,
  isWishlisted
}: ProductCardProps) {
  // Calculate discount percentage
  const discountPercent = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
    : 0;

  return (
    <div 
      id={`product-card-${product.id}`}
      className="group bg-white rounded-[20px] overflow-hidden border border-[#ffe3e6] shadow-[0_4px_20px_rgba(255,133,161,0.03)] hover:shadow-[0_12px_35px_rgba(255,133,161,0.12)] transition-all duration-500 flex flex-col h-full hover:-translate-y-1 relative"
    >
      {/* Badges indicators (Top Left) */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-1.5 pointer-events-none">
        {product.isNew && (
          <span className="bg-[#bfe5ef] text-[#2e4c55] text-[8px] font-sans uppercase tracking-[0.15em] font-semibold px-2.5 py-1 rounded-full shadow-xs shrink-0">
            New In
          </span>
        )}
        {product.isBestSeller && (
          <span className="bg-brand-pink text-[#7c4d52] text-[8px] font-sans uppercase tracking-[0.15em] font-semibold px-2.5 py-1 rounded-full border border-[#ffe5ec] shadow-xs shrink-0">
            Best Seller
          </span>
        )}
        {discountPercent > 0 && (
          <span className="bg-brand-green/20 text-[#4c552b] text-[8px] font-sans uppercase tracking-[0.15em] font-semibold px-2.5 py-1 rounded-full border border-brand-green/20 shadow-xs shrink-0">
            {discountPercent}% Off
          </span>
        )}
      </div>

      {/* Wishlist Button Overlay (Top Right) */}
      <button
        id={`wish-btn-${product.id}`}
        onClick={(e) => {
          e.stopPropagation();
          onToggleWishlist(product);
        }}
        className="absolute top-4 right-4 z-10 p-2.5 bg-white/75 backdrop-blur-md rounded-full border border-[#fdf7f8] hover:bg-white hover:border-brand-rose shadow-xs hover:shadow-md transition-all group-hover:opacity-100"
        aria-label="Add to Wishlist"
      >
        <Heart 
          size={15} 
          className={`transition-transform duration-300 active:scale-130 ${
            isWishlisted ? 'fill-brand-rose text-brand-rose' : 'text-[#8a7a78] hover:text-brand-rose'
          }`}
        />
      </button>

      {/* Image Gallery Frame */}
      <div 
        onClick={() => onProductClick(product)}
        className="w-full aspect-square overflow-hidden bg-[#fdf7f8] relative cursor-pointer"
      >
        {/* Double-image hover swap system */}
        <img
          src={product.imageUrl}
          alt={product.title}
          className="w-full h-full object-cover select-none transition-transform duration-700 ease-out group-hover:scale-110 absolute inset-0"
          referrerPolicy="no-referrer"
        />
        {product.hoverImageUrl && (
          <img
            src={product.hoverImageUrl}
            alt={`${product.title} lifestyle view`}
            className="w-full h-full object-cover select-none transition-transform duration-700 ease-out group-hover:scale-110 absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
            referrerPolicy="no-referrer"
          />
        )}
        
        {/* Invisible quick glance visual cover on hover */}
        <div className="absolute inset-0 bg-[#2b2523]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>

      {/* Product Information Form */}
      <div className="p-5 flex flex-col flex-1">
        
        {/* Category & Materials subtitle */}
        <div className="flex items-center gap-1.5 mb-1.5">
          <span className="text-[9px] font-sans uppercase tracking-widest text-[#9a8684] font-medium">
            {product.subCategory}
          </span>
          <span className="text-brand-pink text-[10px]">•</span>
          <span className="text-[9.5px] font-sans text-brand-rose flex items-center gap-0.5 truncate max-w-[150px]">
            <Sparkles size={9} className="text-[#ffbd59]" /> {product.category === 'anti-tarnish' ? 'Anti-Tarnish' : 'Austrian Crystal'}
          </span>
        </div>

        {/* Title */}
        <h3 
          onClick={() => onProductClick(product)}
          className="font-serif text-sm sm:text-base font-semibold text-[#2e2625] tracking-wide mb-1 cursor-pointer line-clamp-1 hover:text-brand-rose transition-colors"
        >
          {product.title}
        </h3>

        {/* Rating and Reviews count */}
        <div className="flex items-center gap-1 mb-3">
          <div className="flex items-center text-brand-gold">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={10} 
                className={`${i < Math.floor(product.rating) ? 'fill-brand-gold text-brand-gold' : 'text-[#ffe5ec]'} shrink-0`} 
              />
            ))}
          </div>
          <span className="text-[9px] font-sans text-[#9a8684]">
            ({product.reviewsCount})
          </span>
        </div>

        {/* Specialty micro summary lines */}
        <p className="text-[10px] sm:text-[11px] text-[#8a7a78] leading-relaxed line-clamp-2 font-sans mb-4 italic">
          "{product.description}"
        </p>

        {/* Action prices and quick baskets (Bottom aligned) */}
        <div className="mt-auto pt-3 border-t border-[#fdf7f8] flex items-center justify-between">
          <div className="flex flex-col">
            {product.originalPrice && (
              <span className="text-[10.5px] line-through text-[#bcaaa8] font-sans">
                ₹{product.originalPrice}
              </span>
            )}
            <span className="font-serif font-bold text-sm sm:text-base text-[#2e2625]">
              ₹{product.price}
            </span>
          </div>

          <button
            id={`add-bag-btn-${product.id}`}
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(product);
            }}
            className="px-3.5 py-2.5 bg-brand-pink/40 hover:bg-[#ffbd59] border border-[#ffd1dc]/60 hover:border-transparent text-[#7c4d52] hover:text-[#2e2625] rounded-xl transition-all duration-300 flex items-center gap-1.5 focus:outline-none"
            aria-label="Add to Bag"
          >
            <ShoppingCart size={13} />
            <span className="text-[10px] font-sans uppercase tracking-widest font-semibold hidden sm:inline">Add</span>
          </button>
        </div>

      </div>
    </div>
  );
}
