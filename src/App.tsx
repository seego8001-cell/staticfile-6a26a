/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Language } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsSection } from './components/StatsSection';
import { CourseCatalog } from './components/CourseCatalog';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ScheduleSection } from './components/ScheduleSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { RegistrationForm } from './components/RegistrationForm';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MessageSquare, PhoneCall, X, Check, ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from './data/academyData';

export default function App() {
  const [language, setLanguage] = useState<Language>('km');
  const [preSelectedCourseId, setPreSelectedCourseId] = useState<string>('');
  const [preSelectedShiftId, setPreSelectedShiftId] = useState<string>('');
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const [consultationSuccess, setConsultationSuccess] = useState(false);
  const [consultationName, setConsultationName] = useState('');
  const [consultationPhone, setConsultationPhone] = useState('');

  const scrollToEnroll = (courseId?: string, shiftId?: string) => {
    if (courseId) setPreSelectedCourseId(courseId);
    if (shiftId) setPreSelectedShiftId(shiftId);
    const registerSection = document.getElementById('register');
    if (registerSection) {
      registerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCourses = () => {
    const coursesSection = document.getElementById('courses');
    if (coursesSection) {
      coursesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleConsultationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consultationName.trim() || !consultationPhone.trim()) return;
    setConsultationSuccess(true);
    setTimeout(() => {
      setConsultationSuccess(false);
      setConsultationModalOpen(false);
      setConsultationName('');
      setConsultationPhone('');
    }, 2500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased">
      {/* Top Navigation */}
      <Navbar
        language={language}
        onLanguageChange={setLanguage}
        onEnrollClick={() => scrollToEnroll()}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          language={language}
          onExploreCourses={scrollToCourses}
          onConsultationClick={() => setConsultationModalOpen(true)}
        />

        {/* Key Statistics Strip */}
        <StatsSection language={language} />

        {/* Filterable Course Catalog */}
        <CourseCatalog
          language={language}
          onSelectCourseForRegistration={(courseId) => scrollToEnroll(courseId)}
        />

        {/* Why Choose Us Feature Bento */}
        <WhyChooseUs language={language} />

        {/* Schedule & Pricing Table */}
        <ScheduleSection
          language={language}
          onSelectShift={(shiftId) => scrollToEnroll(undefined, shiftId)}
        />

        {/* Student Testimonials & Ratings */}
        <TestimonialsSection language={language} />

        {/* Online Registration Form */}
        <RegistrationForm
          language={language}
          preSelectedCourseId={preSelectedCourseId}
          preSelectedShiftId={preSelectedShiftId}
          onClearPreSelections={() => {
            setPreSelectedCourseId('');
            setPreSelectedShiftId('');
          }}
        />

        {/* Contact, Campus Map & Hotlines */}
        <ContactSection language={language} />
      </main>

      {/* Footer */}
      <Footer
        language={language}
        onSelectCourse={(courseId) => scrollToEnroll(courseId)}
      />

      {/* Free Consultation Modal */}
      {consultationModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div 
            className="bg-white rounded-2xl max-w-md w-full overflow-hidden shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-200 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setConsultationModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-6">
              <div className="w-11 h-11 bg-cyan-100 rounded-xl flex items-center justify-center text-cyan-800 mb-4">
                <MessageSquare className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold font-khmer-heading text-blue-950 mb-1">
                {language === 'km' ? 'ប្រឹក្សាយោបល់ឥតគិតថ្លៃ' : 'Free Career Consultation'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                {language === 'km'
                  ? 'មិនដឹងគួររៀនវគ្គណាដែលស័ក្តិសមនឹងខ្លួនឯង? បន្សល់ទុកព័ត៌មានខាងក្រោម អ្នកជំនាញរបស់យើងនឹងជួយតម្រង់ទិសដោយឥតគិតថ្លៃ។'
                  : 'Unsure which computer course matches your career aspirations? Let our senior counselors guide you.'}
              </p>

              {consultationSuccess ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-center">
                  <Check className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                  <p className="text-xs font-bold text-emerald-800">
                    {language === 'km' ? 'បានទទួលសំណើរបស់អ្នក!' : 'Inquiry Received!'}
                  </p>
                  <p className="text-[11px] text-emerald-700 mt-1">
                    {language === 'km' ? 'យើងនឹងទាក់ទងមកលោកអ្នកឆាប់ៗនេះ។' : 'We will reach out to you shortly.'}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleConsultationSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      {language === 'km' ? 'ឈ្មោះរបស់អ្នក *' : 'Your Name *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={consultationName}
                      onChange={(e) => setConsultationName(e.target.value)}
                      placeholder={language === 'km' ? 'បញ្ចូលឈ្មោះ...' : 'Full name...'}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      {language === 'km' ? 'លេខទូរស័ព្ទ / Telegram *' : 'Phone / Telegram *'}
                    </label>
                    <input
                      type="tel"
                      required
                      value={consultationPhone}
                      onChange={(e) => setConsultationPhone(e.target.value)}
                      placeholder="012 345 678"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-900"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs sm:text-sm font-semibold text-white bg-blue-900 hover:bg-blue-800 rounded-xl shadow-sm transition-colors cursor-pointer"
                  >
                    <span>{language === 'km' ? 'ស្នើសុំការប្រឹក្សា' : 'Request Free Counseling'}</span>
                    <ArrowRight className="w-4 h-4 text-cyan-400" />
                  </button>

                  <div className="pt-2 text-center">
                    <a
                      href={CONTACT_INFO.telegramChannel}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-cyan-700 hover:underline inline-flex items-center gap-1 font-medium"
                    >
                      <span>{language === 'km' ? 'ឬផ្ញើសារផ្ទាល់តាម Telegram' : 'Or chat immediately on Telegram'}</span>
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
