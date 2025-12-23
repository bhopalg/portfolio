"use client";

import { useEffect, useRef, useState } from "react";

export default function AnimatedCounter({
  targetNumber,
  duration = 200,
}: {
  targetNumber: number;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    const incrementTime = duration / targetNumber;
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev < targetNumber) return prev + 1;
        clearInterval(timer);
        return prev;
      });
    }, incrementTime);

    return () => clearInterval(timer);
  }, [hasStarted, targetNumber, duration]);

  return <span ref={elementRef}>{count}</span>;
}
