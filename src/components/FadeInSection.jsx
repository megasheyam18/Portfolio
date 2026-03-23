import { useEffect, useRef, useState } from "react";

function FadeInSection({ children, delay = 0, direction = "up" }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
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
      }}
    >
      {children}
    </div>
  );
}

export default FadeInSection;
