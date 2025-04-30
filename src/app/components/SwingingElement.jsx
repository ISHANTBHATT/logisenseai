import React, { useRef, useEffect } from "react";
import { Plane as Crane } from "lucide-react";

const SwingingElement = ({
  children,
  maxRotation = 15,
  damping = 0.05,
  sensitivity = 0.02,
}) => {
  const elementRef = useRef(null);
  const rotationRef = useRef(0);
  const targetRotationRef = useRef(0);
  const animationFrameRef = useRef();

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Calculate the mouse position relative to the window width
      const mouseXPercentage = e.clientX / window.innerWidth;

      // Calculate the target rotation (inverse to mouse movement)
      // Limit the rotation to maxRotation degrees
      const newRotation = (0.5 - mouseXPercentage) * maxRotation * 2;
      targetRotationRef.current = Math.max(
        Math.min(newRotation, maxRotation),
        -maxRotation
      );
    };

    const animate = () => {
      if (!elementRef.current) return;

      // Apply damping for smoother motion
      const rotationDiff = targetRotationRef.current - rotationRef.current;
      rotationRef.current += rotationDiff * damping;

      // Apply the rotation transform
      elementRef.current.style.transform = `rotateZ(${rotationRef.current}deg)`;

      // Continue animation
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    window.addEventListener("mousemove", handleMouseMove);
    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [damping, maxRotation, sensitivity]);

  return (
    <div
      className="swing-container relative inline-block"
      style={{ transformOrigin: "top center" }}
    >
      <div
        className="swing-element relative"
        ref={elementRef}
        style={{ transformOrigin: "top center" }}
      >
        {children}
      </div>
    </div>
  );
};

export const SwingingCrane = () => {
  return (
    <div className="crane-container flex flex-col items-center">
      <div className="crane-rope h-[100px] w-[2px] bg-gray-400"></div>
      <SwingingElement maxRotation={10} damping={0.08} sensitivity={0.02}>
        <div className="crane-hook relative">
          <Crane className="text-yellow-500" size={48} />
        </div>
      </SwingingElement>
    </div>
  );
};

export default SwingingElement;
