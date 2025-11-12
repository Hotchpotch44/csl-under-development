const Circle = () => {
  return (
    <div className="relative flex items-center justify-center w-40 h-40 rounded-full bg-white spin-slow">
      {/* Rotating Text Around Circle */}
      <svg
        viewBox="0 0 200 200"
        className="absolute w-full h-full animate-spin-slow"
      >
        <path
          id="circlePath"
          fill="none"
          d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
        />
        <text fill="var(--primary)" fontSize="14" letterSpacing="3">
          <textPath href="#circlePath" startOffset="0%">
            12 YEARS OF • EXPERIENCE • 12 YEARS OF • EXPERIENCE •
          </textPath>
        </text>
      </svg>

      {/* Static Inner Circle */}
      <div className="w-20 h-20 bg-[var(--secondary)] rounded-full flex items-center justify-center">
      </div>
    </div>
  );
};

export default Circle;