/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { SlidersHorizontal, Search, Sparkles, Filter, X } from 'lucide-react';
import { Product } from '../../types';
import { PRODUCTS } from '../../data';
import ProductCard from '../ProductCard';

interface ShopProps {
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
  onProductClick: (product: Product) => void;
  wishlistIds: string[];
  initialCategoryFilter?: 'anti-tarnish' | 'crystal' | 'all';
  initialSubCategoryFilter?: string;
}

export default function Shop({
  onAddToCart,
  onToggleWishlist,
  onProductClick,
  wishlistIds,
  initialCategoryFilter = 'all',
  initialSubCategoryFilter = ''
}: ShopProps) {
  // Filters & States
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<'anti-tarnish' | 'crystal' | 'all'>(initialCategoryFilter);
  const [subCategoryFilter, setSubCategoryFilter] = useState<string>(initialSubCategoryFilter);
  const [sortOption, setSortOption] = useState<'featured' | 'low-high' | 'high-low' | 'bestsellers'>('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const subCategories = ['Necklace', 'Bracelet', 'Kada', 'Earrings', 'Rings', 'Accessories'];

  // Clear filters
  const resetFilters = () => {
    setSearchTerm('');
    setCategoryFilter('all');
    setSubCategoryFilter('');
    setSortOption('featured');
  };

  // Filter and Sort calculation logic
  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = categoryFilter === 'all' ? true : product.category === categoryFilter;
    
    const matchesSubCategory = subCategoryFilter === '' ? true : product.subCategory === subCategoryFilter;

    return matchesSearch && matchesCategory && matchesSubCategory;
  }).sort((a, b) => {
    if (sortOption === 'low-high') return a.price - b.price;
    if (sortOption === 'high-low') return b.price - a.price;
    if (sortOption === 'bestsellers') return (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0);
    return 0; // standard featured selection placement order
  });

  return (
    <div id="boutique-shop-page" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      
      {/* Page Title & Sparkle lines */}
      <div className="text-center mb-10 sm:mb-12">
        <span className="text-[10px] font-sans uppercase tracking-[0.3em] text-[#9a8684] block mb-1">
          Barakah Archives
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#2b2523] tracking-tight flex items-center justify-center gap-2">
          Discover Real Curation <Sparkles size={18} className="text-[#ffbd59] animate-pulse" />
        </h2>
        <p className="text-[#8a7a78] text-xs sm:text-sm font-sans mt-2 max-w-md mx-auto">
          Explore moisture-safe 18K gold layer anti-tarnish items and high-refraction crystal necklaces and bracelets. Sincere luxury.
        </p>
        <div className="h-[1px] w-12 bg-[#ffbd59] mx-auto mt-4" />
      </div>

      {/* Control Utility bar */}
      <div className="bg-white border border-[#f5ece2]/80 rounded-[24px] p-4 mb-8 flex flex-col md:flex-row items-center justify-between gap-4 shadow-[0_2px_15px_rgba(235,221,202,0.1)]">
        
        {/* Left Side: Search Form */}
        <div className="relative w-full md:max-w-xs">
          <Search size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9a8684]" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search clover, chains, crystals..."
            className="w-full pl-10 pr-4 py-2.5 bg-[#faf7f2]/60 rounded-full border border-[#f5ece2] focus:border-[#ffbd59] text-xs font-sans text-[#2b2523] focus:outline-none placeholder-[#bcaaa8] transition-colors"
          />
        </div>

        {/* Center Side: Category quick switch items (Desktop Only) */}
        <div className="hidden lg:flex items-center space-x-2">
          <button
            onClick={() => setCategoryFilter('all')}
            className={`px-4 py-2 rounded-full font-sans text-[10px] uppercase tracking-wider font-semibold transition-all ${
              categoryFilter === 'all'
                ? 'bg-[#4a3e3d] text-white shadow-sm'
                : 'bg-[#faf7f2] text-[#8a7a78] hover:text-[#4a3e3d] border border-[#ebdcca]/20'
            }`}
          >
            Show All
          </button>
          <button
            onClick={() => setCategoryFilter('anti-tarnish')}
            className={`px-4 py-2 rounded-full font-sans text-[10px] uppercase tracking-wider font-semibold transition-all ${
              categoryFilter === 'anti-tarnish'
                ? 'bg-[#4a3e3d] text-white shadow-sm'
                : 'bg-[#faf7f2] text-[#8a7a78] hover:text-[#4a3e3d] border border-[#ebdcca]/20'
            }`}
          >
            🍀 Anti-Tarnish Collection
          </button>
          <button
            onClick={() => setCategoryFilter('crystal')}
            className={`px-4 py-2 rounded-full font-sans text-[10px] uppercase tracking-wider font-semibold transition-all ${
              categoryFilter === 'crystal'
                ? 'bg-[#4a3e3d] text-white shadow-sm'
                : 'bg-[#faf7f2] text-[#8a7a78] hover:text-[#4a3e3d] border border-[#ebdcca]/20'
            }`}
          >
            🔮 Crystal Collection
          </button>
        </div>

        {/* Right Side: Sorting controls and filters toggle */}
        <div className="flex w-full md:w-auto items-center justify-between md:justify-end gap-3 shrink-0">
          
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="lg:hidden flex items-center gap-1.5 px-4 py-2.5 bg-[#faf7f2] hover:bg-[#f2e6d9] rounded-xl text-[#4a3e3d] font-sans text-xs focus:outline-none border border-[#ebdcca]/60"
          >
            <SlidersHorizontal size={14} /> Filters
          </button>

          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value as any)}
            className="px-4 py-2.5 bg-[#faf7f2]/60 rounded-xl border border-[#ebdcca] text-xs font-sans text-[#4a3e3d] focus:outline-none focus:border-[#ffbd59] bg-right cursor-pointer"
          >
            <option value="featured">Featured Order</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
            <option value="bestsellers">Bestseller Priority</option>
          </select>
        </div>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left column sidebar filters (Desktop Only) */}
        <div className="hidden lg:block lg:col-span-3">
          <div className="bg-white border border-[#f5ece2]/80 rounded-[24px] p-6 shadow-[0_2px_15px_rgba(235,221,202,0.1)] sticky top-28">
            
            <div className="flex items-center gap-1.5 text-xs font-sans uppercase tracking-[0.2em] font-bold text-[#2b2523] pb-4 border-b border-[#fcfbf9] mb-5">
              <Filter size={14} className="text-[#ffbd59]" /> Filtering Menu
            </div>

            {/* Subcategories selection list */}
            <div className="mb-6">
              <h4 className="text-[10px] font-sans uppercase tracking-widest text-[#9a8684] mb-3.5 font-bold">
                By Silver / Gold Silhouettes
              </h4>
              <div className="flex flex-col space-y-2.5">
                <button
                  onClick={() => setSubCategoryFilter('')}
                  className={`text-left text-xs font-sans tracking-wide py-1.5 px-3 rounded-lg transition-all ${
                    subCategoryFilter === ''
                      ? 'bg-[#bbcd73]/20 font-semibold text-[#4c552b]'
                      : 'text-[#6e5f5c] hover:bg-[#faf7f2] hover:text-[#2b2523]'
                  }`}
                >
                  All Jewellery Classes
                </button>
                {subCategories.map((sc) => (
                  <button
                    key={sc}
                    onClick={() => setSubCategoryFilter(sc)}
                    className={`text-left text-xs font-sans tracking-wide py-1.5 px-3 rounded-lg transition-all ${
                      subCategoryFilter === sc
                        ? 'bg-[#bbcd73]/20 font-semibold text-[#4c552b]'
                        : 'text-[#6e5f5c] hover:bg-[#faf7f2] hover:text-[#2b2523]'
                    }`}
                  >
                    {sc}s
                  </button>
                ))}
              </div>
            </div>

            {/* Quick materials statement */}
            <div className="bg-[#bfe5ef]/10 border border-[#bfe5ef]/35 p-4 rounded-2xl text-center">
              <span className="text-sm block">☔</span>
              <span className="text-[10px] uppercase font-sans tracking-wider font-bold text-[#2b4c55] block mt-1">
                Zero Rust Curation
              </span>
              <span className="text-[9.5px] font-sans text-[#356e7d] leading-relaxed block mt-1">
                100% Guaranteed Anti-Tarnish. Wear it anywhere without stress.
              </span>
            </div>

            {/* Clear filters Button if filters are active */}
            {(categoryFilter !== 'all' || subCategoryFilter !== '' || searchTerm !== '') && (
              <button
                onClick={resetFilters}
                className="w-full py-2.5 mt-6 border border-[#ebdcca] rounded-full text-[10px] font-sans uppercase tracking-widest text-[#715d48] hover:bg-[#4a3e3d] hover:text-white hover:border-transparent transition-all font-semibold focus:outline-none"
              >
                Clear Filters ×
              </button>
            )}

          </div>
        </div>

        {/* Right column main list grid (Grid column span 9) */}
        <div className="lg:col-span-9">
          
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((p) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  onAddToCart={onAddToCart}
                  onToggleWishlist={onToggleWishlist}
                  onProductClick={onProductClick}
                  isWishlisted={wishlistIds.includes(p.id)}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 bg-white border border-[#f5ece2]/60 rounded-[32px] shadow-xs text-center p-8 max-w-lg mx-auto">
              <span className="text-3xl mb-4">🔮</span>
              <h4 className="font-serif text-lg font-semibold text-[#2b2523] mb-2">No Matching Curations Found</h4>
              <p className="text-xs text-[#8a7a78] font-sans leading-relaxed">
                We couldn't locate any jewellery pieces matching those filters. Try searching for other materials, or tap below to reset.
              </p>
              
              <button
                onClick={resetFilters}
                className="px-6 py-3 bg-[#ffbd59] hover:bg-[#ffad33] text-[#2b2523] text-[10px] font-sans uppercase tracking-widest font-bold rounded-full shadow-md mt-6 focus:outline-none"
              >
                Reset Store Catalog
              </button>
            </div>
          )}

        </div>

      </div>

      {/* Mobile Filters Drawer slide-out */}
      {mobileFiltersOpen && (
        <div id="mobile-filter-drawer" className="fixed inset-0 z-50 flex lg:hidden">
          <div onClick={() => setMobileFiltersOpen(false)} className="fixed inset-0 bg-black/40 backdrop-blur-xs" />
          <div className="relative flex flex-col w-4/5 max-w-sm bg-[#faf7f2] h-full shadow-2xl p-6 overflow-y-auto">
            
            <div className="flex items-center justify-between mb-6 border-b border-[#ebdcca] pb-4">
              <span className="text-xs font-sans uppercase tracking-widest font-bold text-[#2b2523]">Filters Menu</span>
              <button onClick={() => setMobileFiltersOpen(false)} className="p-1 hover:bg-[#f2e6d9] rounded-full text-[#2b2523]">
                <X size={18} />
              </button>
            </div>

            {/* Mobile collection filters */}
            <div className="mb-6">
              <h4 className="text-[10px] font-sans uppercase tracking-widest text-[#9a8684] mb-3 font-semibold">Collections</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'all', label: 'All Catalog' },
                  { id: 'anti-tarnish', label: '🍀 Anti Tarnish' },
                  { id: 'crystal', label: '🔮 Crystal' }
                ].map((col) => (
                  <button
                    key={col.id}
                    onClick={() => {
                      setCategoryFilter(col.id as any);
                      setMobileFiltersOpen(false);
                    }}
                    className={`px-3 py-2 rounded-lg text-[10px] font-sans uppercase tracking-wider font-bold ${
                      categoryFilter === col.id 
                        ? 'bg-[#4a3e3d] text-white' 
                        : 'bg-white border border-[#ebdcca]/50 text-[#8a7a78]'
                    }`}
                  >
                    {col.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile silhouttes filters */}
            <div className="mb-6">
              <h4 className="text-[10px] font-sans uppercase tracking-widest text-[#9a8684] mb-3 font-semibold">Silhouettes</h4>
              <div className="flex flex-col space-y-2">
                <button
                  onClick={() => {
                    setSubCategoryFilter('');
                    setMobileFiltersOpen(false);
                  }}
                  className={`text-left text-xs font-sans tracking-wide py-2 px-3 rounded-lg transition-all ${
                    subCategoryFilter === ''
                      ? 'bg-[#bbcd73]/20 font-semibold text-[#4c552b]'
                      : 'bg-white text-[#6e5f5c] border border-[#f5ece2]/40'
                  }`}
                >
                  All Silhouettes Classes
                </button>
                {subCategories.map((sc) => (
                  <button
                    key={sc}
                    onClick={() => {
                      setSubCategoryFilter(sc);
                      setMobileFiltersOpen(false);
                    }}
                    className={`text-left text-xs font-sans tracking-wide py-2 px-3 rounded-lg transition-all ${
                      subCategoryFilter === sc
                        ? 'bg-[#bbcd73]/20 font-semibold text-[#4c552b]'
                        : 'bg-white text-[#6e5f5c] border border-[#f5ece2]/40'
                    }`}
                  >
                    {sc}s
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                resetFilters();
                setMobileFiltersOpen(false);
              }}
              className="mt-auto w-full py-4 border border-[#ebdcca] rounded-full text-xs font-sans uppercase tracking-widest font-semibold text-[#4a3e3d] text-center"
            >
              Reset All Filters
            </button>

          </div>
        </div>
      )}

    </div>
  );
}
