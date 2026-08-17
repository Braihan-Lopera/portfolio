import { useEffect, useRef, useState, type WheelEvent } from "react";
import { createPortal } from "react-dom";
import "./Lightbox.css";
import type { ProjectImage } from "../types/project";

interface LightboxProps {
  image: ProjectImage;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}

const MIN_ZOOM = 1;
const MAX_ZOOM = 3;

/** Vista ampliada de una imagen de galería: cierre, navegación y zoom con rueda. */
export default function Lightbox({ image, onClose, onPrev, onNext }: LightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  // El padre remonta este componente con `key={image.src}` en cada cambio
  // de imagen, así el zoom nace en 1 cada vez sin necesitar un efecto extra.
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    closeRef.current?.focus();
    // Bloquea el scroll del fondo mientras el lightbox está abierto.
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft" && onPrev) onPrev();
      if (event.key === "ArrowRight" && onNext) onNext();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, onPrev, onNext]);

  const handleWheel = (event: WheelEvent<HTMLImageElement>) => {
    event.preventDefault();
    setZoom((current) => {
      const next = current - event.deltaY * 0.0015;
      return Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, next));
    });
  };

  return createPortal(
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
      onClick={onClose}
    >
      <button
        ref={closeRef}
        type="button"
        className="lightbox__close"
        aria-label="Cerrar"
        onClick={onClose}
      >
        ×
      </button>

      {onPrev && (
        <button
          type="button"
          className="lightbox__nav lightbox__nav--prev"
          aria-label="Imagen anterior"
          onClick={(event) => {
            event.stopPropagation();
            onPrev();
          }}
        >
          ‹
        </button>
      )}

      <img
        src={image.src}
        alt={image.alt}
        className="lightbox__image"
        style={{
          transform: `scale(${zoom})`,
          cursor: zoom > MIN_ZOOM ? "zoom-out" : "zoom-in",
        }}
        onWheel={handleWheel}
        onClick={(event) => event.stopPropagation()}
      />

      {onNext && (
        <button
          type="button"
          className="lightbox__nav lightbox__nav--next"
          aria-label="Imagen siguiente"
          onClick={(event) => {
            event.stopPropagation();
            onNext();
          }}
        >
          ›
        </button>
      )}
    </div>,
    document.body,
  );
}
