"use client";

import { useCallback, useEffect, useRef } from "react";

export default function SolutionsCarousel({ children }: { children: React.ReactNode }) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const movingRef = useRef(false);

  const moveCarousel = useCallback((direction: "previous" | "next") => {
    const carousel = carouselRef.current;

    if (!carousel || movingRef.current) {
      return;
    }

    const firstCard = carousel.firstElementChild as HTMLElement | null;
    const lastCard = carousel.lastElementChild as HTMLElement | null;

    if (!firstCard || !lastCard) {
      return;
    }

    const gap = Number.parseFloat(getComputedStyle(carousel).gap) || 0;
    const step = (firstCard?.offsetWidth || carousel.clientWidth) + gap;
    movingRef.current = true;

    if (direction === "next") {
      carousel.scrollBy({ left: step, behavior: "smooth" });

      window.setTimeout(() => {
        carousel.append(firstCard);
        carousel.scrollTo({ left: carousel.scrollLeft - step, behavior: "auto" });
        movingRef.current = false;
      }, 500);

      return;
    }

    carousel.prepend(lastCard);
    carousel.scrollTo({ left: step, behavior: "auto" });
    carousel.scrollTo({ left: 0, behavior: "smooth" });

    window.setTimeout(() => {
      movingRef.current = false;
    }, 500);
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;

    if (!carousel || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const timer = window.setInterval(() => {
      if (pausedRef.current) {
        return;
      }

      moveCarousel("next");
    }, 5000);

    return () => window.clearInterval(timer);
  }, [moveCarousel]);

  return (
    <div className="solutionsCarousel">
      <button
        type="button"
        className="carouselControl carouselPrevious"
        aria-label="Previous solutions"
        onClick={() => moveCarousel("previous")}
      >
        ‹
      </button>

      <div
        ref={carouselRef}
        className="cards"
        onMouseEnter={() => {
          pausedRef.current = true;
        }}
        onMouseLeave={() => {
          pausedRef.current = false;
        }}
        onFocusCapture={() => {
          pausedRef.current = true;
        }}
        onBlurCapture={() => {
          pausedRef.current = false;
        }}
      >
        {children}
      </div>

      <button
        type="button"
        className="carouselControl carouselNext"
        aria-label="Next solutions"
        onClick={() => moveCarousel("next")}
      >
        ›
      </button>
    </div>
  );
}
