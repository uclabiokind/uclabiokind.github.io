export const chapterEmail = "uclachapter@biokind.org";
export const instagramUrl = "https://www.instagram.com/biokind_ucla";
export const nationalUrl = "https://www.biokind.org/";
export const nationalLinkedInUrl =
  "https://www.linkedin.com/company/biokindanalytics";
export const mailingListUrl = "https://forms.gle/dWmbJksPTsv1jBVr9";

// Update these fields when a new student recruitment cycle opens.
export const recruitment = {
  status: "Next cycle is in Fall 2026.",
  applicationUrl: "",
  updatesUrl: mailingListUrl,
  timeline: [
    {
      number: "01",
      timing: "To be announced",
      title: "Applications open",
      description:
        "The current student application will be linked on this page when recruitment begins.",
    },
    {
      number: "02",
      timing: "To be announced",
      title: "Info session",
      description:
        "Meet the chapter and hear about our projects, teams, and expectations.",
    },
    {
      number: "03",
      timing: "To be announced",
      title: "Applications due",
      description:
        "Submit your interests, experience, and what you hope to contribute.",
    },
    {
      number: "04",
      timing: "To be announced",
      title: "Interviews",
      description:
        "Selected applicants will be invited to interview with the team.",
    },
    {
      number: "05",
      timing: "To be announced",
      title: "Decisions",
      description:
        "Applicants receive decisions and information about next steps.",
    },
  ],
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/members", label: "Members" },
  { href: "/showcase", label: "Showcase" },
];

const configuredBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const normalizedBasePath = configuredBasePath.endsWith("/")
  ? configuredBasePath.slice(0, -1)
  : configuredBasePath;

export const basePath = normalizedBasePath;

export function assetPath(path: string) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${normalizedBasePath}${normalizedPath}`;
}

export function sitePath(path: string) {
  const normalizedPath = path === "/" ? "/" : `/${path.replace(/^\/+|\/+$/g, "")}/`;
  return `${normalizedBasePath}${normalizedPath}`;
}

export const practiceAreas = [
  {
    number: "01",
    eyebrow: "Donor analysis",
    title: "Understand giving.",
    description:
      "Spot retention patterns and support stronger fundraising.",
  },
  {
    number: "02",
    eyebrow: "Patient & program analysis",
    title: "Understand reach.",
    description:
      "Explore who programs serve and where gaps may exist.",
  },
  {
    number: "03",
    eyebrow: "Event & campaign analysis",
    title: "Understand performance.",
    description:
      "Measure attendance, return, and campaign results.",
  },
];

// Update this one value when the team year changes.
export const memberYear = "2026";

export const members = [
  {
    name: "Vyas Koduvayur",
    role: "President",
    study: "Fourth year · Computational Biology",
    image: "/images/members/vyas-koduvayur.jpg",
    group: "Board",
    bio: "Bio coming soon.",
    linkedinUrl: "https://www.linkedin.com/in/vyaskoduvayur",
  },
  {
    name: "Ella Chatterjee",
    role: "Vice President",
    study: "Fourth year · Statistics & Data Science",
    image: "/images/members/ella-chatterjee.jpg",
    group: "Board",
    bio: "Bio coming soon.",
    linkedinUrl: "https://www.linkedin.com/in/ella-chatterjee-5780a2292",
  },
  {
    name: "Preston Gao",
    role: "Head of External Operations",
    study: "Fourth year · Statistics & Data Science Engineering",
    image: "/images/members/preston-gao.jpg",
    group: "Board",
    bio: "Bio coming soon.",
    linkedinUrl: "https://www.linkedin.com/in/prestongao",
  },
  {
    name: "Michael Makhoul",
    role: "Head of Technical Operations",
    study: "Third year · Bioengineering",
    image: "/images/members/michael-makhoul.jpg",
    group: "Board",
    bio: "Bio coming soon.",
    linkedinUrl: "https://www.linkedin.com/in/makhoulmichael",
  },
  {
    name: "Abigail Rodriguez",
    role: "Co-Head of Project Management",
    study: "Fourth year · Statistics & Data Science",
    image: "/images/members/abigail-rodriguez.jpg",
    group: "Board",
    bio: "Bio coming soon.",
    linkedinUrl: "https://www.linkedin.com/in/abigail-rodriguez-6b4430395",
  },
  {
    name: "Melanie Pizano",
    role: "Co-Head of Project Management",
    study: "Fourth year · Statistics & Data Science",
    image: "/images/members/melanie-pizano.jpg",
    group: "Board",
    bio: "Bio coming soon.",
    linkedinUrl: "https://www.linkedin.com/in/melanie-pizano-1748a6327",
  },
];

export type ShowcaseImage = {
  src: string;
  alt: string;
  caption: string;
};

export type ShowcasePartner = {
  id: string;
  name: string;
  category: string;
  websiteUrl: string;
  logo: string;
  featured: boolean;
  organizationSummary: string;
  projectQuestion: string;
  deliverables: string[];
  images: ShowcaseImage[];
  reportExcerpt: string;
};

// Add only partner-approved screenshots or report excerpts. Anything placed in
// public/ can be viewed and downloaded directly, so redact source files first.
export const showcasePartners: ShowcasePartner[] = [
  {
    id: "neurospring",
    name: "NeuroSpring",
    category: "Neuroscience research nonprofit",
    websiteUrl: "https://neurospring.org/",
    logo: "/images/partners/neurospring.svg",
    featured: true,
    organizationSummary:
      "NeuroSpring advances neuroscience research and training to improve healthcare for underserved communities.",
    projectQuestion: "",
    deliverables: [],
    images: [],
    reportExcerpt: "",
  },
  {
    id: "world-telehealth-initiative",
    name: "World Telehealth Initiative",
    category: "Global telehealth nonprofit",
    websiteUrl: "https://www.worldtelehealthinitiative.org/",
    logo: "/images/partners/world-telehealth-initiative.webp",
    featured: true,
    organizationSummary:
      "WTI connects volunteer medical specialists with healthcare teams in low-resource communities through telehealth.",
    projectQuestion:
      "WTI asked the UCLA team to analyze operational data from international clinical sites and identify patterns that could support future planning.",
    deliverables: [
      "Cleaned and organized operational data",
      "Analysis of clinical activity, volunteer hours, seasonal trends, and geographic patterns",
      "Tableau visualizations of telehealth reach and growth over time",
    ],
    images: [],
    reportExcerpt: "",
  },
];
