import type { IconName } from '../components/ui/Icon';

export interface TimelineLink {
  readonly icon: IconName;
  readonly label: string;
  readonly href: string;
}

export interface TimelineEntry {
  readonly id: string;
  readonly icon: IconName;
  readonly title: string;
  readonly org: string;
  readonly period: string;
  readonly description: string;
  readonly links?: readonly TimelineLink[];
  readonly gallery?: readonly string[];
}

const wildbotGallery = Array.from(
  { length: 7 },
  (_, i) => `/media/wildbot/wb-${String(i + 1).padStart(2, '0')}.webp`,
);

const cityRunGallery = Array.from(
  { length: 12 },
  (_, i) => `/media/awards/cityrun/cityrun-${String(i + 1).padStart(2, '0')}.webp`,
);

const imCampGallery = Array.from(
  { length: 5 },
  (_, i) => `/media/imcamp/imcamp-${String(i + 1).padStart(2, '0')}.webp`,
);

const tableTennisGallery = Array.from(
  { length: 3 },
  (_, i) => `/media/table-tennis/tt-${String(i + 1).padStart(2, '0')}.webp`,
);

const nightGallery = Array.from(
  { length: 13 },
  (_, i) => `/media/night/im-night-${String(i + 1).padStart(2, '0')}.webp`,
);

/** Most recent first — the timeline renders newest at the top, matching EXPERIENCE. */
export const TIMELINE: readonly TimelineEntry[] = [
  {
    id: 'wildbot',
    icon: 'robot',
    title: '7th Place Nationally',
    org: 'WildBot 2026 Robotics Challenge',
    period: 'May 2026',
    description:
      'Most of the field came from computer science. We came from information management, and entered anyway. Getting to the start line meant learning how software actually talks to hardware — SLAM to map the course, wiring up the sensors and drive motors, then writing the computer vision and the grasping logic for the bear-retrieval task. The hard part was the gap between simulation and the real thing: we first saw the actual course the day before the run, and spent the hours we had left rewriting against how the robot really behaved on it. Seventh place, and a much healthier respect for how unforgiving hardware is.',
    gallery: wildbotGallery,
  },
  {
    id: 'codefest',
    icon: 'award',
    title: 'Semi-finalist',
    org: 'Taipei CodeFest Hackathon 2025 — City Run',
    period: 'Nov 2025',
    description:
      'Plenty of people want to exercise but stall on motivation, so we turned it into a city treasure hunt. City Run lives inside Taipei Pass: start a session and it tracks your route by GPS, then you collect coins by tapping NFC checkpoints scattered across the city. Finish and it draws the route back with your stats. Clear every checkpoint in a district and you earn its badge, shareable as an image in one tap. The same location data gives the city a read on where people actually run and walk — input for public health policy, and a fit for Taipei\u2019s City of Sports agenda.',
    gallery: cityRunGallery,
  },
  {
    id: 'sinopac',
    icon: 'award',
    title: 'Honorable Mention',
    org: 'SinoPac Holdings Commercial Competition',
    period: 'May 2025',
    description:
      'Developed a blockchain-based peer-to-peer lending platform utilizing smart contracts for secure and transparent financial transactions. The platform features automated loan processing, risk assessment algorithms, and decentralized governance mechanisms for enhanced trust and efficiency.',
    gallery: ['/media/awards/sinopac-1.webp', '/media/awards/sinopac-2.webp'],
  },
  {
    id: 'im-night',
    icon: 'star',
    title: 'General Coordinator',
    org: '2025 Information Management Night & Week',
    period: 'Nov 2024 – July 2025',
    description:
      'Leading the organization of the annual Information Management Night & Week event, coordinating with multiple departments and managing event logistics for over 500 participants.',
    gallery: nightGallery,
  },
  {
    id: 'im-camp',
    icon: 'brush',
    title: 'Head of Marketing & Design',
    org: 'IM Camp',
    period: 'Oct 2024 – Feb 2025',
    description:
      'Leading the marketing and design team for IM Camp, creating visual identity and promotional materials to attract participants and ensure successful camp enrollment.',
    links: [
      {
        icon: 'instagram',
        label: '@ntuim_camp2026',
        href: 'https://www.instagram.com/ntuim_camp2026/',
      },
    ],
    gallery: imCampGallery,
  },
  {
    id: 'innoserve',
    icon: 'trophy',
    title: 'Champion',
    org: '2024 International ICT Innovative Services Awards',
    period: 'Sep 2024 – Oct 2024',
    description:
      'Won first place in my inaugural competition with EventMate, an AI-powered LINE Bot for event management. This milestone achievement marked the beginning of my journey in competitive innovation, where I experienced the excitement of transforming ideas into award-winning solutions.',
    gallery: [
      '/media/awards/innoserve-1.webp',
      '/media/awards/innoserve-2.webp',
      '/media/awards/innoserve-3.webp',
    ],
  },
  {
    id: 'publicity',
    icon: 'megaphone',
    title: 'Head of Publicity Department',
    org: 'NTU Information Management Student Association',
    period: 'Sep 2024 – June 2025',
    description:
      'Managing publicity strategies and social media presence for the student association, creating engaging content and coordinating with media partners to increase student engagement.',
    links: [
      { icon: 'filePdf', label: 'View Brochure', href: '/media/docs/brochure.pdf' },
      { icon: 'book', label: 'Orientation Book', href: '/media/docs/orientation-book.pdf' },
      { icon: 'instagram', label: '@ntu.imsa', href: 'https://www.instagram.com/ntu.imsa/' },
      { icon: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/share/19T2cSS6ja/' },
    ],
  },
  {
    id: 'table-tennis',
    icon: 'tableTennis',
    title: 'Vice Captain',
    org: 'IM Department Table Tennis Team',
    period: 'May 2024 – June 2025',
    description:
      'Supporting team management and training coordination, fostering team spirit and organizing competitive matches and practice sessions for department tournaments.',
    gallery: tableTennisGallery,
  },
];
