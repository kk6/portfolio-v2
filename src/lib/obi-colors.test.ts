import assert from 'node:assert/strict';
import { test } from 'node:test';
import { contrast, GROUND, luminance, obiColors, textOn } from './obi-colors.ts';

const pixels = (...rgbs: [number, number, number, number][]) =>
  Uint8Array.from(rgbs.flatMap(([r, g, b, n]) => Array.from({ length: n }, () => [r, g, b]).flat()));

test('puts the darker color on top and keeps both obis readable and visible', () => {
  const [top, bottom] = obiColors(pixels([250, 220, 210, 50], [40, 40, 50, 40], [255, 255, 255, 200]), 3);
  assert.ok(luminance(top) <= luminance(bottom));
  for (const c of [top, bottom]) {
    assert.ok(contrast(c, textOn(c)) >= 4.5, `${c} text contrast`);
    assert.ok(contrast(c, GROUND) >= 1.4, `${c} against the ground`);
  }
});

test('ignores the white ground', () => {
  const [top, bottom] = obiColors(pixels([255, 255, 255, 1000], [30, 60, 120, 10], [200, 210, 220, 8]), 3);
  assert.notEqual(top, bottom);
  assert.ok(contrast(top, GROUND) >= 1.4);
});

test('falls back when the image is all white', () => {
  assert.equal(obiColors(pixels([255, 255, 255, 100]), 3).length, 2);
});
