import type { IconName } from '../components/ui/Icon';

export interface ProjectLink {
  readonly icon: IconName;
  readonly label: string;
  /** Omit for status badges that are not clickable, e.g. "Working on". */
  readonly href?: string;
}

export interface Project {
  readonly id: string;
  readonly title: string;
  readonly stack: string;
  readonly period: string;
  readonly summary: string;
  /** Drop a screenshot in public/media/projects/ and point here; omit for a generated cover. */
  readonly image?: string;
  /** object-position for the cover crop. Defaults to 'top center' (page screenshots). */
  readonly imagePosition?: string;
  /** Use 'contain' for artwork that must not be cropped, e.g. a title card. */
  readonly imageFit?: 'cover' | 'contain';
  readonly links: readonly ProjectLink[];
}

export const PROJECTS: readonly Project[] = [
  {
    id: 'tangyuan',
    title: 'Tangyuan — NTU Study Abroad & Community Platform',
    stack: 'Next.js 15, TypeScript, Supabase, GitHub Actions',
    period: 'Dec 2025 – Present',
    summary:
      "Partnered with NTU's Office of International Affairs to become the officially recommended platform for exchange students, linked directly from NTU's exchange program website. Hit 2,500 peak DAU within two days of launch (3.56K visitors, 8.16K page views). Features an interactive map and real-time community, backed by an automated data pipeline aggregating 289 universities and 400+ reviews.",
    image: '/media/projects/tangyuan.webp',
    imagePosition: 'center',
    links: [
      { icon: 'link', label: 'tang-yuan.vercel.app', href: 'https://tang-yuan.vercel.app' },
      {
        icon: 'instagram',
        label: '@tanggggyuannnn',
        href: 'https://www.instagram.com/tanggggyuannnn/',
      },
    ],
  },
  {
    id: 'ten-tan-tank',
    title: 'Ten Tan Tanks!!!',
    stack: 'Unity, C#, 2D physics, enemy AI',
    period: 'Oct 2025 – Dec 2025',
    summary:
      'A top-down 2D tank shooter where every bullet ricochets off walls, so angles matter more than aim — you flush enemies out of cover instead of shooting at them. Kills earn points across movement speed, bullet speed and fire rate, and clearing certain levels opens a diep.io-style barrel evolution wheel (long and thin for velocity, thick for area, or multi-barrel for volume). Four enemy types escalate from stationary turrets to a purple AI that actively dodges incoming fire. I built the enemy AI behaviours and the game UI — menus, level transitions, the in-game HUD and audio.',
    image: '/media/projects/ten-tan-tanks.png',
    imageFit: 'contain',
    links: [
      {
        icon: 'youtube',
        label: 'Gameplay demo',
        href: 'https://www.youtube.com/watch?v=nYBn5r_cNUc',
      },
      { icon: 'gamepad', label: 'Play on itch.io', href: 'https://kangcheng.itch.io/tententen' },
    ],
  },
  {
    id: 'wugao-match',
    title: '舞告 Match',
    // TODO(confirm): the technology stack is still a placeholder.
    stack: 'Web platform, database systems final project',
    period: 'Oct 2025 – Dec 2025',
    summary:
      'An online matchmaking platform for K-pop dance cover enthusiasts. Users pick a song from the library, start a cover project, then set how many dancers they need along with rehearsal location and schedule; everyone else browses by dance level and interest to find a project that fits and joins it.',
    image: '/media/projects/match.webp',
    links: [
      {
        icon: 'youtube',
        label: 'Project demo',
        href: 'https://www.youtube.com/watch?v=elJf0Xa6cq4',
      },
    ],
  },
  {
    id: 'workexchange',
    title: 'Workexchange Platform',
    stack: 'Full-stack, Vue.js, MongoDB',
    period: '2025',
    summary:
      'A platform connecting job seekers with employers and hostel experience sharing community. Features include user authentication, job posting and searching, application management, real-time messaging, and accommodation experience sharing.',
    image: '/media/projects/workexchange.webp',
    links: [{ icon: 'wrench', label: 'Working on' }],
  },
  {
    id: 'pest-erp',
    title: 'Zhongxing Pest Control ERP System',
    stack: 'React, TypeScript, Firebase, Google API',
    period: '2025',
    summary:
      'Enterprise Resource Planning system for pest control company management. Features customer relationship management, work order scheduling, task tracking, and financial reporting. Integrated with Google Maps API for route optimization and Firebase for real-time data synchronization.',
    image: '/media/projects/erp.webp',
    links: [
      {
        icon: 'github',
        label: 'js_pest_crm',
        href: 'https://github.com/pierrechen2001/js_pest_crm',
      },
      {
        icon: 'youtube',
        label: 'Demo Video',
        href: 'https://www.youtube.com/watch?v=ViVosgnhEbM',
      },
    ],
  },
  {
    id: 'eventmate',
    title: 'EventMate',
    stack: 'LINE Bot, OpenAI API, CRM system',
    period: '2024',
    summary:
      'AI-powered LINE Bot for event management. Features intelligent conversation handling, automated event scheduling, customer inquiry management, and CRM integration with personalized notifications, post-event surveys, and AI-driven event recommendations. Won the 2024 International ICT Innovative Services Awards.',
    image: '/media/projects/eventmate.webp',
    links: [
      {
        icon: 'youtube',
        label: 'EventMate',
        href: 'https://youtu.be/cYsosrucMoU?si=rkfbsHuChNl4E-MS',
      },
    ],
  },
  {
    id: 'pipcamp',
    title: 'Orientation Camp Website',
    stack: 'Front-end, HTML, CSS, JavaScript',
    period: '2024',
    summary:
      'Interactive website for NTU Information Management orientation camp. Features event information, registration system, activity schedules, and participant communication tools.',
    image: '/media/projects/pipcamp.webp',
    links: [
      {
        icon: 'github',
        label: 'ntupipcamp2024',
        href: 'https://github.com/Angelicac-Wang/ntupipcamp2024',
      },
    ],
  },
];
