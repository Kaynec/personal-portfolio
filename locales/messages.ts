export type Locale = "en" | "fa";

export type Messages = {
  role: string;
  heroLine: string;
  selectedWork: string;
  getInTouch: string;
  navWork: string;
  navExperience: string;
  navAbout: string;
  navContact: string;
  workEyebrow: string;
  workTitle: string;
  viewAll: string;
  experienceEyebrow: string;
  experienceTitle: string;
  aboutEyebrow: string;
  aboutTitle: string;
  aboutP1: string;
  aboutP2: string;
  contactEyebrow: string;
  contactTitle: string;
  contactLine: string;
  linkedIn: string;
  github: string;
  projectsArchive: string;
  projectsTitle: string;
  projectsIntro: string;
  backHome: string;
  projectsPageTitle: string;
  themeToLight: string;
  themeToDark: string;
  experience: {
    period: string;
    role: string;
    company: string;
    type: string;
    location?: string;
    description: string;
    skills: string[];
  }[];
  projects: {
    name: string;
    description: string;
    stack: string[];
    year: string;
  }[];
};

export const messages: Record<Locale, Messages> = {
  en: {
    role: "Full-stack developer",
    heroLine:
      "Five years building products end to end — clean interfaces, solid APIs, and systems that stay maintainable.",
    selectedWork: "Selected work",
    getInTouch: "Get in touch",
    navWork: "Work",
    navExperience: "Experience",
    navAbout: "About",
    navContact: "Contact",
    workEyebrow: "Selected work",
    workTitle: "Projects",
    viewAll: "View all →",
    experienceEyebrow: "Experience",
    experienceTitle: "Where I've worked",
    aboutEyebrow: "About",
    aboutTitle: "From UI to backend",
    aboutP1:
      "I'm a full-stack developer with five years of experience shipping web products. I work across the stack — JavaScript, Vue, Nuxt, React, Node.js, and modern CSS — and care about clear UX without overengineering.",
    aboutP2:
      "Whether it's a storefront, a dashboard, or an API behind it, I like taking ideas from sketch to production and keeping the codebase something you can actually maintain.",
    contactEyebrow: "Contact",
    contactTitle: "Have a project in mind? Let's talk.",
    contactLine:
      "Open to freelance work, collaborations, and full-time roles. Send a message and I'll get back to you.",
    linkedIn: "LinkedIn",
    github: "GitHub",
    projectsArchive: "Archive",
    projectsTitle: "All projects",
    projectsIntro:
      "Selected products and side work — storefronts, tools, and experiments across the stack.",
    backHome: "← Back home",
    projectsPageTitle: "Projects — Ali Reza Ozbak",
    themeToLight: "Switch to light mode",
    themeToDark: "Switch to dark mode",
    experience: [
      {
        period: "Feb 2025 – Present",
        role: "Frontend Developer",
        company: "Karentis Mahan",
        type: "Full-time · Remote",
        description:
          "Key engineer on a full technological overhaul — rebuilding core software from the ground up, with a primary focus on migrating from Vue 2 to Vue 3.",
        skills: ["Vue 3", "Front-End Design", "Web Application Development"],
      },
      {
        period: "May 2024 – Present",
        role: "Full-stack Developer",
        company: "Freelance",
        type: "Freelance",
        description:
          "End-to-end web apps for clients — interfaces, APIs, and deployment — with a focus on practical, maintainable solutions.",
        skills: ["JavaScript", "Vue", "Node.js", "Tailwind"],
      },
      {
        period: "Apr 2022 – Feb 2024",
        role: "Frontend Developer",
        company: "Vira",
        type: "Full-time",
        location: "Tehran Province, Iran",
        description:
          "Built admin and user-facing Vue applications across projects including a Quiz Maker and a sport/fitness app.",
        skills: ["Vue", "Vite", "SASS"],
      },
      {
        period: "Jul 2021 – Apr 2022",
        role: "Frontend Developer",
        company: "Mahan Institute",
        type: "Contract",
        location: "Tehran Province, Iran",
        description:
          "Collaborated with a senior developer on the Mahan application — turning Figma designs into responsive Vue.js interfaces and contributing across the frontend and backend.",
        skills: ["Vue.js", "Node.js", "HTML", "Figma"],
      },
    ],
    projects: [
      {
        name: "Cheats Game",
        description:
          "A gaming-focused shopping experience built with Nuxt — catalog, checkout, and storefront polish.",
        stack: ["Nuxt", "Vue", "Tailwind"],
        year: "2024",
      },
      {
        name: "Saei Shop",
        description:
          "General-purpose e-commerce storefront with a clean browsing and purchase flow.",
        stack: ["Nuxt", "Vue"],
        year: "2024",
      },
      {
        name: "Herfeh Plus",
        description:
          "Progressive web app for learning and career tools, built for speed on mobile.",
        stack: ["Vue", "Vuetify", "PWA"],
        year: "2023",
      },
      {
        name: "Caption",
        description:
          "Video subtitle editing app with a focused React interface for precise timing and text.",
        stack: ["React", "TypeScript"],
        year: "2023",
      },
      {
        name: "Advent of Code 2024",
        description:
          "Daily puzzle solutions — a personal practice ground for algorithms and clean code.",
        stack: ["TypeScript"],
        year: "2024",
      },
    ],
  },
  fa: {
    role: "توسعه‌دهنده فول‌استک",
    heroLine:
      "پنج سال ساخت محصول از ابتدا تا انتها — رابط کاربری تمیز، API پایدار، و سیستمی که قابل نگهداری بماند.",
    selectedWork: "نمونه کارها",
    getInTouch: "ارتباط با من",
    navWork: "کارها",
    navExperience: "سوابق",
    navAbout: "درباره",
    navContact: "تماس",
    workEyebrow: "نمونه کارها",
    workTitle: "پروژه‌ها",
    viewAll: "مشاهده همه ←",
    experienceEyebrow: "سوابق شغلی",
    experienceTitle: "جایی که کار کرده‌ام",
    aboutEyebrow: "درباره من",
    aboutTitle: "از رابط کاربری تا بک‌اند",
    aboutP1:
      "من یک توسعه‌دهنده فول‌استک با پنج سال تجربه در ساخت محصولات وب هستم. در کل استک کار می‌کنم — جاوااسکریپت، Vue، Nuxt، React، Node.js و CSS مدرن — و به تجربه کاربری شفاف بدون پیچیدگی اضافه اهمیت می‌دهم.",
    aboutP2:
      "چه فروشگاه باشد، چه داشبورد، چه API پشت آن؛ دوست دارم ایده را از طرح اولیه تا پروداکشن برسانم و کدبیسی بسازم که واقعاً قابل نگهداری باشد.",
    contactEyebrow: "تماس",
    contactTitle: "پروژه‌ای در ذهن دارید؟ صحبت کنیم.",
    contactLine:
      "آماده همکاری فریلنس، پروژه‌های مشترک و فرصت‌های تمام‌وقت هستم. پیام بدهید، در اسرع وقت پاسخ می‌دهم.",
    linkedIn: "لینکدین",
    github: "گیت‌هاب",
    projectsArchive: "آرشیو",
    projectsTitle: "همه پروژه‌ها",
    projectsIntro:
      "گزیده‌ای از محصولات و کارهای جانبی — فروشگاه‌ها، ابزارها و تجربه‌ها در سراسر استک.",
    backHome: "بازگشت به خانه →",
    projectsPageTitle: "پروژه‌ها — علی‌رضا ازبک",
    themeToLight: "حالت روشن",
    themeToDark: "حالت تاریک",
    experience: [
      {
        period: "بهمن ۱۴۰۳ – اکنون",
        role: "توسعه‌دهنده فرانت‌اند",
        company: "کارنتیس ماهان",
        type: "تمام‌وقت · دورکاری",
        description:
          "یکی از مهندسان کلیدی در بازطراحی کامل نرم‌افزار شرکت — بازسازی سیستم اصلی از صفر، با تمرکز روی مهاجرت از Vue 2 به Vue 3.",
        skills: ["Vue 3", "طراحی فرانت‌اند", "توسعه وب‌اپلیکیشن"],
      },
      {
        period: "اردیبهشت ۱۴۰۳ – اکنون",
        role: "توسعه‌دهنده فول‌استک",
        company: "فریلنس",
        type: "فریلنس",
        description:
          "ساخت وب‌اپلیکیشن‌های end-to-end برای مشتریان — رابط کاربری، API و استقرار — با تمرکز روی راه‌حل‌های کاربردی و قابل نگهداری.",
        skills: ["JavaScript", "Vue", "Node.js", "Tailwind"],
      },
      {
        period: "فروردین ۱۴۰۱ – بهمن ۱۴۰۲",
        role: "توسعه‌دهنده فرانت‌اند",
        company: "ویرا",
        type: "تمام‌وقت",
        location: "استان تهران، ایران",
        description:
          "ساخت اپلیکیشن‌های ادمین و کاربری با Vue برای پروژه‌های مختلف، از جمله Quiz Maker و اپلیکیشن ورزشی/فیتنس.",
        skills: ["Vue", "Vite", "SASS"],
      },
      {
        period: "تیر ۱۴۰۰ – فروردین ۱۴۰۱",
        role: "توسعه‌دهنده فرانت‌اند",
        company: "مؤسسه ماهان",
        type: "قراردادی",
        location: "استان تهران، ایران",
        description:
          "همکاری با یک توسعه‌دهنده ارشد روی اپلیکیشن ماهان — تبدیل طرح‌های Figma به رابط‌های ریسپانسیو Vue.js و مشارکت در فرانت‌اند و بک‌اند.",
        skills: ["Vue.js", "Node.js", "HTML", "Figma"],
      },
    ],
    projects: [
      {
        name: "Cheats Game",
        description:
          "فروشگاه آنلاین با تمرکز روی گیمینگ، ساخته‌شده با Nuxt — کاتالوگ، تسویه و تجربه فروشگاهی.",
        stack: ["Nuxt", "Vue", "Tailwind"],
        year: "2024",
      },
      {
        name: "Saei Shop",
        description:
          "فروشگاه اینترنتی عمومی با جریان ساده مرور و خرید.",
        stack: ["Nuxt", "Vue"],
        year: "2024",
      },
      {
        name: "Herfeh Plus",
        description:
          "وب‌اپلیکیشن Progressive برای آموزش و ابزارهای شغلی، بهینه‌شده برای موبایل.",
        stack: ["Vue", "Vuetify", "PWA"],
        year: "2023",
      },
      {
        name: "Caption",
        description:
          "اپلیکیشن ویرایش زیرنویس ویدیو با رابط React برای زمان‌بندی و متن دقیق.",
        stack: ["React", "TypeScript"],
        year: "2023",
      },
      {
        name: "Advent of Code 2024",
        description:
          "راه‌حل‌های روزانه پازل — تمرین شخصی برای الگوریتم و کد تمیز.",
        stack: ["TypeScript"],
        year: "2024",
      },
    ],
  },
};
