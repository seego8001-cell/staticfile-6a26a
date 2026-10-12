import React from 'react';
import { Language } from '../types';
import { WHY_CHOOSE_US } from '../data/academyData';
import { 
  Award, 
  Monitor, 
  Briefcase, 
  UserCheck, 
  CheckCircle2, 
  HelpCircle 
} from 'lucide-react';

interface WhyChooseUsProps {
  language: Language;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ language }) => {
  const featureIcons = [
    <UserCheck className="w-6 h-6 text-blue-900" />,
    <Monitor className="w-6 h-6 text-cyan-600" />,
    <Award className="w-6 h-6 text-amber-600" />,
    <Briefcase className="w-6 h-6 text-emerald-600" />
  ];

  return (
    <section id="why-us" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-50 px-3 py-1 rounded-full mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{language === 'km' ? 'គុណតម្លៃស្នូលរបស់យើង' : 'Core Strengths'}</span>
          </div>
          <h2 className="font-khmer-heading text-3xl sm:text-4xl font-bold text-blue-950 mb-4 tracking-tight">
            {language === 'km' ? 'ហេតុអ្វីជ្រើសរើស IT Academy Khmer?' : 'Why Choose IT Academy Khmer?'}
          </h2>
          <p className="text-base text-slate-600">
            {language === 'km'
              ? 'យើងប្តេជ្ញាផ្តល់នូវបទពិសោធន៍សិក្សាប្រកបដោយគុណភាពខ្ពស់បំផុត ដើម្បីធានាថាសិស្សគ្រប់រូបអាចអនុវត្តការងារជាក់ស្តែងបានភ្លាមៗក្រោយបញ្ចប់ការសិក្សា។'
              : 'Our mission is to bridge the digital skills gap with rigorous practical training, industry mentorship, and dedicated career placement support.'}
          </p>
        </div>

        {/* 4 Feature Boxes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={item.id}
              className="bg-slate-50/80 rounded-2xl border border-slate-200/90 p-6 flex flex-col justify-between hover:border-slate-300 hover:bg-slate-50 transition-all"
            >
              <div>
                {/* Header with human editorial numbering and icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-xs">
                    {featureIcons[idx]}
                  </div>
                  <span className="font-mono text-2xl font-bold text-slate-300">
                    {item.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-blue-950 font-khmer-heading mb-3 leading-snug">
                  {language === 'km' ? item.titleKm : item.titleEn}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {language === 'km' ? item.descKm : item.descEn}
                </p>
              </div>

              {/* Quiet Footer Tag (Unboxed text with bullet) */}
              <div className="pt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-semibold text-cyan-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                <span>{language === 'km' ? item.tagKm : item.tagEn}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Trust Banner */}
        <div className="mt-12 bg-gradient-to-r from-blue-950 to-slate-900 rounded-2xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg sm:text-xl font-bold font-khmer-heading text-cyan-300">
              {language === 'km' ? 'គោលការណ៍ធានាចំណេះដឹង (Money & Time Value)' : '100% Satisfaction & Skill Guarantee'}
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              {language === 'km'
                ? 'ប្រសិនបើសិស្សមិនទាន់ចេះច្បាស់ក្នុងអំឡុងពេលសិក្សា អាចចូលរៀនឡើងវិញក្នុងវគ្គបន្ទាប់ដោយឥតគិតថ្លៃ (Free Retake Guarantee)។'
                : 'Free Retake Guarantee: If you need additional practice to master the curriculum, you can repeat the module in the next cohort at no extra cost.'}
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-amber-400 font-bold text-sm">
              {language === 'km' ? 'រៀនចេះ ១០០%' : 'Mastery Guaranteed'}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
