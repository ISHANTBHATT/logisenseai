import { useState, useEffect } from "react";
import useMousePosition from "./useMousePosition";

export function useParallax(options) {
  const { speed = 0.1, reverse = false, max = 20 } = options;
  const { xPercentage, yPercentage } = useMousePosition();
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Calculate the position based on mouse movement
    // When reverse is true, elements move in the opposite direction of the mouse
    const xPos = reverse
      ? (0.5 - xPercentage) * max * speed
      : (xPercentage - 0.5) * max * speed;

    const yPos = reverse
      ? (0.5 - yPercentage) * max * speed
      : (yPercentage - 0.5) * max * speed;

    setPosition({ x: xPos, y: yPos });
  }, [xPercentage, yPercentage, max, speed, reverse]);

  return position;
}

export default useParallax;
