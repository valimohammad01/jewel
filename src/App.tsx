/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Sparkles, Heart, ShoppingBag, ArrowRight, Star, X, Search, Check, Info } from 'lucide-react';
import { Product, CartItem } from './types';
import { PRODUCTS, BRAND_INFO } from './data';

import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoryStrip from './components/CategoryStrip';
import EditorialBanner from './components/EditorialBanner';
import Testimonials from './components/Testimonials';
import InstagramGallery from './components/InstagramGallery';
import BrandStory from './components/BrandStory';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

// Pages
import Shop from './components/Pages/Shop';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Cart from './components/Pages/Cart';
import Wishlist from './components/Pages/Wishlist';

// Modals
import ProductDetailsModal from './components/ProductDetailsModal';

export default function App() {
  // Navigation Page State
  const [activeTab, setActiveTab] = useState<string>('home');
  
  // Cart & Wishlist storage states
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [wishlistIds, setWishlistIds] = useState<string[]>([]);
  
  // Details Modal State
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Search State
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Navigation Filter states (for passing selections from Hero -> Shop or Strip -> Shop)
  const [shopCategoryFilter, setShopCategoryFilter] = useState<'anti-tarnish' | 'crystal' | 'all'>('all');
  const [shopSubCategoryFilter, setShopSubCategoryFilter] = useState<string>('');

  // Toast indicator state for luxury micro-notifications
  const [toast, setToast] = useState<{ message: string; visible: boolean }>({ message: '', visible: false });

  // Load cart and wishlist on init
  useEffect(() => {
    const savedCart = localStorage.getItem('barakah_cart');
    const savedWish = localStorage.getItem('barakah_wishlist');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (e) {
        console.error(e);
      }
    }
    if (savedWish) {
      try {
        setWishlistIds(JSON.parse(savedWish));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  // Save cart and wishlist on update
  const saveCart = (newCart: CartItem[]) => {
    setCartItems(newCart);
    localStorage.setItem('barakah_cart', JSON.stringify(newCart));
  };

  const saveWishlist = (newWish: string[]) => {
    setWishlistIds(newWish);
    localStorage.setItem('barakah_wishlist', JSON.stringify(newWish));
  };

  // Showing elegant micro-toasts
  const showToast = (message: string) => {
    setToast({ message, visible: true });
    setTimeout(() => {
      setToast({ message: '', visible: false });
    }, 3000);
  };

  // Cart operations
  const handleAddToCart = (product: Product, quantity = 1, color?: string) => {
    const selectedColor = color || product.colors?.[0]?.name || '';
    const existingIndex = cartItems.findIndex(
      (item) => item.product.id === product.id && item.selectedColor === selectedColor
    );

    let newCart = [...cartItems];
    if (existingIndex > -1) {
      newCart[existingIndex].quantity += quantity;
    } else {
      newCart.push({ product, quantity, selectedColor });
    }
    
    saveCart(newCart);
    showToast(`Added ${quantity}x ${product.title} to your bag! 🌸`);
  };

  const handleUpdateCartQuantity = (productId: string, quantity: number, color?: string) => {
    let newCart = cartItems.map((item) => {
      if (item.product.id === productId && item.selectedColor === color) {
        return { ...item, quantity };
      }
      return item;
    });
    saveCart(newCart);
  };

  const handleRemoveCartItem = (productId: string, color?: string) => {
    let newCart = cartItems.filter(
      (item) => !(item.product.id === productId && item.selectedColor === color)
    );
    saveCart(newCart);
    showToast('Removed item from your bag.');
  };

  // Wishlist operations
  const handleToggleWishlist = (product: Product) => {
    let newWish = [...wishlistIds];
    const index = newWish.indexOf(product.id);
    if (index > -1) {
      newWish.splice(index, 1);
      saveWishlist(newWish);
      showToast('Removed style from Wishlist.');
    } else {
      newWish.push(product.id);
      saveWishlist(newWish);
      showToast(`Saved ${product.title} to desires list! 💖`);
    }
  };

  const handleMoveToWishlistFromCart = (product: Product) => {
    handleRemoveCartItem(product.id);
    if (!wishlistIds.includes(product.id)) {
      handleToggleWishlist(product);
    }
  };

  // Handle direct Category Strip or list selections
  const handleCategorySelection = (cat: 'anti-tarnish' | 'crystal' | 'all', subCat = '') => {
    setShopCategoryFilter(cat);
    setShopSubCategoryFilter(subCat);
    setActiveTab('shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Core filter searches
  const searchResults = PRODUCTS.filter((p) => {
    if (!searchQuery.trim()) return false;
    return p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
           p.description.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div id="barakah-root" className="min-h-screen flex flex-col justify-between bg-[#faf7f2] overflow-x-hidden antialiased selection:bg-[#ffbd59]/30">
      
      {/* 1. Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Premium Sticky Navbar */}
      <Navbar 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
        wishlistCount={wishlistIds.length}
        onOpenSearch={() => setSearchOpen(true)}
        openCart={() => setActiveTab('cart')}
        openWishlist={() => setActiveTab('wishlist')}
      />

      {/* Floating Sparkly Micro Toast Alerts */}
      {toast.visible && (
        <div id="luxury-toast" className="fixed bottom-6 right-6 z-50 bg-[#2b2523] border border-[#ffbd59]/30 text-white font-sans text-xs uppercase tracking-widest px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 animate-slide-up max-w-[90vw]">
          <span className="w-2 h-2 rounded-full bg-[#bbcd73] animate-ping" />
          <span>{toast.message}</span>
        </div>
      )}

      {/* Slide-down Search Overlay */}
      {searchOpen && (
        <div id="luxury-search-overlay" className="fixed inset-0 bg-[#2b2523]/40 backdrop-blur-xs z-50 flex flex-col justify-start">
          <div className="bg-white border-b border-[#f5ece2] py-8 px-4 sm:px-6 lg:px-8 shadow-xl animate-slide-down">
            <div className="max-w-3xl mx-auto">
              
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#9a8684] font-bold">Search Curation Catalog</span>
                <button 
                  onClick={() => { setSearchOpen(false); setSearchQuery(''); }}
                  className="p-1.5 hover:bg-[#faf7f2] rounded-full text-[#4a3e3d] focus:outline-none"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="relative">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9a8684]" />
                <input
                  type="text"
                  autoFocus
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="What are you craving? Search gold clover, crystal kadas, heart pendants..."
                  className="w-full pl-12 pr-4 py-4 bg-[#faf7f2]/70 rounded-full border border-[#f5ece2] focus:border-[#ffbd59] focus:outline-none text-sm font-sans text-[#2b2523] placeholder-[#bcaaa8] transition-colors"
                />
              </div>

              {/* Suggestions shortcuts */}
              <div className="flex items-center gap-2 mt-4 flex-wrap">
                <span className="text-[10px] uppercase font-sans tracking-wide text-[#9a8684]">Quick tags:</span>
                {['Clover', 'Crystal', 'Kada', 'Heart', 'Mother of Pearl'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSearchQuery(tag)}
                    className="px-3 py-1 bg-[#faf7f2] hover:bg-[#ffbd59] hover:text-[#2b2523] text-[#8a7a78] text-[10px] rounded-full font-sans transition-all"
                  >
                    #{tag}
                  </button>
                ))}
              </div>

              {/* Real time Search outputs drawer */}
              {searchQuery.trim() && (
                <div className="mt-6 border-t border-[#fcfbf9] pt-4 max-h-[350px] overflow-y-auto divide-y divide-[#fcfbf9]">
                  {searchResults.length > 0 ? (
                    searchResults.map((p) => (
                      <div 
                        key={p.id} 
                        onClick={() => {
                          setSelectedProduct(p);
                          setSearchOpen(false);
                          setSearchQuery('');
                        }}
                        className="flex items-center gap-4 py-3.5 hover:bg-[#faf7f2]/60 px-2 rounded-xl cursor-pointer transition-colors"
                      >
                        <img src={p.imageUrl} className="w-12 h-12 rounded-lg object-cover" />
                        <div className="text-left font-sans">
                          <h4 className="text-xs font-semibold text-[#2b2523] uppercase tracking-wide">{p.title}</h4>
                          <span className="text-[10px] text-[#8a7a78]">{p.subCategory} • ₹{p.price}</span>
                        </div>
                        <span className="ml-auto text-xs text-[#ebdcca]">→</span>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-6 text-xs text-[#8a7a78] font-sans">
                      No boutique item matching "{searchQuery}". Sincere searches are welcome.
                    </div>
                  )}
                </div>
              )}

            </div>
          </div>
          {/* Transparent click area below to dismiss */}
          <div className="flex-1" onClick={() => { setSearchOpen(false); setSearchQuery(''); }} />
        </div>
      )}


      {/* 3. Main Body Tab Router */}
      <main className="flex-grow">
        
        {/* HOME VIEW */}
        {activeTab === 'home' && (
          <div className="animate-fade-in">
            {/* 3.1 Hero Banner */}
            <Hero 
              onShopClick={() => handleCategorySelection('all')} 
              onOurStoryClick={() => setActiveTab('about')}
            />

            {/* 3.2 Luxury icon Category Strip (SECTION 2 under instructions) */}
            <CategoryStrip onCategorySelect={handleCategorySelection} />

            {/* 3.3 Featured Collections Layout */}
            <section id="featured-collections-section" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <span className="text-[10px] font-sans uppercase tracking-[0.3em] text-[#9a8684] block mb-1">
                  Selected Themes
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#2b2523] tracking-tight">
                  Design Collections
                </h2>
                <p className="font-sans text-xs text-[#8a7a78] mt-2 tracking-wide max-w-sm mx-auto">
                  Choose between our sweatproof, moisture-immune gold layers and sparkling faceted glass beads.
                </p>
                <div className="h-[1px] w-8 bg-[#ffbd59] mx-auto mt-4" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                
                {/* Panel 1: Anti Tarnish */}
                <div className="group relative rounded-[28px] overflow-hidden aspect-[4/3] sm:aspect-[16/10] bg-[#ebdcca] shadow-md hover:shadow-xl transition-all duration-500">
                  <img
                    src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800"
                    alt="Anti tarnish clover necklace on model collarbones"
                    className="w-full h-full object-cover select-none filter contrast-[1.01] transition-transform duration-700 easings group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle color overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-[#2b2523]/80 via-[#2b2523]/25 to-transparent" />
                  
                  {/* Text on absolute card bottom */}
                  <div className="absolute bottom-8 left-8 right-8 text-left text-white font-sans">
                    <span className="text-[9px] uppercase tracking-widest text-[#bfe5ef] font-bold block mb-1">Moisture-Safe Series</span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-tight mb-2">🍀 Anti Tarnish Collection</h3>
                    <p className="text-[11px] text-white/80 leading-relaxed font-light mb-4 max-w-sm">
                      Crafted with high-grade stainless steel cores coated under medical standards with dense 18K gold. Will never turn black or irritate sensitive skin.
                    </p>
                    <button
                      onClick={() => handleCategorySelection('anti-tarnish')}
                      className="px-5 py-2 bg-[#ffbd59] text-[#2b2523] font-bold text-[9px] uppercase tracking-widest rounded-full hover:bg-white transition-colors"
                    >
                      Browse Anti Tarnish
                    </button>
                  </div>
                </div>

                {/* Panel 2: Crystal Collection */}
                <div className="group relative rounded-[28px] overflow-hidden aspect-[4/3] sm:aspect-[16/10] bg-[#ebdcca] shadow-md hover:shadow-xl transition-all duration-500">
                  <img
                    src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80&w=800"
                    alt="Crystal beaded bracelets on display table platter"
                    className="w-full h-full object-cover select-none filter contrast-[1.01] transition-transform duration-700 easings group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle color overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-[#2b2523]/80 via-[#2b2523]/25 to-transparent" />
                  
                  {/* Text on absolute card bottom */}
                  <div className="absolute bottom-8 left-8 right-8 text-left text-white font-sans">
                    <span className="text-[9px] uppercase tracking-widest text-[#ffbd59] font-bold block mb-1">Prismatic Bead Weaves</span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-tight mb-2">🔮 Crystal Collection</h3>
                    <p className="text-[11px] text-white/80 leading-relaxed font-light mb-4 max-w-sm">
                      Meticulously designed with multi-faceted glass crystal rondelles representing starry light scatter. Stretches comfort-fits over satin dress sleeves.
                    </p>
                    <button
                      onClick={() => handleCategorySelection('crystal')}
                      className="px-5 py-2 bg-[#bfe5ef] text-[#2b4c55] font-bold text-[9px] uppercase tracking-widest rounded-full hover:bg-white transition-colors"
                    >
                      Browse Crystal items
                    </button>
                  </div>
                </div>

              </div>
            </section>

            {/* 3.4 Editorial Magazine Banner (SECTION 1 under instructions) */}
            <EditorialBanner onExploreClick={() => handleCategorySelection('anti-tarnish')} />

            {/* 3.5 New Arrivals grid */}
            <section id="home-new-arrivals" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#faf7f2]/20">
              <div className="text-center mb-12 sm:mb-16">
                <span className="text-[10px] font-sans uppercase tracking-[0.3em] text-[#9a8684] block mb-1">Latest Unboxings</span>
                <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#2b2523] tracking-tight">New Arrivals Drop</h2>
                <div className="h-[1px] w-8 bg-[#ffbd59] mx-auto mt-3" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {PRODUCTS.filter(p => p.isNew).slice(0, 4).map((p) => (
                  <div key={p.id} className="h-full">
                    {/* Reusable Product card */}
                    <div className="h-full border border-[#f5ece2]/40 rounded-[20px] overflow-hidden bg-white shadow-xs hover:shadow-md transition-all">
                      <div className="relative aspect-square overflow-hidden cursor-pointer" onClick={() => setSelectedProduct(p)}>
                        <img src={p.imageUrl} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                        <span className="absolute top-3 left-3 bg-[#bfe5ef] text-[#2b4c55] text-[7.5px] font-sans uppercase tracking-widest font-extrabold px-2 py-0.5 rounded-full">New Edit</span>
                      </div>
                      <div className="p-4 flex flex-col justify-between">
                        <div>
                          <span className="text-[9px] font-sans uppercase text-[#8a7a78]">{p.subCategory}</span>
                          <h3 onClick={() => setSelectedProduct(p)} className="font-serif text-sm font-semibold text-[#2b2523] truncate hover:text-[#ffbd59] cursor-pointer mt-0.5">{p.title}</h3>
                          <span className="text-[10px] text-[#bbcd73] font-sans font-medium mt-1 inline-block">✨ {p.specialty.split(',')[0]}</span>
                        </div>
                        <div className="flex items-center justify-between mt-4 border-t border-[#fcfbf9] pt-3">
                          <span className="font-serif font-bold text-sm text-[#2b2523]">₹{p.price}</span>
                          <button
                            onClick={() => handleAddToCart(p)}
                            className="p-2 bg-[#faf7f2] hover:bg-[#ffbd59] text-[#4a3e3d] hover:text-[#2b2523] rounded-lg transition-colors focus:outline-none text-[10px]"
                          >
                            + Bag
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 3.6 Best Sellers Layout */}
            <section id="home-best-sellers" className="bg-[#fdfcfb] border-t border-[#f5ece2] py-16 sm:py-24">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  
                  {/* Side textual showcase summary */}
                  <div className="lg:col-span-4 text-center lg:text-left">
                    <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#bbcd73] font-bold block mb-2" style={{ color: BRAND_INFO.colors.softOlive }}>- Elite Catalog favourites -</span>
                    <h3 className="font-serif text-3xl font-medium tracking-tight text-[#2b2523] leading-snug">The Best Sellers</h3>
                    <p className="text-[#8a7a78] text-xs font-sans leading-relaxed mt-4 mb-6">
                      Bespoke styles and pieces that have received highest five-star ratings. Our signature Van Cleef clover bracelet replicates and crystal kadas head this month's selection.
                    </p>
                    <button
                      onClick={() => handleCategorySelection('all')}
                      className="px-6 py-2.5 bg-[#4a3e3d] hover:bg-[#ffbd59] hover:text-[#2b2523] text-white font-sans text-[10px] uppercase tracking-widest font-bold rounded-full transition-all"
                    >
                      Browse full list →
                    </button>
                  </div>

                  {/* 3 bestseller items display grids */}
                  <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {PRODUCTS.filter(p => p.isBestSeller).slice(0, 3).map((p) => (
                      <div key={p.id} className="bg-white border border-[#f5ece2]/65 p-4 rounded-2xl shadow-xs text-center flex flex-col justify-between h-full hover:shadow-md transition-shadow">
                        <div className="aspect-square rounded-xl overflow-hidden cursor-pointer" onClick={() => setSelectedProduct(p)}>
                          <img src={p.imageUrl} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                        </div>
                        <div className="pt-3 flex-1 flex flex-col justify-between">
                          <div>
                            <span className="text-[8px] font-sans uppercase tracking-widest text-[#9a8684]">{p.subCategory}</span>
                            <h4 onClick={() => setSelectedProduct(p)} className="font-serif font-semibold text-xs text-[#2b2523] truncate hover:text-[#ffbd59] cursor-pointer mt-0.5">{p.title}</h4>
                            <div className="flex items-center justify-center text-[#ffbd59] gap-0.5 mt-1.5">
                              {[...Array(5)].map((_, i) => <Star key={i} size={8} className="fill-[#ffbd59]" />)}
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between mt-4">
                            <span className="font-serif font-bold text-xs text-[#2b2523]">₹{p.price}</span>
                            <button
                              onClick={() => handleAddToCart(p)}
                              className="px-2.5 py-1 text-[9px] bg-[#ffbd59]/25 hover:bg-[#ffbd59] text-[#715d48] hover:text-[#2b2523] rounded-md font-sans font-bold transition-all"
                            >
                              + Add
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </section>

            {/* 3.7 Testimonial sliders */}
            <Testimonials />

            {/* 3.8 Instagram Grid gallery */}
            <InstagramGallery />

            {/* 3.9 Curators brand story */}
            <BrandStory onReadMoreClick={() => setActiveTab('about')} />

            {/* 3.10 Intelligent newsletter subscribe */}
            <Newsletter />
          </div>
        )}


        {/* SHOP ROUTE */}
        {activeTab === 'shop' && (
          <div className="animate-fade-in bg-[#fdfcfb]">
            <Shop
              onAddToCart={handleAddToCart}
              onToggleWishlist={handleToggleWishlist}
              onProductClick={setSelectedProduct}
              wishlistIds={wishlistIds}
              initialCategoryFilter={shopCategoryFilter}
              initialSubCategoryFilter={shopSubCategoryFilter}
            />
          </div>
        )}


        {/* COLLECTIONS ROUTE */}
        {activeTab === 'collections' && (
          <div className="animate-fade-in max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
            <div className="text-center mb-12">
              <span className="text-[10px] font-sans uppercase tracking-[0.3em] text-[#9a8684] block mb-1">Elite divisions</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#2b2523] tracking-tight font-semibold">Our Signature Curation Themes</h2>
              <div className="h-[1px] w-12 bg-[#ffbd59] mx-auto mt-4" />
            </div>

            <div className="space-y-16">
              
              {/* Collection 1 detail panel */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-8 sm:p-12 rounded-[32px] border border-[#f5ece2]/80 shadow-[0_4px_25px_rgba(235,221,202,0.1)]">
                <div className="lg:col-span-5 relative overflow-hidden rounded-[20px] aspect-square bg-[#faf7f2]">
                  <img src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover filter contrast-[1.01]" />
                </div>
                <div className="lg:col-span-7 font-sans text-[#594c4a] text-center lg:text-left">
                  <span className="inline-block bg-[#bfe5ef]/40 border border-[#bfe5ef]/60 rounded-full px-3 py-1 text-[9px] uppercase tracking-widest font-bold text-[#2b4c55] mb-4">🍀 100% Anti Tarnish</span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#2b2523] mb-4">The Anti-Tarnish Stainless Steel Curation</h3>
                  <p className="text-sm leading-relaxed mb-6">
                    Our Anti-Tarnish components utilize an ultra-premium grade of 316L Stainless Steel that handles perfume spraying, humidity, pools, and intense workouts without triggering yellow or black rust. Clad with vacuum-fused real gold layering, we recreate that heavy, expensive VCA look utilizing natural white Mother-of-Pearl insets.
                  </p>
                  <button
                    onClick={() => handleCategorySelection('anti-tarnish')}
                    className="px-8 py-3 bg-[#4a3e3d] hover:bg-[#ffbd59] hover:text-[#2b2523] text-white font-sans uppercase font-semibold text-xs tracking-widest rounded-full shadow-sm transition-all"
                  >
                    Explore Anti Tarnish Items ({PRODUCTS.filter(p => p.category === 'anti-tarnish').length})
                  </button>
                </div>
              </div>

              {/* Collection 2 detail panel */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-8 sm:p-12 rounded-[32px] border border-[#f5ece2]/80 shadow-[0_4px_25px_rgba(235,221,202,0.1)]">
                <div className="lg:col-span-5 lg:order-2 overflow-hidden rounded-[20px] aspect-square bg-[#faf7f2]">
                  <img src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover filter contrast-[1.01]" />
                </div>
                <div className="lg:col-span-7 lg:order-1 font-sans text-[#594c4a] text-center lg:text-left">
                  <span className="inline-block bg-[#ffbd59]/20 border border-[#ffbd59]/40 rounded-full px-3 py-1 text-[9px] uppercase tracking-widest font-bold text-[#715d48] mb-4">🔮 Austrian High-Refraction Crystal</span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#2b2523] mb-4">Handcrafted Prismatic Crystal Series</h3>
                  <p className="text-sm leading-relaxed mb-6">
                    Meticulously designed, handselected and strung together in our Kanpur workshop, our high-refraction glass crystals sparkle and shimmer dramatically. We specialize in elastic Comfort-Stretch Kadas and single strand adjustables that sit so elegantly on silk cloth.
                  </p>
                  <button
                    onClick={() => handleCategorySelection('crystal')}
                    className="px-8 py-3 bg-[#4a3e3d] hover:bg-[#ffbd59] hover:text-[#2b2523] text-white font-sans uppercase font-semibold text-xs tracking-widest rounded-full shadow-sm transition-all"
                  >
                    Explore Crystal Items ({PRODUCTS.filter(p => p.category === 'crystal').length})
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}


        {/* ABOUT ROUTE */}
        {activeTab === 'about' && (
          <div className="animate-fade-in bg-white/40">
            <About onShopClick={() => handleCategorySelection('all')} />
          </div>
        )}


        {/* CONTACT ROUTE */}
        {activeTab === 'contact' && (
          <div className="animate-fade-in bg-[#fdfcfb]">
            <Contact />
          </div>
        )}


        {/* CART ROUTE */}
        {activeTab === 'cart' && (
          <div className="animate-fade-in bg-white/40">
            <Cart
              cartItems={cartItems}
              onUpdateQuantity={handleUpdateCartQuantity}
              onRemoveItem={handleRemoveCartItem}
              onContinueShopping={() => handleCategorySelection('all')}
              onMoveToWishlist={handleMoveToWishlistFromCart}
            />
          </div>
        )}


        {/* WISHLIST ROUTE */}
        {activeTab === 'wishlist' && (
          <div className="animate-fade-in bg-white/40">
            <Wishlist
              wishlistIds={wishlistIds}
              onRemoveFromWishlist={handleToggleWishlist}
              onAddToCart={(p) => {
                handleAddToCart(p);
                handleToggleWishlist(p); // auto remove from wish on add
              }}
              onContinueShopping={() => handleCategorySelection('all')}
              onProductClick={setSelectedProduct}
            />
          </div>
        )}

      </main>


      {/* 4. Elite Boutique Footer */}
      <Footer 
        setActiveTab={setActiveTab} 
        onFilterSelect={(cat) => handleCategorySelection(cat)}
      />

      {/* 5. Central Click Product Details Modal */}
      {selectedProduct && (
        <ProductDetailsModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
          onToggleWishlist={handleToggleWishlist}
          isWishlisted={wishlistIds.includes(selectedProduct.id)}
        />
      )}

    </div>
  );
}
