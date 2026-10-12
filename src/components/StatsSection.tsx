import React from 'react';
import { Language } from '../types';
import { KEY_STATS } from '../data/academyData';
import { GraduationCap, BookOpen, Award, Briefcase } from 'lucide-react';

interface StatsSectionProps {
  language: Language;
}

export const StatsSection: React.FC<StatsSectionProps> = ({ language }) => {
  const statIcons = [
    <GraduationCap className="w-5 h-5 text-cyan-500" />,
    <BookOpen className="w-5 h-5 text-blue-500" />,
    <Award className="w-5 h-5 text-amber-500" />,
    <Briefcase className="w-5 h-5 text-emerald-500" />
  ];

  return (
    <div className="relative -mt-8 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-xl border border-slate-200/90 p-6 sm:p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {KEY_STATS.map((stat, index) => (
            <div 
              key={index} 
              className={`flex flex-col items-center text-center ${
                index > 0 ? 'pt-6 sm:pt-0 sm:pl-6' : ''
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-3">
                {statIcons[index]}
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-blue-950 font-mono tracking-tight tabular-nums mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-600 max-w-[160px] leading-snug">
                {language === 'km' ? stat.labelKm : stat.labelEn}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
