/**
 * Regenerates public/media/tech/*.svg from the simple-icons package so every
 * skill tile shares one visual system. Run with `npm run icons` after editing
 * the ICONS table below.
 *
 * Brand colours that are too dark to read on the site's backdrop get an
 * explicit lighter override.
 */
import { mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const simpleIcons = require('simple-icons');

const OUT_DIR = new URL('../public/media/tech/', import.meta.url);

const byTitle = new Map(Object.values(simpleIcons).map((icon) => [icon.title, icon]));

/** file slug -> simple-icons title, with an optional legibility override. */
const ICONS = [
  ['python', 'Python'],
  ['c', 'C'],
  ['cpp', 'C++'],
  ['typescript', 'TypeScript'],
  ['javascript', 'JavaScript'],
  ['bash', 'GNU Bash'],
  ['html5', 'HTML5'],
  ['css3', 'CSS'],
  ['react', 'React'],
  ['nextjs', 'Next.js', '#ffffff'],
  ['vuejs', 'Vue.js'],
  ['vite', 'Vite'],
  ['tailwind', 'Tailwind CSS'],
  ['nodejs', 'Node.js'],
  ['django', 'Django', '#44B78B'],
  ['fastapi', 'FastAPI'],
  ['pytorch', 'PyTorch'],
  ['huggingface', 'Hugging Face'],
  ['postgresql', 'PostgreSQL', '#6C8FF5'],
  ['mysql', 'MySQL', '#6FA8DC'],
  ['mongodb', 'MongoDB'],
  ['supabase', 'Supabase'],
  ['firebase', 'Firebase', '#FF7043'],
  ['redis', 'Redis'],
  ['git', 'Git'],
  ['docker', 'Docker'],
  ['jenkins', 'Jenkins', '#E8705C'],
  ['linux', 'Linux'],
  ['gcp', 'Google Cloud'],
];

/** Not in simple-icons (trademark-restricted or no mark) — drawn as wordmarks. */
const WORDMARKS = [
  ['sql', 'SQL', '#C9B6E4'],
  ['csharp', 'C#', '#A97BFF'],
  ['dynamodb', 'DynamoDB', '#5294FF'],
  ['awslambda', 'Lambda', '#FF9E5E'],
  ['chromadb', 'Chroma', '#FFCF5C'],
];

const svgShell = (body) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="60" height="60" role="img">${body}</svg>\n`;

rmSync(OUT_DIR, { recursive: true, force: true });
mkdirSync(OUT_DIR, { recursive: true });

for (const [slug, title, override] of ICONS) {
  const icon = byTitle.get(title);
  if (!icon) throw new Error(`simple-icons has no entry titled "${title}"`);
  const fill = override ?? `#${icon.hex}`;
  writeFileSync(
    new URL(`${slug}.svg`, OUT_DIR),
    svgShell(`<title>${icon.title}</title><path fill="${fill}" d="${icon.path}"/>`),
  );
}

for (const [slug, label, color] of WORDMARKS) {
  const fontSize = label.length <= 3 ? 8 : 6;
  writeFileSync(
    new URL(`${slug}.svg`, OUT_DIR),
    svgShell(
      `<title>${label}</title>` +
        `<rect x="1" y="4.5" width="22" height="15" rx="3.5" fill="none" stroke="${color}" stroke-width="1.4"/>` +
        `<text x="12" y="12" fill="${color}" font-family="Inter, Helvetica, Arial, sans-serif"` +
        ` font-size="${fontSize}" font-weight="700" text-anchor="middle" dominant-baseline="central">${label}</text>`,
    ),
  );
}

console.log(`wrote ${ICONS.length + WORDMARKS.length} icons to public/media/tech/`);
