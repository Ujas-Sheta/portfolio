/**
 * Cursor.jsx — Custom animated cursor.
 *
 * Renders two elements:
 *   #dot  — small filled circle that follows the mouse exactly
 *   #ring — larger outline circle that lags behind (lerp animation)
 *
 * On hover over interactive elements (links, buttons, cards):
 *   - Dot expands and switches to mix-blend-mode: difference
 *   - Ring fades out
 *
 * Hidden on mobile via CSS (cursor: auto on body).
 *
 * TO CHANGE: adjust sizes and lag factor in Cursor.scss and the lerp value (0.1).
 */

import { useEffect, useRef } from 'react';
import './Cursor.scss';

const Cursor = () => {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot  = dotRef.current;
    const ring = ringRef.current;

    // Current mouse position
    let mx = 0, my = 0;
    // Ring position (lerped toward mouse)
    let rx = 0, ry = 0;

    // Track real mouse position
    const onMouseMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
    };
    document.addEventListener('mousemove', onMouseMove);

    // Animation loop — runs every frame
    let frameId;
    const loop = () => {
      // Dot snaps to mouse immediately
      dot.style.left = `${mx}px`;
      dot.style.top  = `${my}px`;

      // Ring lerps toward mouse (0.1 = 10% per frame → smooth lag)
      rx += (mx - rx) * 0.1;
      ry += (my - ry) * 0.1;
      ring.style.left = `${rx}px`;
      ring.style.top  = `${ry}px`;

      frameId = requestAnimationFrame(loop);
    };
    frameId = requestAnimationFrame(loop);

    // ── Hover effects on interactive elements ────────────────────────────────
    // We use event delegation on document to catch dynamically added elements
    const onEnter = () => {
      dot.style.width        = '44px';
      dot.style.height       = '44px';
      dot.style.mixBlendMode = 'difference';
      ring.style.opacity     = '0';
    };

    const onLeave = () => {
      dot.style.width        = '6px';
      dot.style.height       = '6px';
      dot.style.mixBlendMode = 'normal';
      ring.style.opacity     = '1';
    };

    // Selectors that trigger the expanded cursor state
    const selector = 'a, button, .proj-card, .sk, .edu-card, .exp-item';
    // Attach to each matching element (re-run if DOM changes significantly)
    const attachListeners = () => {
      document.querySelectorAll(selector).forEach((el) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    };
    attachListeners();

    // ── Cleanup ──────────────────────────────────────────────────────────────
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(frameId);
      document.querySelectorAll(selector).forEach((el) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  return (
    <>
      <div id="dot"  ref={dotRef}  aria-hidden="true" />
      <div id="ring" ref={ringRef} aria-hidden="true" />
    </>
  );
};

export default Cursor;
