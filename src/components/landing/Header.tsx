



//header.tsx
import React from 'react';

export const Header: React.FC = () => {
  return (
    <>
      <link href="https://fonts.cdnfonts.com/css/xirod" rel="stylesheet" />
      <header 
        className="text-[#7748CB] text-center w-full z-30 relative py-3 px-4 sm:py-4 md:py-6 mt-4 "
        style={{ 
          fontFamily: 'Xirod, sans-serif',
          fontSize: 'clamp(12px, 3vw, 20px)',
          fontWeight: 400,
          letterSpacing: 'clamp(0.3px, 0.15vw, 1.5px)',
          lineHeight: '1.4'
        }}
      >
        THE MUTANT SCHOOL
      </header>
    </>
  );
};








