/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Product {
  id: string;
  title: string;
  category: 'anti-tarnish' | 'crystal';
  subCategory: 'Necklace' | 'Bracelet' | 'Kada' | 'Earrings' | 'Rings' | 'Accessories';
  price: number;
  originalPrice?: number;
  imageUrl: string;
  hoverImageUrl: string;
  description: string;
  specialty: string; // e.g. "18K Gold Plated, 100% Anti-Tarnish, Hypoallergenic" or "Hand-strung Austrian Crystal"
  details: string[];
  colors?: { name: string; hex: string; previewUrl?: string }[];
  isNew?: boolean;
  isBestSeller?: boolean;
  rating: number;
  reviewsCount: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
}

export interface InstagramPost {
  id: string;
  imageUrl: string;
  likes: number;
  comments: number;
}
