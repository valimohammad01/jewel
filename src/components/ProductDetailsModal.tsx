/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, Heart, ShoppingBag, Sparkles, Check, Info, ShieldCheck, CornerDownRight } from 'lucide-react';
import { Product } from '../types';

interface ProductDetailsModalProps {
  product: Product;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number, selectedColor?: string) => void;
  onToggleWishlist: (product: Product) => void;
  isWishlisted: boolean;
}

export default function ProductDetailsModal({
  product,
  onClose,
  onAddToCart,
  onToggleWishlist,
  isWishlisted
}: ProductDetailsModalProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0]?.name || '');
  const [activeTab, setActiveTab] = useState<'details' | 'care' | 'shipping'>('details');

  const handleAdd = () => {
    onAddToCart(product, quantity, selectedColor);
    onClose();
  };

  return (
    <div id="product-detail-modal-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs overflow-y-auto">
      {/* Click outside to close */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative bg-white w-full max-w-4xl rounded-[28px] shadow-2xl overflow-hidden border border-brand-pink my-8 animate-scale-in">
        
        {/* Close Button */}
        <button
          id="close-detail-modal-btn"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 bg-white/85 hover:bg-brand-rose hover:text-white text-[#7c4d52] rounded-full border border-brand-pink focus:outline-none transition-all shadow-sm"
          aria-label="Close Details Modal"
        >
          <X size={18} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
          
          {/* Left Column: Visual double layout (Grid Span 6) */}
          <div className="md:col-span-6 bg-[#fdf7f8] p-6 flex flex-col justify-center items-center border-b md:border-b-0 md:border-r border-brand-pink/50 relative">
            
            {/* Double image view (Hover toggle simulation or dual grid) */}
            <div className="w-full aspect-square rounded-2xl overflow-hidden relative shadow-md bg-white border border-[#f5ece2]">
              <img
                src={product.imageUrl}
                alt={product.title}
                className="w-full h-full object-cover select-none transition-transform duration-500 hover:scale-110"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay Specialty Badge */}
              <div className="absolute top-4 left-4 bg-[#bfe5ef] text-[#2b4c55] text-[8px] font-sans uppercase tracking-[0.2em] font-bold px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
                <Sparkles size={10} /> Certified Clean
              </div>
            </div>

            {/* Thumbnail reference line */}
            <div className="flex gap-3 mt-4 w-full justify-center">
              <div className="w-16 h-16 rounded-xl overflow-hidden border-2 border-[#ffbd59] shadow-inner bg-white">
                <img src={product.imageUrl} className="w-full h-full object-cover select-none" referrerPolicy="no-referrer" />
              </div>
              {product.hoverImageUrl && (
                <div className="w-16 h-16 rounded-xl overflow-hidden border border-[#ebdcca] opacity-60 hover:opacity-100 transition-opacity bg-white cursor-pointer">
                  <img src={product.hoverImageUrl} className="w-full h-full object-cover select-none" referrerPolicy="no-referrer" />
                </div>
              )}
            </div>

          </div>

          {/* Right Column: Custom form config (Grid Span 6) */}
          <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between max-h-[85vh] overflow-y-auto">
            
            <div className="flex-1 pb-4">
              
              {/* Category tags */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-sans uppercase tracking-[0.2em] font-bold" style={{ color: '#bbcd73' }}>
                  {product.category === 'anti-tarnish' ? 'Anti-Tarnish Collection' : 'Crystal Collection'}
                </span>
                <span className="text-[#ebdcca] text-xs">•</span>
                <span className="text-[10px] font-sans uppercase tracking-widest text-[#9a8684]">
                  {product.subCategory}
                </span>
              </div>

              {/* Title heading */}
              <h2 className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#2b2523] mb-3 leading-snug">
                {product.title}
              </h2>

              {/* Price Row */}
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-serif text-xl sm:text-2xl font-extrabold text-[#2b2523]">
                  ₹{product.price}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="text-sm line-through text-[#bcaaa8] font-sans">
                      ₹{product.originalPrice}
                    </span>
                    <span className="text-[10px] font-sans font-semibold uppercase tracking-wider text-[#bbcd73] bg-[#bbcd73]/10 px-2 py-0.5 rounded-md">
                      Save ₹{product.originalPrice - product.price}
                    </span>
                  </>
                )}
              </div>

              {/* Summary Description citation */}
              <div className="p-3 bg-white/60 border border-[#f5ece2] rounded-xl mb-5 text-[12px] text-[#6e5f5c] font-sans leading-relaxed italic">
                "{product.description}"
              </div>

              {/* Dynamic color selection if present */}
              {product.colors && product.colors.length > 0 && (
                <div className="mb-5">
                  <span className="text-[10px] font-sans uppercase tracking-wider text-[#9a8684] block mb-2 font-semibold">
                    Select Metallic Inlay: <strong className="text-[#4a3e3d]">{selectedColor}</strong>
                  </span>
                  
                  <div className="flex gap-2.5">
                    {product.colors.map((c) => (
                      <button
                        key={c.name}
                        onClick={() => setSelectedColor(c.name)}
                        className={`w-7 h-7 rounded-full flex items-center justify-center transition-all border ${
                          selectedColor === c.name 
                            ? 'border-[#ffbd59] ring-2 ring-[#ffbd59]/25 scale-105' 
                            : 'border-[#ebdcca]/60'
                        }`}
                        style={{ backgroundColor: c.hex }}
                        title={c.name}
                      >
                        {selectedColor === c.name && (
                          <Check 
                            size={12} 
                            className={c.hex === '#FFFFFF' || c.hex === '#FAF9F6' ? 'text-black' : 'text-white'} 
                          />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Document details Tab controller */}
              <div className="border-b border-[#f2e6d9] mb-4 flex gap-4 text-xs">
                {['details', 'care', 'shipping'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab as any)}
                    className={`pb-2 uppercase tracking-widest text-[10px] font-sans font-semibold border-b-2 transition-colors focus:outline-none ${
                      activeTab === tab 
                        ? 'border-[#ffbd59] text-[#2b2523]' 
                        : 'border-transparent text-[#9a8684] hover:text-[#4a3e3d]'
                    }`}
                  >
                    {tab === 'details' ? 'Specifications' : tab === 'care' ? 'Care Guide' : 'Delivery'}
                  </button>
                ))}
              </div>

              {/* Tab Outputs */}
              {activeTab === 'details' && (
                <ul className="space-y-2 text-xs text-[#6e5f5c] font-sans">
                  {product.details.map((detail, index) => (
                    <li key={index} className="flex gap-1.5 items-start">
                      <CornerDownRight size={12} className="text-[#ffbd59] mt-0.5 shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                  <li className="flex gap-1.5 items-start">
                    <CornerDownRight size={12} className="text-[#ffbd59] mt-0.5 shrink-0" />
                    <span>Specialty feature: {product.specialty}</span>
                  </li>
                </ul>
              )}

              {activeTab === 'care' && (
                <div className="space-y-2 text-xs text-[#6e5f5c] font-sans leading-relaxed">
                  <p>🌊 <strong>Anti-Tarnish Wear:</strong> Safe for swimming pools, sea water, gym sweat, and delicate essential perfumes. Wipe off outer grime with our complimentary microfiber cloth.</p>
                  <p>🔮 <strong>Crystal Jewellery:</strong> Avoid striking crystals hard on marble desks. Gently rinse with warm soapy water to renew that high-refraction boutique luster instantly.</p>
                </div>
              )}

              {activeTab === 'shipping' && (
                <div className="space-y-2 text-xs text-[#6e5f5c] font-sans leading-relaxed">
                  <p>📦 <strong>Bespoke Curation:</strong> Orders are handpacked with custom notes by Waiza Tahir in Kanpur and shipped via elite Express couriers.</p>
                  <p>⏳ <strong>Transit Time:</strong> Kanpur, Noida, Lucknow, Delhi NCR: 1-2 days. Rest of India: 3-5 days.</p>
                </div>
              )}

            </div>

            {/* Quantity Controller & Add actions block */}
            <div className="pt-4 border-t border-brand-pink/50 mt-auto">
              <div className="flex items-center gap-4 mb-4">
                
                {/* Quantity adjuster */}
                <div className="flex items-center border border-brand-pink rounded-full p-1 bg-white">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#fdf7f8] font-semibold text-sm focus:outline-none"
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <span className="w-8 text-center text-xs font-sans font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#fdf7f8] font-semibold text-sm focus:outline-none"
                  >
                    +
                  </button>
                </div>

                {/* Wishlist toggle */}
                <button
                  onClick={() => onToggleWishlist(product)}
                  className="p-3 bg-white hover:bg-[#fdf7f8] border border-brand-pink rounded-full hover:border-[#ff85a1] transition-colors focus:outline-none"
                  title="Toggle Wishlist"
                >
                  <Heart 
                    size={18} 
                    className={isWishlisted ? 'fill-brand-rose text-brand-rose' : 'text-[#8a7a78]'} 
                  />
                </button>

              </div>

              {/* Main Buy Trigger */}
              <button
                id="modal-add-bag-btn"
                onClick={handleAdd}
                className="w-full py-4 bg-brand-gold hover:bg-brand-gold/90 text-[#2e2625] font-sans font-bold text-xs uppercase tracking-[0.25em] rounded-full shadow-[0_5px_15px_rgba(255,189,89,0.3)] transition-all flex items-center justify-center gap-2 focus:outline-none"
              >
                <ShoppingBag size={14} /> Buy Curation • Add to Bag
              </button>

              {/* Secure info card */}
              <div className="flex items-center justify-center gap-1.5 text-[9px] font-sans text-[#9a8684] uppercase tracking-widest mt-3.5">
                <ShieldCheck size={11} className="text-brand-green" /> Guaranteed Waterproof and Scratch-Resistant Finish
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
