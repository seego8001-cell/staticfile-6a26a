import React from 'react';
import { Language, ScheduleShift } from '../types';
import { SCHEDULE_SHIFTS } from '../data/academyData';
import { 
  Calendar, 
  Clock, 
  Users, 
  ArrowRight, 
  Check, 
  AlertCircle 
} from 'lucide-react';

interface ScheduleSectionProps {
  language: Language;
  onSelectShift: (shiftId: string) => void;
}

export const ScheduleSection: React.FC<ScheduleSectionProps> = ({
  language,
  onSelectShift
}) => {
  return (
    <section id="schedule" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-100/70 px-3 py-1 rounded-full mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>{language === 'km' ? 'កាលវិភាគ & វេនសិក្សា' : 'Class Schedules & Cohorts'}</span>
          </div>
          <h2 className="font-khmer-heading text-3xl sm:text-4xl font-bold text-blue-950 mb-4 tracking-tight">
            {language === 'km' ? 'កាលវិភាគសិក្សាបត់បែនតាមពេលវេលារបស់អ្នក' : 'Flexible Study Shifts Designed for You'}
          </h2>
          <p className="text-base text-slate-600">
            {language === 'km'
              ? 'មានជម្រើសវេនសិក្សាចម្រុះសម្រាប់សិស្ស-និស្សិត និងបុគ្គលិកកំពុងបំពេញការងារ។ ថ្នាក់នីមួយៗកំណត់សិស្សត្រឹមតែ ១៥ នាក់ប៉ុណ្ណោះក្នុង ១ បន្ទប់។'
              : 'Choose from morning, afternoon, evening, and weekend cohorts. Maximum 15 students per classroom to ensure intensive individual attention.'}
          </p>
        </div>

        {/* Shift Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {SCHEDULE_SHIFTS.map((shift) => (
            <div
              key={shift.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 flex flex-col justify-between hover:shadow-md transition-all relative overflow-hidden"
            >
              {shift.status === 'few_seats' && (
                <div className="absolute top-0 right-0 bg-amber-500 text-slate-950 text-[10px] font-bold px-3 py-0.5 rounded-bl-lg flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>
                    {language === 'km' 
                      ? `នៅសល់ ${shift.availableSeats} កៅអី!` 
                      : `Only ${shift.availableSeats} seats left!`}
                  </span>
                </div>
              )}

              <div>
                {/* Shift Title */}
                <h3 className="text-lg font-bold text-blue-950 font-khmer-heading mb-3 pt-2">
                  {language === 'km' ? shift.shiftKm : shift.shiftEn}
                </h3>

                {/* Timing */}
                <div className="space-y-2 mb-6 text-xs sm:text-sm text-slate-600">
                  <div className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                    <span className="font-medium text-slate-800">
                      {language === 'km' ? shift.timeKm : shift.timeEn}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>{language === 'km' ? shift.daysKm : shift.daysEn}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>
                      {language === 'km'
                        ? `កាលបរិច្ឆេទបើកថ្នាក់៖ ${shift.startDate}`
                        : `Cohort Start: ${shift.startDate}`}
                    </span>
                  </div>
                </div>

                {/* Seat Capacity Bar */}
                <div className="mb-6">
                  <div className="flex justify-between text-xs text-slate-500 mb-1.5 font-medium">
                    <span>{language === 'km' ? 'កៅអីដែលទំនេរ' : 'Available Seats'}</span>
                    <span className="font-mono tabular-nums text-blue-900 font-bold">
                      {shift.availableSeats} / {shift.totalSeats}
                    </span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all ${
                        shift.status === 'few_seats' ? 'bg-amber-500' : 'bg-cyan-500'
                      }`}
                      style={{
                        width: `${((shift.totalSeats - shift.availableSeats) / shift.totalSeats) * 100}%`
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={() => onSelectShift(shift.id)}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs sm:text-sm font-semibold text-blue-950 bg-slate-100 hover:bg-blue-900 hover:text-white rounded-xl transition-all cursor-pointer"
              >
                <span>{language === 'km' ? 'ជ្រើសរើសវេននេះ' : 'Choose Shift'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Transparent Pricing & Installment Notice */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-base sm:text-lg font-bold text-blue-950 font-khmer-heading">
              {language === 'km' 
                ? 'គោលការណ៍បង់ថ្លៃសិក្សាបត់បែន (Installment Plans Available)' 
                : 'Flexible Payment & Installment Options'}
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
              {language === 'km'
                ? 'សិស្សអាចជ្រើសរើសបង់ផ្តាច់ដើម្បីទទួលបានការបញ្ចុះតម្លៃបន្ថែម ៥% ឬបង់រំលស់ជា ២ ដំណាក់កាលដោយគ្មានការប្រាក់ (0% Interest Installment) តាមរយៈធនាគារ ABA ឬ Bakong KHQR។'
                : 'Enjoy 5% additional discount for full upfront payment or split into 2 interest-free installments via ABA Bank or Bakong KHQR payment.'}
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-slate-50 px-4 py-2.5 rounded-xl border border-slate-200 shrink-0">
            <Check className="w-4 h-4 text-emerald-600" />
            <span>{language === 'km' ? 'ទទួលទូទាត់តាម ABA / Bakong KHQR' : 'ABA & Bakong KHQR Supported'}</span>
          </div>
        </div>

      </div>
    </section>
  );
};
