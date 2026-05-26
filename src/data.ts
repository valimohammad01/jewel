/// <reference types="vite/client" />

import { Product, Testimonial, InstagramPost } from './types';

// Real jewelry product photos uploaded by the user
import wp24054 from './assets/clover_mop.jpeg';
import wp24055_1 from './assets/beaded_colorful.jpeg';
import wp24055_2 from './assets/clover_bracelet.jpeg';
import wp24055 from './assets/beaded_tray.jpeg';
import wp24056_2 from './assets/clover_multi.jpeg';
import wp24056 from './assets/clover_hands.jpeg';
import wp24057_1 from './assets/clover_radial.jpeg';
import wp24057 from './assets/heart_necklace.jpeg';

export const BRAND_INFO = {
  name: 'Barakah',
  founder: 'Waiza Tahir',
  location: 'Kanpur, Uttar Pradesh',
  contact: '9336444222',
  email: 'contact@barakahboutique.com',
  speciality: 'Anti Tarnish and Crystal Jewellery',
  story: 'Founded by Waiza Tahir in Noida/Kanpur, Barakah was born out of a desire to create jewellery that stands the test of time without losing its elegance or luster. Specialising in 100% hypoallergenic, anti-tarnish stainless steel and meticulously selected sparkling crystals, our mission is to deliver luxury feminine pieces with an effortless, everyday Instagram-chic aesthetic. Each piece is curated to capture grace, charm, and the ultimate girlish luxury mood.',
  colors: {
    softBlue: '#bfe5ef',
    luxuryGold: '#ffbd59',
    softOlive: '#bbcd73',
    lightGray: '#f2f2f2',
    creamBg: '#fdf7f8', // soft blush pinkish-cream
    softPink: '#ffe5ec',
    roseAccent: '#ff85a1',
  }
};

export const PRODUCTS: Product[] = [
  {
    id: 'clover-mop-bracelet',
    title: 'Alhambra Clover Mother-of-Pearl Bracelet',
    category: 'anti-tarnish',
    subCategory: 'Bracelet',
    price: 1899,
    originalPrice: 2499,
    imageUrl: wp24054,
    hoverImageUrl: wp24055,
    description: 'Our iconic signature piece. Featuring beautiful four-leaf clover motifs crafted with genuine white mother-of-pearl, bordered by fine 18K gold-plated beaded detailing. Fully anti-tarnish and sweatproof.',
    specialty: '18K Gold Plated, 100% Anti-Tarnish, Sweatproof & Hypoallergenic',
    details: [
      'Materials: Premium 316L Stainless Steel, 18K Gold Plating',
      'Inlays: Natural White Mother-of-Pearl',
      'Length: 17cm + 3cm adjustable extension chain',
      'Waterproof, sweat-resistant, and won\'t trigger skin sensitives'
    ],
    colors: [
      { name: 'Mother of Pearl', hex: '#FAF9F6' },
      { name: 'Onyx Black', hex: '#1C1C1C' },
      { name: 'Carnelian Red', hex: '#9B111E' }
    ],
    isNew: true,
    isBestSeller: true,
    rating: 4.9,
    reviewsCount: 142
  },
  {
    id: 'puffy-heart-necklace',
    title: 'Amour Puffy Heart Delicate Necklace',
    category: 'anti-tarnish',
    subCategory: 'Necklace',
    price: 1499,
    originalPrice: 1999,
    imageUrl: wp24055_1,
    hoverImageUrl: wp24057,
    description: 'A delicate, dainty gold chain featuring a flawless, high-polish puffy heart pendant that glides gracefully. Perfectly captures the romantic, girlish luxury aesthetic. Anti-tarnish for everyday wear.',
    specialty: '18K Gold Plated, Lifetime Anti-Tarnish, Water-Resistant',
    details: [
      'Materials: 316L Stainless Steel with 18K Gold Plating',
      'Pendant size: 12mm x 12mm symmetrical puffy model',
      'Chain type: Fine satellite bead-accent chain',
      'Chain length: 40cm + 5cm extension'
    ],
    isNew: true,
    rating: 4.8,
    reviewsCount: 88
  },
  {
    id: 'crystal-bangle-kada',
    title: 'Aura Beaded Crystal Luxury Kada',
    category: 'crystal',
    subCategory: 'Kada',
    price: 1699,
    originalPrice: 2299,
    imageUrl: wp24055_2,
    hoverImageUrl: wp24056,
    description: 'Beautiful premium elastic and lock-clamp crystal beaded bangles. Made with high-refraction crystals that sparkle dramatically. Styled as seen resting on luxury silk cloth, available in classic tones.',
    specialty: 'Austrian Crystal Beads, Gold Spacer Nodes, High-Refraction',
    details: [
      'Handcrafted using premium light-catching glass crystals',
      'Colors available: Burgundy Ruby, Champagne Gold, and Midnight Obsidian',
      'Highly flexible fit (comfort-stretch design with safety hook)',
      'Presented in a bespoke luxury velvet Barakah jewellery box'
    ],
    colors: [
      { name: 'Champagne Gold', hex: '#ffbd59' },
      { name: 'Burgundy Ruby', hex: '#7a0010' },
      { name: 'Obsidian Black', hex: '#1a1a1a' }
    ],
    isBestSeller: true,
    rating: 5.0,
    reviewsCount: 219
  },
  {
    id: 'empress-clover-gem',
    title: 'Empress Gemstone Clover Elegant Stack',
    category: 'anti-tarnish',
    subCategory: 'Bracelet',
    price: 1999,
    originalPrice: 2699,
    imageUrl: wp24055,
    hoverImageUrl: wp24054,
    description: 'Dazzling clover links showcasing a vibrant sequence of alternating gemstone colors. Choose from rich emerald green and ruby red, framed in beautiful 18K micro bead gold settings. Guaranteed nickel-free.',
    specialty: '18K Gold Vermeil, Anti Tarnish, Selected Premium Insets',
    details: [
      'Gemstone options: Created Emerald, Created Ruby, Diamond Cubic Zirconia',
      'Metal Core: Surgical Stainless Steel, 100% Lead & Nickel Safe',
      'Clasp: Signature vintage-style lobster lock',
      'Waterproof construction: suitable for beach, bath, and daily wear'
    ],
    colors: [
      { name: 'Emerald & Ruby Duo', hex: '#0B6623' },
      { name: 'White MOP & Diamond', hex: '#FFFFFF' }
    ],
    isNew: false,
    isBestSeller: true,
    rating: 4.9,
    reviewsCount: 94
  },
  {
    id: 'stella-crystal-strand',
    title: 'Stella Shimmer Crystal Single-Strand Bracelet',
    category: 'crystal',
    subCategory: 'Bracelet',
    price: 1299,
    originalPrice: 1799,
    imageUrl: wp24056_2,
    hoverImageUrl: wp24055_2,
    description: 'A sweet dainty single-strand crystal bracelet featuring hand-woven crystal ring links with adjustment hooks. Inspired by pastel spring gardens. Available in gorgeous sapphire, amber, and aquamarine hues.',
    specialty: 'Micro-faceted Austrian Crystals, Anti-rust Brass chain base',
    details: [
      'Gem beads: Faceted 4mm glass crystal rondelles',
      'Chain base: Vacuum gold plating, anti-oxidation comfort wire',
      'Fully customizable wrist size with standard 5cm extender loop'
    ],
    colors: [
      { name: 'Sapphire Blue', hex: '#2c3e50' },
      { name: 'Amber Topaz', hex: '#d35400' },
      { name: 'Aquamarine Blue', hex: '#bfe5ef' },
      { name: 'Canary Yellow', hex: '#ffbd59' }
    ],
    isNew: true,
    rating: 4.7,
    reviewsCount: 61
  },
  {
    id: 'radial-gold-clover',
    title: 'Royal Engraved Radial Gold Clover Bracelet',
    category: 'anti-tarnish',
    subCategory: 'Bracelet',
    price: 1799,
    originalPrice: 2299,
    imageUrl: wp24056,
    hoverImageUrl: wp24054,
    description: 'Classic clover shapes with a luxury modification—the gold surface is engraved with fine radial guilloche sunburst lines that catch light from every angle. 100% anti-tarnish and premium build.',
    specialty: 'Guilloche Sunburst Engraving, 18K Gold Vacuum-Plated Steel',
    details: [
      'Precision mechanical engraving for supreme light dispersion',
      'Solid steel base weight: feels authentic, expensive, and gorgeous',
      'Colors: Available in Champagne Gold and Rose Gold options',
      'Hypoallergenic material: completely green-skin-proof'
    ],
    isBestSeller: true,
    rating: 4.9,
    reviewsCount: 165
  },
  {
    id: 'iris-beaded-choker',
    title: 'Iris Delicate Beaded Luxury Necklace',
    category: 'crystal',
    subCategory: 'Necklace',
    price: 1549,
    originalPrice: 1999,
    imageUrl: wp24057_1,
    hoverImageUrl: wp24055_1,
    description: 'A beautiful alignment of tiny micro crystal beads with regular premium gold pearl inserts. Sits beautifully on the collarbone for a luxury boutique aesthetic that pairs with matching linen shirts.',
    specialty: 'Delicate Faceted Beads, Solid Brass 14K Gold Infused Clasp',
    details: [
      'Bead dimensions: 3.2mm round precision-cut crystals',
      'Layout alternates with seamless gold vermeil round beads',
      'Sleek modern minimal styling, perfect for layering with longer gold chains',
      'Choose from: Smoky Peach, Obsidian Black, Amber Gold, or Aquamarine Mint'
    ],
    colors: [
      { name: 'Smoky Peach', hex: '#e5b09c' },
      { name: 'Obsidian Black', hex: '#1C1C1C' },
      { name: 'Amber Gold', hex: '#ffbd59' }
    ],
    isNew: false,
    rating: 4.8,
    reviewsCount: 74
  },
  {
    id: 'clover-trio-set',
    title: 'La Rose Clover Trilogy Stack Collection',
    category: 'anti-tarnish',
    subCategory: 'Accessories',
    price: 3499,
    originalPrice: 4499,
    imageUrl: wp24057,
    hoverImageUrl: wp24055,
    description: 'An ultimate bundle of three of our bestseller clover bracelets: one Mother-of-Pearl, one Engraved Sunburst Gold, and one Gemstone Red Clover. Perfectly packaged for a luxury personal gift.',
    specialty: 'Complete Curated Set, Triple Value Pack, anti-tarnish assurance',
    details: [
      'Contains 3 individual bracelets to stack or wear separately',
      'Includes premium microfiber storage cloths and genuine leatherette travel pouch',
      'Unmatched value for absolute premium quality anti-tarnish stainless steel'
    ],
    isBestSeller: true,
    rating: 5.0,
    reviewsCount: 38
  },
  {
    id: 'crystal-royal-ring',
    title: 'Flora Faceted Garden Crystal Ring',
    category: 'crystal',
    subCategory: 'Rings',
    price: 999,
    originalPrice: 1499,
    imageUrl: wp24055_2,
    hoverImageUrl: wp24056_2,
    description: 'Delicately placed pave micro-crystals forming a gorgeous floral crown. Created to shimmer beautifully under candlelight or sunset filters. Features a comfort-adjust premium size slider.',
    specialty: 'Comfort adjustable fit, micro-prong crystal settings',
    details: [
      'Fits Sizes 5 through 9 (adjustable slide lock)',
      'Plating: premium vacuum palladium white silver or 18k yellow gold layer',
      'Crystals: fine glass zirconia with 57 facets'
    ],
    isNew: true,
    rating: 4.6,
    reviewsCount: 49
  },
  {
    id: 'dainty-clover-earrings',
    title: 'Aurelia Clover Anti-Tarnish Drop Earrings',
    category: 'anti-tarnish',
    subCategory: 'Earrings',
    price: 1399,
    originalPrice: 1899,
    imageUrl: wp24056,
    hoverImageUrl: wp24054,
    description: 'Elevate your ear stack. Extremely lightweight dangling clover earrings with rich white Mother-of-Pearl inserts. Specially designed comfort posts that do not pull or stress sensitive lobes.',
    specialty: 'Ultra-lightweight post, 100% tarnish-free stainless steel',
    details: [
      'Overall drop length: 22mm',
      'Weight: only 1.8 grams per earring (featherlight comfort)',
      'Hypoallergenic ear pins made of high grade surgical steel'
    ],
    isNew: false,
    rating: 4.9,
    reviewsCount: 57
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Anjali Sharma',
    location: 'Swaroop Nagar, Kanpur',
    rating: 5,
    text: 'I was honestly skeptical about the "anti-tarnish" claim because other brands rust so fast. But I\'ve worn Barakah\'s Alhambra Clover bracelet for 3 months now, through daily coffee prep, hand-washing, and humidity, and the gold shine is completely flawless! Truly luxury in Kanpur.',
    date: '2026-04-12'
  },
  {
    id: 't2',
    name: 'Shreya Kapoor',
    location: 'Civil Lines, Noida',
    rating: 5,
    text: 'The Aura crystal kadas are breathtaking! They rest so beautifully on silk sleeves and catch the light beautifully under Noida sunsets. Waiza Tahir was incredibly helpful, sending me close-up preview videos on WhatsApp before shipping. Delivery was so fast!',
    date: '2026-05-18'
  },
  {
    id: 't3',
    name: 'Dr. Mehak Gupta',
    location: 'Aryanagar, Kanpur',
    rating: 5,
    text: 'Barakah\'s jewellery fits my aesthetic perfectly. It is feminine, incredibly classy and not at all loudly flashy. I adore my radial engraved clover and puffy heart necklace. Ideal for hospital shifts because they don\'t irritate my skin and look so elegant.',
    date: '2026-05-24'
  }
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'ig1',
    imageUrl: wp24054,
    likes: 421,
    comments: 32
  },
  {
    id: 'ig2',
    imageUrl: wp24055_1,
    likes: 852,
    comments: 54
  },
  {
    id: 'ig3',
    imageUrl: wp24055_2,
    likes: 613,
    comments: 29
  },
  {
    id: 'ig4',
    imageUrl: wp24055,
    likes: 934,
    comments: 72
  },
  {
    id: 'ig5',
    imageUrl: wp24056_2,
    likes: 498,
    comments: 18
  },
  {
    id: 'ig6',
    imageUrl: wp24056,
    likes: 711,
    comments: 44
  }
];
