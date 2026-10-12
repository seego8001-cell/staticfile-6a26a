import React, { useState } from 'react';
import { Language } from '../types';
import { Menu, X, Globe, GraduationCap, PhoneCall, ArrowRight } from 'lucide-react';

interface NavbarProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onEnrollClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  onLanguageChange,
  onEnrollClick
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#home', labelKm: 'ទំព័រដើម', labelEn: 'Home' },
    { href: '#courses', labelKm: 'វគ្គសិក្សា', labelEn: 'Courses' },
    { href: '#why-us', labelKm: 'ហេតុអ្វីយើង?', labelEn: 'Why Us' },
    { href: '#schedule', labelKm: 'កាលវិភាគ & តម្លៃ', labelEn: 'Schedule & Pricing' },
    { href: '#testimonials', labelKm: 'មតិសិស្ស', labelEn: 'Testimonials' },
    { href: '#contact', labelKm: 'ទំនាក់ទំនង', labelEn: 'Contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all">
      {/* Top micro announcement bar */}
      <div className="bg-slate-900 text-white text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-amber-400">
              {language === 'km' ? 'បញ្ចុះតម្លៃពិសេស ២៥%' : 'Special 25% Early Bird Discount'}
            </span>
            <span className="hidden sm:inline text-slate-300">
              {language === 'km' 
                ? 'សម្រាប់សិស្សចុះឈ្មោះក្នុងខែនេះ!' 
                : 'for all new students enrolling this month!'}
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-300 text-xs">
            <a 
              href="tel:+85523888999" 
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-cyan-400" />
              <span className="tabular-nums">023 888 999 / 012 345 678</span>
            </a>
            <span className="hidden md:inline text-slate-500">|</span>
            <span className="hidden md:inline text-slate-400">
              {language === 'km' ? 'ភ្នំពេញ (ជិត RUPP)' : 'Phnom Penh (Near RUPP)'}
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a 
            href="#home" 
            className="flex items-center gap-3 text-slate-900 group shrink-0"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
          >
            <div className="w-10 h-10 rounded-xl bg-blue-900 flex items-center justify-center text-cyan-400 shadow-sm group-hover:bg-blue-800 transition-colors">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-khmer-heading text-xl sm:text-2xl font-bold tracking-tight text-blue-950 leading-none">
                IT ACADEMY KHMER
              </span>
              <span className="text-[11px] text-slate-500 font-medium">
                {language === 'km' ? 'វិទ្យាស្ថានបច្ចេកវិទ្យាព័ត៌មានវិទ្យាខ្មែរ' : 'Computer Training Center Cambodia'}
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (Single line) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="hover:text-blue-900 hover:underline underline-offset-4 decoration-2 decoration-cyan-500 transition-all whitespace-nowrap shrink-0"
              >
                {language === 'km' ? link.labelKm : link.labelEn}
              </a>
            ))}
          </nav>

          {/* Zone 3: Language switch & Primary CTA */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Language Switcher */}
            <div className="flex items-center bg-slate-100 rounded-lg p-1 border border-slate-200">
              <button
                type="button"
                onClick={() => onLanguageChange('km')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all whitespace-nowrap ${
                  language === 'km'
                    ? 'bg-white text-blue-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Khmer Language"
              >
                ខ្មែរ
              </button>
              <button
                type="button"
                onClick={() => onLanguageChange('en')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all whitespace-nowrap ${
                  language === 'en'
                    ? 'bg-white text-blue-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="English Language"
              >
                EN
              </button>
            </div>

            {/* Primary Action Button */}
            <button
              type="button"
              onClick={onEnrollClick}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-blue-900 hover:bg-blue-800 active:bg-blue-950 rounded-lg shadow-sm transition-all whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>{language === 'km' ? 'ចុះឈ្មោះរៀនឥឡូវនេះ' : 'Enroll Now'}</span>
              <ArrowRight className="w-4 h-4 text-cyan-400" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-blue-900 hover:bg-slate-100 rounded-lg"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-900"
              >
                {language === 'km' ? link.labelKm : link.labelEn}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-100 mt-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onEnrollClick();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-blue-900 hover:bg-blue-800 rounded-lg shadow-sm"
              >
                <span>{language === 'km' ? 'ចុះឈ្មោះរៀនឥឡូវនេះ' : 'Enroll Now'}</span>
                <ArrowRight className="w-4 h-4 text-cyan-400" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
