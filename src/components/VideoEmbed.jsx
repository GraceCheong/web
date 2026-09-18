import { toEmbedUrl } from '../utils/video'

export default function VideoEmbed({ url, title }) {
  const embedUrl = toEmbedUrl(url)
  if (!embedUrl) return null

  return (
    <div className="video-embed">
      <iframe
        src={embedUrl}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}
