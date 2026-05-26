/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Sparkles, Mail, CheckCircle } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section id="boutique-newsletter" className="bg-[#faf1e6] py-16 relative overflow-hidden text-[#4a3e3d]">
      <div className="absolute top-1/2 left-10 w-[200px] h-[200px] rounded-full bg-[#bfe5ef]/15 blur-2xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[200px] h-[200px] rounded-full bg-[#bbcd73]/15 blur-2xl -translate-y-1/2 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <Sparkles size={20} className="mx-auto text-[#ffbd59] mb-4 animate-spin-slow" />
        
        <span className="text-[10px] font-sans uppercase tracking-[0.3em] text-[#9a8684] block mb-1">
          Barakah VIP Circle
        </span>
        
        <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-[#2b2523] mb-4">
          Receive exclusive drops & secret sales
        </h2>
        
        <p className="font-sans text-xs sm:text-sm text-[#715d48] max-w-lg mx-auto mb-8 leading-relaxed">
          Unlock a special 10% complimentary coupon code for your first purchase, and join Waiza’s monthly styling guide digest.
        </p>

        {subscribed ? (
          <div className="flex flex-col items-center justify-center p-6 bg-white rounded-3xl border border-[#ebdcca] shadow-lg animate-fade-in max-w-md mx-auto">
            <CheckCircle size={28} className="text-[#bbcd73] mb-3" />
            <h4 className="font-serif font-semibold text-[#2b2523] text-base">You are on the VIP List!</h4>
            <p className="text-[#8a7a78] text-[11px] font-sans mt-1">Check your inbox for code <strong className="text-[#ffbd59]">BARAKAHGOLD10</strong>.</p>
          </div>
        ) : (
          <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9a8684]" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your feminine aesthetic email..."
                className="w-full pl-11 pr-4 py-3.5 bg-white rounded-full border border-[#ebdcca] focus:border-[#ffbd59] focus:outline-none text-xs text-[#2b2523] font-sans transition-colors placeholder-[#bcaaa8]"
              />
            </div>
            
            <button
              id="newsletter-subscribe-btn"
              type="submit"
              className="px-6 py-3.5 bg-[#4a3e3d] hover:bg-[#2b2523] text-white font-sans font-medium text-xs uppercase tracking-[0.2em] rounded-full transition-all duration-300 shadow-md shrink-0 focus:outline-none"
            >
              Subscribe
            </button>
          </form>
        )}

        <span className="text-[9px] font-sans uppercase tracking-widest text-[#9a8684] mt-4 block">
          No spam • Sincere styling updates only • Unsubscribe any time
        </span>
      </div>
    </section>
  );
}
