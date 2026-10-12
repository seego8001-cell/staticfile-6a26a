import React from 'react';
import { Language } from '../types';
import { TESTIMONIALS } from '../data/academyData';
import { Star, MessageSquareQuote, CheckCircle } from 'lucide-react';

interface TestimonialsSectionProps {
  language: Language;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ language }) => {
  return (
    <section id="testimonials" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-700 bg-cyan-100/70 px-3 py-1 rounded-full mb-3">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>{language === 'km' ? 'សំឡេងពីអតីតសិស្ស' : 'Student Success Stories'}</span>
          </div>
          <h2 className="font-khmer-heading text-3xl sm:text-4xl font-bold text-blue-950 mb-4 tracking-tight">
            {language === 'km' ? 'មតិយោបល់ និងភាពជោគជ័យរបស់សិស្ស' : 'Trusted by Thousands of Career Shifters'}
          </h2>
          <p className="text-base text-slate-600">
            {language === 'km'
              ? 'ស្តាប់ការចែករំលែកពិតប្រាកដពីសិស្សដែលបានបញ្ចប់ការសិក្សាពី IT Academy Khmer និងកំពុងបំពេញការងារនៅតាមស្ថាប័នឈានមុខនានាក្នុងប្រទេសកម្ពុជា។'
              : 'Read authentic experiences from graduates who accelerated their careers and secured exciting opportunities across Cambodia.'}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50 rounded-2xl border border-slate-200/90 p-6 flex flex-col justify-between hover:shadow-md transition-all"
            >
              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Testimonial Quote */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                  "{language === 'km' ? item.commentKm : item.commentEn}"
                </p>
              </div>

              {/* Student Identity */}
              <div className="pt-4 border-t border-slate-200/80 flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${item.avatarBg} text-white font-bold flex items-center justify-center text-xs tracking-wider shrink-0`}>
                  {item.initials}
                </div>
                <div className="overflow-hidden">
                  <h4 className="text-xs sm:text-sm font-bold text-blue-950 truncate">
                    {language === 'km' ? item.nameKm : item.nameEn}
                  </h4>
                  <p className="text-[11px] text-cyan-700 font-medium truncate">
                    {language === 'km' ? item.roleKm : item.roleEn}
                  </p>
                  <p className="text-[10px] text-slate-400 truncate">
                    {language === 'km' ? item.courseKm : item.courseEn}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Proof Banner */}
        <div className="mt-12 text-center text-xs text-slate-500 flex items-center justify-center gap-2">
          <CheckCircle className="w-4 h-4 text-emerald-600" />
          <span>
            {language === 'km'
              ? 'មតិយោបល់ទាំងអស់ត្រូវបានផ្ទៀងផ្ទាត់ដោយផ្ទាល់ពីសិស្សដែលបានបញ្ចប់ការសិក្សាពិតប្រាកដ។'
              : 'All reviews are verified from enrolled alumni across our on-campus and online programs.'}
          </span>
        </div>

      </div>
    </section>
  );
};
