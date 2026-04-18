import { Lang } from '@/lib/types';

type Dict = Record<string, string>;

export const dictionaries: Record<Lang, Dict> = {
  ar: {
    appName: 'StudyTech Advisor', home: 'الرئيسية', basics: 'تعلم أساسيات الأجهزة', quiz: 'اختبار الجهاز المناسب',
    partner: 'أجهزة موثوقة بسعر أقل', about: 'من نحن', faq: 'الأسئلة الشائعة', contact: 'تواصل معنا',
    signin: 'تسجيل الدخول', signup: 'إنشاء حساب', dashboard: 'لوحة التحكم', heroTitle: 'اختَر جهازك الدراسي بذكاء',
    heroSub: 'نساعد الطلاب في ماليزيا على فهم المواصفات واختيار أفضل جهاز حسب التخصص والميزانية.', startQuiz: 'ابدأ الاختبار',
    learnNow: 'ابدأ التعلم', trustedPartner: 'شريك موثوق', browseNow: 'تصفح الأجهزة الآن', welcomeBack: 'مرحباً بعودتك',
    favorites: 'المفضلة', profile: 'الملف الشخصي', quizHistory: 'سجل الاختبارات', compare: 'المقارنة', language: 'اللغة', theme: 'الثيم'
  },
  en: {
    appName: 'StudyTech Advisor', home: 'Home', basics: 'Learn Basics', quiz: 'Smart Quiz', partner: 'Trusted Devices at Lower Prices',
    about: 'About', faq: 'FAQ', contact: 'Contact', signin: 'Sign In', signup: 'Sign Up', dashboard: 'Dashboard',
    heroTitle: 'Choose your study device with confidence', heroSub: 'We help students in Malaysia understand specs and pick ideal devices by major and budget.',
    startQuiz: 'Start Quiz', learnNow: 'Learn Basics', trustedPartner: 'Trusted Partner', browseNow: 'Browse Devices Now',
    welcomeBack: 'Welcome back', favorites: 'Favorites', profile: 'Profile', quizHistory: 'Quiz History', compare: 'Compare', language: 'Language', theme: 'Theme'
  }
};

export const t = (lang: Lang, key: string) => dictionaries[lang][key] ?? key;
