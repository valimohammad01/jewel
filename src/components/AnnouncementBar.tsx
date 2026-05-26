/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

export default function AnnouncementBar() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const announcements = [
    '✨ Complimentary Premium Gift Box Packaging on All Pre-paid Orders ✨',
    '💧 100% Anti-Tarnish & Sweatproof Jewellery - Designed for Everyday Grace 💧',
    '💫 Custom Crystal Jewellery Curated by Founder Waiza Tahir 💫',
    '🚚 Free Delivery Pan-India on Orders Above ₹1,499 🚚'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [announcements.length]);

  return (
    <div id="announcement-bar" className="w-full bg-brand-pink border-b border-[#ffd1dc] text-[#7c4d52] text-[11px] font-sans uppercase tracking-[0.15em] py-2 px-4 flex items-center justify-center transition-all duration-500 overflow-hidden h-9">
      <div className="flex items-center gap-2 animate-fade-in text-center justify-center">
        <Sparkles size={11} className="text-brand-gold animate-pulse shrink-0" />
        <span className="font-medium text-[10px] md:text-[10.5px] leading-none">
          {announcements[currentIndex]}
        </span>
      </div>
    </div>
  );
}
