import type { ImageMetadata } from 'astro';
import path from 'node:path';
import sharp from 'sharp';
import { obiColors } from '../lib/obi-colors.ts';

type WorkEntry = {
  file: string;
  title: string;
  alt: string;
  /** Hand-picked obi colors, upper (name) then lower. Overrides the extracted pair. */
  obi?: [string, string];
};

const entries: WorkEntry[] = [
  { file: 'work-01.webp', title: '凪にほどける', alt: '膝を抱えて座る、白い髪の少女のイラスト' },
  { file: 'work-02.webp', title: 'Peace!!', alt: 'ギターを抱えてピースサインをする、ポニーテールの少女のイラスト' },
  { file: 'work-03.webp', title: '夏', alt: '両腕を広げて笑う、ツインテールの少女のイラスト' },
  { file: 'work-04.webp', title: 'アンニュイな朝', alt: '窓辺でカップを手にくつろぐ、黒髪の少女のイラスト' },
  { file: 'work-05.png', title: '「ちょっと待っててね」', alt: '教室で髪を結ぶ、セーラー服の少女のイラスト' },
  { file: 'work-06.png', title: '八尋ありす', alt: 'ギターを持つ八尋ありすの設定画' },
  {
    file: 'work-07.webp',
    title: '「今日も寒いね」',
    alt: '赤いマフラーを巻いてベンチで缶を飲む少女のイラスト',
    obi: ['#8e3432', '#1d1d1f'], // the scarf red, then the uniform black
  },
];

const images = import.meta.glob<ImageMetadata>('../assets/works/*', { eager: true, import: 'default' });

export type Work = WorkEntry & { image: ImageMetadata; landscape: boolean; obi: [string, string] };

async function extract(file: string): Promise<[string, string]> {
  // Astro builds from the project root; sharp needs a file path, not the bundled import.
  const { data, info } = await sharp(path.join(process.cwd(), 'src/assets/works', file))
    .resize(96)
    .removeAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  return obiColors(data, info.channels);
}

export const works: Work[] = await Promise.all(
  entries.map(async (e) => {
    const image = images[`../assets/works/${e.file}`];
    if (!image) throw new Error(`Missing artwork file: src/assets/works/${e.file}`);
    return { ...e, image, landscape: image.width > image.height, obi: e.obi ?? (await extract(e.file)) };
  }),
);
