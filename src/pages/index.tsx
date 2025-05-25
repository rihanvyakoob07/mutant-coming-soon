import React from 'react';
import { Header } from '@/components/landing/Header';
import { Hero } from '@/components/landing/Hero';
import { BackgroundElements } from '@/components/landing/BackgroundElements';
import { SoundControl } from '@/components/landing/SoundControl';
import { DNAPattern } from './../components/landing/DnaPatterns';

export default function Index() {
  return (
    <div className="w-screen h-screen relative overflow-hidden flex flex-col bg-black">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Xirod:wght@400&family=Roboto+Mono:wght@400;500&display=swap"
      />

      {/* Background Elements */}
      <BackgroundElements /> 
      
      {/* DNA Patterns - All variants */}
      <DNAPattern 
        variant="helix"
        className="top-10 left-10 w-8 h-12 sm:w-10 sm:h-16 rotate-12 z-10" 
        color="#8442FC" 
        opacity={0.4}
        animate={true}
      />
      
      <DNAPattern 
        className="top-1/4 right-16 w-12 h-12 sm:w-16 sm:h-16 -rotate-45 z-10" 
        color="#5CE596" 
        opacity={0.3}
        blur={2.5}
      />
      
      <DNAPattern 
        className="bottom-1/3 left-1/4 w-16 h-12 sm:w-20 sm:h-16 rotate-90 z-10" 
        color="#C5FF81" 
        opacity={0.4}
        animate={true}
      />
      
      <DNAPattern 
        className="bottom-20 right-1/3 w-8 h-8 sm:w-10 sm:h-10 -rotate-12 z-10" 
        color="#BDE75D" 
        opacity={0.5}
      />
      
      <DNAPattern 
        className="top-1/2 left-16 w-12 h-10 sm:w-16 sm:h-14 rotate-45 z-10" 
        color="#7CD668" 
        opacity={0.3}
        blur={3}
        animate={true}
      />
    
      {/* Main Content */}
      <Header />
      <Hero />
      
      {/* Interactive Elements */}
      <SoundControl />
    </div>
  );
}




// import React from 'react';
// import { Header } from '@/components/landing/Header';
// import { Hero } from '@/components/landing/Hero';
// import { BackgroundElements } from '@/components/landing/BackgroundElements';
// import { SoundControl } from '@/components/landing/SoundControl';

// export default function Index() {
//   return (
//     <div className="w-screen min-h-screen relative overflow-x-hidden flex flex-col bg-black">
//       <link
//         rel="stylesheet"
//         href="https://fonts.googleapis.com/css2?family=Xirod:wght@400&family=Roboto+Mono:wght@400;500&display=swap"
//       />

//       {/* Background Elements */}
//       <BackgroundElements />

//       {/* Main Content */}
//       <Header />
//       <Hero />

//       {/* Interactive Elements */}
//       <SoundControl />
//     </div>
//   );
// }
