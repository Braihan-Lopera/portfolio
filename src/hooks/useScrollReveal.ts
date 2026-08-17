import { useEffect, useRef } from "react";

/**
 * Devuelve una ref para adjuntar a un elemento con la clase `reveal`.
 * Cuando el elemento entra en el viewport, le añade `is-visible` para
 * disparar la animación de aparición.
 *
 * Robusto por diseño: si IntersectionObserver no existe o nunca dispara,
 * un temporizador de respaldo revela el contenido igual. El contenido
 * jamás queda invisible por un fallo del observer.
 */
export function useScrollReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const reveal = () => element.classList.add("is-visible");

    // Sin soporte de observer: mostrar de una vez.
    if (!("IntersectionObserver" in window)) {
      reveal();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        reveal();
        observer.disconnect();
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(element);

    // Red de seguridad: si el observer nunca dispara, revelar igual.
    const fallback = window.setTimeout(reveal, 1400);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return ref;
}
