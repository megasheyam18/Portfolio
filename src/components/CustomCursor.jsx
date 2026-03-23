import { useState, useEffect } from "react";

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Only run on desktop
    if (window.innerWidth < 1024) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setDotPosition({ x: e.clientX, y: e.clientY });
    };

    const animateCursor = () => {
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;
      setPosition({ x: cursorX, y: cursorY });
      requestAnimationFrame(animateCursor);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const hoverSelectors = [
        "a",
        "button",
        ".navlist li",
        ".project-card-modern",
        ".certificate-card-modern",
        ".tool-card",
        ".service-card",
        ".stat-item",
        ".btn-download-resume",
        ".nav-link",
        ".nav-item",
        ".hamburger",
      ];

      const isHoverElement = hoverSelectors.some((selector) =>
        target.matches ? target.matches(selector) : false,
      );

      setIsHovering(isHoverElement);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    const animationId = requestAnimationFrame(animateCursor);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(animationId);
    };
  }, []);

  // Don't render on mobile/tablet
  if (typeof window !== "undefined" && window.innerWidth < 1024) {
    return null;
  }

  return (
    <>
      <div
        className={`custom-cursor ${isHovering ? "hovering" : ""}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      ></div>
      <div
        className="cursor-dot"
        style={{
          left: `${dotPosition.x}px`,
          top: `${dotPosition.y}px`,
        }}
      ></div>
    </>
  );
}

export default CustomCursor;
