/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ShoppingBag, X, Plus, Minus, Trash2, ArrowRight, ShieldCheck, Heart, Sparkles, MessageCircle, Gift } from 'lucide-react';
import { CartItem, Product } from '../../types';

interface CartProps {
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number, color?: string) => void;
  onRemoveItem: (productId: string, color?: string) => void;
  onContinueShopping: () => void;
  onMoveToWishlist?: (product: Product) => void;
}

export default function Cart({
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onContinueShopping,
  onMoveToWishlist
}: CartProps) {
  // Coupon controller
  const [coupon, setCoupon] = useState('');
  const [activeDiscount, setActiveDiscount] = useState<{ code: string; percent: number } | null>(null);
  const [checkoutComplete, setCheckoutComplete] = useState(false);
  const [checkoutForm, setCheckoutForm] = useState({ name: '', phone: '', address: '', state: 'Uttar Pradesh', city: 'Kanpur' });

  // Calculations
  const subtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const shippingThreshold = 1499;
  const shippingCost = subtotal > shippingThreshold || subtotal === 0 ? 0 : 99;
  const discountAmount = activeDiscount ? Math.round((subtotal * activeDiscount.percent) / 100) : 0;
  const grandTotal = subtotal - discountAmount + shippingCost;

  const applyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCoupon = coupon.trim().toUpperCase();
    if (cleanCoupon === 'BARAKAHGOLD10') {
      setActiveDiscount({ code: 'BARAKAHGOLD10', percent: 10 });
      setCoupon('');
    } else if (cleanCoupon === 'WAIZAGIFT') {
      setActiveDiscount({ code: 'WAIZAGIFT', percent: 15 });
      setCoupon('');
    } else {
      alert('Kindly enter a valid Barakah boutique coupon code (e.g. BARAKAHGOLD10 or WAIZAGIFT).');
    }
  };

  const removeCoupon = () => {
    setActiveDiscount(null);
  };

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!checkoutForm.name || !checkoutForm.phone || !checkoutForm.address) {
      alert('Kindly populate all required billing lines to proceed.');
      return;
    }
    
    setCheckoutComplete(true);

    // Format order text for Direct WhatsApp Order to Waiza Tahir (9336444222)
    const itemsText = cartItems.map(item => 
      `- ${item.product.title} (${item.selectedColor || 'Standard'}): ${item.quantity} pc(s) x ₹${item.product.price}`
    ).join('\n');

    const receiptMessage = `✨ *BARAKAH JEWELLERY ORDER SLIP* ✨\n\n` +
      `*Customer Details:*\n` +
      `Name: ${checkoutForm.name}\n` +
      `Phone: ${checkoutForm.phone}\n` +
      `Delivery Address: ${checkoutForm.address}, ${checkoutForm.city}, ${checkoutForm.state}\n\n` +
      `*Order Summary:*\n` +
      `${itemsText}\n\n` +
      `*Invoice Details:*\n` +
      `Subtotal: ₹${subtotal}\n` +
      `Discount Code: ${activeDiscount ? `${activeDiscount.code} (-${activeDiscount.percent}%)` : 'None'}\n` +
      `Savings: -₹${discountAmount}\n` +
      `Elite Delivery charge: ${shippingCost === 0 ? 'FREE' : `₹${shippingCost}`}\n` +
      `*Grand Total: ₹${grandTotal}*\n\n` +
      `Please verify and send me payment details. Thank you! 🌸`;

    const whatsappUrl = `https://api.whatsapp.com/send?phone=919336444222&text=${encodeURIComponent(receiptMessage)}`;
    
    // Automatically trigger after a tiny delay or let user tap
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div id="boutique-cart-page" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      
      {/* Title block */}
      <div className="text-center mb-10 sm:mb-12">
        <span className="text-[10px] font-sans uppercase tracking-[0.3em] text-[#9a8684] block mb-1">Items shortlist</span>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#2b2523] tracking-tight font-semibold">Your Curation Bag</h2>
        <p className="text-[#8a7a78] text-xs font-sans mt-2">Customized, moisture-proof and tarnish-free jewelry luxury selections.</p>
        <div className="h-[1px] w-12 bg-[#ffbd59] mx-auto mt-4" />
      </div>

      {cartItems.length === 0 ? (
        <div className="text-center py-20 bg-white border border-[#f5ece2]/60 rounded-[32px] p-8 max-w-md mx-auto shadow-xs">
          <span className="text-4xl">👜</span>
          <h3 className="font-serif text-lg font-semibold text-[#2b2523] mt-4 mb-2">Your Bag is Empty</h3>
          <p className="text-xs text-[#8a7a78] font-sans leading-relaxed">
            There are no jewellery items curated in your shopping bag. Head back to Waiza's archives to discover anti-tarnish and crystal treasures.
          </p>
          <button
            onClick={onContinueShopping}
            className="mt-8 px-8 py-3.5 bg-[#4a3e3d] hover:bg-[#ffbd59] text-white hover:text-[#2b2523] font-sans text-xs uppercase tracking-[0.2em] rounded-full shadow-md hover:shadow-lg transition-all focus:outline-none"
          >
            Explore Jewellery Archives
          </button>
        </div>
      ) : checkoutComplete ? (
        <div className="bg-white border border-[#f5ece2]/80 p-8 sm:p-12 rounded-[32px] shadow-lg text-center max-w-xl mx-auto animate-scale-in">
          <span className="text-4xl block mb-4">🎉</span>
          <h3 className="font-serif text-2xl font-bold tracking-tight text-[#2b2523]">Order Curation Generated!</h3>
          <p className="text-xs text-[#8a7a78] font-sans leading-relaxed mt-2 max-w-sm mx-auto">
            Your premium Barakah purchase summary has been encoded. We are redirecting you to complete the safe bank payment or cash-on-delivery alignment with <strong className="text-[#4a3e3d]">Waiza Tahir</strong> directly on WhatsApp.
          </p>

          <div className="bg-[#faf7f2] border border-[#ebdcca]/80 rounded-[20px] p-5 my-6 text-left space-y-3">
            <span className="text-[10px] uppercase font-sans tracking-widest text-[#9a8684] block font-bold border-b border-[#ebdcca]/40 pb-2">Order Slip Receipt</span>
            <div className="text-xs space-y-1.5 font-sans text-[#594c4a]">
              <p>📍 <strong>Deliveree:</strong> {checkoutForm.name}</p>
              <p>📞 <strong>Phone Desk:</strong> {checkoutForm.phone}</p>
              <p>💎 <strong>Curation Total:</strong> {cartItems.length} styles • ₹{grandTotal}</p>
            </div>
          </div>

          <div className="space-y-4">
            <button
              id="cart-whatsapp-repeat-btn"
              onClick={() => {
                const itemsTextStr = cartItems.map(item => `- ${item.product.title} (${item.selectedColor || 'Standard'}): ${item.quantity} pc(s) x ₹${item.product.price}`).join('\n');
                const receiptMessageText = `✨ *BARAKAH JEWELLERY ORDER SLIP* ✨\n\n*Customer Details:*\nName: ${checkoutForm.name}\nPhone: ${checkoutForm.phone}\nDelivery Address: ${checkoutForm.address}, ${checkoutForm.city}, ${checkoutForm.state}\n\n*Order Summary:*\n${itemsTextStr}\n\n*Invoice Details:*\nSubtotal: ₹${subtotal}\nDiscount Code: ${activeDiscount ? `${activeDiscount.code} (-${activeDiscount.percent}%)` : 'None'}\nSavings: -₹${discountAmount}\nElite Delivery: ${shippingCost === 0 ? 'FREE' : `₹${shippingCost}`}\n*Grand Total: ₹${grandTotal}*\n\nPlease verify and send me payment details. Thank you! 🌸`;
                window.open(`https://api.whatsapp.com/send?phone=919336444222&text=${encodeURIComponent(receiptMessageText)}`, '_blank');
              }}
              className="w-full py-4 bg-[#bbcd73] hover:bg-[#a6b85d] text-[#2b2523] font-sans font-bold text-xs uppercase tracking-[0.2em] rounded-full shadow-[0_5px_15px_rgba(187,205,115,0.3)] flex items-center justify-center gap-2 focus:outline-none transition-all duration-300"
            >
              <MessageCircle size={15} /> Send Receipt on WhatsApp
            </button>
            
            <button
              onClick={() => {
                setCheckoutComplete(false);
                onContinueShopping();
              }}
              className="text-xs font-sans uppercase tracking-[0.2em] text-[#8a7a78] hover:text-[#4a3e3d] block mx-auto py-2"
            >
              ← Back to Boutique Home
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Cart items table list (Grid dynamic span 7) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="bg-white border border-[#f5ece2]/80 rounded-[28px] p-6 shadow-[0_2px_20px_rgba(235,221,202,0.1)]">
              <span className="text-[10px] uppercase tracking-widest text-[#9a8684] block font-semibold pb-4 border-b border-[#fcfbf9] mb-6">
                Shortlisted Designs ({cartItems.length})
              </span>

              <div className="divide-y divide-[#fcfbf9] space-y-4">
                {cartItems.map((item) => (
                  <div key={`${item.product.id}-${item.selectedColor}`} className="flex flex-col sm:flex-row gap-4 py-4 first:pt-0 last:pb-0 items-center">
                    
                    {/* Item Image */}
                    <div className="w-20 h-20 rounded-xl overflow-hidden bg-[#faf7f2] border border-[#f5ece2] shrink-0">
                      <img src={item.product.imageUrl} alt={item.product.title} className="w-full h-full object-cover select-none" referrerPolicy="no-referrer" />
                    </div>

                    {/* Item titles and selection settings */}
                    <div className="flex-1 text-center sm:text-left min-w-0">
                      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                        <span className="text-[10px] sm:text-[11px] font-sans font-medium text-[#c0aba8] uppercase tracking-wider">{item.product.subCategory}</span>
                        <span className="text-[#ebdcca] font-bold text-xs">•</span>
                        <span className="text-[10px] font-sans text-[#bbcd73] font-semibold flex items-center gap-0.5" style={{ color: '#bbcd73' }}>
                          <Sparkles size={10} /> {item.product.category === 'anti-tarnish' ? 'Anti-Tarnish' : 'Glass Crystal'}
                        </span>
                      </div>
                      <h4 className="font-serif text-sm sm:text-base font-semibold text-[#2b2523] truncate mt-1">
                        {item.product.title}
                      </h4>
                      {item.selectedColor && (
                        <span className="text-[10.5px] font-sans text-[#8a7a78] block mt-0.5">
                          Inlay choice: <strong className="text-[#4a3e3d]">{item.selectedColor}</strong>
                        </span>
                      )}
                    </div>

                    {/* Quantity controllers and calculations */}
                    <div className="flex items-center gap-4 shrink-0 mt-3 sm:mt-0">
                      
                      {/* Plus/Minus triggers */}
                      <div className="flex items-center border border-[#ebdcca] rounded-full p-1 bg-[#faf7f2]/50">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1, item.selectedColor)}
                          className="w-6 h-6 rounded-full flex items-center justify-center hover:bg-white text-xs font-semibold focus:outline-none"
                          disabled={item.quantity <= 1}
                        >
                          <Minus size={10} />
                        </button>
                        <span className="w-6 text-center text-xs font-sans font-medium">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1, item.selectedColor)}
                          className="w-6 h-6 rounded-full flex items-center justify-center hover:bg-white text-xs font-semibold focus:outline-none"
                        >
                          <Plus size={10} />
                        </button>
                      </div>

                      {/* Line Item total */}
                      <div className="text-right min-w-[70px]">
                        <span className="block font-serif font-bold text-xs sm:text-sm text-[#2b2523]">
                          ₹{item.product.price * item.quantity}
                        </span>
                        <span className="text-[9px] text-[#9a8684] block font-sans">
                          ₹{item.product.price} each
                        </span>
                      </div>

                      {/* Remove item trigger */}
                      <button
                        id={`del-cart-item-${item.product.id}`}
                        onClick={() => onRemoveItem(item.product.id, item.selectedColor)}
                        className="p-2 text-[#bcaaa8] hover:text-[#9b111e] hover:bg-[#9b111e]/5 rounded-full transition-all focus:outline-none"
                        title="Delete selection"
                      >
                        <Trash2 size={14} />
                      </button>

                    </div>

                  </div>
                ))}
              </div>

            </div>

            {/* Optional Wishlist prompt */}
            <div className="bg-[#faf1e6]/60 border border-[#f5ece2] rounded-2xl p-4 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2.5">
                <Heart size={16} className="text-[#ffbd59] shrink-0" />
                <div className="text-left font-sans text-[11px] sm:text-xs text-[#715d48]">
                  <strong>Save items for later?</strong> Add more items or maintain them in your visual wishlists.
                </div>
              </div>
              <button
                onClick={onContinueShopping}
                className="text-[10px] font-sans uppercase tracking-widest font-semibold text-[#4a3e3d] hover:text-[#ffbd59] shrink-0"
              >
                Add Designs
              </button>
            </div>

          </div>

          {/* Right Column: Invoice summary list & Billing inputs (Grid dynamic span 5) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Invoice checkout list */}
            <div className="bg-white border border-[#f5ece2]/80 p-6 sm:p-8 rounded-[28px] shadow-[0_4px_25px_rgba(235,221,202,0.1)]">
              
              <span className="text-[10px] uppercase tracking-widest text-[#9a8684] block font-semibold pb-4 border-b border-[#fcfbf9] mb-5">
                Invoice Breakdown
              </span>

              <div className="space-y-3 pb-4 border-b border-[#fcfbf9] text-xs font-sans text-[#6e5f5c]">
                <div className="flex items-center justify-between">
                  <span>Cart Items total:</span>
                  <span className="text-[#2b2523] font-semibold">₹{subtotal}</span>
                </div>
                
                {activeDiscount && (
                  <div className="flex items-center justify-between text-[#bbcd73]" style={{ color: '#bbcd73' }}>
                    <span className="flex items-center gap-1 font-semibold">
                      <Gift size={12} /> Coupon ({activeDiscount.code}):
                    </span>
                    <span>-₹{discountAmount} (-{activeDiscount.percent}%)</span>
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <span>Elite DHL/Express Shipping:</span>
                  <span className={shippingCost === 0 ? 'text-[#bbcd73] font-semibold uppercase' : 'text-[#2b2523]'}>
                    {shippingCost === 0 ? 'Free Shipping' : `₹${shippingCost}`}
                  </span>
                </div>
                
                {shippingCost > 0 && (
                  <p className="text-[9.5px] text-[#bcaaa8] italic leading-tight pt-1">
                    💡 Complete order with ₹{shippingThreshold - subtotal} more to unlock Free complimentary Express Shipping!
                  </p>
                )}
              </div>

              {/* Coupon Form */}
              {!activeDiscount ? (
                <form onSubmit={applyCoupon} className="flex gap-2.5 my-4 border-b border-[#fcfbf9] pb-4">
                  <input
                    type="text"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    placeholder="ENTER KANPUR COUPON CODE (e.g. BARAKAHGOLD10)..."
                    className="flex-1 p-2.5 bg-[#faf7f2]/50 border border-[#ebdcca] rounded-lg text-[9px] uppercase font-sans focus:outline-none text-[#2b2523] placeholder-[#bcaaa8]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#4a3e3d] hover:bg-[#ffbd59] hover:text-[#2b2523] text-white rounded-lg text-[9px] uppercase tracking-widest font-sans font-bold shadow-xs shrink-0"
                  >
                    Apply code
                  </button>
                </form>
              ) : (
                <div className="bg-[#bbcd73]/10 border border-[#bbcd73]/30 p-2.5 rounded-lg flex items-center justify-between my-4">
                  <span className="text-[10px] font-sans text-[#4c552b] font-semibold">🎉 Applied "{activeDiscount.code}"</span>
                  <button 
                    onClick={removeCoupon} 
                    className="p-1 hover:bg-[#bbcd73]/20 rounded-full text-[#9b111e] text-[10px]"
                    title="Remove coupon"
                  >
                    Remove ×
                  </button>
                </div>
              )}

              {/* Total Row */}
              <div className="flex items-center justify-between mb-6 pt-2">
                <span className="font-serif text-sm font-semibold text-[#2b2523] uppercase tracking-wider">Estimated Total</span>
                <span className="font-serif text-xl sm:text-2xl font-extrabold text-[#2b2523]">₹{grandTotal}</span>
              </div>

              {/* Shipping Delivery Information input form */}
              <form onSubmit={handleCheckoutSubmit} className="space-y-4 border-t border-[#fcfbf9] pt-5">
                <span className="text-[9.5px] uppercase tracking-widest text-[#9a8684] block font-semibold mb-2">
                   elite Delivery Lines
                </span>

                {/* Name */}
                <div className="flex flex-col">
                  <input
                    type="text"
                    required
                    value={checkoutForm.name}
                    onChange={(e) => setCheckoutForm({ ...checkoutForm, name: e.target.value })}
                    placeholder="Recipient's Name *"
                    className="p-3 bg-[#faf7f2]/40 border border-[#ebdcca] rounded-xl text-xs font-sans text-[#2b2523] focus:outline-none focus:border-[#ffbd59]"
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col">
                  <input
                    type="tel"
                    required
                    value={checkoutForm.phone}
                    onChange={(e) => setCheckoutForm({ ...checkoutForm, phone: e.target.value })}
                    placeholder="Mobile Number (preferably WhatsApp) *"
                    className="p-3 bg-[#faf7f2]/40 border border-[#ebdcca] rounded-xl text-xs font-sans text-[#2b2523] focus:outline-none focus:border-[#ffbd59]"
                  />
                </div>

                {/* Address */}
                <div className="flex flex-col">
                  <input
                    type="text"
                    required
                    value={checkoutForm.address}
                    onChange={(e) => setCheckoutForm({ ...checkoutForm, address: e.target.value })}
                    placeholder="Street Address, Area/Swaroop Nagar *"
                    className="p-3 bg-[#faf7f2]/40 border border-[#ebdcca] rounded-xl text-xs font-sans text-[#2b2523] focus:outline-none focus:border-[#ffbd59]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    value={checkoutForm.city}
                    onChange={(e) => setCheckoutForm({ ...checkoutForm, city: e.target.value })}
                    placeholder="City *"
                    className="p-3 bg-[#faf7f2]/40 border border-[#ebdcca] rounded-xl text-xs font-sans text-[#2b2523] focus:outline-none"
                  />
                  <input
                    type="text"
                    required
                    value={checkoutForm.state}
                    onChange={(e) => setCheckoutForm({ ...checkoutForm, state: e.target.value })}
                    placeholder="State *"
                    className="p-3 bg-[#faf7f2]/40 border border-[#ebdcca] rounded-xl text-xs font-sans text-[#2b2523] focus:outline-none"
                  />
                </div>

                {/* Complete buy button */}
                <button
                  id="checkout-trigger-btn"
                  type="submit"
                  className="w-full py-4 bg-[#ffbd59] hover:bg-[#ffad33] text-[#2b2523] font-sans font-bold text-xs uppercase tracking-[0.2em] rounded-full shadow-[0_5px_15px_rgba(255,189,89,0.3)] flex items-center justify-center gap-2 mt-4 focus:outline-none transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  Confirm Order & Generate WhatsApp Slip <ArrowRight size={13} />
                </button>
              </form>

              {/* Certified transaction block */}
              <div className="flex items-center justify-center gap-1.5 text-[9px] font-sans text-[#9a8684] uppercase tracking-widest mt-4">
                <ShieldCheck size={11} className="text-[#bbcd73]" /> Elite packaging wrapped under sanitised supervision
              </div>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}
