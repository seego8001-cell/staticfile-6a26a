import React from 'react';
import { Course, Language } from '../types';
import { 
  X, 
  Clock, 
  Layers, 
  CheckCircle, 
  BookOpen, 
  ArrowRight, 
  ShieldCheck, 
  Laptop 
} from 'lucide-react';

interface CourseDetailModalProps {
  course: Course | null;
  language: Language;
  onClose: () => void;
  onRegisterNow: (courseId: string) => void;
}

export const CourseDetailModal: React.FC<CourseDetailModalProps> = ({
  course,
  language,
  onClose,
  onRegisterNow
}) => {
  if (!course) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl border border-slate-200 relative my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Course Image and Title */}
        <div className="relative h-48 sm:h-56 bg-slate-900">
          <img
            src={course.image}
            alt={course.titleEn}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
          
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white flex items-center justify-center border border-slate-700 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title overlay */}
          <div className="absolute bottom-4 left-6 right-6">
            <div className="flex items-center gap-2 text-xs text-cyan-300 font-medium mb-1">
              <span>{language === 'km' ? course.levelKm : course.levelEn}</span>
              <span aria-hidden="true">·</span>
              <span>{language === 'km' ? course.durationKm : course.durationEn}</span>
              <span aria-hidden="true">·</span>
              <span className="tabular-nums">{course.totalHours} {language === 'km' ? 'ម៉ោងសរុប' : 'Total Hours'}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white font-khmer-heading leading-tight">
              {language === 'km' ? course.titleKm : course.titleEn}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[65vh] overflow-y-auto space-y-6">
          {/* Short description */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
              {language === 'km' ? 'សេចក្តីសង្ខេបវគ្គសិក្សា' : 'Course Overview'}
            </h3>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {language === 'km' ? course.shortDescKm : course.shortDescEn}
            </p>
          </div>

          {/* Tools & Software Learned */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              {language === 'km' ? 'កម្មវិធីដែលនឹងរៀនចេះ (Software & Tools)' : 'Technologies & Tools Mastered'}
            </h3>
            <div className="flex flex-wrap gap-2">
              {course.toolsLearned.map((tool, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1 bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold rounded-md flex items-center gap-1.5"
                >
                  <Laptop className="w-3.5 h-3.5 text-cyan-600" />
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Detailed Syllabus */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-blue-900" />
              <span>{language === 'km' ? 'មេរៀនលម្អិតក្នុងវគ្គ (Detailed Syllabus)' : 'Curriculum Modules'}</span>
            </h3>
            <div className="space-y-4">
              {course.syllabus.map((mod, index) => (
                <div key={index} className="bg-slate-50 border border-slate-200/80 rounded-xl p-4">
                  <h4 className="text-sm font-bold text-blue-950 mb-2.5">
                    {language === 'km' ? mod.titleKm : mod.titleEn}
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                    {mod.lessons.map((lesson, lIdx) => (
                      <li key={lIdx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{language === 'km' ? lesson.km : lesson.en}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Prerequisites */}
          <div className="bg-blue-50/60 border border-blue-100 rounded-xl p-4 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-blue-900 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm">
              <span className="font-semibold text-blue-950 block">
                {language === 'km' ? 'លក្ខខណ្ឌតម្រូវក្នុងការចូលរៀន៖' : 'Prerequisites:'}
              </span>
              <p className="text-slate-600 mt-0.5">
                {language === 'km' ? course.prerequisitesKm : course.prerequisitesEn}
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-50 border-t border-slate-200 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-extrabold text-blue-950 font-mono tabular-nums">
              ${course.price}
            </span>
            <span className="text-xs line-through text-slate-400 font-mono tabular-nums">
              ${course.originalPrice}
            </span>
            <span className="text-xs text-emerald-600 font-semibold ml-1">
              {language === 'km' ? '(តម្លៃពិសេស)' : '(Promo Price)'}
            </span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-200/70 border border-slate-300 rounded-lg transition-colors cursor-pointer"
            >
              {language === 'km' ? 'បិទ' : 'Close'}
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onRegisterNow(course.id);
              }}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-blue-900 hover:bg-blue-800 rounded-lg shadow-sm transition-all cursor-pointer"
            >
              <span>{language === 'km' ? 'ចុះឈ្មោះវគ្គនេះ' : 'Register This Course'}</span>
              <ArrowRight className="w-4 h-4 text-cyan-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
