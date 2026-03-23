import { useState, useEffect, useRef } from "react";

function TextType({
  text,
  speed = 80,
  deleteSpeed = 50,
  delayBetween = 2000,
  className = "",
}) {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const charIndexRef = useRef(0);
  const textIndexRef = useRef(0);

  const texts = Array.isArray(text) ? text : [text];

  useEffect(() => {
    let timeout;

    const type = () => {
      const currentText = texts[textIndexRef.current];

      if (isDeleting) {
        setDisplayText(currentText.substring(0, charIndexRef.current - 1));
        charIndexRef.current--;
        timeout = setTimeout(type, deleteSpeed);
      } else {
        setDisplayText(currentText.substring(0, charIndexRef.current + 1));
        charIndexRef.current++;
        timeout = setTimeout(type, speed);
      }

      if (!isDeleting && charIndexRef.current === currentText.length) {
        setIsDeleting(true);
        timeout = setTimeout(type, delayBetween);
      } else if (isDeleting && charIndexRef.current === 0) {
        setIsDeleting(false);
        textIndexRef.current = (textIndexRef.current + 1) % texts.length;
        timeout = setTimeout(type, 500);
      }
    };

    // Start typing after initial delay
    timeout = setTimeout(type, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <span className={`text-type ${className}`}>
      {displayText}
      <span className="text-type-cursor">|</span>
    </span>
  );
}

export default TextType;
