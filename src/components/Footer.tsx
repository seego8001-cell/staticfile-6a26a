import React from 'react';
import { Language } from '../types';
import { CONTACT_INFO, COURSES } from '../data/academyData';
import { GraduationCap, Send, Phone, MapPin, Heart } from 'lucide-react';

interface FooterProps {
  language: Language;
  onSelectCourse: (courseId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ language, onSelectCourse }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand & Overview */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-900 flex items-center justify-center text-cyan-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <span className="font-khmer-heading text-lg font-bold tracking-tight text-white block">
                  IT ACADEMY KHMER
                </span>
                <span className="text-[11px] text-slate-400">
                  {language === 'km' ? 'វិទ្យាស្ថានបច្ចេកវិទ្យាព័ត៌មានវិទ្យាខ្មែរ' : 'Computer Training Center Cambodia'}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              {language === 'km'
                ? 'វិទ្យាស្ថានបណ្តុះបណ្តាលបច្ចេកវិទ្យាកុំព្យូទ័រឈានមុខគេនៅរាជធានីភ្នំពេញ ផ្តល់ជូននូវការអប់រំអនុវត្តជាក់ស្តែង ទំនើប និងស្របតាមតម្រូវការទីផ្សារការងារក្នុងសម័យឌីជីថល។'
                : 'Premier computer training center in Phnom Penh dedicated to practical education, modern lab facilities, and empowering the next generation of Cambodian tech professionals.'}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={CONTACT_INFO.telegramChannel}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-cyan-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                title="Telegram Channel"
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href={CONTACT_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors font-bold text-xs"
                title="Facebook Page"
              >
                f
              </a>
            </div>
          </div>

          {/* Quick Courses List */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {language === 'km' ? 'វគ្គសិក្សាជំនាញ' : 'Specialized Programs'}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              {COURSES.map((course) => (
                <li key={course.id}>
                  <button
                    type="button"
                    onClick={() => onSelectCourse(course.id)}
                    className="hover:text-cyan-400 transition-colors text-left"
                  >
                    {language === 'km' ? course.titleKm : course.titleEn}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Campus Location & Hours */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {language === 'km' ? 'ព័ត៌មានទីតាំង' : 'Campus Info'}
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>
                  {language === 'km' 
                    ? 'មហាវិថីសហព័ន្ធរុស្ស៊ី សង្កាត់ទឹកល្អក់១ ខណ្ឌទួលគោក ភ្នំពេញ' 
                    : 'Russian Blvd, Teuk Laak 1, Toul Kork, Phnom Penh'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="font-mono tabular-nums">023 888 999 / 012 345 678</span>
              </div>
              <p className="pt-2 text-slate-500 border-t border-slate-900">
                {language === 'km' ? CONTACT_INFO.openingHoursKm : CONTACT_INFO.openingHoursEn}
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {currentYear} IT Academy Khmer. {language === 'km' ? 'រក្សាសិទ្ធិគ្រប់យ៉ាងដោយវិទ្យាស្ថាន។' : 'All rights reserved.'}
          </p>
          <div className="flex items-center gap-1">
            <span>{language === 'km' ? 'កសាងឡើងសម្រាប់យុវជនកម្ពុជា' : 'Built for the Cambodian tech community'}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
