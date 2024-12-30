import { useState, useCallback, useEffect, useRef } from 'react';

interface UsePortfolioCarouselProps {
  itemsCount: number;
  interval?: number;
}

export function usePortfolioCarousel({ itemsCount, interval = 2000 }: UsePortfolioCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isManualNavigation, setIsManualNavigation] = useState(false);
  const timerRef = useRef<NodeJS.Timeout>();

  const startAutoPlay = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setActiveIndex((current) => (current + 1) % itemsCount);
      }, interval);
    }
  }, [interval, itemsCount, isPaused]);

  const handleManualNavigation = useCallback((newIndex: number) => {
    setActiveIndex(newIndex);
    setIsManualNavigation(true);
    // Reset timer and temporarily pause
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    // Resume after navigation
    setTimeout(() => {
      setIsManualNavigation(false);
      startAutoPlay();
    }, interval);
  }, [interval, startAutoPlay]);

  const next = useCallback(() => {
    const newIndex = (activeIndex + 1) % itemsCount;
    handleManualNavigation(newIndex);
  }, [activeIndex, itemsCount, handleManualNavigation]);

  const prev = useCallback(() => {
    const newIndex = activeIndex === 0 ? itemsCount - 1 : activeIndex - 1;
    handleManualNavigation(newIndex);
  }, [activeIndex, itemsCount, handleManualNavigation]);

  // Start/stop autoplay based on pause state
  useEffect(() => {
    if (!isManualNavigation) {
      startAutoPlay();
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isPaused, isManualNavigation, startAutoPlay]);

  return {
    activeIndex,
    isPaused,
    setIsPaused,
    next,
    prev
  };
}