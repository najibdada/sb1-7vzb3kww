import { useState, useCallback, useEffect } from 'react';

interface UseCarouselProps {
  itemsCount: number;
  interval?: number;
}

export function useCarousel({ itemsCount, interval = 2000 }: UseCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setActiveIndex((current) => (current + 1) % itemsCount);
  }, [itemsCount]);

  const prev = useCallback(() => {
    setActiveIndex((current) => 
      current === 0 ? itemsCount - 1 : current - 1
    );
  }, [itemsCount]);

  useEffect(() => {
    if (isPaused) return;
    
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [next, interval, isPaused]);

  return {
    activeIndex,
    isPaused,
    setIsPaused,
    next,
    prev
  };
}