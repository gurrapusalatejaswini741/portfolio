// Only facts supplied by Tejaswini live here. Add repoUrl / liveUrl only once verified.
export type ProjectStatus = "prototype" | "deployed" | "hackathon";
export type CardLayout = "wide" | "wideFlip" | "main" | "side";

export interface Project {
  slug: string; // screenshot is read from /screenshots/<slug>.png
  title: string;
  alias?: string;
  status: ProjectStatus;
  statusLabel: string;
  description: string;
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
  layout: CardLayout;
  note?: string;
}

export const featuredProjects: Project[] = [
  {
    slug: "autism-ai-screening",
    title: "Autism AI Screening System",
    status: "prototype",
    statusLabel: "Prototype with live demo",
    description:
      "AI-powered behavioural screening prototype exploring eye gaze, facial reactions, physical movement and hand-flapping patterns in children under five.",
    stack: ["Python", "Streamlit", "TensorFlow/Keras", "MobileNetV2", "Grad-CAM", "Computer Vision"],
    liveUrl: "https://autism-ai-screening.streamlit.app/",
    repoUrl: "https://github.com/gurrapusalatejaswini741/autism-ai",
    layout: "wide",
    note: "Early screening support tool, not a medical diagnosis. The hosted demo runs in Demo Mode with pixel-based scoring because TensorFlow is unavailable there.",
  },
  {
    slug: "crimeai-sentinel",
    title: "CrimeAI Sentinel",
    alias: "SentinelX",
    status: "hackathon",
    statusLabel: "Hackathon project",
    description:
      "Full-stack crime intelligence platform developed for the Karnataka State Police AI Datathon, featuring a multi-page command-centre interface.",
    stack: ["React", "Vite", "Zoho Catalyst"],
    layout: "main",
    note: "Live deployment not yet verified.",
  },
  {
    slug: "emergency-hostel-letter",
    title: "Emergency Hostel Letter Generator",
    status: "deployed",
    statusLabel: "Deployed application",
    description:
      "Generates printable emergency hostel letters with QR-based warden verification and digital approval workflows.",
    stack: ["HTML5", "CSS3", "JavaScript", "jsPDF", "QRCode.js"],
    liveUrl: "https://calm-alpaca-f0205a.netlify.app/",
    layout: "side",
  },
  {
    slug: "green-sahayak",
    title: "Green Sahayak",
    status: "deployed",
    statusLabel: "Deployed application",
    description:
      "AI sustainability assistant offering knowledge-grounded environmental guidance and image-based waste classification.",
    stack: ["Python", "Streamlit", "Google Gemini API", "Gemini Vision", "TF-IDF retrieval", "RAG"],
    liveUrl: "https://green-sahayak-oahfb6ufwajvukhfziwxru.streamlit.app/",
    layout: "wideFlip",
  },
];
