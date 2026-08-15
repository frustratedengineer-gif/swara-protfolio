/**
 * Placeholder imagery is hotlinked from Unsplash (images.unsplash.com, no API key required).
 * Swap PLACEHOLDER ids in src/data/work.json for real photography/video assets later —
 * everything downstream just reads `cover`/`media` URLs, so no component changes are needed.
 */
export function unsplash(id, { w = 1600, q = 80 } = {}) {
  return `https://images.unsplash.com/photo-${id}?w=${w}&q=${q}&auto=format&fit=crop`
}
