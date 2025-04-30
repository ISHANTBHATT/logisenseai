import React, { useEffect, useState } from "react";
import useMousePosition from "../hooks/useMousePosition";

const CustomCursor = ({
  size = 24,
  color = "rgba(245, 158, 11, 0.5)",
  blendMode = "difference",
}) => {
  const { x, y } = useMousePosition();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Don't render on touch devices
  if (typeof window !== "undefined" && "ontouchstart" in window) {
    return null;
  }

  return (
    <div
      className="custom-cursor pointer-events-none fixed z-50 transition-opacity duration-300 mix-blend-difference"
      style={{
        transform: `translate(${x}px, ${y}px)`,
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: color,
        borderRadius: "50%",
        opacity: isVisible ? 0.7 : 0,
        mixBlendMode: blendMode,
        boxShadow:
          "0 0 15px rgba(245, 158, 11, 0.3), 0 0 5px rgba(245, 158, 11, 0.5)",
        transition: "opacity 0.2s, transform 0.1s ease-out",
      }}
    />
  );
};

export default CustomCursor;
