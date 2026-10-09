import luminosShot from "../assets/luminos/student home page.png";
import luminosShotSecondary from "../assets/luminos/course page instructor view.png";
import pguardShot from "../assets/p-guard plugin/ListRobots.png";
import pguardShotSecondary from "../assets/p-guard plugin/dashboard.png";
import padelMobileShot from "../assets/padeltunisia Mobile/1login.png";
import padelMobileShotSecondary from "../assets/padeltunisia Mobile/centerlist.png";
import padelWebShot from "../assets/padeltunisia web/homepage.png";
import padelWebShotSecondary from "../assets/padeltunisia web/dashboard.png";
import stagelinkShot from "../assets/stagelink/home.png";
import stagelinkShotSecondary from "../assets/stagelink/home rec.png";
import wasfaShot from "../assets/wasfa Tn/homepagges.png";
import wasfaShotSecondary from "../assets/wasfa Tn/recipe detaills.png";
import cvEn from "../assets/cvs/Nada_Dridi_CV.pdf";
import cvFr from "../assets/cvs/Nada_Dridi_CV_FR.pdf";

export const profile = {
  name: "Dridi Nada",
  role: "Software Engineer",
  location: "Monastir, Tunisie",
  phone: "25 755 988",
  email: "Nadda.dridi@gmail.com",
  linkedin: "https://www.linkedin.com/in/nada-dridi-",
  github: "https://github.com/nada-Dridi-2021/",
  summary:
    "Software engineer passionate about building clean, reliable applications and solving real problems through code. I enjoy working across the full stack, adapting quickly to new tools and environments, and collaborating closely with a team to bring ideas to life.",
  cv: {
    en: { href: cvEn, label: "English", filename: "Nada_Dridi_CV.pdf" },
    fr: { href: cvFr, label: "Français", filename: "Nada_Dridi_CV_FR.pdf" },
  },
};

export const projects = [
  {
    id: "luminos",
    title: "Luminos",
    subtitle: "AI-Enhanced E-Learning Platform",
    org: "Final-Year Project — Grow Up Technologies",
    date: "Mar 2026 – Aug 2026",
    category: "Web",
    image: luminosShot,
    imageFrame: "browser",
    imageShape: "wide",
    imageSecondary: luminosShotSecondary,
    imageSecondaryFrame: "browser",
    imageSecondaryShape: "wide",
    description: [
      "Architected a full-stack e-learning platform (React, Node.js/Express, PostgreSQL/Prisma) covering 6 core modules: courses, progress tracking, certificates, Stripe payments, blog, and an AI chatbot.",
      "Integrated Google Gemini and Groq to auto-generate quizzes, flashcards, and video summaries from course content, removing manual content authoring for instructors.",
      "Wrote Jest unit tests and Playwright/Gherkin end-to-end test suites to safeguard reliability, containerized with Docker and deployed via Vercel (frontend) and Render (backend).",
    ],
    tags: ["React", "Node.js", "Express", "PostgreSQL", "Prisma", "Stripe", "Jest", "Docker", "Vercel", "Render"],
  },
  {
    id: "padeltunisia-mobile",
    title: "PadelTunisia",
    subtitle: "Court Booking Mobile App",
    org: "Summer Internship — Grow Up Technologies",
    date: "Jun 2025 – Aug 2025",
    category: "Mobile",
    image: padelMobileShot,
    imageFrame: "none",
    imageShape: "narrow",
    imageSecondary: padelMobileShotSecondary,
    imageSecondaryFrame: "none",
    imageSecondaryShape: "narrow",
    description: [
      "Built a cross-platform app (React Native, Expo Router, TypeScript) serving iOS, Android, and web from a single codebase.",
      "Engineered a court-booking engine with scheduling, double-booking conflict detection, team management, and skill-based match creation.",
      "Backed by a Node.js/Express/MongoDB REST API secured via JWT and Google OAuth.",
    ],
    tags: ["React Native", "Expo Router", "TypeScript", "Node.js", "MongoDB", "JWT", "Google OAuth"],
  },
  {
    id: "padeltunisia-web",
    title: "PadelTunisia",
    subtitle: "Center Owner Web Dashboard",
    org: "Freelance — Frontend Developer",
    date: "Sep 2025 – Jan 2026",
    category: "Web",
    image: padelWebShot,
    imageFrame: "browser",
    imageShape: "wide",
    imageSecondary: padelWebShotSecondary,
    imageSecondaryFrame: "none",
    imageSecondaryShape: "wide",
    description: [
      "Delivered a bilingual (EN/FR) React/Vite dashboard that lets center owners manage centers, courts, and reservations.",
      "Secured with JWT authentication and custom court-availability rules on the existing APIs.",
    ],
    tags: ["React", "Vite", "JWT", "i18n"],
  },
  {
    id: "pguard",
    title: "P-GUARD",
    subtitle: "Robot Monitoring Dashboard Plugin",
    org: "Final-Year Project — Enova Robotics Sousse",
    date: "Feb 2023 – May 2023",
    category: "Desktop",
    image: pguardShot,
    imageFrame: "none",
    imageShape: "wide",
    imageSecondary: pguardShotSecondary,
    imageSecondaryFrame: "none",
    imageSecondaryShape: "wide",
    description: [
      "Built a C#/WPF plugin integrated into Milestone XProtect VMS via the MIP SDK, consolidating a 2-computer control setup into one unified interface.",
      "Streamed real-time telemetry (battery, navigation, camera) via WebSockets into MongoDB.",
      "Added historical performance charts with date-range filtering, PDF export, automated low-battery/connection alerts, and an emergency command bar for remote control.",
    ],
    tags: ["C#", "WPF", "MIP SDK", "WebSockets", "MongoDB"],
  },
];

export const sideProjects = [
  {
    title: "StageLink",
    image: stagelinkShot,
    imageFrame: "browser",
    imageSecondary: stagelinkShotSecondary,
    imageSecondaryFrame: "browser",
    description:
      "Internship platform centralizing offers for Tunisian students — search, online applications, tracking, CV generation, admin back office.",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Wasfa Tn",
    subtitle: "Recipe Sharing Mobile App",
    image: wasfaShot,
    imageFrame: "phone",
    imageShape: "narrow",
    imageSecondary: wasfaShotSecondary,
    imageSecondaryFrame: "phone",
    imageSecondaryShape: "narrow",
    description:
      "Cross-platform recipe sharing app built with Flutter and Firebase — Firebase Auth, real-time Firestore recipe management, author profiles, saved recipes, and social stats (likes, comments, saves).",
    tags: ["Flutter", "Firebase", "Firestore"],
  },
  {
    title: "Task Management App",
    description:
      "Trello-like REST API backend with secure authentication and collaborative task management for team workflows.",
    tags: ["Node.js", "Express"],
  },
  {
    title: "QA Test Automation",
    description:
      "15+ Gherkin scenarios on an e-commerce demo using Page Object Model, producing HTML/JSON reports.",
    tags: ["Java", "Selenium", "Cucumber"],
  },
  {
    title: "Extremist Content Detection",
    description:
      "NLP classifier detecting extremist content in social messages — NLTK preprocessing, TF-IDF, class-balanced logistic regression.",
    tags: ["Python", "NLTK", "scikit-learn"],
  },
  {
    title: "Study Buddy Networking App",
    description:
      "Co-developed a study app that helps students find and network with study buddies — contributed to the study-partner matching and networking features, from idea to working product in a 2-month internship.",
    tags: ["Team Project"],
  },
];

export const timeline = [
  {
    date: "Mar 2026 – Aug 2026",
    title: "Final-Year Project — Luminos e-learning platform",
    org: "Grow Up Technologies",
    type: "experience",
  },
  {
    date: "Sep 2025 – Jan 2026",
    title: "Freelance Frontend Developer — PadelTunisia dashboard",
    org: "Independent",
    type: "experience",
  },
  {
    date: "Jun 2025 – Aug 2025",
    title: "Summer Internship — PadelTunisia booking app",
    org: "Grow Up Technologies",
    type: "experience",
  },
  {
    date: "Feb 2023 – May 2023",
    title: "Final-Year Project — P-GUARD monitoring plugin",
    org: "Enova Robotics Sousse",
    type: "experience",
  },
  {
    date: "Jul 2022 – Aug 2022",
    title: "Summer Internship — Study buddy networking app",
    org: "Alpha Computing and Consulting, Mahdia",
    type: "experience",
  },
  {
    date: "2023 – 2026",
    title: "Engineering Degree in Software Engineering",
    org: "EPI — International Polydisciplinary School",
    type: "education",
  },
  {
    date: "2019 – 2023",
    title: "Bachelor's Degree, Computer Systems Engineering (Embedded Systems & IoT)",
    org: "ISI Mahdia — Higher Institute of Computer Science of Mahdia",
    type: "education",
  },
];

export const skills = {
  Languages: ["Java", "JavaScript", "TypeScript", "C#", "C", "Python"],
  Data: ["MongoDB", "SQL", "PostgreSQL", "Firebase", "Firestore", "Prisma"],
  Frameworks: ["Spring Boot", "Node.js", "Express.js", "React", "React Native", "Expo", "Flutter", ".NET", "WPF", "Vite"],
  "Cloud & Deployment": ["Docker", "Power BI", "Vercel", "Render"],
  "Quality & Tooling": ["Selenium", "Cucumber", "Jest", "Playwright", "Postman", "Git", "LaTeX"],
  "APIs & Auth": ["JWT", "Google OAuth", "Stripe", "Google Gemini", "Groq"],
};

export const spokenLanguages = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "C1" },
  { name: "French", level: "B2" },
  { name: "German", level: "A2" },
];

export const softSkills = [
  "Problem solving",
  "Effective communication",
  "Adaptability",
  "Flexibility",
  "Teamwork",
  "Perseverance",
  "Autonomy",
];
