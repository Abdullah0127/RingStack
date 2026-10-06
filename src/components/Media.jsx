import { useState } from 'react'

// Lazy-loaded image. If the file is missing, a clean placeholder shows instead (no broken-image icon).
export default function Media({ src, alt, className = '', width, height, label }) {
  const [failed, setFailed] = useState(!src)

  if (failed) {
    return (
      <div className={`ph ${className}`} role="img" aria-label={alt}>
        <span>{label ?? alt}</span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
    />
  )
}
