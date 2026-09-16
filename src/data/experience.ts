import type { IconName } from '../components/ui/Icon';

export interface ExperienceLink {
  readonly icon: IconName;
  readonly label: string;
  readonly href: string;
}

export interface ExperienceEntry {
  readonly id: string;
  /** Short label for the tab strip. */
  readonly org: string;
  readonly role: string;
  readonly orgFull: string;
  /** Links the org name itself. Omit when the organisation has no live site. */
  readonly orgHref?: string;
  readonly location: string;
  readonly period: string;
  /** Shown in the square panel beside the tabs; swaps as tabs change. */
  readonly photo: string;
  readonly photoAlt: string;
  readonly highlights: readonly string[];
  readonly stack: readonly string[];
  /** Extra context — the programme, the product, the lab's publications. */
  readonly links?: readonly ExperienceLink[];
}

/** Most recent first — the tab strip and the mobile list both read in this order. */
export const EXPERIENCE: readonly ExperienceEntry[] = [
  {
    id: 'mitacs',
    org: 'Mitacs',
    role: 'Mitacs Globalink Research Intern',
    orgFull: 'Montréal HCI Group, Université de Montréal',
    orgHref: 'https://hci.iro.umontreal.ca/',
    location: 'Montréal, Canada',
    period: 'June 2026 – Present',
    photo: '/media/work/mitacs.webp',
    photoAlt: 'Outside Pavillon André-Aisenstadt at Université de Montréal',
    highlights: [
      'Selected for the Mitacs Globalink Research Internship — a fully-funded competitive international program (~CAD 12,000) — to conduct HCI research under Prof. Damien Masson.',
      'Designing a graphical, AI-assisted music composition interface that lets non-expert users manipulate melody, harmony, and rhythm directly, without needing music production skills.',
    ],
    stack: ['HCI Research', 'Interaction Design', 'Generative AI'],
    links: [
      {
        icon: 'link',
        label: 'Mitacs Globalink',
        href: 'https://www.mitacs.ca/our-programs/globalink-research-internship-students/',
      },
    ],
  },
  {
    id: 'printage',
    org: 'Printage',
    role: 'Software Engineer Intern',
    orgFull: 'Printage, Inc. (智見科技)',
    location: 'Hsinchu, Taiwan',
    period: 'Feb 2026 – Present',
    photo: '/media/work/printage.webp',
    photoAlt: 'The Printage team together at the office',
    highlights: [
      'Shipped 9 production features for Floze, an AI companion app with 250K+ users and 20K DAU.',
      'Built a Meta Ads batch automation tool that cut campaign creation from ~4 hours to under 10 minutes, replacing manual per-campaign duplication with a one-time batch setup.',
      'Integrated AI-driven ad performance analysis, auto-generating daily reports and optimization recommendations to improve marketing ROI.',
    ],
    stack: ['Vue.js', 'TypeScript', 'AWS Lambda', 'MySQL', 'Prisma', 'DynamoDB', 'Redis'],
    links: [{ icon: 'link', label: 'Floze', href: 'https://floze.ai/' }],
  },
  {
    id: 'widm',
    org: 'WIDM Lab',
    role: 'Research Assistant',
    orgFull: 'WIDM Lab, National Central University',
    orgHref: 'https://sites.google.com/site/nculab/',
    location: 'Taoyuan, Taiwan',
    period: 'July 2025 – Present',
    photo: '/media/work/widm.webp',
    photoAlt: 'With the WIDM Lab research group',
    highlights: [
      'Built a natural-language-to-n8n agentic pipeline: GPT-4o intent detection, a fine-tuned LLM for node operations (Create / Modify / Delete / Insert), and ChromaDB-backed RAG over a self-constructed knowledge graph.',
      'Achieved 14.3% / 47.7% gains in Node / Connection F1 over a pure-LLM baseline; paper in preparation.',
    ],
    stack: ['Python', 'GPT-4o', 'RAG', 'ChromaDB', 'Knowledge Graph', 'n8n'],
  },
];
