import { useState } from 'react';
import { Icon } from '../ui/Icon';

interface GalleryProps {
  readonly images: readonly string[];
  readonly label: string;
}

/** Keep the neighbours mounted so stepping cross-fades instead of popping. */
const neighbours = (index: number, count: number): number[] =>
  [index - 1, index, index + 1].filter((i) => i >= 0 && i < count);

/**
 * Cross-fading carousel inside a timeline card. Slides are letterboxed onto a
 * blurred copy of themselves, so portrait phone screenshots and landscape
 * photos can sit in the same gallery without either being cropped.
 *
 * Only the visible slide and its neighbours are mounted. Rendering the whole
 * set at once made the browser fetch every photo the moment a card neared the
 * viewport — twelve downloads to show one picture.
 */
export function Gallery({ images, label }: GalleryProps) {
  const [index, setIndex] = useState(0);
  const [mounted, setMounted] = useState<readonly number[]>(() => neighbours(0, images.length));

  const step = (delta: number) => {
    const next = (index + delta + images.length) % images.length;
    setIndex(next);
    setMounted((current) => [...new Set([...current, ...neighbours(next, images.length)])]);
  };

  return (
    <div className="gallery">
      {images.map((src, i) =>
        mounted.includes(i) ? (
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
        ) : null,
      )}

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
