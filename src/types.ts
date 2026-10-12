export type Language = 'km' | 'en';

export type CourseCategory = 'all' | 'office' | 'design' | 'web' | 'network' | 'video';

export interface Course {
  id: string;
  category: CourseCategory;
  titleKm: string;
  titleEn: string;
  shortDescKm: string;
  shortDescEn: string;
  levelKm: 'កម្រិតដំបូង' | 'កម្រិតមធ្យម' | 'កម្រិតខ្ពស់';
  levelEn: 'Beginner' | 'Intermediate' | 'Advanced';
  durationKm: string;
  durationEn: string;
  totalHours: number;
  price: number;
  originalPrice: number;
  image: string;
  popular?: boolean;
  syllabus: {
    titleKm: string;
    titleEn: string;
    lessons: { km: string; en: string }[];
  }[];
  prerequisitesKm: string;
  prerequisitesEn: string;
  toolsLearned: string[];
}

export interface Testimonial {
  id: string;
  nameKm: string;
  nameEn: string;
  roleKm: string;
  roleEn: string;
  courseKm: string;
  courseEn: string;
  rating: number;
  commentKm: string;
  commentEn: string;
  avatarBg: string;
  initials: string;
}

export interface ScheduleShift {
  id: string;
  shiftKm: string;
  shiftEn: string;
  timeKm: string;
  timeEn: string;
  daysKm: string;
  daysEn: string;
  startDate: string;
  availableSeats: number;
  totalSeats: number;
  status: 'available' | 'few_seats' | 'full';
}

export interface RegistrationFormData {
  fullName: string;
  phoneNumber: string;
  telegramAccount: string;
  courseId: string;
  shiftId: string;
  studyMode: 'in-person' | 'online';
  note: string;
}
