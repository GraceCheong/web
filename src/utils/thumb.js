// Maps a local public/ image to its pre-scaled copy from scripts/make-thumbs.mjs.
// Remote URLs are returned unchanged.
export function thumb(src) {
  if (!src || /^(https?:)?\/\//.test(src)) return src
  const lead = src.startsWith('/') ? '/' : ''
  return `${lead}thumbs/${src.replace(/^\//, '').replace(/\.(jpe?g|png|webp)$/i, '.webp')}`
}
