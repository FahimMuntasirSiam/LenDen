import React from 'react';

interface LenDenLogoProps {
  className?: string;
  showTagline?: boolean;
}

export const LenDenLogo: React.FC<LenDenLogoProps> = ({ className = "", showTagline = true }) => {
  return (
    <svg 
      viewBox="0 0 500 200" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="greenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#226214" />
          <stop offset="100%" stopColor="#43cc25" />
        </linearGradient>
        <linearGradient id="redGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#731919" />
          <stop offset="100%" stopColor="#e52b2b" />
        </linearGradient>
      </defs>

      {/* Up Arrow */}
      <path 
        d="M40 100L55 80M40 100L25 80M40 100V150" 
        stroke="#43cc25" 
        strokeWidth="12" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d="M40 70L60 100H20L40 70Z" 
        fill="#43cc25" 
      />

      {/* LEN Box */}
      <rect x="80" y="50" width="140" height="90" rx="16" fill="url(#greenGradient)" />
      <text 
        x="150" 
        y="115" 
        textAnchor="middle" 
        fill="white" 
        style={{ font: 'bold 60px Inter, sans-serif', letterSpacing: '2px' }}
      >
        LEN
      </text>

      {/* DEN Box */}
      <rect x="230" y="50" width="140" height="90" rx="16" fill="url(#redGradient)" />
      <text 
        x="300" 
        y="115" 
        textAnchor="middle" 
        fill="white" 
        style={{ font: 'bold 60px Inter, sans-serif', letterSpacing: '2px' }}
      >
        DEN
      </text>

      {/* Down Arrow */}
      <path 
        d="M410 100L395 120M410 100L425 120M410 100V50" 
        stroke="#e52b2b" 
        strokeWidth="12" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d="M410 130L390 100H430L410 130Z" 
        fill="#e52b2b" 
      />

      {/* Tagline */}
      {showTagline && (
        <text 
          x="225" 
          y="180" 
          textAnchor="middle" 
          fill="white" 
          style={{ font: '700 24px Inter, sans-serif', letterSpacing: '4px', textTransform: 'uppercase' }}
        >
          YOUR DESHI ACCOUNTANT
        </text>
      )}
    </svg>
  );
};
