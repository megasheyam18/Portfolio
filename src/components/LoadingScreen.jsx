import { useState, useEffect } from "react";

function LoadingScreen({ onComplete }) {
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Minimum loading time for animation
    const timer = setTimeout(() => {
      setIsFadingOut(true);
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 800);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`loading-screen ${isFadingOut ? "fade-out" : ""}`}>
      <div className="loading-content">
        <div className="loading-dots">
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
        <span className="loading-text">LOADING</span>
      </div>
      <style>{`
        .loading-screen {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #ff7a00, #ff8f33);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          animation: fadeIn 0.5s ease;
          pointer-events: none;
        }

        .loading-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }

        .loading-dots {
          display: flex;
          gap: 15px;
        }

        .dot {
          width: 20px;
          height: 20px;
          background: #fff;
          border-radius: 4px;
          animation: pulse 1s ease-in-out infinite;
        }

        .dot:nth-child(2) {
          animation-delay: 0.2s;
        }

        .loading-text {
          color: #fff;
          font-size: 1.2rem;
          font-weight: 600;
          letter-spacing: 8px;
          font-family: 'Inter', sans-serif;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes pulse {
          0%, 100% { 
            transform: scale(1); 
            opacity: 1;
          }
          50% { 
            transform: scale(0.8); 
            opacity: 0.7;
          }
        }

        .loading-screen.fade-out {
          animation: fadeOut 0.8s ease forwards;
          pointer-events: none;
          visibility: hidden;
          display: none;
        }

        @keyframes fadeOut {
          from { opacity: 1; }
          to { opacity: 0; visibility: hidden; }
        }
      `}</style>
    </div>
  );
}

export default LoadingScreen;
