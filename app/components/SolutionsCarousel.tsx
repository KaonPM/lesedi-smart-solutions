"use client";

import { useEffect, useRef } from "react";

export default function SolutionsCarousel({ children }: { children: React.ReactNode }) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);

  const moveCarousel = (direction: "previous" | "next") => {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    const firstCard = carousel.firstElementChild as HTMLElement | null;
    const gap = Number.parseFloat(getComputedStyle(carousel).gap) || 0;
    const step = (firstCard?.offsetWidth || carousel.clientWidth) + gap;
    const atStart = carousel.scrollLeft <= 4;
    const atEnd = carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 4;

    carousel.scrollTo({
      left:
        direction === "previous"
          ? atStart
            ? carousel.scrollWidth - carousel.clientWidth
            : carousel.scrollLeft - step
          : atEnd
            ? 0
            : carousel.scrollLeft + step,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const carousel = carouselRef.current;

    if (!carousel || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const timer = window.setInterval(() => {
      if (pausedRef.current) {
        return;
      }

      const firstCard = carousel.firstElementChild as HTMLElement | null;
      const gap = Number.parseFloat(getComputedStyle(carousel).gap) || 0;
      const step = (firstCard?.offsetWidth || carousel.clientWidth) + gap;
      const atEnd = carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 4;

      carousel.scrollTo({
        left: atEnd ? 0 : carousel.scrollLeft + step,
        behavior: "smooth",
      });
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

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
