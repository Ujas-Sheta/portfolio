/**
 * useScrollReveal.js
 *
 * Watches all .rv and .cr elements and adds the "in" class when they
 * enter the viewport — triggering their CSS fade/slide animations.
 *
 * IMPORTANT: Pass `dep` (the API data object) so the observer re-runs
 * AFTER data loads and all section components are in the DOM.
 * Without this, the hook runs before sections exist and finds nothing.
 */

import { useEffect } from 'react';

const useScrollReveal = (dep = null) => {
  useEffect(() => {
    // Wait until data has arrived (dep is non-null)
    if (!dep) return;

    // Small delay so React finishes painting all sections before we query them
    const timer = setTimeout(() => {
      const targets = document.querySelectorAll('.rv, .cr');

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in');
              observer.unobserve(entry.target); // animate once only
            }
          });
        },
        { threshold: 0.07 } // trigger when 7% of element is visible
      );

      targets.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    }, 100);

    return () => clearTimeout(timer);
  }, [dep]); // re-runs when dep changes (i.e. after API data arrives)
};

export default useScrollReveal;
