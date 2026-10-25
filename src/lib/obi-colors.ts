// Obi colors taken from an artwork: the two most common colors (white ground excluded),
// muted to the Quiet Editorial range and adjusted until the obi text is readable.

export type Rgb = [number, number, number];
type Lab = [number, number, number];

export const GROUND = '#fefefe';
export const ON_DARK = '#f4f6f4';
export const ON_LIGHT = '#26282b';

const toLin = (c: number) => ((c /= 255) <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
const toByte = (c: number) =>
  Math.round(255 * Math.min(1, Math.max(0, c <= 0.0031308 ? 12.92 * c : 1.055 * c ** (1 / 2.4) - 0.055)));
const hexToRgb = (h: string): Rgb => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16)) as Rgb;
const rgbToHex = (rgb: number[]) => '#' + rgb.map((n) => n.toString(16).padStart(2, '0')).join('');

export const luminance = (hex: string) => {
  const [r, g, b] = hexToRgb(hex).map(toLin);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
export const contrast = (a: string, b: string) => {
  const [x, y] = [luminance(a), luminance(b)].sort((m, n) => n - m);
  return (x + 0.05) / (y + 0.05);
};
export const textOn = (bg: string) => (contrast(bg, ON_DARK) >= contrast(bg, ON_LIGHT) ? ON_DARK : ON_LIGHT);

function toOklab([r, g, b]: Rgb): Lab {
  [r, g, b] = [r, g, b].map(toLin) as Rgb;
  const l = Math.cbrt(0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b);
  const m = Math.cbrt(0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b);
  const s = Math.cbrt(0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b);
  return [
    0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s,
    1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s,
    0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s,
  ];
}

function fromOklab([L, A, B]: Lab): string {
  const l = (L + 0.3963377774 * A + 0.2158037573 * B) ** 3;
  const m = (L - 0.1055613458 * A - 0.0638541728 * B) ** 3;
  const s = (L - 0.0894841775 * A - 1.291485548 * B) ** 3;
  return rgbToHex(
    [
      4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
      -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
      -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s,
    ].map(toByte),
  );
}

// Cap chroma, keep the obi visible against the ground (1.4:1) and its text readable (4.5:1).
function fitObi([L, A, B]: Lab): string {
  const C = Math.hypot(A, B);
  const k = C > 0.08 ? 0.08 / C : 1;
  const lab: Lab = [L, A * k, B * k];
  let hex = fromOklab(lab);
  while ((contrast(hex, GROUND) < 1.4 || contrast(hex, textOn(hex)) < 4.5) && lab[0] > 0.05) {
    lab[0] -= 0.02;
    hex = fromOklab(lab);
  }
  return hex;
}

/** Two obi colors from raw RGB(A) pixels, the darker one first (it carries the name). */
export function obiColors(pixels: Uint8Array | Uint8ClampedArray, channels: number): [string, string] {
  const bins = new Map<string, { n: number; lab: Lab }>();
  for (let i = 0; i < pixels.length; i += channels) {
    const lab = toOklab([pixels[i], pixels[i + 1], pixels[i + 2]]);
    if (lab[0] > 0.96 && Math.hypot(lab[1], lab[2]) < 0.02) continue; // white ground
    const key = lab.map((v, j) => Math.round(v / (j ? 0.03 : 0.08))).join();
    const bin = bins.get(key) ?? { n: 0, lab: [0, 0, 0] };
    bin.n++;
    lab.forEach((v, j) => (bin.lab[j] += v));
    bins.set(key, bin);
  }
  const clusters = [...bins.values()].sort((a, b) => b.n - a.n).map((b) => b.lab.map((v) => v / b.n) as Lab);
  if (clusters.length === 0) return [ON_LIGHT, '#d6d2d0']; // an all-white image has no color to take
  const dist = (a: Lab, b: Lab) => Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]);
  const first = clusters[0];
  const second = clusters.find((c) => dist(c, first) > 0.2) ?? clusters[1] ?? first;
  const pair = [fitObi(first), fitObi(second)] as [string, string];
  return luminance(pair[0]) <= luminance(pair[1]) ? pair : [pair[1], pair[0]];
}
