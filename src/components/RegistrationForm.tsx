import React, { useState, useEffect } from 'react';
import { Language, RegistrationFormData } from '../types';
import { COURSES, SCHEDULE_SHIFTS } from '../data/academyData';
import { 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  Phone, 
  User, 
  BookOpen, 
  Clock, 
  Check, 
  Copy, 
  ExternalLink,
  Laptop
} from 'lucide-react';

interface RegistrationFormProps {
  language: Language;
  preSelectedCourseId: string;
  preSelectedShiftId: string;
  onClearPreSelections: () => void;
}

export const RegistrationForm: React.FC<RegistrationFormProps> = ({
  language,
  preSelectedCourseId,
  preSelectedShiftId,
  onClearPreSelections
}) => {
  const [formData, setFormData] = useState<RegistrationFormData>({
    fullName: '',
    phoneNumber: '',
    telegramAccount: '',
    courseId: preSelectedCourseId || COURSES[0].id,
    shiftId: preSelectedShiftId || SCHEDULE_SHIFTS[0].id,
    studyMode: 'in-person',
    note: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submittedData, setSubmittedData] = useState<{
    id: string;
    data: RegistrationFormData;
    courseName: string;
    shiftName: string;
    price: number;
  } | null>(null);
  const [copied, setCopied] = useState(false);

  // Sync when pre-selected props change
  useEffect(() => {
    if (preSelectedCourseId) {
      setFormData((prev) => ({ ...prev, courseId: preSelectedCourseId }));
    }
  }, [preSelectedCourseId]);

  useEffect(() => {
    if (preSelectedShiftId) {
      setFormData((prev) => ({ ...prev, shiftId: preSelectedShiftId }));
    }
  }, [preSelectedShiftId]);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = language === 'km' ? 'សូមបញ្ចូលឈ្មោះពេញរបស់អ្នក' : 'Full name is required';
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = language === 'km' ? 'ឈ្មោះយ៉ាងតិច ៣ តួអក្សរ' : 'Name must be at least 3 characters';
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = language === 'km' ? 'សូមបញ្ចូលលេខទូរស័ព្ទ' : 'Phone number is required';
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phoneNumber.trim())) {
      newErrors.phoneNumber = language === 'km' ? 'ទម្រង់លេខទូរស័ព្ទមិនត្រឹមត្រូវ (ឧ. 012 345 678)' : 'Invalid phone number format';
    }

    if (!formData.courseId) {
      newErrors.courseId = language === 'km' ? 'សូមជ្រើសរើសវគ្គសិក្សា' : 'Please select a course';
    }

    if (!formData.shiftId) {
      newErrors.shiftId = language === 'km' ? 'សូមជ្រើសរើសវេនសិក្សា' : 'Please select a study shift';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const selectedCourse = COURSES.find((c) => c.id === formData.courseId);
    const selectedShift = SCHEDULE_SHIFTS.find((s) => s.id === formData.shiftId);

    const registrationId = `ITK-2026-${Math.floor(1000 + Math.random() * 9000)}`;

    setSubmittedData({
      id: registrationId,
      data: { ...formData },
      courseName: language === 'km' ? selectedCourse?.titleKm || '' : selectedCourse?.titleEn || '',
      shiftName: language === 'km' ? selectedShift?.shiftKm || '' : selectedShift?.shiftEn || '',
      price: selectedCourse?.price || 0,
    });
  };

  const handleCopySummary = () => {
    if (!submittedData) return;
    const text = `IT Academy Khmer Registration Ticket #${submittedData.id}
Name: ${submittedData.data.fullName}
Phone: ${submittedData.data.phoneNumber}
Telegram: ${submittedData.data.telegramAccount || 'N/A'}
Course: ${submittedData.courseName}
Shift: ${submittedData.shiftName}
Mode: ${submittedData.data.studyMode === 'in-person' ? 'On-campus (Phnom Penh)' : 'Online (Zoom)'}
Price: $${submittedData.price}`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const selectedCourse = COURSES.find((c) => c.id === formData.courseId);

  return (
    <section id="register" className="py-20 bg-slate-100/70 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-100/70 px-3 py-1 rounded-full mb-3">
            <Send className="w-3.5 h-3.5" />
            <span>{language === 'km' ? 'ចុះឈ្មោះតាមអនឡាញ' : 'Online Enrollment'}</span>
          </div>
          <h2 className="font-khmer-heading text-3xl sm:text-4xl font-bold text-blue-950 mb-3 tracking-tight">
            {language === 'km' ? 'ទម្រង់ចុះឈ្មោះចូលរៀនវគ្គថ្មី' : 'Register for Upcoming Cohort'}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
            {language === 'km'
              ? 'បំពេញព័ត៌មានខាងក្រោមដើម្បីកក់កន្លែងអង្គុយ។ ក្រុមការងារនឹងទាក់ទងបញ្ជាក់ជូនតាម Telegram ឬទូរស័ព្ទក្នុងរយៈពេល ២ ម៉ោង។'
              : 'Submit the registration form below to secure your workstation. Our admissions team will confirm your registration via Telegram or phone within 2 hours.'}
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200/90 p-6 sm:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Grid Row 1: Full Name & Phone Number */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  {language === 'km' ? 'ឈ្មោះពេញ (Full Name) *' : 'Full Name *'}
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (errors.fullName) setErrors({ ...errors, fullName: '' });
                    }}
                    placeholder={language === 'km' ? 'ឧ. សុខ ចាន់ថន' : 'e.g. Sok Chan Thorn'}
                    className={`w-full pl-10 pr-4 py-2.5 bg-slate-50 border rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-900 transition-all ${
                      errors.fullName ? 'border-rose-400 ring-1 ring-rose-300' : 'border-slate-300'
                    }`}
                  />
                </div>
                {errors.fullName && (
                  <p className="text-xs text-rose-500 mt-1.5">{errors.fullName}</p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  {language === 'km' ? 'លេខទូរស័ព្ទ (Phone Number) *' : 'Phone Number *'}
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={(e) => {
                      setFormData({ ...formData, phoneNumber: e.target.value });
                      if (errors.phoneNumber) setErrors({ ...errors, phoneNumber: '' });
                    }}
                    placeholder="012 345 678"
                    className={`w-full pl-10 pr-4 py-2.5 bg-slate-50 border rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-900 transition-all ${
                      errors.phoneNumber ? 'border-rose-400 ring-1 ring-rose-300' : 'border-slate-300'
                    }`}
                  />
                </div>
                {errors.phoneNumber && (
                  <p className="text-xs text-rose-500 mt-1.5">{errors.phoneNumber}</p>
                )}
              </div>
            </div>

            {/* Grid Row 2: Telegram Account & Study Mode */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Telegram Account */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  {language === 'km' ? 'គណនី Telegram (Username / លេខ)' : 'Telegram Account / Username'}
                </label>
                <div className="relative">
                  <MessageSquare className="w-4 h-4 text-cyan-600 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    value={formData.telegramAccount}
                    onChange={(e) => setFormData({ ...formData, telegramAccount: e.target.value })}
                    placeholder="@username ឬលេខទូរស័ព្ទ"
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-900 transition-all"
                  />
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  {language === 'km' ? 'សម្រាប់ទទួលព័ត៌មានចូលថ្នាក់ និងកាលវិភាគ' : 'Used for cohort group chat and schedule updates'}
                </p>
              </div>

              {/* Study Mode (In-Person vs Online) */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  {language === 'km' ? 'ទម្រង់នៃការសិក្សា (Study Mode)' : 'Study Format'}
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, studyMode: 'in-person' })}
                    className={`py-2.5 px-3 text-xs sm:text-sm font-semibold rounded-xl border flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      formData.studyMode === 'in-person'
                        ? 'bg-blue-900 text-white border-blue-900 shadow-xs'
                        : 'bg-slate-50 text-slate-700 border-slate-300 hover:bg-slate-100'
                    }`}
                  >
                    <Laptop className="w-4 h-4" />
                    <span>{language === 'km' ? 'ផ្ទាល់នៅថ្នាក់' : 'On-Campus'}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, studyMode: 'online' })}
                    className={`py-2.5 px-3 text-xs sm:text-sm font-semibold rounded-xl border flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      formData.studyMode === 'online'
                        ? 'bg-blue-900 text-white border-blue-900 shadow-xs'
                        : 'bg-slate-50 text-slate-700 border-slate-300 hover:bg-slate-100'
                    }`}
                  >
                    <span>{language === 'km' ? 'អនឡាញ (Live)' : 'Online Live'}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Grid Row 3: Course Selection Dropdown */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                {language === 'km' ? 'ជ្រើសរើសវគ្គសិក្សា (Preferred Course) *' : 'Preferred Course *'}
              </label>
              <div className="relative">
                <BookOpen className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <select
                  value={formData.courseId}
                  onChange={(e) => setFormData({ ...formData, courseId: e.target.value })}
                  className="w-full pl-10 pr-10 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-900 transition-all appearance-none cursor-pointer"
                >
                  {COURSES.map((course) => (
                    <option key={course.id} value={course.id}>
                      {language === 'km' ? course.titleKm : course.titleEn} (${course.price})
                    </option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 text-xs">
                  ▼
                </div>
              </div>
              {selectedCourse && (
                <div className="mt-2 text-xs text-cyan-700 font-medium flex items-center gap-2">
                  <span>{language === 'km' ? selectedCourse.durationKm : selectedCourse.durationEn}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono tabular-nums font-bold">${selectedCourse.price} USD</span>
                  <span aria-hidden="true">·</span>
                  <span>{language === 'km' ? selectedCourse.levelKm : selectedCourse.levelEn}</span>
                </div>
              )}
            </div>

            {/* Grid Row 4: Shift Selection Dropdown */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                {language === 'km' ? 'ជ្រើសរើសវេនសិក្សា (Study Shift) *' : 'Study Shift *'}
              </label>
              <div className="relative">
                <Clock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <select
                  value={formData.shiftId}
                  onChange={(e) => setFormData({ ...formData, shiftId: e.target.value })}
                  className="w-full pl-10 pr-10 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-900 transition-all appearance-none cursor-pointer"
                >
                  {SCHEDULE_SHIFTS.map((shift) => (
                    <option key={shift.id} value={shift.id}>
                      {language === 'km' ? `${shift.shiftKm} (${shift.timeKm})` : `${shift.shiftEn} (${shift.timeEn})`}
                    </option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 text-xs">
                  ▼
                </div>
              </div>
            </div>

            {/* Note / Questions */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                {language === 'km' ? 'កំណត់សម្គាល់ ឬសំណួរផ្សេងៗ (Optional Note)' : 'Notes or Special Inquiries (Optional)'}
              </label>
              <textarea
                value={formData.note}
                onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                rows={2}
                placeholder={language === 'km' ? 'ឧ. ចង់ដឹងបន្ថែមពីវិធីបង់រំលស់ ឬឧបករណ៍កុំព្យូទ័រ...' : 'Any questions regarding curriculum or installments...'}
                className="w-full p-3 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-900 transition-all"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 text-sm font-semibold text-white bg-blue-900 hover:bg-blue-800 active:bg-blue-950 rounded-xl shadow-md shadow-blue-950/20 transition-all cursor-pointer"
              >
                <Send className="w-4 h-4 text-cyan-400" />
                <span>{language === 'km' ? 'ផ្ញើការចុះឈ្មោះឥឡូវនេះ (Submit Registration)' : 'Submit Registration Now'}</span>
              </button>
              <p className="text-center text-[11px] text-slate-500 mt-2">
                {language === 'km' 
                  ? 'ព័ត៌មានរបស់អ្នកត្រូវបានរក្សាការសម្ងាត់ និងប្រើសម្រាប់តែការចុះឈ្មោះប៉ុណ្ណោះ' 
                  : 'Your information is kept private and used exclusively for academic registration'}
              </p>
            </div>

          </form>
        </div>

      </div>

      {/* Confirmation Success Modal */}
      {submittedData && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="bg-blue-900 text-white p-6 text-center">
              <div className="w-12 h-12 bg-cyan-400/20 border border-cyan-400/30 rounded-full flex items-center justify-center mx-auto mb-3 text-cyan-300">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-khmer-heading mb-1">
                {language === 'km' ? 'ការចុះឈ្មោះបានជោគជ័យ!' : 'Registration Submitted!'}
              </h3>
              <p className="text-xs text-slate-300 font-mono tracking-wider">
                TICKET #{submittedData.id}
              </p>
            </div>

            {/* Content Summary */}
            <div className="p-6 space-y-4">
              <div className="bg-slate-50 rounded-xl border border-slate-200 p-4 space-y-2 text-xs sm:text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-500">{language === 'km' ? 'ឈ្មោះសិស្ស៖' : 'Student Name:'}</span>
                  <span className="font-semibold text-slate-900">{submittedData.data.fullName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">{language === 'km' ? 'លេខទូរស័ព្ទ៖' : 'Phone:'}</span>
                  <span className="font-semibold text-slate-900">{submittedData.data.phoneNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">{language === 'km' ? 'វគ្គសិក្សា៖' : 'Course:'}</span>
                  <span className="font-semibold text-slate-900 text-right">{submittedData.courseName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">{language === 'km' ? 'វេនសិក្សា៖' : 'Shift:'}</span>
                  <span className="font-semibold text-slate-900 text-right">{submittedData.shiftName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">{language === 'km' ? 'ទម្រង់រៀន៖' : 'Study Mode:'}</span>
                  <span className="font-semibold text-slate-900">
                    {submittedData.data.studyMode === 'in-person' ? (language === 'km' ? 'ផ្ទាល់នៅថ្នាក់' : 'On-Campus') : (language === 'km' ? 'អនឡាញ' : 'Online')}
                  </span>
                </div>
                <div className="pt-2 border-t border-slate-200 flex justify-between items-baseline">
                  <span className="text-slate-600 font-semibold">{language === 'km' ? 'តម្លៃសិក្សា៖' : 'Tuition:'}</span>
                  <span className="font-mono text-lg font-bold text-blue-950">${submittedData.price} USD</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5">
                {/* Direct Telegram Chat */}
                <a
                  href={`https://t.me/itacademykhmer?text=${encodeURIComponent(
                    `Hello IT Academy Khmer, I registered for ${submittedData.courseName} (Ticket #${submittedData.id}). Name: ${submittedData.data.fullName}, Phone: ${submittedData.data.phoneNumber}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs sm:text-sm font-semibold text-white bg-cyan-600 hover:bg-cyan-500 rounded-xl transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{language === 'km' ? 'បើកផ្ញើការចុះឈ្មោះទៅ Telegram Admin' : 'Send Ticket to Telegram Admin'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                {/* Copy Button */}
                <button
                  type="button"
                  onClick={handleCopySummary}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-slate-700 hover:bg-slate-100 border border-slate-300 rounded-xl transition-all cursor-pointer"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? (language === 'km' ? 'បានចម្លងរួចរាល់!' : 'Copied to Clipboard!') : (language === 'km' ? 'ចម្លងព័ត៌មានសំបុត្រ (Copy Summary)' : 'Copy Ticket Info')}</span>
                </button>

                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => {
                    setSubmittedData(null);
                    onClearPreSelections();
                    setFormData({
                      fullName: '',
                      phoneNumber: '',
                      telegramAccount: '',
                      courseId: COURSES[0].id,
                      shiftId: SCHEDULE_SHIFTS[0].id,
                      studyMode: 'in-person',
                      note: ''
                    });
                  }}
                  className="w-full py-2.5 text-xs text-slate-500 hover:text-slate-800 transition-colors"
                >
                  {language === 'km' ? 'បិទផ្ទាំងនេះ' : 'Close'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
