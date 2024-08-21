import React from 'react';
import '../index.css';

function ClaimButton({ children }) {
  return (
    <button className="bg-green shadow-inner-custom h-[5.6rem] w-[46rem] rounded-[5px] text-[1.5rem] font-semibold text-white">
      {children}
    </button>
  );
}

function TryButton({ children }) {
  return (
    <button className="bg-purple h-[6rem] w-[54rem] rounded-[10px] text-[1.5rem] text-white drop-shadow-lg">
      {children}
    </button>
  );
}

export { ClaimButton, TryButton };
