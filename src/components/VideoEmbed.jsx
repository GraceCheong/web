import { toEmbedUrl } from '../utils/video'

export default function VideoEmbed({ url, title }) {
  if (!url?.trim()) return null
  const embedUrl = toEmbedUrl(url)
  const filePath = url.trim()
  const isLocalFile = !/^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(filePath)
  const isVideoFile = /\.(?:mp4|webm|ogv|ogg|mov)(?:[?#]|$)/i.test(filePath)
  if (!embedUrl && !isLocalFile && !isVideoFile) return null
  const videoSrc = isLocalFile
    ? `${import.meta.env.BASE_URL}${filePath.replace(/^\/+/, '')}`
    : filePath

  return (
    <div className="video-embed">
      {embedUrl ? <iframe
        src={embedUrl}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      /> : (
        <video src={videoSrc} controls playsInline preload="metadata" aria-label={title}>
          Your browser does not support video playback.
        </video>
      )}
    </div>
  )
}
