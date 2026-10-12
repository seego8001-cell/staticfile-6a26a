import React, { useState } from 'react';
import { Language } from '../types';
import { CONTACT_INFO } from '../data/academyData';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Send, 
  Clock, 
  ExternalLink, 
  Check, 
  Navigation,
  MessageSquare
} from 'lucide-react';

interface ContactSectionProps {
  language: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ language }) => {
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryMsg, setInquiryMsg] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName.trim() || !inquiryPhone.trim()) return;
    setSentSuccess(true);
    setTimeout(() => {
      setInquiryName('');
      setInquiryPhone('');
      setInquiryMsg('');
      setSentSuccess(false);
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-700 bg-cyan-100/70 px-3 py-1 rounded-full mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>{language === 'km' ? 'ទីតាំង & ទំនាក់ទំនង' : 'Contact & Campus Location'}</span>
          </div>
          <h2 className="font-khmer-heading text-3xl sm:text-4xl font-bold text-blue-950 mb-4 tracking-tight">
            {language === 'km' ? 'មកទស្សនាទីតាំងផ្ទាល់ ឬទំនាក់ទំនងយើង' : 'Visit Our Campus or Get in Touch'}
          </h2>
          <p className="text-base text-slate-600">
            {language === 'km'
              ? 'លោកអ្នកអាចអញ្ជើញមកទស្សនាបន្ទប់កុំព្យូទ័រ សាកល្បងម៉ាស៊ីន និងទទួលការប្រឹក្សាអំពីវគ្គសិក្សាដោយឥតគិតថ្លៃរៀងរាល់ថ្ងៃ។'
              : 'You are welcome to tour our computer labs, test our high-spec workstations, and receive personalized curriculum counseling.'}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Contact Cards & Info */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Campus Address Card */}
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-900 text-cyan-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-blue-950 mb-1">
                    {language === 'km' ? 'អាសយដ្ឋានវិទ្យាស្ថាន (Campus Address)' : 'Campus Address'}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                    {language === 'km' ? CONTACT_INFO.addressKm : CONTACT_INFO.addressEn}
                  </p>
                  <a
                    href="https://maps.google.com/?q=Royal+University+of+Phnom+Penh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-900 hover:text-cyan-600 transition-colors"
                  >
                    <span>{language === 'km' ? 'មើលលើ Google Maps' : 'Open in Google Maps'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Phone Lines */}
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-600 text-white flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-blue-950 mb-1">
                    {language === 'km' ? 'លេខទូរស័ព្ទទាក់ទង (Phone Hotlines)' : 'Phone Hotlines'}
                  </h4>
                  <div className="space-y-1 mb-2">
                    {CONTACT_INFO.phones.map((phone, i) => (
                      <a
                        key={i}
                        href={`tel:${phone.replace(/\s+/g, '')}`}
                        className="block text-xs sm:text-sm font-mono font-semibold text-slate-800 hover:text-blue-900 transition-colors tabular-nums"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                  <p className="text-[11px] text-slate-500">
                    {language === 'km' ? CONTACT_INFO.openingHoursKm : CONTACT_INFO.openingHoursEn}
                  </p>
                </div>
              </div>
            </div>

            {/* Telegram & Socials */}
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
                  <Send className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-blue-950 mb-1">
                    {language === 'km' ? 'Telegram & បណ្តាញសង្គម' : 'Telegram & Socials'}
                  </h4>
                  <p className="text-xs text-slate-600 mb-4">
                    {language === 'km' 
                      ? 'ឆ្លើយតបសាររហ័សទាន់ចិត្ត ២៤/៧ តាមរយៈគណនីផ្លូវការ' 
                      : 'Fast response 24/7 via official Telegram channel'}
                  </p>
                  
                  <div className="flex flex-wrap gap-2.5">
                    {/* Telegram CTA */}
                    <a
                      href={CONTACT_INFO.telegramChannel}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-white bg-cyan-600 hover:bg-cyan-500 rounded-lg transition-colors shadow-xs"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>{language === 'km' ? 'Chat តាម Telegram' : 'Chat on Telegram'}</span>
                    </a>

                    {/* Facebook CTA */}
                    <a
                      href={CONTACT_INFO.facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-blue-900 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg transition-colors"
                    >
                      <span>Facebook Page</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Google Maps Interactive View & Quick Message Form */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* Embedded Google Map Representation */}
            <div className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 shadow-md relative min-h-[300px] flex flex-col">
              {/* Map styling header */}
              <div className="bg-slate-800/90 text-white px-4 py-2.5 flex items-center justify-between text-xs border-b border-slate-700">
                <div className="flex items-center gap-2">
                  <Navigation className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="font-semibold">IT Academy Khmer · Toul Kork Campus</span>
                </div>
                <span className="text-slate-400 text-[11px]">Russian Blvd, Phnom Penh</span>
              </div>

              {/* Map canvas frame */}
              <div className="relative flex-1 bg-slate-950 min-h-[220px] flex items-center justify-center p-6 text-center">
                {/* Visual stylized street grid representation */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />
                
                <div className="relative z-10 max-w-sm">
                  <div className="w-12 h-12 rounded-full bg-blue-600/30 border border-blue-400 flex items-center justify-center mx-auto mb-3 text-cyan-400 animate-pulse">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <p className="text-white font-bold text-sm mb-1">
                    {language === 'km' ? 'ទីតាំងវិទ្យាស្ថាននៅជិត RUPP និង IFL' : 'Campus located right near RUPP & IFL'}
                  </p>
                  <p className="text-xs text-slate-400 mb-4">
                    {language === 'km' 
                      ? 'ងាយស្រួលធ្វើដំណើរ ផ្លូវធំទូលាយ មានចំណតម៉ូតូ និងរថយន្តសុវត្ថិភាព' 
                      : 'Convenient access with spacious parking for motorbikes and cars.'}
                  </p>
                  <a
                    href="https://maps.google.com/?q=Royal+University+of+Phnom+Penh+Russian+Confederation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold rounded-lg text-xs transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>{language === 'km' ? 'បើកផែនទី Google Maps ផ្ទាល់' : 'Open Live Google Maps'}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Consultation Form Box */}
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
              <h4 className="text-sm font-bold text-blue-950 mb-1">
                {language === 'km' ? 'សាកសួរព័ត៌មានរហ័ស (Quick Consultation Inquiry)' : 'Quick Question / Callback Request'}
              </h4>
              <p className="text-xs text-slate-500 mb-4">
                {language === 'km'
                  ? 'ទុកលេខទូរស័ព្ទរបស់អ្នក ក្រុមការងារនឹងហៅទូរស័ព្ទប្រឹក្សាយោបល់ដោយឥតគិតថ្លៃ។'
                  : 'Leave your phone number and we will call you back with full course information.'}
              </p>

              {sentSuccess ? (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl p-4 flex items-center gap-2.5 text-xs font-semibold">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>
                    {language === 'km' 
                      ? 'សារត្រូវបានផ្ញើ! ក្រុមការងារនឹងទាក់ទងមកលោកអ្នកឆាប់ៗនេះ។' 
                      : 'Thank you! Our advisory team will call you back shortly.'}
                  </span>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      value={inquiryName}
                      onChange={(e) => setInquiryName(e.target.value)}
                      required
                      placeholder={language === 'km' ? 'ឈ្មោះរបស់អ្នក...' : 'Your Name...'}
                      className="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-900"
                    />
                    <input
                      type="tel"
                      value={inquiryPhone}
                      onChange={(e) => setInquiryPhone(e.target.value)}
                      required
                      placeholder={language === 'km' ? 'លេខទូរស័ព្ទ ឧ. 012...' : 'Phone number...'}
                      className="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-900"
                    />
                  </div>
                  <input
                    type="text"
                    value={inquiryMsg}
                    onChange={(e) => setInquiryMsg(e.target.value)}
                    placeholder={language === 'km' ? 'វគ្គដែលចង់សាកសួរ (ឧ. Web Dev, Graphic...)' : 'Course of interest...'}
                    className="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-900"
                  />
                  <button
                    type="submit"
                    className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-blue-900 hover:bg-blue-800 rounded-xl transition-colors cursor-pointer"
                  >
                    {language === 'km' ? 'ផ្ញើសំណើប្រឹក្សាយោបល់' : 'Request Callback'}
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
