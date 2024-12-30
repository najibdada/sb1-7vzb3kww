import { useCallback } from 'react';

export function useSmoothScroll() {
  const scrollToSection = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    
    if (!href?.startsWith('#')) return;
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (!element) return;

    const headerOffset = 100; // Account for fixed header
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }, []);

  return { scrollToSection };
}