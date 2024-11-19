import React from 'react';

export default function Logo() {
  return (
    <div className="relative w-8 h-8">
      {/* Base Shield */}
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-blue-600">
        <path
          d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        
        {/* Lock in the middle */}
        <path
          d="M8 11H16V16H8V11Z M9 11V9C9 7.34315 10.3431 6 12 6V6C13.6569 6 15 7.34315 15 9V11"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
        
        {/* Circuit patterns */}
        <path
          d="M4 8L2 8 M22 8L20 8 M12 2L12 0 M7 20L6 21.5 M17 20L18 21.5"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          className="text-blue-400"
        />
        <circle
          cx="4"
          cy="8"
          r="0.5"
          fill="currentColor"
          className="text-blue-400"
        />
        <circle
          cx="20"
          cy="8"
          r="0.5"
          fill="currentColor"
          className="text-blue-400"
        />
        <circle
          cx="12"
          cy="2"
          r="0.5"
          fill="currentColor"
          className="text-blue-400"
        />
      </svg>
    </div>
  );
}