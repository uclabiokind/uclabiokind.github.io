export const chapterEmail = "uclachapter@biokind.org";
export const instagramUrl = "https://www.instagram.com/biokind_ucla";
export const nationalUrl = "https://www.biokind.org/";
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
  },
  {
    name: "Ella Chatterjee",
    role: "Vice President",
    study: "Fourth year · Statistics & Data Science",
    image: "/images/members/ella-chatterjee.jpg",
    group: "Board",
  },
  {
    name: "Preston Gao",
    role: "Head of External Operations",
    study: "Fourth year · Statistics & Data Science Engineering",
    image: "/images/members/preston-gao.jpg",
    group: "Board",
  },
  {
    name: "Michael Makhoul",
    role: "Head of Technical Operations",
    study: "Third year · Bioengineering",
    image: "/images/members/michael-makhoul.jpg",
    group: "Board",
  },
  {
    name: "Abigail Rodriguez",
    role: "Head of Project Management",
    study: "Fourth year · Statistics & Data Science",
    image: "/images/members/abigail-rodriguez.jpg",
    group: "Board",
  },
  {
    name: "Melanie Pizano",
    role: "Head of Project Management",
    study: "Fourth year · Statistics & Data Science",
    image: "/images/members/melanie-pizano.jpg",
    group: "Board",
  },
];
