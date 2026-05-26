/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Search, Heart, ShoppingBag, Menu, X, Sparkles, MapPin } from 'lucide-react';
import { BRAND_INFO } from '../data';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  cartCount: number;
  wishlistCount: number;
  onOpenSearch: () => void;
  openCart: () => void;
  openWishlist: () => void;
}

export default function Navbar({
  activeTab,
  setActiveTab,
  cartCount,
  wishlistCount,
  onOpenSearch,
  openCart,
  openWishlist
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Home', id: 'home' },
    { label: 'Shop All', id: 'shop' },
    { label: 'Collections', id: 'collections' },
    { label: 'Our Story', id: 'about' },
    { label: 'Contact', id: 'contact' }
  ];

  const handleTabClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header id="boutique-header" className="sticky top-0 z-40 bg-white/85 backdrop-blur-md border-b border-[#ffd1dc] shadow-[0_2px_15px_rgba(255,133,161,0.06)] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Mobile Menu Button */}
            <button 
              id="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2 text-[#4e3a38] hover:text-brand-rose transition-colors"
              aria-label="Open Menu"
            >
              <Menu size={22} />
            </button>

            {/* Left Menu Items (Desktop Only) */}
            <nav id="desktop-nav-left" className="hidden md:flex items-center space-x-8">
              {menuItems.slice(0, 3).map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleTabClick(item.id)}
                  className={`text-xs font-sans uppercase tracking-[0.25em] relative py-2 transition-all duration-300 group ${
                    activeTab === item.id 
                    ? 'text-[#4e3a38] font-bold' 
                    : 'text-[#8a7a78] hover:text-[#4e3a38]'
                  }`}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-brand-rose transition-transform duration-300 ${
                    activeTab === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`} />
                </button>
              ))}
            </nav>

            {/* Center Brand Logo */}
            <div className="flex flex-col items-center justify-center cursor-pointer select-none group/logo" onClick={() => handleTabClick('home')}>
              <h1 className="font-serif text-3xl md:text-3xl font-bold italic text-[#2e2625] tracking-tight leading-none flex items-center justify-center gap-1 relative">
                Barakah
                <Sparkles size={12} className="text-[#ff85a1] ml-0.5 animate-pulse group-hover/logo:rotate-12 transition-transform duration-300" />
              </h1>
              <span className="text-[8px] font-sans uppercase tracking-[0.35em] text-[#9a8684] mt-1 shrink-0">
                Kanpur Boutique
              </span>
            </div>

            {/* Right Menu Items (Desktop Only) */}
            <div className="flex items-center space-x-6">
              <nav id="desktop-nav-right" className="hidden md:flex items-center space-x-8 mr-4">
                {menuItems.slice(3).map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleTabClick(item.id)}
                    className={`text-xs font-sans uppercase tracking-[0.25em] relative py-2 transition-all duration-300 group ${
                      activeTab === item.id 
                      ? 'text-[#4e3a38] font-bold' 
                      : 'text-[#8a7a78] hover:text-[#4e3a38]'
                    }`}
                  >
                    {item.label}
                    <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-brand-rose transition-transform duration-300 ${
                      activeTab === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`} />
                  </button>
                ))}
              </nav>

              {/* Utility Icons */}
              <div className="flex items-center space-x-2">
                {/* Search */}
                <button 
                  id="nav-search-btn"
                  onClick={onOpenSearch} 
                  className="p-2 text-[#4e3a38] hover:text-brand-rose hover:bg-[#fdf7f8] rounded-full transition-all"
                  aria-label="Search Collection"
                >
                  <Search size={19} />
                </button>

                {/* Wishlist */}
                <button 
                  id="nav-wishlist-btn"
                  onClick={openWishlist}
                  className="p-2 text-[#4e3a38] hover:text-brand-rose hover:bg-[#fdf7f8] rounded-full transition-all relative"
                  aria-label="View Wishlist"
                >
                  <Heart size={19} className={wishlistCount > 0 ? 'fill-brand-rose text-brand-rose' : ''} />
                  {wishlistCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-brand-rose text-white text-[9px] font-sans font-semibold rounded-full w-4 h-4 flex items-center justify-center shadow-sm">
                      {wishlistCount}
                    </span>
                  )}
                </button>

                {/* Cart */}
                <button 
                  id="nav-cart-btn"
                  onClick={openCart}
                  className="p-2 text-[#4e3a38] hover:text-brand-rose hover:bg-[#fdf7f8] rounded-full transition-all relative"
                  aria-label="View Cart"
                >
                  <ShoppingBag size={19} />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-brand-blue text-[#2e4c55] text-[9px] font-sans font-semibold rounded-full w-4 h-4 flex items-center justify-center shadow-sm">
                      {cartCount}
                    </span>
                  )}
                </button>
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Menu Sidebar Slide-out Panel */}
      {mobileMenuOpen && (
        <div id="mobile-menu-overlay" className="fixed inset-0 z-50 flex md:hidden">
          {/* Backdrop Overlay */}
          <div 
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity" 
          />

          {/* Drawer Body */}
          <div className="relative flex flex-col w-4/5 max-w-sm bg-[#faf7f2] h-full shadow-2xl p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-8 border-b border-[#ebdcca] pb-4">
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold italic tracking-tight text-[#2b2523]">Barakah</span>
                <span className="text-[7px] font-sans uppercase tracking-[0.3em] text-[#9a8684] mt-0.5">By Waiza Tahir</span>
              </div>
              <button 
                id="close-mobile-menu-btn"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 hover:bg-[#f2e6d9] rounded-full transition-all text-[#4a3e3d]"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex flex-col space-y-6 flex-1">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleTabClick(item.id)}
                  className={`text-left text-sm font-sans uppercase tracking-[0.25em] py-2 border-b border-[#f2e6d9]/40 ${
                    activeTab === item.id 
                    ? 'text-[#ffbd59] font-semibold pl-2 border-[#ffbd59]/40' 
                    : 'text-[#4a3e3d] hover:text-[#ffbd59] hover:pl-2 transition-all duration-300'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="mt-auto border-t border-[#ebdcca] pt-6 text-center text-xs text-[#8a7a78]">
              <div className="flex items-center justify-center gap-1.5 text-[#ffbd59] mb-2 font-serif italic text-sm">
                <Sparkles size={12} /> Specialising in Anti Tarnish & Crystal 
              </div>
              <p className="mt-1">Kanpur Boutique Store</p>
              <div className="flex items-center justify-center gap-1 mt-2 text-[10px] tracking-wider text-[#9a8684]">
                <MapPin size={10} /> {BRAND_INFO.location}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
