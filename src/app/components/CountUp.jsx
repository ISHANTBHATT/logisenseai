"use client";

import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

function CountUp({
  end,
  start = 0,
  duration = 2,
  decimals = 0,
  prefix = "",
  suffix = "",
}) {
  const [value, setValue] = useState(start);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const startTime = useRef(null);
  const frameId = useRef(null);

  useEffect(() => {
    if (!isInView) return;

    const animate = (timestamp) => {
      if (!startTime.current) startTime.current = timestamp;
      const progress = Math.min(
        (timestamp - startTime.current) / (duration * 1000),
        1
      );

      setValue(start + progress * (end - start));

      if (progress < 1) {
        frameId.current = requestAnimationFrame(animate);
      }
    };

    frameId.current = requestAnimationFrame(animate);

    return () => {
      if (frameId.current) {
        cancelAnimationFrame(frameId.current);
      }
    };
  }, [isInView, start, end, duration]);

  const formattedValue = value.toFixed(decimals);

  return (
    <span ref={ref}>
      {prefix}
      {formattedValue}
      {suffix}
    </span>
  );
}

export default CountUp;
