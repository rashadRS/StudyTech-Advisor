import { Dict, Locale } from './types';

export const dictionaries: Record<Locale, Dict> = {
  ar: {
    nav: {
      home: 'الرئيسية',
      basics: 'تعلم الأساسيات',
      quiz: 'الاختبار الذكي',
      partner: 'أجهزة موثوقة بسعر أقل',
      about: 'من نحن',
      faq: 'الأسئلة الشائعة',
      contact: 'تواصل معنا',
      signIn: 'تسجيل الدخول',
      signUp: 'إنشاء حساب'
    },
    common: {
      appName: 'StudyTech Advisor',
      light: 'فاتح',
      dark: 'داكن',
      save: 'حفظ',
      cancel: 'إلغاء',
      noData: 'لا توجد بيانات حالياً',
      loading: 'جارٍ التحميل...'
    },
    home: {
      headline: 'اختر جهازك الدراسي بثقة وذكاء',
      subheadline: 'نساعد الطلاب في ماليزيا لاختيار أفضل لابتوب أو جهاز حسب التخصص والميزانية والاستخدام.',
      ctaQuiz: 'ابدأ الاختبار',
      ctaLearn: 'تعلم الأساسيات',
      problemTitle: 'المشكلة والحل',
      problemText: 'يعاني كثير من الطلاب الجدد من فهم المواصفات التقنية. StudyTech Advisor يجمع بين التعليم والتوصية الذكية وروابط الشراء الموثوقة.',
      whyTitle: 'لماذا نحن؟',
      newStudent: 'هل أنت طالب جديد في ماليزيا؟ المنصة مصممة لتسهيل قرار الشراء بسرعة ووضوح.',
      testimonials: 'آراء الطلاب',
      faqPreview: 'أسئلة سريعة'
    },
    auth: {
      loginTitle: 'مرحباً بعودتك',
      signupTitle: 'أنشئ حسابك',
      fullName: 'الاسم الكامل',
      email: 'البريد الإلكتروني',
      password: 'كلمة المرور',
      university: 'الجامعة',
      major: 'التخصص',
      submitLogin: 'دخول',
      submitSignup: 'إنشاء حساب'
    },
    dashboard: {
      title: 'لوحة الطالب',
      welcome: 'مرحباً بك في StudyTech Advisor',
      choose: 'اختر ما تريد فعله الآن'
    },
    learn: {
      title: 'تعلم أساسيات الأجهزة',
      subtitle: 'شرح مبسط للمواصفات التقنية المهمة للطالب.'
    },
    quiz: {
      title: 'اختبار الجهاز المناسب',
      next: 'التالي',
      back: 'السابق',
      results: 'النتائج الذكية',
      restart: 'إعادة الاختبار'
    },
    partner: {
      title: 'أجهزة موثوقة بسعر أقل',
      subtitle: 'حلول موثوقة للطلاب ذوي الميزانية المحدودة.',
      trusted: 'شريك موثوق',
      browse: 'تصفح الأجهزة الآن'
    },
    footer: {
      rights: 'جميع الحقوق محفوظة'
    }
  },
  en: {
    nav: {
      home: 'Home',
      basics: 'Learn Basics',
      quiz: 'Smart Quiz',
      partner: 'Trusted Devices',
      about: 'About',
      faq: 'FAQ',
      contact: 'Contact',
      signIn: 'Sign in',
      signUp: 'Sign up'
    },
    common: {
      appName: 'StudyTech Advisor',
      light: 'Light',
      dark: 'Dark',
      save: 'Save',
      cancel: 'Cancel',
      noData: 'No data yet',
      loading: 'Loading...'
    },
    home: {
      headline: 'Choose your study device with confidence',
      subheadline: 'We help Malaysian university students pick the right laptop or tablet by major, budget, and real study needs.',
      ctaQuiz: 'Start Quiz',
      ctaLearn: 'Learn Basics',
      problemTitle: 'Problem & Solution',
      problemText: 'Many students are confused by RAM, CPU, and GPU specs. StudyTech Advisor combines education, smart matching, and trusted buying paths.',
      whyTitle: 'Why choose us?',
      newStudent: 'New in Malaysia? We simplify local device choices and student-friendly price ranges.',
      testimonials: 'Student testimonials',
      faqPreview: 'Quick FAQ'
    },
    auth: {
      loginTitle: 'Welcome back',
      signupTitle: 'Create your account',
      fullName: 'Full Name',
      email: 'Email',
      password: 'Password',
      university: 'University',
      major: 'Major',
      submitLogin: 'Login',
      submitSignup: 'Sign Up'
    },
    dashboard: {
      title: 'Student Dashboard',
      welcome: 'Welcome to StudyTech Advisor',
      choose: 'Choose your next step'
    },
    learn: {
      title: 'Learn Device Basics',
      subtitle: 'Simple explanations of computer specs for students.'
    },
    quiz: {
      title: 'Smart Device Quiz',
      next: 'Next',
      back: 'Back',
      results: 'Smart Results',
      restart: 'Restart Quiz'
    },
    partner: {
      title: 'Trusted Devices at Lower Prices',
      subtitle: 'Reliable and affordable options through our trusted partner.',
      trusted: 'Trusted Partner',
      browse: 'Browse Devices Now'
    },
    footer: {
      rights: 'All rights reserved'
    }
  }
};
