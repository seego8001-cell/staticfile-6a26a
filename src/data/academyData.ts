import { Course, Testimonial, ScheduleShift } from '../types';

export const HERO_IMAGE = '/src/assets/images/hero_khmer_students_lab_1791772742546.jpg';

export const COURSES: Course[] = [
  {
    id: 'basic-office',
    category: 'office',
    titleKm: 'កុំព្យូទ័ររដ្ឋបាល និងការិយាល័យ (Microsoft Office & Google Workspace)',
    titleEn: 'Basic Office & Admin Productivity (MS Office & Google Workspace)',
    shortDescKm: 'រៀនចេះស្ទាត់ជំនាញ Microsoft Word, Excel កម្រិតខ្ពស់, PowerPoint និងការគ្រប់គ្រងឯកសារលើ Google Drive សម្រាប់បំពេញការងារការិយាល័យប្រកបដោយប្រសិទ្ធភាព។',
    shortDescEn: 'Master Word document styling, advanced Excel spreadsheets, executive presentations, and Google cloud collaboration for modern workplace productivity.',
    levelKm: 'កម្រិតដំបូង',
    levelEn: 'Beginner',
    durationKm: '២ ខែ',
    durationEn: '2 Months',
    totalHours: 48,
    price: 65,
    originalPrice: 90,
    image: '/src/assets/images/course_office_productivity_1791772755720.jpg',
    popular: true,
    syllabus: [
      {
        titleKm: 'ម៉ូឌុល ១៖ មូលដ្ឋានគ្រឹះកុំព្យូទ័រ & Microsoft Word',
        titleEn: 'Module 1: Computer Basics & Microsoft Word',
        lessons: [
          { km: 'ការប្រើប្រាស់ Windows 11 & Keyboard Shortcuts ស្ទាត់ជំនាញ', en: 'Windows 11 navigation & essential keyboard shortcuts' },
          { km: 'ការរៀបចំលិខិតរដ្ឋបាល របាយការណ៍ និងតារាងបែបស្តង់ដារ', en: 'Administrative letters, reports, tables, and document layouts' },
          { km: 'ការប្រើប្រាស់ Khmer Unicode & វាយអត្ថបទខ្មែររហ័ស', en: 'Khmer Unicode typing speed & formal document formatting' }
        ]
      },
      {
        titleKm: 'ម៉ូឌុល ២៖ Microsoft Excel សម្រាប់ទិន្នន័យ និងគណនេយ្យមូលដ្ឋាន',
        titleEn: 'Module 2: Microsoft Excel for Business & Reporting',
        lessons: [
          { km: 'រូបមន្តគណនាទូទៅ (SUM, AVERAGE, IF, VLOOKUP, XLOOKUP)', en: 'Core business formulas (SUM, AVERAGE, IF, VLOOKUP, XLOOKUP)' },
          { km: 'ការបង្កើត Pivot Table, កំណត់ត្រាហិរញ្ញវត្ថុ និងគំនូសតាង (Charts)', en: 'Pivot Tables, financial records, dynamic charts & dashboards' },
          { km: 'ការរៀបចំប្រព័ន្ធគ្រប់គ្រងទិន្នន័យបុគ្គលិក និងស្តុកទំនិញ', en: 'Inventory management & payroll sheet design' }
        ]
      },
      {
        titleKm: 'ម៉ូឌុល ៣៖ PowerPoint & Google Workspace Cloud',
        titleEn: 'Module 3: Executive Presentations & Google Cloud',
        lessons: [
          { km: 'ការរចនា Slide បទបង្ហាញវិជ្ជាជីវៈជាមួយ PowerPoint', en: 'High-impact pitch deck & corporate presentation design' },
          { km: 'ការប្រើប្រាស់ Google Docs, Sheets, Drive & Gmail for Business', en: 'Google Docs, Sheets, shared Drive & business email protocols' }
        ]
      }
    ],
    prerequisitesKm: 'មិនទាមទារចំណេះដឹងពីមុនទេ (ស័ក្តិសមសម្រាប់សិស្ស-និស្សិត និងបុគ្គលិកទើបចូលធ្វើការ)',
    prerequisitesEn: 'No prior experience required (Ideal for high school students, university freshmen, and administrative staff)',
    toolsLearned: ['MS Word', 'MS Excel', 'PowerPoint', 'Google Workspace', 'Cloud Drive', 'Khmer Unicode']
  },
  {
    id: 'graphic-design',
    category: 'design',
    titleKm: 'រចនាក្រាហ្វិកវិជ្ជាជីវៈ (Photoshop, Illustrator, Figma & Canva)',
    titleEn: 'Professional Graphic Design (Photoshop, Illustrator, Figma & Canva)',
    shortDescKm: 'បណ្តុះបណ្តាលការកាត់តរូបភាព រចនា Logo បដាពាណិជ្ជកម្ម Facebook/TikTok Poster និង UI Mockup ជាមួយកម្មវិធីស្តង់ដារអន្តរជាតិ។',
    shortDescEn: 'Create compelling marketing visuals, brand identity logos, packaging, social media banners, and UI design systems for companies and agencies.',
    levelKm: 'កម្រិតដំបូង',
    levelEn: 'Beginner',
    durationKm: '៣ ខែ',
    durationEn: '3 Months',
    totalHours: 72,
    price: 135,
    originalPrice: 180,
    image: '/src/assets/images/course_graphic_design_1791772769829.jpg',
    popular: true,
    syllabus: [
      {
        titleKm: 'ម៉ូឌុល ១៖ គោលការណ៍រចនា & Adobe Photoshop',
        titleEn: 'Module 1: Design Principles & Adobe Photoshop',
        lessons: [
          { km: 'ទ្រឹស្តីពណ៌ (Color Theory) និង Typographic Composition', en: 'Color theory, contrast rules & typography composition' },
          { km: 'ការកាត់តរូបភាព Retouching, Masking & Color Grading', en: 'Photo retouching, object isolation, masking & color grading' },
          { km: 'ការរចនា Poster ផ្សព្វផ្សាយផលិតផល និង Event Banner', en: 'Commercial product posters and social campaign banners' }
        ]
      },
      {
        titleKm: 'ម៉ូឌុល ២៖ Adobe Illustrator & Brand Identity',
        titleEn: 'Module 2: Vector Art & Brand Identity in Illustrator',
        lessons: [
          { km: 'ការគូរ Vector ដោយ Pen Tool & Shape Builder', en: 'Precision vector drawing with Pen Tool & Shape Builder' },
          { km: 'ការរចនា Logo វិជ្ជាជីវៈ និង Brand Identity Guidelines', en: 'Professional corporate logo design & brand styleguides' },
          { km: 'ការរៀបចំ File សម្រាប់បោះពុម្ព (CMYK, Bleed, Resolution)', en: 'Pre-press printing preparation (CMYK, crop marks, DPI)' }
        ]
      },
      {
        titleKm: 'ម៉ូឌុល ៣៖ Figma UI & Digital Marketing Assets',
        titleEn: 'Module 3: Modern UI with Figma & Social Content',
        lessons: [
          { km: 'ការបង្កើត Layout កម្មវិធីទូរស័ព្ទ និងគេហទំព័រលើ Figma', en: 'Modern mobile app & responsive website layouts in Figma' },
          { km: 'ការរៀបចំ Portfolio ផ្ទាល់ខ្លួនលើ Behance សម្រាប់ដាក់ពាក្យការងារ', en: 'Publishing a professional Behance portfolio to land design jobs' }
        ]
      }
    ],
    prerequisitesKm: 'ចេះប្រើកុំព្យូទ័រជាមូលដ្ឋាន និងមានចំណង់ចំណូលចិត្តលើការច្នៃប្រឌិត',
    prerequisitesEn: 'Basic computer literacy and a passion for creative visuals',
    toolsLearned: ['Adobe Photoshop', 'Adobe Illustrator', 'Figma', 'Canva Pro', 'Behance Portfolio']
  },
  {
    id: 'web-development',
    category: 'web',
    titleKm: 'អភិវឌ្ឍន៍គេហទំព័រពេញលេញ (Frontend & Full-Stack Web Development)',
    titleEn: 'Full-Stack Web Development (HTML, Tailwind CSS, JavaScript, React & Node)',
    shortDescKm: 'រៀនបង្កើតគេហទំព័រ Responsive ទំនើប ពីកម្រិតដំបូងដល់កម្រិតអាជីព ដោយអនុវត្តលើ Real-world Projects ដូចជា E-commerce និង Web Apps។',
    shortDescEn: 'Build modern responsive websites and interactive web applications using HTML5, modern CSS/Tailwind, JavaScript ES6+, React, and RESTful APIs.',
    levelKm: 'កម្រិតមធ្យម',
    levelEn: 'Intermediate',
    durationKm: '៤ ខែ',
    durationEn: '4 Months',
    totalHours: 96,
    price: 195,
    originalPrice: 260,
    image: '/src/assets/images/course_web_development_1791772781802.jpg',
    popular: true,
    syllabus: [
      {
        titleKm: 'ម៉ូឌុល ១៖ HTML5, Modern CSS & Tailwind CSS',
        titleEn: 'Module 1: Semantic HTML5 & Modern Responsive Styling',
        lessons: [
          { km: 'រចនាសម្ព័ន្ធ Semantic Web, SEO & Accessibility (a11y)', en: 'Semantic web markup, search engine optimization & accessibility' },
          { km: 'Flexbox, CSS Grid & Tailwind CSS Utility-First Framework', en: 'Mastering Flexbox, CSS Grid, and responsive Tailwind styling' },
          { km: 'ការបង្កើត Landing Page សម្រាប់ក្រុមហ៊ុនពិតប្រាកដ', en: 'Building a responsive company landing page from scratch' }
        ]
      },
      {
        titleKm: 'ម៉ូឌុល ២៖ JavaScript (ES6+) & DOM Manipulation',
        titleEn: 'Module 2: JavaScript ES6+ & Interactive Web Features',
        lessons: [
          { km: 'អថេរ អនុគមន៍ Array, Object, Promises & Async/Await', en: 'Variables, scope, array methods, async/await and data structures' },
          { km: 'ការចាប់ Event, Dynamic DOM និង Form Validation', en: 'Event handling, reactive DOM updates, and client-side form validation' },
          { km: 'ការទាញទិន្នន័យពី REST APIs តាម Fetch API & Axios', en: 'Consuming 3rd-party REST APIs and handling async states' }
        ]
      },
      {
        titleKm: 'ម៉ូឌុល ៣៖ React.js, Backend Basics & Deployment',
        titleEn: 'Module 3: React.js SPA, Backend Essentials & Cloud Deploy',
        lessons: [
          { km: 'React Components, Hooks (useState, useEffect, custom hooks)', en: 'Modern React components, state hooks, and routing' },
          { km: 'ការតភ្ជាប់ Node.js Express API & Database មូលដ្ឋាន', en: 'Building REST endpoints with Express and database models' },
          { km: 'Git/GitHub Version Control និងការ Deploy លើ Vercel/Cloud', en: 'Git workflow, collaboration, pull requests and cloud deployment' }
        ]
      }
    ],
    prerequisitesKm: 'ចេះប្រើកុំព្យូទ័របានល្អ និងយល់ដឹងភាសាអង់គ្លេសកម្រិតមូលដ្ឋាន',
    prerequisitesEn: 'Good computer fluency and basic reading English proficiency',
    toolsLearned: ['HTML5', 'Tailwind CSS', 'JavaScript', 'React.js', 'Node.js', 'Git / GitHub', 'VS Code']
  },
  {
    id: 'networking-it-support',
    category: 'network',
    titleKm: 'បណ្តាញកុំព្យូទ័រ និងជួសជុល IT Support (Hardware & Cisco Network)',
    titleEn: 'Computer Networking & IT Support Specialist (Hardware, Cisco & Server)',
    shortDescKm: 'បណ្តុះបណ្តាលការដំឡើង ថែទាំ ជួសជុល Hardware/Software, រៀបចំប្រព័ន្ធ Network ការិយាល័យ (MikroTik, Cisco), និងគ្រប់គ្រង Windows Server។',
    shortDescEn: 'Comprehensive hands-on training in desktop/laptop hardware maintenance, office LAN/WLAN setup, MikroTik/Cisco routers, and Windows Server management.',
    levelKm: 'កម្រិតមធ្យម',
    levelEn: 'Intermediate',
    durationKm: '៣ ខែ',
    durationEn: '3 Months',
    totalHours: 72,
    price: 145,
    originalPrice: 195,
    image: '/src/assets/images/course_network_it_1791772794148.jpg',
    popular: false,
    syllabus: [
      {
        titleKm: 'ម៉ូឌុល ១៖ PC Hardware & Troubleshooting',
        titleEn: 'Module 1: PC Architecture, Assembly & Hardware Repair',
        lessons: [
          { km: 'ការផ្គុំគ្រឿងកុំព្យូទ័រ (CPU, RAM, Motherboard, PSU, SSD)', en: 'PC component assembly, diagnostic procedures, hardware upgrades' },
          { km: 'ការដំឡើង OS (Windows 11, Linux), Driver និង Data Backup/Recovery', en: 'Clean OS installations, driver provisioning, cloning & data recovery' },
          { km: 'ការដោះស្រាយបញ្ហា Blue Screen (BSOD), Virus និងកម្តៅកើនឡើង', en: 'Troubleshooting BSODs, malware removal, thermal paste repasting' }
        ]
      },
      {
        titleKm: 'ម៉ូឌុល ២៖ Network Fundamentals & Cisco / MikroTik',
        titleEn: 'Module 2: Network Fundamentals, Routing & Cabling',
        lessons: [
          { km: 'ការកាត់ខ្សែកាប mạng UTP Cat6, Patch Panel & Switch Setup', en: 'UTP Cat6 termination, testing, patch panel & managed switch setup' },
          { km: 'IP Addressing (IPv4 Subnetting, Public/Private IPs, DHCP, DNS)', en: 'IPv4 addressing, CIDR subnetting, DHCP pools & DNS troubleshooting' },
          { km: 'ការ Configure Router MikroTik (Bandwidth Management, Hotspot)', en: 'MikroTik router setup, bandwidth throttling, VLANs & hotspot auth' }
        ]
      },
      {
        titleKm: 'ម៉ូឌុល ៣៖ Windows Server & Office IT Operations',
        titleEn: 'Module 3: Windows Server Administration & Security',
        lessons: [
          { km: 'Active Directory Domain Services (AD DS) & User Management', en: 'Active Directory deployment, group policies & domain user controls' },
          { km: 'Network File Sharing, Permissions & Printer Network Setup', en: 'Network shared folders, NTFS permissions, firewall & printer servers' }
        ]
      }
    ],
    prerequisitesKm: 'មានមូលដ្ឋានប្រើប្រាស់កុំព្យូទ័រ',
    prerequisitesEn: 'General computer usage foundation',
    toolsLearned: ['PC Assembly Tools', 'Cisco Packet Tracer', 'MikroTik WinBox', 'Windows Server', 'Wireshark']
  },
  {
    id: 'video-editing',
    category: 'video',
    titleKm: 'កាត់តវីដេអូ និងមាតិកាឌីជីថល (Premiere Pro, After Effects & CapCut)',
    titleEn: 'Video Editing & Content Creation (Premiere Pro, After Effects & CapCut)',
    shortDescKm: 'រៀនកាត់តវីដេអូពាណិជ្ជកម្ម វីដេអូខ្លី TikTok/Reels, Motion Graphics, Sound Design និង Color Correction សម្រាប់ធ្វើការងារជា Video Creator។',
    shortDescEn: 'Produce viral short-form social reels, corporate videos, cinematic color grades, dynamic motion graphics, and crisp audio mixing.',
    levelKm: 'កម្រិតដំបូង',
    levelEn: 'Beginner',
    durationKm: '២ ខែ កន្លះ',
    durationEn: '2.5 Months',
    totalHours: 60,
    price: 125,
    originalPrice: 170,
    image: '/src/assets/images/course_video_editing_1791772826659.jpg',
    popular: false,
    syllabus: [
      {
        titleKm: 'ម៉ូឌុល ១៖ Adobe Premiere Pro & Storytelling',
        titleEn: 'Module 1: Story Pacing & Adobe Premiere Pro',
        lessons: [
          { km: 'ការរៀបចំ Project, Timeline, Cuts & Multi-Cam Editing', en: 'Project media bin setup, rough cuts, pacing & multi-camera workflow' },
          { km: 'ការប្រើប្រាស់ Transition, Keyframing និង Speed Ramping', en: 'Dynamic transitions, speed ramping, keyframe animations' },
          { km: 'ការកាត់តវីដេអូបញ្ឈរ 9:16 សម្រាប់ TikTok, Facebook Reels & Shorts', en: 'Vertical 9:16 formats optimized for TikTok, Reels and YouTube Shorts' }
        ]
      },
      {
        titleKm: 'ម៉ូឌុល ២៖ Sound Design & Color Grading',
        titleEn: 'Module 2: Audio Mixing & Cinematic Color Grading',
        lessons: [
          { km: 'ការសំអាតសំឡេងរំខាន (Noise Reduction) & Sound Effects (SFX)', en: 'Audio noise removal, voice leveling, sound effects & background music' },
          { km: 'Lumetri Color, Curves, Scopes និងការប្រើប្រាស់ LUTs បែបភាពយន្ត', en: 'Lumetri color wheel grading, contrast curves, vectorscopes & LUTs' }
        ]
      },
      {
        titleKm: 'ម៉ូឌុល ៣៖ After Effects Motion Graphics & CapCut Pro',
        titleEn: 'Module 3: Motion Graphics & Fast Mobile Editing',
        lessons: [
          { km: 'ការបង្កើត Lower Thirds, Animated Logo និង Motion Titles', en: 'Lower thirds, kinetic typography, and motion logo reveals' },
          { km: 'CapCut Pro Desktop Hacks សម្រាប់បង្កើតមាតិការហ័សទាន់ចិត្ត', en: 'High-speed viral content creation workflow with CapCut Pro' }
        ]
      }
    ],
    prerequisitesKm: 'មានកុំព្យូទ័រប្រើប្រាស់ ឬអាចអនុវត្តនៅបន្ទប់កុំព្យូទ័ររបស់វិទ្យាស្ថាន',
    prerequisitesEn: 'Basic computer literacy; all high-spec editing workstations provided on-campus',
    toolsLearned: ['Adobe Premiere Pro', 'Adobe After Effects', 'CapCut Pro', 'Audition', 'DaVinci Resolve']
  }
];

export const SCHEDULE_SHIFTS: ScheduleShift[] = [
  {
    id: 'shift-morning',
    shiftKm: 'វេនព្រឹក (Morning)',
    shiftEn: 'Morning Shift',
    timeKm: '៨:០០ ព្រឹក - ១០:០០ ព្រឹក',
    timeEn: '8:00 AM - 10:00 AM',
    daysKm: 'ចន្ទ ដល់ សុក្រ (ចន្ទ-សុក្រ)',
    daysEn: 'Monday to Friday',
    startDate: '១៥ វិច្ឆិកា ២០២៦',
    availableSeats: 4,
    totalSeats: 15,
    status: 'few_seats'
  },
  {
    id: 'shift-afternoon',
    shiftKm: 'វេនរសៀល (Afternoon)',
    shiftEn: 'Afternoon Shift',
    timeKm: '២:០០ រសៀល - ៤:០០ រសៀល',
    timeEn: '2:00 PM - 4:00 PM',
    daysKm: 'ចន្ទ ដល់ សុក្រ (ចន្ទ-សុក្រ)',
    daysEn: 'Monday to Friday',
    startDate: '១៥ វិច្ឆិកា ២០២៦',
    availableSeats: 7,
    totalSeats: 15,
    status: 'available'
  },
  {
    id: 'shift-evening',
    shiftKm: 'វេនយប់ (Evening)',
    shiftEn: 'Evening Shift',
    timeKm: '៦:០០ ល្ងាច - ៨:០០ យប់',
    timeEn: '6:00 PM - 8:00 PM',
    daysKm: 'ចន្ទ ដល់ សុក្រ (ចន្ទ-សុក្រ)',
    daysEn: 'Monday to Friday',
    startDate: '១៨ វិច្ឆិកា ២០២៦',
    availableSeats: 2,
    totalSeats: 15,
    status: 'few_seats'
  },
  {
    id: 'shift-weekend',
    shiftKm: 'វេនចុងសប្តាហ៍ (Weekend)',
    shiftEn: 'Weekend Shift',
    timeKm: '៨:៣០ ព្រឹក - ១១:៣០ ព្រឹក / ១:៣០ - ៤:៣០ រសៀល',
    timeEn: 'Sat - Sun: 8:30 AM - 11:30 AM or 1:30 - 4:30 PM',
    daysKm: 'សៅរ៍ និង អាទិត្យ (សៅរ៍-អាទិត្យ)',
    daysEn: 'Saturday & Sunday',
    startDate: '២០ វិច្ឆិកា ២០២៦',
    availableSeats: 5,
    totalSeats: 15,
    status: 'available'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    nameKm: 'សុខ ចាន់ដារ៉ា',
    nameEn: 'Sok Chandara',
    roleKm: 'Frontend Developer នៅធនាគារ ABA',
    roleEn: 'Frontend Developer at ABA Bank',
    courseKm: 'វគ្គ Full-Stack Web Development',
    courseEn: 'Full-Stack Web Development Course',
    rating: 5,
    commentKm: 'ខ្ញុំបានផ្លាស់ប្តូរអាជីពពីបុគ្គលិកផ្នែកលក់មកជា Web Developer ក្នុងរយៈពេលត្រឹមតែ ៤ ខែ។ សាស្ត្រាចារ្យនៅ IT Academy Khmer បង្រៀនផ្តោតលើការអនុវត្តកូដជាក់ស្តែង និងជួយកែសម្រួល Portfolio យ៉ាងយកចិត្តទុកដាក់។',
    commentEn: 'I transitioned my career from sales to software development in just 4 months. The instructors at IT Academy Khmer focus deeply on real coding practices and mentored my portfolio directly.',
    avatarBg: 'bg-blue-600',
    initials: 'SC'
  },
  {
    id: 't-2',
    nameKm: 'កែវ សោភា',
    nameEn: 'Keo Sophea',
    roleKm: 'Graphic Designer នៅភ្នាក់ងារផ្សាយពាណិជ្ជកម្មភ្នំពេញ',
    roleEn: 'Senior Graphic Designer at Agency Phnom Penh',
    courseKm: 'វគ្គ Graphic Design អាជីព',
    courseEn: 'Professional Graphic Design Course',
    rating: 5,
    commentKm: 'បន្ទប់កុំព្យូទ័រនៅទីនេះទំនើបខ្លាំង កុំព្យូទ័រ 1 នាក់ 1 គ្រឿង អេក្រង់ច្បាស់ល្អ ងាយស្រួលអនុវត្ត។ បន្ទាប់ពីរៀនចប់ ខ្ញុំទទួលបានការងារភ្លាមៗក្នុងប្រាក់ខែសមរម្យ។ អរគុណលោកគ្រូទាំងអស់!',
    commentEn: 'The lab facilities are state-of-the-art with 1 dedicated high-spec PC per student. Right upon graduation, the academy helped connect me to an agency job with a great salary.',
    avatarBg: 'bg-teal-600',
    initials: 'KS'
  },
  {
    id: 't-3',
    nameKm: 'ហេង ពិសិដ្ឋ',
    nameEn: 'Heng Piseth',
    roleKm: 'Network & System Admin នៅ Smart Axiata',
    roleEn: 'Network & System Admin at Smart Axiata',
    courseKm: 'វគ្គ Networking & IT Support',
    courseEn: 'Networking & IT Support Course',
    rating: 5,
    commentKm: 'ចំណេះដឹងពីការកំណត់ Router MikroTik, Cisco និង Windows Server ជួយខ្ញុំច្រើនណាស់ក្នុងការប្រឡងសម្ភាសន៍។ វិញ្ញាបនបត្ររបស់វិទ្យាស្ថានត្រូវបានក្រុមហ៊ុនទទួលស្គាល់យ៉ាងទូលំទូលាយ។',
    commentEn: 'The real-world configuration labs for MikroTik, Cisco, and Windows Server gave me an immense edge during my technical interviews. Highly recommended!',
    avatarBg: 'bg-amber-600',
    initials: 'HP'
  },
  {
    id: 't-4',
    nameKm: 'ជា ស្រីនិច',
    nameEn: 'Chea Sreynich',
    roleKm: 'មន្ត្រីរដ្ឋបាល & គណនេយ្យ នៅក្រុមហ៊ុនឯកជន',
    roleEn: 'Administration Officer at Private Enterprise',
    courseKm: 'វគ្គ Microsoft Office & Google Workspace',
    courseEn: 'MS Office & Admin Productivity',
    rating: 5,
    commentKm: 'ពីមុនខ្ញុំមិនសូវចេះប្រើរូបមន្ត Excel ទេ តែក្រោយរៀនចប់ ខ្ញុំចេះធ្វើតារាង Pivot Table, របាយការណ៍ស្វ័យប្រវត្ត និងគ្រប់គ្រងឯកសារបានលឿនជាងមុនទ្វេដង។',
    commentEn: 'I used to struggle with complex formulas, but after this course, building automated spreadsheets and managing cloud files takes half the time. My manager was so impressed!',
    avatarBg: 'bg-indigo-600',
    initials: 'CS'
  }
];

export const WHY_CHOOSE_US = [
  {
    id: 'feature-1',
    number: '01',
    titleKm: 'គ្រូមានបទពិសោធន៍ជាក់ស្តែង',
    titleEn: 'Industry-Experienced Instructors',
    descKm: 'បង្រៀនដោយផ្ទាល់ពីសំណាក់វិស្វករផ្នែកទន់ អ្នកជំនាញបណ្តាញ និង Senior Designer ដែលកំពុងបម្រើការងារនៅក្រុមហ៊ុនបច្ចេកវិទ្យាធំៗក្នុងស្រុក និងអន្តរជាតិ។',
    descEn: 'Taught directly by software engineers, senior network specialists, and art directors actively working in top tech companies in Cambodia.',
    tagKm: 'បទពិសោធន៍ ៥+ ឆ្នាំ',
    tagEn: '5+ Years Field Exp'
  },
  {
    id: 'feature-2',
    number: '02',
    titleKm: 'អនុវត្តផ្ទាល់លើកុំព្យូទ័រ ១ នាក់ ១ គ្រឿង',
    titleEn: '1-to-1 High-Performance Workstation',
    descKm: 'បន្ទប់ម៉ាស៊ីនត្រជាក់ស្ងប់ស្ងាត់ បំពាក់កុំព្យូទ័រ Core i7/i9 កម្រិតខ្ពស់ អេក្រង់ធំ ២៤-២៧ អ៊ីញ និងអ៊ីនធឺណិតល្បឿនលឿន Fiber Optic ដើម្បីធានាការអនុវត្តរលូន។',
    descEn: 'State-of-the-art AC computer labs equipped with Intel Core i7/i9 PCs, dual displays, and ultra-fast optical fiber internet for seamless hands-on learning.',
    tagKm: 'កុំព្យូទ័រ High-Spec',
    tagEn: 'High-Spec Workstations'
  },
  {
    id: 'feature-3',
    number: '03',
    titleKm: 'ទទួលបានវិញ្ញាបនបត្របញ្ជាក់ការសិក្សា',
    titleEn: 'Recognized Certificate of Completion',
    descKm: 'ក្រោយបញ្ចប់វគ្គ និងឆ្លងកាត់ការការពារគម្រោងចុងក្រោយ (Final Project Defense) សិស្សនឹងទទួលបានវិញ្ញាបនបត្រស្តង់ដារ ដែលទទួលស្គាល់ដោយដៃគូពាណិជ្ជកម្ម។',
    descEn: 'Upon completing the course and successfully defending a final portfolio project, graduates receive an official certificate recognized by our employer network.',
    tagKm: 'មានសុពលភាពការងារ',
    tagEn: 'Career Recognized'
  },
  {
    id: 'feature-4',
    number: '04',
    titleKm: 'ជួយណែនាំការងារក្រោយរៀនចប់',
    titleEn: 'Career Mentorship & Job Placement',
    descKm: 'យើងមានកិច្ចសហការជាមួយក្រុមហ៊ុនឯកជន ធនាគារ និងស្ថាប័នជាច្រើន ដើម្បីផ្តល់ឱកាសហាត់ការ (Internship) និងណែនាំការងារផ្ទាល់សម្រាប់សិស្សឆ្នើម។',
    descEn: 'Direct placement support and internship pipelines through partnerships with leading banks, tech startups, NGOs, and creative agencies in Phnom Penh.',
    tagKm: 'អត្រាការងារ ៩៦%',
    tagEn: '96% Placement'
  }
];

export const KEY_STATS = [
  { value: '3,500+', labelKm: 'សិស្សបានបញ្ចប់ការសិក្សា', labelEn: 'Graduated Students' },
  { value: '25+', labelKm: 'វគ្គសិក្សាជំនាញបច្ចេកវិទ្យា', labelEn: 'Specialized Courses' },
  { value: '18+', labelKm: 'សាស្ត្រាចារ្យជំនាញវិជ្ជាជីវៈ', labelEn: 'Certified Instructors' },
  { value: '96%', labelKm: 'អត្រាទទួលបានការងារក្រោយរៀនចប់', labelEn: 'Job Placement Rate' },
];

export const CONTACT_INFO = {
  academyNameKm: 'វិទ្យាស្ថានបច្ចេកវិទ្យាព័ត៌មានវិទ្យាខ្មែរ (IT Academy Khmer)',
  academyNameEn: 'IT Academy Khmer (Computer Training Center)',
  addressKm: 'អគារលេខ ១២៤, មហាវិថីសហព័ន្ធរុស្ស៊ី, សង្កាត់ទឹកល្អក់១, ខណ្ឌទួលគោក, រាជធានីភ្នំពេញ (ជិតសាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ RUPP)',
  addressEn: '#124, Russian Federation Blvd, Sangkat Teuk Laak 1, Khan Toul Kork, Phnom Penh, Cambodia (Near RUPP)',
  phones: ['+855 23 888 999', '+855 12 345 678', '+855 98 765 432'],
  email: 'info@itacademykhmer.edu.kh',
  telegramUser: '@itacademykhmer',
  telegramChannel: 'https://t.me/itacademykhmer',
  facebookUrl: 'https://facebook.com/itacademykhmer',
  openingHoursKm: 'ចន្ទ ដល់ អាទិត្យ: ៧:៣០ ព្រឹក ដល់ ៨:៣០ យប់',
  openingHoursEn: 'Mon - Sun: 7:30 AM - 8:30 PM'
};
