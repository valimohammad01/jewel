/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Sparkles, Send, CheckCircle, MessageSquare } from 'lucide-react';
import { BRAND_INFO } from '../../data';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', phone: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.name && formState.phone && formState.message) {
      setSubmitted(true);
      // Reset after brief simulation
      setFormState({ name: '', phone: '', email: '', message: '' });
    }
  };

  const handleWhatsAppConsultation = () => {
    const text = encodeURIComponent(`Hello Waiza! I wanted to check on some Barakah Jewellery pieces and request personal custom designs.`);
    window.open(`https://api.whatsapp.com/send?phone=919336444222&text=${text}`, '_blank');
  };

  return (
    <div id="boutique-contact-page" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 animate-fade-in">
      
      {/* Page header banner */}
      <div className="text-center mb-12 sm:mb-16">
        <span className="text-[10px] font-sans uppercase tracking-[0.3em] text-[#9a8684] block mb-1">
          Barakah Care Support
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#2b2523] tracking-tight font-semibold flex items-center justify-center gap-2">
          Reach Our Design Office <Sparkles size={18} className="text-[#ffbd59] animate-pulse" />
        </h2>
        <p className="text-[#8a7a78] text-xs sm:text-sm font-sans mt-2 max-w-md mx-auto leading-relaxed">
          Need size customisation? Gift boxes? Order status? Founder Waiza Tahir offers personalized styling and consultation on call.
        </p>
        <div className="h-[1px] w-12 bg-[#ffbd59] mx-auto mt-4" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        
        {/* Left Side: Address particulars & direct numbers (Grid dynamic span 5) */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          
          <div className="bg-white border border-[#f5ece2]/80 p-8 rounded-[28px] shadow-[0_4px_25px_rgba(235,221,202,0.1)] flex-1 flex flex-col justify-between">
            
            <div className="space-y-8">
              <span className="text-[10px] uppercase tracking-widest text-[#9a8684] block font-semibold pb-3 border-b border-[#fcfbf9]">
                Concierge Directory
              </span>

              {/* Founder Direct Curation Block */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-[#ffbd59]/15 flex items-center justify-center text-[#ffbd59] shrink-0">
                  <Phone size={16} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#2b2523] uppercase tracking-wide">Owner Line</h4>
                  <p className="text-xs text-[#8a7a78] mt-0.5 font-sans">Waiza Tahir (Head Curation Desk)</p>
                  <a href={`tel:${BRAND_INFO.contact}`} className="text-sm font-serif font-semibold text-[#4a3e3d] block mt-1 hover:text-[#ffbd59] transition-colors">
                    +91 {BRAND_INFO.contact}
                  </a>
                </div>
              </div>

              {/* Email Block */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-[#bfe5ef]/25 flex items-center justify-center text-[#2b4c55] shrink-0">
                  <Mail size={16} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#2b2523] uppercase tracking-wide">Email Desk</h4>
                  <p className="text-xs text-[#8a7a78] mt-0.5 font-sans">VIP customer and styling support</p>
                  <a href={`mailto:${BRAND_INFO.email}`} className="text-sm font-sans text-[#4a3e3d] block mt-1 hover:text-[#ffbd59] transition-colors">
                    {BRAND_INFO.email}
                  </a>
                </div>
              </div>

              {/* Physical Address Block */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-[#bbcd73]/25 flex items-center justify-center text-[#4c552b] shrink-0">
                  <MapPin size={16} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#2b2523] uppercase tracking-wide">Boutique HQ</h4>
                  <p className="text-xs text-[#8a7a78] mt-0.5 font-sans">Curation verification & packaging workshop</p>
                  <span className="text-xs text-[#4a3e3d] block mt-1 font-sans leading-relaxed">
                    Swaroop Nagar / Aryanagar Nearby, Kanpur, UP, Pin Code 208001
                  </span>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp consultative action button */}
            <div className="mt-8 pt-6 border-t border-[#fcfbf9]">
              <button
                id="contact-whatsapp-chat-btn"
                onClick={handleWhatsAppConsultation}
                className="w-full py-4 bg-[#bbcd73] hover:bg-[#a6b85d] text-[#2b2523] font-sans font-bold text-xs uppercase tracking-[0.2em] rounded-full shadow-[0_5px_15px_rgba(187,205,115,0.25)] flex items-center justify-center gap-2 focus:outline-none transition-all duration-300"
              >
                <MessageSquare size={14} /> Send WhatsApp Enquiry
              </button>
              <span className="text-[9px] font-sans text-center uppercase tracking-widest text-[#9a8684] block mt-3">
                Instant Chat • Previews • Safe Payments • Custom Orders
              </span>
            </div>

          </div>

        </div>

        {/* Right Side: Message form submission desk (Grid dynamic span 7) */}
        <div className="lg:col-span-7">
          
          <div className="bg-white border border-[#f5ece2]/80 p-8 rounded-[28px] shadow-[0_4px_25px_rgba(235,221,202,0.1)] h-full">
            {submitted ? (
              <div className="text-center py-16 flex flex-col items-center justify-center h-full animate-scale-in">
                <CheckCircle size={48} className="text-[#bbcd73] mb-4 animate-bounce" />
                <h3 className="font-serif text-2xl font-bold tracking-tight text-[#2b2523]">Message Sent Gracefully</h3>
                <p className="text-xs text-[#8a7a78] max-w-sm mt-3 font-sans leading-relaxed">
                  Thank you for reaching out to Barakah. Your enquiry has been routed directly to Waiza Tahir. We will get back to you within 2 working hours.
                </p>
                
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-[#faf7f2] border border-[#ebdcca] rounded-full text-[10px] uppercase font-sans tracking-wider font-semibold text-[#4a3e3d] mt-8"
                >
                  Submit Another Note
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 flex flex-col justify-between h-full">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#9a8684] block font-semibold pb-3 border-b border-[#fcfbf9] mb-6">
                    Leave a Message
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="flex flex-col">
                      <label className="text-[10px] font-sans uppercase tracking-wider text-[#9a8684] font-semibold mb-1.5">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="Waiza Tahir..."
                        className="p-3.5 bg-[#faf7f2]/50 border border-[#ebdcca] rounded-xl focus:border-[#ffbd59] focus:outline-none text-xs font-sans text-[#2b2523]"
                      />
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col">
                      <label className="text-[10px] font-sans uppercase tracking-wider text-[#9a8684] font-semibold mb-1.5">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        placeholder="+91 9336444222..."
                        className="p-3.5 bg-[#faf7f2]/50 border border-[#ebdcca] rounded-xl focus:border-[#ffbd59] focus:outline-none text-xs font-sans text-[#2b2523]"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex flex-col mt-5">
                    <label className="text-[10px] font-sans uppercase tracking-wider text-[#9a8684] font-semibold mb-1.5">Email (Optional)</label>
                    <input
                      type="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="style@barakah.com..."
                      className="p-3.5 bg-[#faf7f2]/50 border border-[#ebdcca] rounded-xl focus:border-[#ffbd59] focus:outline-none text-xs font-sans text-[#2b2523]"
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col mt-5">
                    <label className="text-[10px] font-sans uppercase tracking-wider text-[#9a8684] font-semibold mb-1.5">Desire / Enquiry Details *</label>
                    <textarea
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Tell us about the Anti-Tarnish clover sets, or custom crystal beaded requirements..."
                      className="p-3.5 bg-[#faf7f2]/50 border border-[#ebdcca] rounded-xl focus:border-[#ffbd59] focus:outline-none text-xs font-sans text-[#2b2523] resize-none"
                    />
                  </div>
                </div>

                <button
                  id="contact-submit-enquiry-btn"
                  type="submit"
                  className="w-full py-4 mt-6 bg-[#2b2523] hover:bg-[#ffbd59] text-white hover:text-[#2b2523] font-sans font-bold text-xs uppercase tracking-[0.25em] rounded-full shadow-lg flex items-center justify-center gap-2 focus:outline-none transition-all duration-300"
                >
                  <Send size={13} /> Sincere Submission
                </button>
              </form>
            )}
          </div>

        </div>

      </div>

    </div>
  );
}
