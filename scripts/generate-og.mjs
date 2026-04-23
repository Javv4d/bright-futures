#!/usr/bin/env node
/**
 * Generates OG image + favicon PNGs from the brand.
 * Output: public/og-image.png (1200x630), public/favicon-32.png, public/apple-touch-icon.png
 *
 * Runs as `prebuild`, so every deploy ships fresh images that match current copy.
 */
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const pub = resolve(root, 'public');

const INK = '#0B1220';
const PAPER = '#FEFAF1';
const PAPER_DEEP = '#F9F1DF';
const AMBER = '#F5A524';

async function loadFont(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch font ${url}: ${res.status}`);
  return Buffer.from(await res.arrayBuffer());
}

async function buildOg() {
  const favSvg = await readFile(resolve(pub, 'favicon.svg'), 'utf8');
  const favDataUrl = `data:image/svg+xml;base64,${Buffer.from(favSvg).toString('base64')}`;

  const [fraunces700, inter500, inter700] = await Promise.all([
    loadFont('https://github.com/undefinedbehavior/fraunces/raw/main/fonts/static/Fraunces-SemiBold.ttf'),
    loadFont('https://github.com/rsms/inter/raw/master/docs/font-files/Inter-Medium.woff'),
    loadFont('https://github.com/rsms/inter/raw/master/docs/font-files/Inter-Bold.woff'),
  ]).catch(async () => {
    // Fallback: use Google Fonts github mirror via jsdelivr
    const [a, b, c] = await Promise.all([
      loadFont('https://cdn.jsdelivr.net/fontsource/fonts/fraunces@latest/latin-600-normal.ttf'),
      loadFont('https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-500-normal.ttf'),
      loadFont('https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-700-normal.ttf'),
    ]);
    return [a, b, c];
  });

  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px',
          gap: '48px',
          background: `linear-gradient(135deg, ${PAPER} 0%, ${PAPER_DEEP} 100%)`,
          position: 'relative',
          fontFamily: 'Inter',
          color: INK,
        },
        children: [
          {
            type: 'div',
            props: {
              style: {
                position: 'absolute',
                top: '-160px',
                right: '-160px',
                width: '640px',
                height: '640px',
                borderRadius: '9999px',
                background: AMBER,
                opacity: 0.22,
                filter: 'blur(60px)',
              },
            },
          },
          {
            type: 'div',
            props: {
              style: {
                position: 'absolute',
                bottom: '-200px',
                left: '-200px',
                width: '640px',
                height: '640px',
                borderRadius: '9999px',
                background: INK,
                opacity: 0.06,
                filter: 'blur(70px)',
              },
            },
          },
          {
            type: 'div',
            props: {
              style: { display: 'flex', alignItems: 'center', gap: '28px' },
              children: [
                {
                  type: 'img',
                  props: {
                    src: favDataUrl,
                    width: 140,
                    height: 140,
                    style: { borderRadius: '32px' },
                  },
                },
                {
                  type: 'div',
                  props: {
                    style: {
                      fontFamily: 'Fraunces',
                      fontSize: '124px',
                      fontWeight: 600,
                      letterSpacing: '-0.035em',
                      lineHeight: 1,
                    },
                    children: 'Bright Futures',
                  },
                },
              ],
            },
          },
          {
            type: 'div',
            props: {
              style: {
                fontSize: '38px',
                fontWeight: 700,
                letterSpacing: '0.32em',
                textTransform: 'uppercase',
                color: INK,
                opacity: 0.75,
              },
              children: 'Students helping Students',
            },
          },
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                alignItems: 'center',
                background: INK,
                color: PAPER,
                padding: '24px 44px',
                borderRadius: '9999px',
                fontSize: '36px',
                fontWeight: 700,
                gap: '18px',
                marginTop: '8px',
              },
              children: [
                {
                  type: 'div',
                  props: {
                    style: {
                      width: '16px',
                      height: '16px',
                      borderRadius: '9999px',
                      background: AMBER,
                    },
                  },
                },
                '100% direct to students',
              ],
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: 'Fraunces', data: fraunces700, weight: 600, style: 'normal' },
        { name: 'Inter', data: inter500, weight: 500, style: 'normal' },
        { name: 'Inter', data: inter700, weight: 700, style: 'normal' },
      ],
    },
  );

  const og = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } }).render().asPng();
  await writeFile(resolve(pub, 'og-image.png'), og);
  console.log('✓ og-image.png (1200×630)');

  return svg;
}

async function buildIcons() {
  const favSvg = await readFile(resolve(pub, 'favicon.svg'), 'utf8');
  const fav32 = new Resvg(favSvg, { fitTo: { mode: 'width', value: 32 } }).render().asPng();
  const apple = new Resvg(favSvg, {
    fitTo: { mode: 'width', value: 180 },
    background: PAPER,
  })
    .render()
    .asPng();
  await writeFile(resolve(pub, 'favicon-32.png'), fav32);
  await writeFile(resolve(pub, 'apple-touch-icon.png'), apple);
  console.log('✓ favicon-32.png, apple-touch-icon.png');
}

try {
  await buildOg();
  await buildIcons();
} catch (err) {
  console.error('OG generation failed:', err);
  process.exit(1);
}
