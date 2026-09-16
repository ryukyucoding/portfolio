import { useState } from 'react';
import { Icon } from '../ui/Icon';

interface GalleryProps {
  readonly images: readonly string[];
  readonly label: string;
}

/**
 * Cross-fading carousel inside a timeline card. Slides are letterboxed onto a
 * blurred copy of themselves, so portrait phone screenshots and landscape
 * photos can sit in the same gallery without either being cropped.
 */
export function Gallery({ images, label }: GalleryProps) {
  const [index, setIndex] = useState(0);
  const step = (delta: number) =>
    setIndex((current) => (current + delta + images.length) % images.length);

  return (
    <div className="gallery">
      {images.map((src, i) => (
        <div
          key={src}
          className={i === index ? 'gallery-slide is-active' : 'gallery-slide'}
          aria-hidden={i !== index}
        >
          <span className="gallery-wash" style={{ backgroundImage: `url("${src}")` }} />
          <img
            src={src}
            alt={`${label} — photo ${i + 1} of ${images.length}`}
            className="gallery-image"
            loading="lazy"
            decoding="async"
          />
        </div>
      ))}

      {images.length > 1 && (
        <>
          <button
            type="button"
            className="gallery-btn gallery-btn-prev"
            onClick={() => step(-1)}
            aria-label={`Previous photo of ${label}`}
          >
            <Icon name="chevronLeft" size={14} />
          </button>
          <button
            type="button"
            className="gallery-btn gallery-btn-next"
            onClick={() => step(1)}
            aria-label={`Next photo of ${label}`}
          >
            <Icon name="chevronRight" size={14} />
          </button>
          <span className="gallery-count" aria-hidden="true">
            {index + 1} / {images.length}
          </span>
        </>
      )}
    </div>
  );
}
