import { useEffect, useRef, useState } from "react";

function FadeInSection({ children, delay = 0, direction = "up" }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    // Make visible immediately for testing
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const getTransform = () => {
    if (!isVisible) {
      if (direction === "up") return "translateY(30px)";
      if (direction === "down") return "translateY(-30px)";
      if (direction === "left") return "translateX(30px)";
      if (direction === "right") return "translateX(-30px)";
      return "translateY(30px)";
    }
    return "translateY(0)";
  };

  return (
    <div
      ref={ref}
      className={`fade-in-section ${isVisible ? "visible" : ""}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
        minHeight: "1px",
      }}
    >
      {children}
    </div>
  );
}

export default FadeInSection;
