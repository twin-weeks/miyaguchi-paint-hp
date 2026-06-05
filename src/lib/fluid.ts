/**
 * Fluid (liquid responsive) helpers.
 * Formula: clamp(min, base / baseline * 100vw, max)
 *
 * - fluid375: SP baseline. Use for SP-first sizing or px values that should
 *   feel right at 375px width (most SP comps).
 * - fluid1440: PC baseline. Use for Figma 1440px artboard values.
 *
 * Both produce a clamp() string usable directly in inline `style`.
 */

export const vw375 = (n: number) => `calc(${n} / 375 * 100vw)`;
export const fluid375 = (min: number, base: number, max: number) =>
  `clamp(${min}px, ${vw375(base)}, ${max}px)`;

export const vw1440 = (n: number) => `calc(${n} / 1440 * 100vw)`;
export const fluid1440 = (min: number, base: number, max: number) =>
  `clamp(${min}px, ${vw1440(base)}, ${max}px)`;
