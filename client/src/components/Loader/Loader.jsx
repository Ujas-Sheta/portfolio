/**
 * Loader.jsx — Full-screen intro animation.
 *
 * Sequence:
 *  0.15s  — "UJAS" slides up
 *  0.30s  — "SHETA" slides up
 *  0.40s  — progress bar fills to 100%
 *  2.20s  — loader clips off upward (CSS clip-path transition)
 *  3.30s  — onComplete() called → App shows main page
 *
 * Props:
 *  onComplete {function} — called when exit animation finishes
 *
 * TO CHANGE TIMING: adjust the setTimeout delays below.
 */

import { useEffect, useRef } from 'react';
import './Loader.scss';

const Loader = ({ onComplete }) => {
  const loaderRef = useRef(null);
  const lw1Ref    = useRef(null);
  const lw2Ref    = useRef(null);
  const lprogRef  = useRef(null);

  useEffect(() => {
    const loader = loaderRef.current;
    const lw1    = lw1Ref.current;
    const lw2    = lw2Ref.current;
    const lprog  = lprogRef.current;

    // Step 1 – animate words in
    const t1 = setTimeout(() => lw1.classList.add('show'), 150);
    const t2 = setTimeout(() => lw2.classList.add('show'), 300);
    const t3 = setTimeout(() => { lprog.style.width = '100%'; }, 400);

    // Step 2 – clip loader away
    const t4 = setTimeout(() => {
      loader.classList.add('out');
      // Step 3 – notify App that loader is done
      const t5 = setTimeout(() => {
        if (onComplete) onComplete();
      }, 1100); // matches CSS transition duration
      return () => clearTimeout(t5);
    }, 2200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  return (
    <div id="loader" ref={loaderRef}>
      <div className="loader-inner">
        <div className="loader-line">
          <span className="lw" ref={lw1Ref}>UJAS</span>
        </div>
        <div className="loader-line">
          <span className="lw" ref={lw2Ref}>SHETA</span>
        </div>
        <div className="loader-progress" ref={lprogRef} />
      </div>
    </div>
  );
};

export default Loader;
