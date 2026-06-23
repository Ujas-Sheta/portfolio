/**
 * Marquee.jsx — Infinite horizontal scrolling tech-stack ticker.
 *
 * Props:
 *   items {string[]} — skill/tech names from portfolioData.marqueeItems
 *
 * The items array is duplicated to create seamless infinite scroll.
 * Animation pauses on hover (CSS: animation-play-state: paused).
 *
 * TO ADD/REMOVE items: edit portfolioData.marqueeItems in the server.
 */

import './Marquee.scss';

const Marquee = ({ items }) => {
  if (!items?.length) return null;

  // Duplicate items so the animation loops seamlessly
  const doubled = [...items, ...items];

  return (
    <div className="marquee" aria-label="Technologies I work with">
      <div className="mtrack">
        {doubled.map((item, i) => (
          <span className="mitem" key={i}>
            {item}
            <span className="msep" aria-hidden="true">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
