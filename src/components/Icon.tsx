const Icon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6A11CB" />
          <stop offset="100%" stopColor="#2575FC" />
        </linearGradient>
        <filter id="shadow">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodOpacity="0.25" />
        </filter>
        <clipPath id="clip">
          <rect width="200" height="200" rx="50" />
        </clipPath>
      </defs>
      <g clipPath="url(#clip)">
        <rect width="200" height="200" fill="url(#grad1)" />
        <g filter="url(#shadow)">
          <path
            d="M40 100 C60 60 80 140 100 100 S140 60 160 100"
            stroke="white"
            strokeWidth="12"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M40 130 C60 90 80 170 100 130 S140 90 160 130"
            stroke="white"
            strokeWidth="12"
            strokeLinecap="round"
            fill="none"
          />
        </g>
      </g>
    </svg>
  );
};

export default Icon;
