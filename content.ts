// Every line here comes from Tejaswini's resume or her own confirmations. Do not add unverified claims.
export const site = {
  name: "Tejaswini Gurrapusala",
  email: "gurrapusalatejaswini572@gmail.com",
  github: "https://github.com/gurrapusalatejaswini741",
  linkedin: "https://www.linkedin.com/in/tejaswini-gurrapusala-3893b8319",
  resume: "/Tejaswini_Gurrapusala_Resume.pdf",
};

// CONFIRM BEFORE PUBLISHING: the resume PDF says 9.2, an earlier correction says 9.01.
export const CGPA = "9.01";

export const roles = ["Problem Solver", "Developer", "Builder", "Innovator"];

export const aboutParagraphs = [
  "I'm a final-year B.Tech student in Artificial Intelligence and Data Science at Dhanalakshmi Srinivasan University, Trichy. My core toolkit is Python, Java and data structures and algorithms, and I use it to build complete applications: Streamlit dashboards, a React command-centre interface and a browser-based letter workflow.",
  "The projects I care about start with a practical problem: early autism screening support, sustainability guidance grounded in a knowledge base, an emergency leave process for hostel students, and a crime intelligence interface built for the Karnataka State Police AI Datathon.",
  "I have also learned to debug after the code works locally. Both the Autism screening app and CrimeAI Sentinel needed me to diagnose deployment failures before they could run for real users.",
  "Outside code, I am an NSS Team Leader at DSU, a Google Student Ambassador for 2026 and a GSSoC 2026 Ambassador in the AI Agents track, helping other students get started with GitHub and open source.",
];

export const quickFacts = [
  { label: "Studying", value: "B.Tech, AI & Data Science" },
  { label: "University", value: "Dhanalakshmi Srinivasan University, Trichy" },
  { label: "Graduating", value: "Mar to May 2027" },
  { label: "Based in", value: "Andhra Pradesh, India" },
  { label: "Languages", value: "English, Telugu, Hindi" },
];

export const stack = [
  { icon: "code", title: "Programming", items: ["Java", "Python", "JavaScript", "Data Structures & Algorithms"] },
  { icon: "layout", title: "Frontend", items: ["React", "Vite", "HTML5", "CSS3", "jsPDF", "QRCode.js"] },
  { icon: "server", title: "Backend & Hosting", items: ["Zoho Catalyst", "Streamlit", "Netlify"] },
  {
    icon: "brain",
    title: "AI / Machine Learning",
    items: ["TensorFlow/Keras", "MobileNetV2", "Grad-CAM", "Computer Vision", "Gemini API", "Gemini Vision", "RAG", "TF-IDF retrieval"],
  },
  { icon: "wrench", title: "Developer Tools", items: ["Git", "GitHub"] },
] as const;

export const alsoBuilt = [
  { title: "Election Assistant", text: "Multilingual application guiding voters through eligibility checks and voting procedures." },
  { title: "SmartServe.ai", text: "AI-powered routing system designed to optimize latency and performance." },
  { title: "Family Locator System", text: "Real-time GPS tracking application for group location sharing and safety monitoring." },
  { title: "ZeroWait Stadium Navigator", text: "AR-based navigation concept using crowd-density heatmaps to reduce venue wait times. A concept project." },
];

export type JourneyKind = "learning" | "work" | "recognition" | "leadership";
export interface JourneyItem { date: string; title: string; org: string; kind: JourneyKind; detail: string }

// Newest first.
export const journey: JourneyItem[] = [
  { date: "Jul to Sep 2026", title: "AI Intern", org: "IBM SkillsBuild (Collaborative Program)", kind: "work", detail: "Selected for a 6-week AI-focused internship that started on 28 Jul 2026, with hands-on exposure to applied AI/ML concepts and tools through structured, mentor-guided learning." },
  { date: "2026", title: "Google Student Ambassador", org: "Google", kind: "leadership", detail: "Selected as Google Student Ambassador 2026, representing Google programs to student communities." },
  { date: "2026", title: "Ambassador, AI Agents track", org: "GirlScript Summer of Code (GSSoC)", kind: "leadership", detail: "Ambassador in the AI Agents track. Conducted the GSSoC orientation at DSU and organised a GitHub Fundamentals workshop." },
  { date: "2026", title: "Selected, Zoho Young Creators Program", org: "Zoho", kind: "recognition", detail: "Selected for the Zoho Young Creators Program." },
  { date: "2026", title: "Selected across three tracks", org: "Infosys Springboard", kind: "learning", detail: "Selected for the Virtual Internship, AI Empower and Pragathi (Cohort 9) tracks, building applied problem-solving through structured, mentor-guided learning." },
  { date: "Oct 9 to 12, 2025", title: "Chengalpattu camp", org: "NSS, DSU", kind: "leadership", detail: "Participated in the Chengalpattu NSS camp." },
  { date: "2025", title: "Best NSS Volunteer Award", org: "NSS, DSU", kind: "recognition", detail: "Received the Best NSS Volunteer Award for 2025." },
  { date: "May 13 to 19, 2025", title: "Marudur Village Special Camp", org: "NSS, DSU", kind: "leadership", detail: "Participated in the Marudur Village Special Camp." },
  { date: "Apr to Jul 2025", title: "Data Science Trainee", org: "Infosys Springboard", kind: "learning", detail: "Completed structured training in Python, AI and applied problem-solving. Built and debugged real-world applications, strengthening root-cause analysis and issue resolution." },
];

export const highlights = [
  { value: "1st Place", label: "Draignox National Symposium, national-level technical presentation" },
  { value: "Best NSS Volunteer", label: "Award, 2025" },
  { value: "3 tracks", label: "Selected across Infosys Springboard programs in 2026" },
  { value: "Zoho", label: "Selected, Young Creators Program" },
];

export interface LeadershipRole {
  title: string; org: string; summary?: string;
  events: { title: string; detail: string; tag?: string }[];
}

export const leadership: LeadershipRole[] = [
  {
    title: "Google Student Ambassador 2026",
    org: "Google",
    events: [
      { title: "Career Glow Up Night", detail: "Organised through Google Meet.", tag: "Online event" },
      { title: "Freshers' Party Planning Night", detail: "Organised as a hybrid event with 100+ participants.", tag: "Hybrid, 100+ participants" },
      { title: "Campus interactions and interviews", detail: "Conducted with approximately 10 students.", tag: "~10 students" },
      { title: "Gemini and Lyria community activities", detail: "Participated in community activities around Gemini and Lyria.", tag: "Community" },
      { title: "Ambassador welcome kit", detail: "Received the Google Ambassador welcome kit.", tag: "Welcome" },
    ],
  },
  {
    title: "GSSoC 2026 Ambassador, AI Agents track",
    org: "GirlScript Summer of Code",
    events: [
      { title: "GSSoC orientation at DSU", detail: "Conducted the orientation for students at the university.", tag: "Orientation" },
      { title: "GitHub Fundamentals workshop", detail: "Organised a workshop on GitHub basics.", tag: "Workshop" },
      { title: "Open-source guidance", detail: "Helped students understand open-source contributions and GitHub workflows.", tag: "Mentoring" },
    ],
  },
  {
    title: "NSS Team Leader",
    org: "Dhanalakshmi Srinivasan University",
    summary: "Associated with student and community engagement involving approximately 300 students.",
    events: [
      { title: "Marudur Village Special Camp", detail: "Participated, May 13 to 19, 2025.", tag: "May 2025" },
      { title: "Best NSS Volunteer Award", detail: "Received the award for 2025.", tag: "2025" },
      { title: "Chengalpattu camp", detail: "Participated, October 9 to 12, 2025.", tag: "Oct 2025" },
    ],
  },
];

export const leadershipNumbers = [
  { value: "~300", label: "students in NSS engagement" },
  { value: "100+", label: "participants at the hybrid Freshers' Party Planning Night" },
  { value: "~10", label: "students in campus interactions and interviews" },
];

export const education = [
  { years: "2023 to expected 2027", title: "B.Tech, Artificial Intelligence and Data Science", place: "Dhanalakshmi Srinivasan University, Trichy, Tamil Nadu", score: `CGPA ${CGPA} / 10`, note: "Expected graduation: Mar to May 2027" },
  { years: "2021 to 2023", title: "Class XII (Intermediate)", place: "BR Oxford Mahila Junior College", score: "92.4%" },
  { years: "2021", title: "Class X (SSC)", place: "BR Oxford School", score: "100%" },
];

export const programs = [
  { title: "IBM SkillsBuild AI Internship", detail: "6-week collaborative program, started 28 Jul 2026" },
  { title: "Infosys Springboard", detail: "Virtual Internship, AI Empower and Pragathi Cohort 9 (2026)" },
  { title: "Infosys Springboard Data Science training", detail: "Python, AI and applied problem-solving (Apr to Jul 2025)" },
  { title: "Zoho Young Creators Program", detail: "Selected participant" },
];
