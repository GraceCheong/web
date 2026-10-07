// Pre-scales local images in public/ into public/thumbs/ so small previews
// are not downscaled by the browser from full-resolution originals.
import { mkdir, readdir, stat } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const PUBLIC_DIR = 'public'
const THUMB_DIR = path.join(PUBLIC_DIR, 'thumbs')
// 2x the widest preview slot (hero photo: 168px) for sharp rendering on high-DPI screens.
const THUMB_WIDTH = 400
const IMAGE_EXT = /\.(jpe?g|png|webp)$/i

async function listImages(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = await Promise.all(
    entries.map(async (entry) => {
      const full = path.join(dir, entry.name)
      if (entry.isDirectory()) return full === THUMB_DIR ? [] : listImages(full)
      return IMAGE_EXT.test(entry.name) ? [full] : []
    }),
  )
  return files.flat()
}

async function isFresh(src, out) {
  try {
    return (await stat(out)).mtimeMs >= (await stat(src)).mtimeMs
  } catch {
    return false
  }
}

for (const src of await listImages(PUBLIC_DIR)) {
  const rel = path.relative(PUBLIC_DIR, src)
  const out = path.join(THUMB_DIR, rel.replace(IMAGE_EXT, '.webp'))
  if (await isFresh(src, out)) continue

  await mkdir(path.dirname(out), { recursive: true })
  await sharp(src)
    .rotate()
    .resize({ width: THUMB_WIDTH, withoutEnlargement: true })
    .webp({ quality: 86 })
    .toFile(out)
  console.log(`thumb: ${rel} -> ${path.relative(PUBLIC_DIR, out)}`)
}
