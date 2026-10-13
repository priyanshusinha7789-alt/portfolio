import React, { useEffect, useRef, useState } from "react";

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up", // 'up', 'down', 'left', 'right', 'none'
  duration = 700,
  threshold = 0.12,
  once = true,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && domRef.current) {
            observer.unobserve(domRef.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [threshold, once]);

  const getTransformClass = () => {
    if (isVisible) return "opacity-100 translate-x-0 translate-y-0 scale-100";
    
    switch (direction) {
      case "up":
        return "opacity-0 translate-y-10 scale-[0.98]";
      case "down":
        return "opacity-0 -translate-y-10 scale-[0.98]";
      case "left":
        return "opacity-0 translate-x-10 scale-[0.98]";
      case "right":
        return "opacity-0 -translate-x-10 scale-[0.98]";
      case "none":
        return "opacity-0 scale-[0.96]";
      default:
        return "opacity-0 translate-y-10 scale-[0.98]";
    }
  };

  return (
    <div
      ref={domRef}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      className={`transition-all ${getTransformClass()} ${className}`}
    >
      {children}
    </div>
  );
}
