import { useState, useEffect } from "react";
import { wrap } from "motion/react";

interface UseCarouselProps<T> {
  items: T[];
  itemsPerPage?: number;
  mobileBreakpoint?: number;
}

export function useCarousel<T>({
  items,
  itemsPerPage = 3,
  mobileBreakpoint = 1024,
}: UseCarouselProps<T>) {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < mobileBreakpoint);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [mobileBreakpoint]);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const getVisibleItems = () => {
    const totalItems = items.length;
    const baseIndex = wrap(0, totalItems, page);

    if (isMobile) {
      return [items[baseIndex]];
    }

    return Array.from(
      { length: itemsPerPage },
      (_, i) => items[wrap(0, totalItems, baseIndex + i)]
    );
  };

  return {
    page,
    direction,
    isMobile,
    paginate,
    visibleItems: getVisibleItems(),
  };
}
