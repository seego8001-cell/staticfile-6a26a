import React, { useState } from 'react';
import { Course, CourseCategory, Language } from '../types';
import { COURSES } from '../data/academyData';
import { CourseDetailModal } from './CourseDetailModal';
import { 
  Search, 
  Clock, 
  ArrowRight, 
  Info, 
  Sparkles, 
  BookOpen 
} from 'lucide-react';

interface CourseCatalogProps {
  language: Language;
  onSelectCourseForRegistration: (courseId: string) => void;
}

export const CourseCatalog: React.FC<CourseCatalogProps> = ({
  language,
  onSelectCourseForRegistration
}) => {
  const [activeCategory, setActiveCategory] = useState<CourseCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCourseForModal, setSelectedCourseForModal] = useState<Course | null>(null);

  const categories: { key: CourseCategory; labelKm: string; labelEn: string }[] = [
    { key: 'all', labelKm: 'វគ្គសិក្សាទាំងអស់', labelEn: 'All Courses' },
    { key: 'office', labelKm: 'រដ្ឋបាល & ការិយាល័យ', labelEn: 'Basic Office' },
    { key: 'design', labelKm: 'រចនាក្រាហ្វិក', labelEn: 'Graphic Design' },
    { key: 'web', labelKm: 'អភិវឌ្ឍន៍គេហទំព័រ', labelEn: 'Web Development' },
    { key: 'network', labelKm: 'បណ្តាញ & IT Support', labelEn: 'Networking & IT' },
    { key: 'video', labelKm: 'កាត់តវីដេអូ & មេឌា', labelEn: 'Video Editing' },
  ];

  const filteredCourses = COURSES.filter((course) => {
    const matchesCategory = activeCategory === 'all' || course.category === activeCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      query === '' ||
      course.titleKm.toLowerCase().includes(query) ||
      course.titleEn.toLowerCase().includes(query) ||
      course.shortDescKm.toLowerCase().includes(query) ||
      course.shortDescEn.toLowerCase().includes(query) ||
      course.toolsLearned.some((tool) => tool.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="courses" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-700 bg-cyan-100/70 px-3 py-1 rounded-full mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{language === 'km' ? 'បញ្ជីមុខវិជ្ជាបណ្តុះបណ្តាល' : 'Comprehensive Curriculum'}</span>
          </div>
          <h2 className="font-khmer-heading text-3xl sm:text-4xl font-bold text-blue-950 mb-4 tracking-tight">
            {language === 'km' ? 'វគ្គសិក្សាជំនាញបច្ចេកវិទ្យា & កុំព្យូទ័រ' : 'Practical Computer & Tech Skill Courses'}
          </h2>
          <p className="text-base text-slate-600">
            {language === 'km'
              ? 'ជ្រើសរើសវគ្គសិក្សាដែលត្រូវនឹងគោលដៅការងាររបស់អ្នក។ កម្មវិធីសិក្សាត្រូវបានរៀបចំឡើងយ៉ាងសម្រិតសម្រាំង និងបង្រៀនអនុវត្តជាក់ស្តែង ១០០%។'
              : 'Designed to elevate your professional competitiveness. Each program emphasizes 100% hands-on projects, real-world case studies, and industry tool mastery.'}
          </p>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Segmented Category Buttons (Functional filter bar) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-200/80 rounded-xl w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.key}
                type="button"
                onClick={() => setActiveCategory(cat.key)}
                className={`px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  activeCategory === cat.key
                    ? 'bg-blue-900 text-white shadow-xs'
                    : 'text-slate-700 hover:text-blue-950 hover:bg-slate-200'
                }`}
              >
                {language === 'km' ? cat.labelKm : cat.labelEn}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={language === 'km' ? 'ស្វែងរកវគ្គសិក្សា...' : 'Search course or software...'}
              className="w-full pl-9 pr-4 py-2 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Course Cards Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col overflow-hidden group"
              >
                {/* Course Thumbnail Image */}
                <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.titleEn}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                  />
                  {course.popular && (
                    <div className="absolute top-3 right-3 bg-amber-500 text-slate-950 text-[11px] font-bold px-2.5 py-1 rounded-md shadow-xs flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      <span>{language === 'km' ? 'ពេញនិយម' : 'Popular'}</span>
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Clean unboxed metadata with · separator (Zero-Pill Rule) */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 font-medium mb-2.5">
                    <span className="text-cyan-700 font-semibold">
                      {language === 'km' ? course.levelKm : course.levelEn}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{language === 'km' ? course.durationKm : course.durationEn}</span>
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono tabular-nums">{course.totalHours}h</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 font-khmer-heading leading-snug mb-2 group-hover:text-blue-900 transition-colors">
                    {language === 'km' ? course.titleKm : course.titleEn}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 mb-4 leading-relaxed flex-1">
                    {language === 'km' ? course.shortDescKm : course.shortDescEn}
                  </p>

                  {/* Tools Mastered (Small tags) */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {course.toolsLearned.slice(0, 4).map((tool, idx) => (
                      <span 
                        key={idx} 
                        className="text-[11px] font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded"
                      >
                        {tool}
                      </span>
                    ))}
                    {course.toolsLearned.length > 4 && (
                      <span className="text-[11px] text-slate-400 px-1 py-0.5">
                        +{course.toolsLearned.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Price & Action Buttons */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                    <div>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-2xl font-extrabold text-blue-950 font-mono tabular-nums">
                          ${course.price}
                        </span>
                        <span className="text-xs line-through text-slate-400 font-mono tabular-nums">
                          ${course.originalPrice}
                        </span>
                      </div>
                      <span className="text-[10px] text-emerald-600 font-semibold">
                        {language === 'km' ? 'បញ្ចុះតម្លៃពិសេស' : 'Limited Offer'}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setSelectedCourseForModal(course)}
                        className="p-2 text-slate-600 hover:text-blue-900 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                        title={language === 'km' ? 'ព័ត៌មានលម្អិត' : 'View Syllabus Details'}
                      >
                        <Info className="w-5 h-5" />
                      </button>

                      <button
                        type="button"
                        onClick={() => onSelectCourseForRegistration(course.id)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-blue-900 hover:bg-blue-800 rounded-lg transition-colors cursor-pointer"
                      >
                        <span>{language === 'km' ? 'ចុះឈ្មោះ' : 'Enroll'}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8">
            <p className="text-slate-500 text-sm mb-3">
              {language === 'km' 
                ? 'មិនមានវគ្គសិក្សាដែលត្រូវនឹងការស្វែងរករបស់អ្នកឡើយ។' 
                : 'No courses match your search criteria.'}
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="text-xs font-semibold text-blue-900 underline underline-offset-4"
            >
              {language === 'km' ? 'បង្ហាញវគ្គសិក្សាទាំងអស់' : 'View all courses'}
            </button>
          </div>
        )}

      </div>

      {/* Course Detail Modal */}
      <CourseDetailModal
        course={selectedCourseForModal}
        language={language}
        onClose={() => setSelectedCourseForModal(null)}
        onRegisterNow={(courseId) => {
          setSelectedCourseForModal(null);
          onSelectCourseForRegistration(courseId);
        }}
      />
    </section>
  );
};
