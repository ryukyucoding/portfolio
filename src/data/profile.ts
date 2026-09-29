export type SocialId = 'github' | 'linkedin' | 'instagram' | 'facebook';

export interface SocialLink {
  readonly id: SocialId;
  readonly label: string;
  readonly href: string;
}

export const PROFILE = {
  name: 'Hsuan-Yu Liu',
  avatar: '/media/avatar.webp',
  greeting: 'Hi, my name is',
  tagline: 'I build things for the web.',
  location: 'Taipei, Taiwan',
  email: 'hsuanyuu.liu@gmail.com',
  resumeHref: '/media/docs/resume.pdf',
  intro:
    "I'm an Information Management student at [[NTU]] building full-stack products and doing research in [[HCI]] and [[applied AI]] — currently an AI development intern on a Microsoft project and a research assistant at NCU's WIDM Lab.",
} as const;

export const SOCIALS: readonly SocialLink[] = [
  { id: 'github', label: 'GitHub', href: 'https://github.com/ryukyucoding' },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/sherryliuyu/' },
  { id: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/_.ryuquuu._/' },
  {
    id: 'facebook',
    label: 'Facebook',
    href: 'https://www.facebook.com/share/19iiJcUxzi/',
  },
];

export interface NavItem {
  readonly id: string;
  readonly number: string;
  readonly label: string;
}

export const NAV_ITEMS: readonly NavItem[] = [
  { id: 'about', number: '01', label: 'About' },
  { id: 'experience', number: '02', label: 'Experience' },
  { id: 'projects', number: '03', label: 'Projects' },
  { id: 'leadership', number: '04', label: 'Leadership' },
  { id: 'skills', number: '05', label: 'Skills' },
  { id: 'contact', number: '06', label: 'Contact' },
];

export const EDUCATION = {
  school: 'National Taiwan University',
  degree: 'B.B.A. in Information Management',
  period: 'Expected June 2027',
  gpa: 'cGPA 4.18 / 4.3',
  honors: [
    'Academic Achievement Award ×3 — Spring 2024, Fall 2025 (ranked 1st / 55), Spring 2026',
    'Ranked 6th / 84 in the department (top 7%)',
    "President's Award, 2025",
    'Web Programming — ranked 1st / 150',
  ],
  coursework: [
    'Data Structure & Algorithm',
    'Database',
    'Web Programming',
    'Machine Learning',
    'Artificial Intelligence',
    'Computer Vision with Deep Learning',
    'Cloud Native',
    'Linux',
  ],
} as const;

export const ABOUT = {
  portrait: '/media/portrait.webp',
  paragraphs: [
    "Hello! I'm Hsuan-Yu — most people call me Sherry. I study Information Management at National Taiwan University, and I enjoy the stretch between [[research]] and [[shipping]]: figuring out what people actually need, then building the thing that does it.",
    'Right now I split my time three ways — [[AI development]] on a Microsoft project, building RAG systems over Microsoft documentation; an [[LLM agent]] Copilot for n8n at NCU\'s WIDM Lab; and [[Caring Machine]], my senior capstone, a multimodal AI companion that learns from user feedback. Before that I did [[HCI research]] at Université de Montréal on AI-assisted music composition and [[product work]] at Printage on an AI companion app with 250K+ users. Along the way I\'ve picked up full-stack development, a fondness for well-shaped data models, and the habit of measuring whether a change actually helped.',
    "When I'm not coding, I love [[traveling]], [[river tracing]], and [[scuba diving]] — always seeking new experiences and perspectives!",
  ],
  currentStackLead: "Here are a few technologies I've been working with recently:",
  currentStack: ['Next.js', 'React', 'TypeScript', 'Python', 'PyTorch', 'PostgreSQL'],
} as const;

export const CONTACT = {
  heading: 'Get In Touch',
  body: "I am currently looking for new opportunities, and my inbox is always open. Whether you're interested in working with me or just want to chat, I'll try my best to get back to you!",
  ctaLabel: 'Say Hello',
} as const;
