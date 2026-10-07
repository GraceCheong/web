import { useState } from 'react'

export default function WorkImage({ src, alt, className }) {
  const [failedSrc, setFailedSrc] = useState(null)

  if (failedSrc === src) {
    return <span className="image-fallback">Figure unavailable</span>
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setFailedSrc(src)}
      onLoad={(event) => {
        const image = event.currentTarget
        image.classList.toggle('is-wide', image.naturalWidth / image.naturalHeight > 16 / 9)
      }}
    />
  )
}
