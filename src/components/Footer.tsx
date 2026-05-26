/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Heart, MapPin, Phone, Mail, ShieldCheck, Truck, RefreshCw, Zap } from 'lucide-react';
import { BRAND_INFO } from '../data';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  onFilterSelect: (category: 'anti-tarnish' | 'crystal' | 'all') => void;
}

export default function Footer({ setActiveTab, onFilterSelect }: FooterProps) {
  const handlePageClick = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCollectionClick = (category: 'anti-tarnish' | 'crystal' | 'all') => {
    onFilterSelect(category);
    setActiveTab('shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="boutique-footer" className="bg-[#fdf7f8] border-t border-[#ffe3e6] pt-16 pb-8 text-[#594c4a]">
      
      {/* Brand assurance strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 border-b border-[#ffe3e6] mb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          
          <div className="flex flex-col items-center p-4">
            <div className="w-10 h-10 rounded-full bg-brand-blue/30 flex items-center justify-center text-brand-blue/85 mb-3">
              <ShieldCheck size={18} />
            </div>
            <h4 className="font-serif font-bold text-xs text-[#2e2625] uppercase tracking-wide">Anti-Rust Warranty</h4>
            <p className="text-[10px] font-sans text-[#8a7a78] mt-1 max-w-[160px]">Sweatproof, perfume proof, will not lose premium shine.</p>
          </div>

          <div className="flex flex-col items-center p-4">
            <div className="w-10 h-10 rounded-full bg-brand-pink flex items-center justify-center text-brand-rose mb-3">
              <Truck size={18} />
            </div>
            <h4 className="font-serif font-bold text-xs text-[#2e2625] uppercase tracking-wide">Free Shipping</h4>
            <p className="text-[10px] font-sans text-[#8a7a78] mt-1 max-w-[160px]">Complimentary pan-India elite shipping above ₹1,499.</p>
          </div>

          <div className="flex flex-col items-center p-4">
            <div className="w-10 h-10 rounded-full bg-brand-green/20 flex items-center justify-center text-brand-green mb-3">
              <RefreshCw size={17} />
            </div>
            <h4 className="font-serif font-bold text-xs text-[#2e2625] uppercase tracking-wide">7-Day Exchanges</h4>
            <p className="text-[10px] font-sans text-[#8a7a78] mt-1 max-w-[160px]">Hassle-free size adjustments & exchange support.</p>
          </div>

          <div className="flex flex-col items-center p-4">
            <div className="w-10 h-10 rounded-full bg-brand-pink/50 flex items-center justify-center text-brand-rose mb-3">
              <Zap size={18} />
            </div>
            <h4 className="font-serif font-bold text-xs text-[#2e2625] uppercase tracking-wide">Hypoallergenic</h4>
            <p className="text-[10px] font-sans text-[#8a7a78] mt-1 max-w-[160px]">Surgical-grade brass & steel, 100% lead safe.</p>
          </div>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Column 1: Brand description (Grid Span 4) */}
          <div className="md:col-span-4 flex flex-col">
            <h3 className="font-serif text-2xl font-bold italic tracking-tight text-[#2e2625]">Barakah</h3>
            <span className="text-[8px] font-sans uppercase tracking-[0.3em] text-[#9a8684] mt-1">BY WAIZA TAHIR</span>
            <p className="text-xs font-sans text-[#6e5f5c] leading-relaxed mt-4 max-w-sm">
              We specialise in moisture-proof Anti-Tarnish steel and high-refraction shimmering Crystal jewellery. Each piece is handpicked and customized in Kanpur for an elegant lifestyle.
            </p>
            
            {/* Owner Signature Note */}
            <div className="mt-6 flex items-center gap-2 bg-white p-3 rounded-xl border border-brand-pink w-fit">
              <div className="w-6 h-6 rounded-full bg-brand-pink flex items-center justify-center text-xs font-serif font-bold italic text-brand-rose">W</div>
              <div className="text-[10px]">
                <span className="block font-sans font-semibold text-[#2e2625]">Curated by Waiza Tahir</span>
                <span className="text-[#8a7a78] block font-sans -mt-0.5">Kanpur, Uttar Pradesh</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (Grid Span 2) */}
          <div className="md:col-span-2">
            <h4 className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#2e2625] font-bold mb-4">
              Boutique Pages
            </h4>
            <ul className="space-y-3 text-xs font-sans text-[#8a7a78]">
              {['home', 'shop', 'collections', 'about', 'contact'].map((tab) => (
                <li key={tab}>
                  <button
                    onClick={() => handlePageClick(tab)}
                    className="hover:text-brand-rose hover:pl-1 transition-all uppercase tracking-wider text-[10px]"
                  >
                    {tab === 'about' ? 'Our Story' : tab === 'shop' ? 'Shop All' : tab}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Collections (Grid Span 3) */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#2e2625] font-bold mb-4">
              Signature Edits
            </h4>
            <ul className="space-y-3 text-xs font-sans text-[#8a7a78]">
              <li>
                <button
                  onClick={() => handleCollectionClick('anti-tarnish')}
                  className="hover:text-brand-rose text-[10.5px] tracking-wide text-left block"
                >
                  🍀 18K Anti-Tarnish Collection
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCollectionClick('crystal')}
                  className="hover:text-brand-rose text-[10.5px] tracking-wide text-left block"
                >
                  🔮 Austrian Crystal Collection
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCollectionClick('all')}
                  className="hover:text-brand-rose text-[10.5px] tracking-wide text-left block"
                >
                  ✨ Complete Catalogue Shop
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Location & Contact Details (Grid Span 3) */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#2e2625] font-bold mb-4">
              Kanpur HQ Contact
            </h4>
            <ul className="space-y-3 text-xs font-sans text-[#6e5f5c]">
              <li className="flex items-start gap-2">
                <MapPin size={13} className="text-brand-rose mt-0.5 shrink-0" />
                <span>
                  <strong>Barakah Studio:</strong> Swaroop Nagar / Aryanagar Nearby, Kanpur, UP, 208001
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={13} className="text-brand-green shrink-0" />
                <a href={`tel:${BRAND_INFO.contact}`} className="hover:underline hover:text-brand-rose">
                  +91 {BRAND_INFO.contact}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={13} className="text-brand-blue shrink-0" />
                <a href={`mailto:${BRAND_INFO.email}`} className="hover:underline hover:text-brand-rose">
                  {BRAND_INFO.email}
                </a>
              </li>
              <li className="pt-2 text-[10px] text-[#9a8684] italic">
                Support Hours: 11:00 AM - 8:00 PM IST
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Credits copy block */}
        <div className="border-t border-[#ffe3e6] mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between text-[10px] font-sans text-[#9a8684] tracking-wide gap-4">
          <p>© {new Date().getFullYear()} Barakah Jewellery Boutique. Hand-curated by Waiza Tahir. All rights reserved.</p>
          <div className="flex items-center gap-1.5 justify-center">
            <span>Made with</span>
            <Heart size={10} className="fill-brand-rose text-brand-rose animate-pulse" />
            <span>in Kanpur</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
