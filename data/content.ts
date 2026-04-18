export const basics = [
  { key: 'RAM', what: 'Temporary memory for active apps.', why: 'More RAM enables smoother multitasking.', who: 'Programming, engineering, design.', level: '8GB basic, 16GB recommended, 32GB advanced.', example: 'Running VS Code + browser + Zoom together.', mistake: 'Buying 8GB for heavy software and expecting smooth performance.', arWhat: 'ذاكرة مؤقتة للتطبيقات الحالية.', arWhy: 'زيادة الرام تحسن تعدد المهام.', arWho: 'البرمجة والهندسة والتصميم.', arLevel: '8GB أساسي، 16GB موصى به، 32GB متقدم.', arExample: 'تشغيل VS Code مع المتصفح وZoom معاً.', arMistake: 'شراء 8GB مع برامج ثقيلة وتوقع أداء قوي.' },
  { key: 'CPU', what: 'Main processor that executes tasks.', why: 'Affects speed in compiling, analysis, and rendering.', who: 'Engineering and computer science.', level: 'Core i5/Ryzen 5 minimum, i7/Ryzen 7 ideal.', example: 'Compiling Java projects faster.', mistake: 'Ignoring CPU generation and buying old models.', arWhat: 'المعالج الرئيسي لتنفيذ المهام.', arWhy: 'يؤثر على سرعة الترجمة والتحليل والرندر.', arWho: 'الهندسة وعلوم الحاسب.', arLevel: 'i5/Ryzen5 حد أدنى، i7/Ryzen7 أفضل.', arExample: 'تجميع مشاريع Java بسرعة أكبر.', arMistake: 'تجاهل جيل المعالج وشراء موديل قديم.' },
  { key: 'GPU', what: 'Graphics processor for visuals and heavy rendering.', why: 'Critical for 3D, CAD, and video editing.', who: 'Architecture, media, design.', level: 'Integrated for basics, RTX for heavy work.', example: 'Rendering 3D scenes in Blender.', mistake: 'Paying for gaming GPU when your major needs only office apps.', arWhat: 'معالج رسومي للأعمال البصرية والرندر.', arWhy: 'مهم لـ3D وCAD وتحرير الفيديو.', arWho: 'العمارة والإعلام والتصميم.', arLevel: 'مدمج للاستخدام العادي، RTX للأعمال الثقيلة.', arExample: 'رندر مشهد ثلاثي الأبعاد في Blender.', arMistake: 'شراء GPU قوي بلا حاجة فعلية.' },
  { key: 'Storage', what: 'Capacity for files and apps.', why: 'Low storage fills quickly and slows workflow.', who: 'Media and architecture students.', level: '256GB minimum, 512GB preferred, 1TB+ advanced.', example: 'Saving lecture videos and project files.', mistake: 'Choosing tiny storage with no upgrade path.', arWhat: 'مساحة حفظ الملفات والبرامج.', arWhy: 'قلة التخزين تعطل العمل سريعاً.', arWho: 'الإعلام والعمارة.', arLevel: '256GB حد أدنى، 512GB أفضل، 1TB+ متقدم.', arExample: 'حفظ محاضرات وفيديوهات مشاريع.', arMistake: 'شراء سعة صغيرة بدون إمكانية تطوير.' },
  { key: 'SSD vs HDD', what: 'SSD is much faster than HDD.', why: 'Improves boot and app loading times.', who: 'All students.', level: 'Always prioritize SSD.', example: 'Opening PowerPoint instantly before class.', mistake: 'Buying HDD-only laptop for modern study.', arWhat: 'SSD أسرع بكثير من HDD.', arWhy: 'يفتح النظام والبرامج بسرعة.', arWho: 'جميع الطلاب.', arLevel: 'اختر SSD دائماً.', arExample: 'فتح PowerPoint بسرعة قبل المحاضرة.', arMistake: 'شراء HDD فقط للدراسة الحديثة.' },
  { key: 'Battery Life', what: 'How long device lasts unplugged.', why: 'Useful for full-day classes.', who: 'Business and medicine students.', level: '8h minimum, 10h+ ideal.', example: 'Two lectures + library without charger.', mistake: 'Ignoring battery and carrying charger all day.', arWhat: 'مدة عمل الجهاز بدون شحن.', arWhy: 'مهم ليوم دراسي كامل.', arWho: 'إدارة الأعمال والطب.', arLevel: '8 ساعات حد أدنى، 10+ ساعات ممتاز.', arExample: 'محاضرتان + مكتبة بدون شاحن.', arMistake: 'إهمال البطارية وحمل الشاحن دائماً.' },
  { key: 'Screen Size', what: 'Display dimensions and sharpness.', why: 'Affects reading comfort and design accuracy.', who: 'Design and media majors.', level: '13-14 inch for portability, 15-16 inch for productivity.', example: 'Design timeline visibility in Adobe apps.', mistake: 'Buying a screen too small for visual tasks.', arWhat: 'حجم ودقة الشاشة.', arWhy: 'يؤثر على راحة القراءة ودقة التصميم.', arWho: 'التصميم والإعلام.', arLevel: '13-14" للتنقل، 15-16" للإنتاجية.', arExample: 'وضوح خط الزمن في برامج Adobe.', arMistake: 'شراء شاشة صغيرة لأعمال بصرية.' },
  { key: 'Weight / Portability', what: 'Ease of carrying between classes.', why: 'Lower weight improves daily comfort.', who: 'Commuters and students with long campus days.', level: 'Under 1.5kg preferred.', example: 'Walking across campus all day.', mistake: 'Choosing bulky gaming laptop for simple tasks.', arWhat: 'سهولة الحمل بين القاعات.', arWhy: 'الوزن الأقل مريح يومياً.', arWho: 'الطلاب كثيرو التنقل.', arLevel: 'أقل من 1.5kg مفضل.', arExample: 'التحرك بين مباني الجامعة طوال اليوم.', arMistake: 'شراء جهاز ثقيل لمهام بسيطة.' },
  { key: 'Operating Systems', what: 'Windows, macOS, Linux compatibility.', why: 'Your major software may require specific OS.', who: 'CS and design students.', level: 'Choose based on software requirements first.', example: 'Xcode requires macOS; many engineering tools prefer Windows.', mistake: 'Buying based on brand without software check.', arWhat: 'توافق Windows وmacOS وLinux.', arWhy: 'بعض البرامج تعمل على نظام محدد.', arWho: 'علوم الحاسب والتصميم.', arLevel: 'اختر حسب البرنامج المطلوب.', arExample: 'Xcode يحتاج macOS ومعظم أدوات الهندسة على Windows.', arMistake: 'الشراء حسب العلامة فقط بدون فحص البرامج.' },
  { key: 'Build Quality', what: 'Durability of chassis, keyboard, and hinges.', why: 'Better build lasts longer across semesters.', who: 'Students planning 4+ years use.', level: 'Prefer sturdy body and good keyboard.', example: 'Typing reports daily without keyboard fatigue.', mistake: 'Ignoring hinge quality in cheap devices.', arWhat: 'متانة الهيكل ولوحة المفاتيح والمفصلات.', arWhy: 'المتانة تعني عمر أطول للجهاز.', arWho: 'من يخطط لاستخدام 4 سنوات أو أكثر.', arLevel: 'اختر هيكل متين ولوحة مريحة.', arExample: 'كتابة تقارير يومياً بدون إرهاق.', arMistake: 'تجاهل جودة المفصلات في الأجهزة الرخيصة.' },
  { key: 'Cooling / Thermal', what: 'Heat management under sustained load.', why: 'Prevents lag and performance drops.', who: 'Engineering, 3D, gaming + study users.', level: 'Dual-fan and good vents for heavy workloads.', example: 'Stable performance during long rendering.', mistake: 'Ignoring thermal reviews before buying.', arWhat: 'إدارة الحرارة تحت الضغط.', arWhy: 'تمنع التقطيع وانخفاض الأداء.', arWho: 'الهندسة و3D والألعاب مع الدراسة.', arLevel: 'مراوح مزدوجة وتبريد جيد للمهام الثقيلة.', arExample: 'أداء ثابت أثناء الرندر الطويل.', arMistake: 'تجاهل تقييمات الحرارة قبل الشراء.' }
];

export const majorSpecs = [
  { major: 'Computer Science', spec: '16GB RAM + strong CPU + Linux/Windows flexibility' },
  { major: 'Engineering', spec: '16-32GB RAM + i7/Ryzen 7 + dedicated GPU if CAD/3D' },
  { major: 'Graphic Design', spec: 'Color-accurate display + dedicated GPU + 16GB RAM' },
  { major: 'Business', spec: 'Lightweight + long battery + reliable keyboard' },
  { major: 'Medicine', spec: 'Balanced performance + portability + battery life' }
];

export const buyMistakes = [
  'Buying only by brand without checking specs.',
  'Choosing very low RAM for demanding major tools.',
  'Ignoring battery and portability for campus life.',
  'Paying for gaming GPU when not needed.',
  'Not checking warranty and upgrade options.'
];

export const osCompare = [
  { os: 'Windows', pros: 'Broader software compatibility, easier budget choices', cons: 'Battery optimization varies by model' },
  { os: 'macOS', pros: 'Excellent battery + build quality + stable ecosystem', cons: 'Higher price and fewer budget models' }
];

export const faqs = [
  { q: 'Are these recommendations random?', a: 'No. We use rule-based matching by major, budget, workload, and preferences.', arQ: 'هل هذه التوصيات عشوائية؟', arA: 'لا، نعتمد على مطابقة منطقية حسب التخصص والميزانية والاستخدام.' },
  { q: 'Is this useful for new students in Malaysia?', a: 'Yes. We simplify local pricing and practical choices.', arQ: 'هل المنصة مفيدة للطلاب الجدد في ماليزيا؟', arA: 'نعم، نبسّط الأسعار المحلية وخيارات الأجهزة المناسبة.' },
  { q: 'Can I save recommendations?', a: 'Yes, sign in and save favorites.', arQ: 'هل يمكن حفظ التوصيات؟', arA: 'نعم، بعد تسجيل الدخول يمكنك حفظ المفضلة.' },
  { q: 'Do you sell devices directly?', a: 'We provide guidance and trusted partner pathways.', arQ: 'هل تبيعون الأجهزة مباشرة؟', arA: 'نقدم الإرشاد ومسارات شراء موثوقة عبر شركاء.' }
];

export const testimonials = [
  { name: 'Amina, IIUM', text: 'The quiz matched my architecture software needs within budget.', ar: 'الاختبار طابق احتياجاتي في العمارة ضمن الميزانية.' },
  { name: 'Daniel, UM', text: 'The basics page explained specs clearly in minutes.', ar: 'صفحة الأساسيات شرحت المواصفات بشكل واضح خلال دقائق.' },
  { name: 'Siti, UTM', text: 'I found a trusted lower-cost ThinkPad through the partner page.', ar: 'وجدت جهاز ThinkPad بسعر أقل عبر صفحة الشريك الموثوق.' }
];
