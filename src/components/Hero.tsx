import React from 'react';
import { Language } from '../types';
import { HERO_IMAGE } from '../data/academyData';
import { 
  Laptop, 
  Award, 
  Users, 
  MessageCircle, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';

interface HeroProps {
  language: Language;
  onExploreCourses: () => void;
  onConsultationClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  language,
  onExploreCourses,
  onConsultationClick
}) => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-blue-950 via-slate-900 to-blue-900 text-white pt-12 pb-20 lg:pt-16 lg:pb-24">
      {/* Background ambient lighting effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline and CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Top editorial kicker */}
            <div className="flex items-center gap-2 mb-4 text-cyan-400 font-semibold text-xs sm:text-sm tracking-wide">
              <span className="flex items-center gap-1.5 bg-cyan-950/80 border border-cyan-800/60 rounded-full px-3 py-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>
                  {language === 'km' 
                    ? 'វិទ្យាស្ថានបណ្តុះបណ្តាលកុំព្យូទ័រឈានមុខគេ' 
                    : 'Premier Tech Academy in Phnom Penh'}
                </span>
              </span>
              <span className="text-slate-400 hidden sm:inline">·</span>
              <span className="text-slate-300 hidden sm:inline">
                {language === 'km' ? 'វគ្គថ្មីចូលរៀនរៀងរាល់ខែ' : 'Cohorts Start Monthly'}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-khmer-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight sm:leading-snug tracking-tight text-white mb-6 text-balance">
              {language === 'km' ? (
                <>
                  ពង្រឹងជំនាញកុំព្យូទ័រ និងបច្ចេកវិទ្យា <span className="text-cyan-400">ឆ្ពោះទៅកាន់អនាគតការងារ</span> របស់អ្នក
                </>
              ) : (
                <>
                  Empower Your Computer & Tech Skills for <span className="text-cyan-400">Your Future Career</span>
                </>
              )}
            </h1>

            {/* Sub-description */}
            <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed max-w-2xl font-light">
              {language === 'km'
                ? 'កម្មវិធីសិក្សាផ្អែកលើការអនុវត្តជាក់ស្តែង ១០០% (Hands-on Practice) ដោយផ្ទាល់លើកុំព្យូទ័រទំនើប ១ នាក់ ១ គ្រឿង ណែនាំដោយសាស្ត្រាចារ្យជំនាញដើម្បីត្រៀមខ្លួនសម្រាប់ទីផ្សារការងារក្នុងសម័យឌីជីថល។'
                : 'Accelerate your career with 100% hands-on computer training in modern AC labs. One dedicated workstation per student, led by certified industry mentors in Phnom Penh.'}
            </p>

            {/* Quick Benefits Bullet List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-9 text-xs sm:text-sm text-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{language === 'km' ? 'អនុវត្តកុំព្យូទ័រ 1 នាក់ 1 គ្រឿង' : '1-to-1 High-spec PC Lab'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{language === 'km' ? 'វិញ្ញាបនបត្របញ្ជាក់ការសិក្សា' : 'Recognized Certificate'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{language === 'km' ? 'មានជម្រើសរៀនផ្ទាល់ & អនឡាញ' : 'On-campus & Online options'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{language === 'km' ? 'ជួយណែនាំការងារក្រោយរៀនចប់' : 'Career placement support'}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={onExploreCourses}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 active:bg-cyan-500 rounded-xl shadow-lg shadow-cyan-950/50 transition-all cursor-pointer"
              >
                <span>{language === 'km' ? 'មើលវគ្គសិក្សាទាំងអស់' : 'Explore All Courses'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <button
                type="button"
                onClick={onConsultationClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-slate-800/80 hover:bg-slate-700/80 active:bg-slate-800 border border-slate-700 rounded-xl transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-cyan-400" />
                <span>{language === 'km' ? 'ប្រឹក្សាយោបល់ឥតគិតថ្លៃ' : 'Free Consultation'}</span>
              </button>
            </div>

          </div>

          {/* Right Column: Visual Frame */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-800">
              <img
                src={HERO_IMAGE}
                alt="Students learning computer software in IT Academy Khmer lab in Phnom Penh"
                referrerPolicy="no-referrer"
                className="w-full h-[360px] sm:h-[420px] lg:h-[460px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
              
              {/* Floating Overlay Badge (Bottom) */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md border border-slate-700/80 p-4 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Laptop className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">
                      {language === 'km' ? 'បន្ទប់ពិសោធន៍កុំព្យូទ័រទំនើប' : 'State-of-the-art Computer Lab'}
                    </p>
                    <p className="text-[11px] text-slate-400">
                      {language === 'km' ? 'សង្កាត់ទឹកល្អក់១ ខណ្ឌទួលគោក' : 'Toul Kork Campus, Phnom Penh'}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-amber-400 block tabular-nums">
                    {language === 'km' ? '១ នាក់ ១ គ្រឿង' : '1 Student : 1 PC'}
                  </span>
                  <span className="text-[10px] text-slate-400">Core i7 / 16GB RAM</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
